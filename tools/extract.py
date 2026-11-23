#!/usr/bin/env python3
"""Ekstraksi teks terstruktur dari 24 PDF modul RadPraktik ke tools/raw/<slug>.json."""

from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any

import pymupdf

ROOT = Path(__file__).resolve().parent.parent
PDF_DIR = ROOT / "sources" / "pdf"
OUT_DIR = ROOT / "tools" / "raw"

# Peta resmi 24 modul sesuai docs/MODULES.md
MODULES: list[dict[str, str]] = [
    {"slug": "orientasi", "kode": "301-1", "judul": "Orientasi Laboratorium & Dasar Proyeksi", "region": "dasar", "sourcePdf": "PEDOMAN PRAKTEK RAD 301-1 ORIENTASI.pdf"},
    {"slug": "manus", "kode": "301-2A", "judul": "Ossa Manus", "region": "ekstremitas-atas", "sourcePdf": "PEDOMAN PRAKTEK RAD 301-2A MANUS.pdf"},
    {"slug": "wrist", "kode": "301-2B", "judul": "Wrist Joint", "region": "ekstremitas-atas", "sourcePdf": "PEDOMAN PRAKTEK RAD 301-2B WRIST.pdf"},
    {"slug": "antebrachi", "kode": "301-3A", "judul": "Antebrachii", "region": "ekstremitas-atas", "sourcePdf": "PEDOMAN PRAKTEK RAD 301-3A ANTEBRACHI.pdf"},
    {"slug": "elbow", "kode": "301-3B", "judul": "Elbow Joint", "region": "ekstremitas-atas", "sourcePdf": "PEDOMAN PRAKTEK RAD 301-3B  ELBOW.pdf"},
    {"slug": "humerus", "kode": "301-4A", "judul": "Os Humerus", "region": "ekstremitas-atas", "sourcePdf": "PEDOMAN PRAKTEK RAD 301-4A humerus 2015.pdf"},
    {"slug": "shoulder", "kode": "301-4B", "judul": "Shoulder Joint", "region": "ekstremitas-atas", "sourcePdf": "PEDOMAN PRAKTEK RAD 301-4B shoulder 2015.pdf"},
    {"slug": "clavicula", "kode": "301-5A", "judul": "Os Clavicula", "region": "ekstremitas-atas", "sourcePdf": "PEDOMAN PRAKTEK RAD 301-5A OS CLAVICULA.pdf"},
    {"slug": "scapula", "kode": "301-5B", "judul": "Os Scapula", "region": "ekstremitas-atas", "sourcePdf": "PEDOMAN PRAKTEK RAD 301-5B SCAPULA.pdf"},
    {"slug": "pedis", "kode": "301-6A", "judul": "Ossa Pedis", "region": "ekstremitas-bawah", "sourcePdf": "PEDOMAN PRAKTEK RAD 301-6A OSSA PEDIS.pdf"},
    {"slug": "calcaneus", "kode": "301-6B", "judul": "Os Calcaneus", "region": "ekstremitas-bawah", "sourcePdf": "PEDOMAN PRAKTEK RAD 301-6B OS CALCANEUS.pdf"},
    {"slug": "ankle", "kode": "301-7A", "judul": "Ankle Joint", "region": "ekstremitas-bawah", "sourcePdf": "PEDOMAN PRAKTEK RAD 301-7A ANKLE JOINT.pdf"},
    {"slug": "cruris", "kode": "301-7B", "judul": "Os Cruris", "region": "ekstremitas-bawah", "sourcePdf": "PEDOMAN PRAKTEK RAD 301-7B CRURIS.pdf"},
    {"slug": "knee", "kode": "301-8A", "judul": "Knee Joint", "region": "ekstremitas-bawah", "sourcePdf": "PEDOMAN PRAKTEK RAD 301-8A KNEE JOINT.pdf"},
    {"slug": "patella", "kode": "301-8B", "judul": "Os Patella", "region": "ekstremitas-bawah", "sourcePdf": "PEDOMAN PRAKTEK RAD 301-8B Patella.pdf"},
    {"slug": "femur", "kode": "301-9A", "judul": "Os Femur", "region": "ekstremitas-bawah", "sourcePdf": "PEDOMAN PRAKTEK RAD 301-9A femur.pdf"},
    {"slug": "collum-femur", "kode": "301-9B", "judul": "Collum Femur", "region": "ekstremitas-bawah", "sourcePdf": "PEDOMAN PRAKTEK RAD 301-9B collum femur.pdf"},
    {"slug": "hip", "kode": "301-10A", "judul": "Hip Joint", "region": "pelvis", "sourcePdf": "PEDOMAN PRAKTEK RAD 301-10A hip joint.pdf"},
    {"slug": "sacroiliac", "kode": "301-10B", "judul": "Sacro-Iliac Joints", "region": "pelvis", "sourcePdf": "PEDOMAN PRAKTEK RAD 301-10B sacro-iliac joints.pdf"},
    {"slug": "pelvis", "kode": "301-10C", "judul": "Pelvis", "region": "pelvis", "sourcePdf": "PEDOMAN PRAKTEK RAD 301-10C pelvis.pdf"},
    {"slug": "cervical", "kode": "301-11", "judul": "Vertebra Cervical", "region": "vertebra", "sourcePdf": "PEDOMAN PRAKTEK RAD 301-11 CERVICAL.pdf"},
    {"slug": "thoracal", "kode": "301-12", "judul": "Vertebra Thoracal", "region": "vertebra", "sourcePdf": "PEDOMAN PRAKTEK RAD 301-12 thoracal.pdf"},
    {"slug": "lumbal", "kode": "301-13", "judul": "Vertebra Lumbal", "region": "vertebra", "sourcePdf": "PEDOMAN PRAKTEK RAD 301-13 vertebra lumbal.pdf"},
    {"slug": "sacrum-coccyx", "kode": "301-14", "judul": "Os Sacrum & Coccygeus", "region": "vertebra", "sourcePdf": "PEDOMAN PRAKTEK RAD 301-14 sacrum coccyg.pdf"},
]

