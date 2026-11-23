#!/usr/bin/env python3
"""Ekstraksi gambar dari 24 PDF modul RadPraktik ke WebP q85 + manifest + contact sheet."""

from __future__ import annotations

import hashlib
import html
import io
import json
import re
import shutil
from collections import defaultdict
from pathlib import Path
from typing import Any

import pymupdf
from PIL import Image

from extract import MODULES, LETTER_HEADING_RE, NUMBERED_SECTION_RE, PROYEKSI_HEADING_RE, classify_letter_heading

ROOT = Path(__file__).resolve().parent.parent
PDF_DIR = ROOT / "sources" / "pdf"
RAW_DIR = ROOT / "tools" / "raw"
IMG_ROOT = ROOT / "public" / "img"

MAX_WIDTH = 900
WEBP_QUALITY = 85
MIN_DIM = 80
COVER_BANNER_SIZE = (1096, 527)


def canonical_proyeksi_slug(raw_title: str, part_label: str | None = None) -> str:
    """Normalisasi judul proyeksi dari PDF menjadi slug ringkas & unik per modul."""
    t = raw_title.lower()
    t = re.sub(r"^\[[^\]]+\]\s*", "", t)
    t = re.sub(r"^\d+\.\s*", "", t)
    t = re.sub(r"^[a-d]\.\s*", "", t)

    # Deteksi pola spesifik sebelum fallback umum
    if "frog-leg" in t or "frog leg" in t:
        base = "bilateral-frog-leg" if "bilateral" in t else "unilateral-frog-leg"
    elif "lumbosacral" in t or "l5-s1" in t or "ls junction" in t:
        base = "ap-axial-ls-junction" if "ap" in t or "antero" in t else "lateral-ls-junction"
    elif "endo-eksorotasi" in t or "endo eksorotasi" in t:
        base = "ap-endo-eksorotasi"
    elif "aksial oblik" in t or "ap oblique" in t or "r/l po" in t or "r/lpo" in t:
        base = "ap-oblik"
    elif "ap axial" in t or "anterior posterior axial" in t or "anterior  posterior axial" in t or "antero posterior (ap) axial" in t or "ap lordotic" in t:
        base = "ap-axial"
    elif "tangential" in t or "tangetial" in t:
        base = "tangential"
    elif "oblik" in t or "oblique" in t:
        base = "oblik"
    elif "lateral" in t or re.search(r"\blat\b", t):
        base = "lateral"
    elif "posterior anterior" in t or "posterio anterior" in t or re.search(r"\bpa\b", t):
        base = "pa"
    elif "anterior posterior" in t or "anterior  posterior" in t or "antero posterior" in t or re.search(r"\bap\b", t):
        base = "ap"
    else:
        cleaned = re.sub(r"^proyeksi\s+", "", t)
        cleaned = re.sub(r"[^a-z0-9]+", "-", cleaned).strip("-")
        base = cleaned or "proyeksi"

    if part_label:
        return f"{part_label.lower()}-{base}"
    return base


def match_caption_projections(text: str, module_proy_slugs: list[str], part_label: str | None = None) -> list[str]:
    """Cari nama proyeksi yang disebut di heading evaluasi atau caption gambar."""
    low = text.lower()
    matches: list[str] = []

    # Cek semua kemunculan kata kunci proyeksi berurutan dari kiri ke kanan
    pattern = re.compile(
        r"(ap\s+endo[- ]eksorotasi|"
        r"ap\s+axial(?:\s+ls\s+junction)?|"
        r"lateral\s+(?:ls\s+junction|lumbosacral\s+junction)|"
        r"bilateral\s*\(?\s*frog[- ]leg\s*\)?|"
        r"unilateral\s*\(?\s*frog[- ]leg\s*\)?|"
        r"tangential|tangetial|"
        r"ap\s+oblik|ap\s+oblique|r/l\s*po|"
        r"oblik|oblique|"
        r"posterior\s+anterior|posterio\s+anterior|\bpa\b|"
        r"anterior\s+posterior|antero\s+posterior|\bap\b|"
        r"lateral|\blat\b)",
        re.IGNORECASE,
    )
    for m in pattern.finditer(low):
        slug = canonical_proyeksi_slug(m.group(0), part_label)
        # Cocokkan ke daftar slug proyeksi yang ada di modul
        if slug in module_proy_slugs:
            if not matches or matches[-1] != slug:
                matches.append(slug)
        else:
            # Cari kecocokan parsial jika ada modifier tambahan
            for cand in module_proy_slugs:
                cand_base = cand.replace(f"{part_label.lower()}-", "") if part_label else cand
                if slug == cand_base or (slug in cand_base and slug not in ("ap", "pa")):
                    if not matches or matches[-1] != cand:
                        matches.append(cand)
                    break
    return matches


def normalize_image_mode(img: Image.Image) -> Image.Image:
    """Pastikan mode gambar kompatibel dengan encoder WebP Pillow."""
    if img.mode in ("RGB", "RGBA"):
        return img
    if img.mode == "P":
        return img.convert("RGBA" if "transparency" in img.info else "RGB")
    if img.mode in ("LA", "PA"):
        return img.convert("RGBA")
    return img.convert("RGB")


def is_heading_line(line: str) -> bool:
    """Cek apakah baris merupakan heading section/proyeksi/evaluasi (bukan caption gambar di atasnya)."""
    if LETTER_HEADING_RE.match(line) or NUMBERED_SECTION_RE.match(line) or PROYEKSI_HEADING_RE.match(line):
        return True
    # Sub-heading evaluasi seperti "a. Proyeksi Lateral", "4. Patela tangetial", "Proyeksi lateral:"
    if re.match(r"^([a-d]\.|[1-9]\d?\.)\s+", line, re.I):
        return True
    if line.rstrip().endswith(":"):
        return True
    return False


def process_module_images(mod: dict[str, str], raw_mod: dict[str, Any]) -> list[dict[str, Any]]:
    """Ekstrak, dedupe per modul, petakan ke proyeksi, dan konversi ke WebP."""
    slug = mod["slug"]
    pdf_path = PDF_DIR / mod["sourcePdf"]
    doc = pymupdf.open(pdf_path)

    # Daftar slug proyeksi resmi dari modul ini
    module_proy_slugs: list[str] = []
    for p in raw_mod.get("proyeksi", []):
        judul = p["judul"]
        part = None
        m_part = re.match(r"^\[([^\]]+)\]", judul)
        if m_part:
            part = m_part.group(1)
        pslug = canonical_proyeksi_slug(judul, part)
        if pslug not in module_proy_slugs:
            module_proy_slugs.append(pslug)

    # Langkah 1: Kumpulkan semua gambar lolos filter ukuran & banner, dedupe per modul
    # Prioritaskan kemunculan di halaman isi (pno >= 2) dibanding halaman sampul (pno == 1)
    by_hash: dict[str, dict[str, Any]] = {}
    for pno, page in enumerate(doc, 1):
        for img_info in page.get_images(full=True):
            xref = img_info[0]
            base = doc.extract_image(xref)
            w, h = int(base["width"]), int(base["height"])
            if w < MIN_DIM or h < MIN_DIM:
                continue
            if (w, h) == COVER_BANNER_SIZE:
                continue

            raw_bytes: bytes = base["image"]
            hsh = hashlib.sha256(raw_bytes).hexdigest()
            rects = page.get_image_rects(xref)
            rect = rects[0] if rects else pymupdf.Rect(0, 0, w, h)

            candidate = {
                "pno": pno,
                "xref": xref,
                "w": w,
                "h": h,
                "ext": base["ext"],
                "sha256": hsh,
                "bytes": raw_bytes,
                "x0": float(rect.x0),
                "y0": float(rect.y0),
                "y1": float(rect.y1),
            }

            if hsh not in by_hash:
                by_hash[hsh] = candidate
            elif by_hash[hsh]["pno"] == 1 and pno >= 2:
                # Ganti duplikat sampul dengan posisi sebenarnya di halaman isi
                by_hash[hsh] = candidate

    # Kelompokkan gambar terpilih berdasarkan halaman
    kept_by_page: dict[int, list[dict[str, Any]]] = defaultdict(list)
    for item in by_hash.values():
        kept_by_page[item["pno"]].append(item)

    # Langkah 2: Petakan setiap gambar ke proyeksi terdekat menggunakan posisi y & teks sekitar
    current_slot: str | None = None
    active_proy: str | None = None
    part_label: str | None = None
    mapped_images: list[dict[str, Any]] = []

    for pno in range(1, len(doc) + 1):
        page = doc[pno - 1]
        page_imgs = sorted(kept_by_page.get(pno, []), key=lambda it: (round(it["y0"], 1), round(it["x0"], 1)))

        if pno == 1:
            for it in page_imgs:
                it["proyeksi"] = "umum"
                mapped_images.append(it)
            continue

        # Kumpulkan blok teks per baris logis dengan koordinat y
        text_events: list[tuple[float, str]] = []
        for b in page.get_text("blocks"):
            if b[6] != 0:
                continue
            y_block = float(b[1])
            for idx_line, raw_line in enumerate(b[4].splitlines()):
                s = raw_line.strip()
                if not s or re.match(r"^(JTRR Poltekkes Kemenkes Semarang|Page\s+\d+)$", s, re.I):
                    continue
                # Offset kecil per baris agar urutan dalam satu blok terjaga
                text_events.append((y_block + idx_line * 0.01, s))

        # Gabungkan event teks & gambar di halaman ini menurut koordinat y
        timeline: list[tuple[float, int, Any]] = []
        for y, s in text_events:
            timeline.append((y, 0, s))
        for it in page_imgs:
            timeline.append((it["y0"], 1, it))
        timeline.sort(key=lambda x: (x[0], x[1]))

        # Deteksi pasangan gambar sejajar horizontal dengan caption gabungan di bawahnya
        side_by_side_overrides: dict[str, str] = {}
        for i in range(len(page_imgs) - 1):
            a, b = page_imgs[i], page_imgs[i + 1]
            if abs(a["y0"] - b["y0"]) <= 40:
                max_y1 = max(a["y1"], b["y1"])
                below_texts = [
                    s for y, s in text_events
                    if max_y1 - 45 <= y <= max_y1 + 65 and not is_heading_line(s)
                ]
                combined_below = " ".join(below_texts)
                if combined_below and ("radiograf" in combined_below.lower() or current_slot in ("D", "G")):
                    found = match_caption_projections(combined_below, module_proy_slugs, part_label)
                    if len(found) >= 2:
                        left, right = (a, b) if a["x0"] <= b["x0"] else (b, a)
                        side_by_side_overrides[left["sha256"]] = found[0]
                        side_by_side_overrides[right["sha256"]] = found[1]

        for y_ev, kind, payload in timeline:
            if kind == 0:
                line: str = payload
                if slug == "sacrum-coccyx" and line.upper().startswith("TEKNIK RADIOGRAFI "):
                    part_label = line.replace("TEKNIK RADIOGRAFI ", "").strip().title()
                    active_proy = None
                    continue

                m_let = LETTER_HEADING_RE.match(line)
                if m_let:
                    slot = classify_letter_heading(m_let.group(1), m_let.group(2), slug)
                    if slot is not None:
                        current_slot = slot
                        if slot != "D":
                            active_proy = None
                        continue

                m_num_sec = NUMBERED_SECTION_RE.match(line)
                if m_num_sec and current_slot in ("D", "E"):
                    sec_kind = m_num_sec.group(2).lower()
                    current_slot = "E" if sec_kind.startswith("proteksi") else "G"
                    active_proy = None
                    continue

                if slug != "orientasi" and current_slot == "D":
                    m_proy = PROYEKSI_HEADING_RE.match(line)
                    if m_proy:
                        active_proy = canonical_proyeksi_slug(line, part_label)
                        continue

                if slug != "orientasi" and current_slot == "G":
                    # Sub-heading evaluasi seperti "Proyeksi AP:", "b. Proyeksi Lateral", "4. Patela tangetial"
                    if re.match(r"^([a-d]\.|[1-9]\.)?\s*(Proyeksi\b|Patela\b|CV\.\w+\s+Proyeksi)", line, re.I):
                        matched = match_caption_projections(line, module_proy_slugs, part_label)
                        if matched:
                            active_proy = matched[0]
            else:
                it = payload
                chosen = side_by_side_overrides.get(it["sha256"])

                # Cek caption tunggal tepat di bawah gambar (jika belum dioverride pasangan)
                # Hanya baca caption non-heading saat berada di bagian Pelaksanaan (D) atau Evaluasi/Tugas (G/H)
                if chosen is None and slug != "orientasi" and current_slot in ("D", "G"):
                    below_texts = [
                        s for y, s in text_events
                        if it["y1"] - 30 <= y <= it["y1"] + 60 and not is_heading_line(s)
                    ]
                    for bt in below_texts:
                        # Abaikan baris poin panjang atau instruksi evaluasi umum
                        if len(bt) > 75 or bt.lower().startswith("the following"):
                            continue
                        low_bt = bt.strip().lower()
                        if "proyeksi" in low_bt or low_bt.startswith("pelvis ") or low_bt in ("lateral", "ap", "pa", "oblik"):
                            found = match_caption_projections(bt, module_proy_slugs, part_label)
                            if len(found) == 1:
                                chosen = found[0]
                                break

                if chosen is None:
                    chosen = active_proy if active_proy else "umum"

                it["proyeksi"] = chosen
                mapped_images.append(it)

    # Langkah 3: Simpan ke WebP q85 max-width 900px secara idempoten
    out_dir = IMG_ROOT / slug
    if out_dir.exists():
        shutil.rmtree(out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)

    counters: dict[str, int] = defaultdict(int)
    records: list[dict[str, Any]] = []

    for it in mapped_images:
        pslug = it["proyeksi"]
        counters[pslug] += 1
        fname = f"{pslug}-{counters[pslug]}.webp"
        out_path = out_dir / fname

        pil_img = normalize_image_mode(Image.open(io.BytesIO(it["bytes"])))
        orig_w, orig_h = pil_img.size
        if orig_w > MAX_WIDTH:
            new_h = max(1, round(orig_h * MAX_WIDTH / orig_w))
            pil_img = pil_img.resize((MAX_WIDTH, new_h), Image.Resampling.LANCZOS)

        pil_img.save(out_path, format="WEBP", quality=WEBP_QUALITY, method=6)
        final_w, final_h = pil_img.size
        size_bytes = out_path.stat().st_size

        records.append({
            "slug": slug,
            "proyeksi": pslug,
            "file": f"/img/{slug}/{fname}",
            "relPath": f"public/img/{slug}/{fname}",
            "page": it["pno"],
            "origWidth": orig_w,
            "origHeight": orig_h,
            "width": final_w,
            "height": final_h,
            "bytes": size_bytes,
            "sha256": it["sha256"],
        })

    return records