FOOTER_RE = re.compile(r"^\s*(JTRR Poltekkes Kemenkes Semarang|Page\s+\d+)\s*$", re.IGNORECASE)
LETTER_HEADING_RE = re.compile(r"^([A-H])\.\s*(.+)$")
NUMBERED_SECTION_RE = re.compile(r"^(\d+)\.\s*(Proteksi\s+radiasi|Evaluasi\s+radiograf\w*)\b.*$", re.IGNORECASE)
PROYEKSI_HEADING_RE = re.compile(r"^(\d+)\.\s*(Proyeksi\b.+)$", re.IGNORECASE)


def clean_page_text(raw_text: str) -> str:
    """Bersihkan footer berulang dan spasi berlebih per halaman."""
    lines = []
    for line in raw_text.splitlines():
        if FOOTER_RE.match(line):
            continue
        lines.append(line.rstrip())
    # Rapikan baris kosong ganda
    text = "\n".join(lines).strip()
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text


def classify_letter_heading(letter: str, title: str, slug: str) -> str | None:
    """Petakan heading A-H ke slot kanonik A..G berdasarkan makna."""
    t = title.strip().lower()
    # Hindari sub-butir "A. Gunakan form..." / "B. Lengkapi laporan..." di humerus
    if t.startswith("gunakan ") or t.startswith("lengkapi "):
        return None

    if t.startswith("kompetensi"):
        return "A"
    if t.startswith("administrasi"):
        return "B"
    if t.startswith("pra pemeriksaan") or t.startswith("pra-pemeriksaan"):
        return "C"
    if t.startswith("pelaksanaan pemeriksaan"):
        return "D"
    if t.startswith("proteksi radiasi"):
        return "E"
    if t.startswith("pasca pemeriksaan") or t.startswith("pasca-pemeriksaan"):
        return "F"
    if t.startswith("evaluasi") or t.startswith("tugas") or t.startswith("penyusunan laporan"):
        return "G"

    if slug == "orientasi":
        if t.startswith("proyeksi"):
            return "B"
        if t.startswith("posisi pemotretan"):
            return "C"
        if letter in "ABCDEFG":
            return letter
    return None


def parse_module(mod: dict[str, str]) -> dict[str, Any]:
    """Baca satu PDF modul dan kembalikan struktur JSON lengkap."""
    pdf_path = PDF_DIR / mod["sourcePdf"]
    if not pdf_path.exists():
        raise FileNotFoundError(f"PDF tidak ditemukan: {pdf_path}")

    doc = pymupdf.open(pdf_path)
    raw_pages: list[dict[str, Any]] = []
    for pno, page in enumerate(doc, 1):
        cleaned = clean_page_text(page.get_text("text"))
        raw_pages.append({"page": pno, "text": cleaned})

    sections_acc: dict[str, dict[str, Any]] = {
        k: {"headings": [], "lines": [], "pages": []} for k in "ABCDEFG"
    }
    proyeksi_list: list[dict[str, Any]] = []
    current_slot: str | None = None
    current_proy: dict[str, Any] | None = None
    part_label: str | None = None

    def flush_proy() -> None:
        nonlocal current_proy
        if current_proy is not None:
            current_proy["text"] = re.sub(r"\n{3,}", "\n\n", "\n".join(current_proy["lines"])).strip()
            del current_proy["lines"]
            proyeksi_list.append(current_proy)
            current_proy = None

    # Mulai parsing struktur dari halaman 2 (halaman 1 adalah sampul)
    for page_obj in raw_pages[1:]:
        pno = page_obj["page"]
        for raw_line in page_obj["text"].splitlines():
            line = raw_line.strip()

            # Deteksi sub-bagian khusus di sacrum-coccyx (Sacrum vs Coccygeus)
            if mod["slug"] == "sacrum-coccyx" and line.upper().startswith("TEKNIK RADIOGRAFI "):
                part_label = line.replace("TEKNIK RADIOGRAFI ", "").strip().title()
                continue

            # Cek heading huruf A..H
            m_let = LETTER_HEADING_RE.match(line)
            if m_let:
                slot = classify_letter_heading(m_let.group(1), m_let.group(2), mod["slug"])
                if slot is not None:
                    flush_proy()
                    current_slot = slot
                    heading_str = f"[{part_label}] {line}" if part_label else line
                    sections_acc[slot]["headings"].append(heading_str)
                    if sections_acc[slot]["lines"]:
                        sections_acc[slot]["lines"].append("")
                    sections_acc[slot]["lines"].append(heading_str)
                    if pno not in sections_acc[slot]["pages"]:
                        sections_acc[slot]["pages"].append(pno)
                    continue

            # Cek sub-heading bernomor yang sebenarnya section E (Proteksi) atau G (Evaluasi)
            m_num_sec = NUMBERED_SECTION_RE.match(line)
            if m_num_sec and current_slot in ("D", "E"):
                flush_proy()
                kind = m_num_sec.group(2).lower()
                slot = "E" if kind.startswith("proteksi") else "G"
                current_slot = slot
                heading_str = f"[{part_label}] {line}" if part_label else line
                sections_acc[slot]["headings"].append(heading_str)
                if sections_acc[slot]["lines"]:
                    sections_acc[slot]["lines"].append("")
                sections_acc[slot]["lines"].append(heading_str)
                if pno not in sections_acc[slot]["pages"]:
                    sections_acc[slot]["pages"].append(pno)
                continue

            # Cek heading proyeksi di dalam D. Pelaksanaan Pemeriksaan
            if mod["slug"] != "orientasi" and current_slot == "D":
                m_proy = PROYEKSI_HEADING_RE.match(line)
                if m_proy:
                    flush_proy()
                    judul_proy = f"[{part_label}] {line}" if part_label else line
                    current_proy = {
                        "index": len(proyeksi_list) + 1,
                        "judul": judul_proy,
                        "lines": [line],
                        "pages": [pno],
                    }

            if current_slot is not None:
                sections_acc[current_slot]["lines"].append(raw_line)
                if pno not in sections_acc[current_slot]["pages"]:
                    sections_acc[current_slot]["pages"].append(pno)

            if current_proy is not None and not (mod["slug"] != "orientasi" and current_slot == "D" and PROYEKSI_HEADING_RE.match(line)):
                current_proy["lines"].append(raw_line)
                if pno not in current_proy["pages"]:
                    current_proy["pages"].append(pno)

    flush_proy()

    sections: dict[str, dict[str, Any]] = {}
    for k in "ABCDEFG":
        acc = sections_acc[k]
        text_joined = re.sub(r"\n{3,}", "\n\n", "\n".join(acc["lines"])).strip()
        sections[k] = {
            "heading": " / ".join(acc["headings"]),
            "text": text_joined,
            "pages": acc["pages"],
        }

    return {
        "slug": mod["slug"],
        "kode": mod["kode"],
        "judul": mod["judul"],
        "region": mod["region"],
        "sourcePdf": mod["sourcePdf"],
        "pages": len(doc),
        "sections": sections,
        "proyeksi": proyeksi_list,
        "rawPages": raw_pages,
    }


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    summary = []
    for mod in MODULES:
        data = parse_module(mod)
        out_path = OUT_DIR / f"{mod['slug']}.json"
        out_path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

        filled = [k for k in "ABCDEFG" if data["sections"][k]["text"]]
        summary.append((mod["slug"], data["pages"], "".join(filled), len(data["proyeksi"])))

        # Validasi DoD per modul
        if mod["slug"] != "orientasi":
            missing_af = [k for k in "ABCDEF" if not data["sections"][k]["text"]]
            if missing_af:
                raise AssertionError(f"{mod['slug']}: section A-F kosong: {missing_af}")
            if len(data["proyeksi"]) < 1:
                raise AssertionError(f"{mod['slug']}: tidak ada proyeksi yang terekstrak")

    print(f"Berhasil mengekstrak {len(summary)} modul ke {OUT_DIR}")
    for slug, pages, filled, n_proy in summary:
        print(f"  {slug:15s} | hal={pages:2d} | sections={filled:7s} | proyeksi={n_proy}")


if __name__ == "__main__":
    main()