def write_contact_sheet(all_records: list[dict[str, Any]], total_bytes: int) -> None:
    """Buat tools/raw/contact-sheet.html untuk inspeksi visual semua gambar per modul."""
    by_mod: dict[str, list[dict[str, Any]]] = defaultdict(list)
    for rec in all_records:
        by_mod[rec["slug"]].append(rec)

    sections_html = []
    for mod in MODULES:
        slug = mod["slug"]
        items = by_mod.get(slug, [])
        cards = []
        for it in items:
            # Path relatif dari tools/raw/contact-sheet.html ke public/img/...
            rel_src = f"../../public/img/{slug}/{Path(it['file']).name}"
            kb = it["bytes"] / 1024
            cards.append(
                f"""<figure class="card">
                  <img src="{html.escape(rel_src)}" alt="{html.escape(it['file'])}" loading="lazy">
                  <figcaption>
                    <strong>{html.escape(Path(it['file']).name)}</strong><br>
                    <span class="tag">{html.escape(it['proyeksi'])}</span>
                    · hal {it['page']} · {it['width']}×{it['height']} · {kb:.1f} KB
                  </figcaption>
                </figure>"""
            )
        sections_html.append(
            f"""<section>
              <h2>{html.escape(mod['kode'])} — {html.escape(mod['judul'])} (<code>{slug}</code> · {len(items)} gambar)</h2>
              <div class="grid">{''.join(cards) or '<p>Tidak ada gambar</p>'}</div>
            </section>"""
        )

    doc_html = f"""<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <title>RadPraktik — Contact Sheet Gambar ({len(all_records)} WebP)</title>
  <style>
    body {{ font-family: system-ui, sans-serif; background: #0b0f14; color: #e2e8f0; margin: 24px; }}
    header {{ margin-bottom: 24px; border-bottom: 1px solid #1e293b; padding-bottom: 12px; }}
    h1 {{ margin: 0 0 6px; font-size: 20px; color: #22d3ee; }}
    h2 {{ font-size: 16px; margin: 28px 0 12px; color: #f8fafc; }}
    .grid {{ display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 14px; }}
    .card {{ margin: 0; background: #111827; border: 1px solid #1f2937; border-radius: 8px; overflow: hidden; }}
    .card img {{ width: 100%; height: 180px; object-fit: contain; background: #030712; display: block; }}
    figcaption {{ padding: 8px 10px; font-size: 12px; line-height: 1.45; color: #94a3b8; }}
    figcaption strong {{ color: #f1f5f9; }}
    .tag {{ display: inline-block; background: #0e7490; color: #ecfeff; padding: 1px 6px; border-radius: 4px; font-size: 11px; }}
  </style>
</head>
<body>
  <header>
    <h1>RadPraktik — Lembar Kontak Ekstraksi Gambar</h1>
    <p>Total: <strong>{len(all_records)}</strong> gambar WebP · Total ukuran: <strong>{total_bytes / (1024 * 1024):.2f} MB</strong></p>
  </header>
  {''.join(sections_html)}
</body>
</html>
"""
    (RAW_DIR / "contact-sheet.html").write_text(doc_html, encoding="utf-8")


def main() -> None:
    RAW_DIR.mkdir(parents=True, exist_ok=True)
    IMG_ROOT.mkdir(parents=True, exist_ok=True)

    all_records: list[dict[str, Any]] = []
    per_module_summary: dict[str, dict[str, Any]] = {}

    for mod in MODULES:
        slug = mod["slug"]
        raw_json_path = RAW_DIR / f"{slug}.json"
        if not raw_json_path.exists():
            raise FileNotFoundError(f"{raw_json_path} tidak ditemukan. Jalankan tools/extract.py dulu.")
        raw_mod = json.loads(raw_json_path.read_text(encoding="utf-8"))

        records = process_module_images(mod, raw_mod)
        all_records.extend(records)

        mod_bytes = sum(r["bytes"] for r in records)
        per_module_summary[slug] = {
            "count": len(records),
            "bytes": mod_bytes,
            "files": [r["file"] for r in records],
        }

        if slug != "orientasi" and len(records) < 1:
            raise AssertionError(f"{slug}: modul non-orientasi wajib punya >= 1 gambar")

    total_bytes = sum(r["bytes"] for r in all_records)
    max_bytes = 8 * 1024 * 1024
    if total_bytes >= max_bytes:
        raise AssertionError(f"Total public/img melebihi 8 MB: {total_bytes} bytes")

    manifest = {
        "totalImages": len(all_records),
        "totalBytes": total_bytes,
        "totalMB": round(total_bytes / (1024 * 1024), 3),
        "modules": per_module_summary,
        "images": all_records,
    }
    (RAW_DIR / "images.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    write_contact_sheet(all_records, total_bytes)

    print(f"Berhasil mengekstrak {len(all_records)} gambar WebP ({total_bytes / (1024 * 1024):.2f} MB)")
    for mod in MODULES:
        slug = mod["slug"]
        info = per_module_summary[slug]
        names = ", ".join(Path(f).name for f in info["files"])
        print(f"  {slug:15s} | n={info['count']:2d} | {info['bytes']/1024:6.1f} KB | {names}")


if __name__ == "__main__":
    main()
