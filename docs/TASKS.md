# TASKS — Daftar Tugas & Log Serah Terima

Aturan: ambil **tugas pertama yang belum dicentang**, selesaikan sampai DoD terpenuhi, lalu centang + isi log + commit `feat(Txx): ...` + push. Gerbang **⛔** artinya berhenti dan tunggu persetujuan Ard.

## Tugas

- [x] **T00 Fondasi serah terima**: AGENTS.md, docs/PLAN.md, TASKS.md, CONTENT_GUIDE.md, MODULES.md, PDF di `sources/pdf/`.
- [x] **T01 Ekstraksi teks**: `tools/extract.py` → `tools/raw/<slug>.json` (format: `{ slug, kode, pages, sections: { A..G: { text, pages[] } }, proyeksi: [{ judul, text, pages[] }] }`).
  DoD: 24 file JSON (slug sesuai MODULES.md); setiap modul non-orientasi punya section A–F dan ≥1 proyeksi; skrip bisa dijalankan ulang (idempoten).
- [x] **T02 Ekstraksi gambar**: `tools/extract_images.py` → `public/img/<slug>/<proyeksi>-<n>.webp` + `tools/raw/images.json` (peta gambar → modul/proyeksi/halaman). Filter <80px, sampul 1096×527, dedupe hash per modul, WebP q85 lebar maks 900px.
  DoD: total `public/img` < 8 MB; tiap modul non-orientasi punya ≥1 gambar; ada lembar kontak `tools/raw/contact-sheet.html` untuk cek visual.
- [x] **T03 Kerangka app**: Vite + React 19 + TS strict + Tailwind v4 + motion + Lucide + React Router 7 + vitest + `@vercel/analytics`. Semua komponen, halaman, `lib/` (storage, progress, motion, shuffle, track), tema Clinical Dark + toggle terang anti-kedip, SEO di `index.html`, robots.txt, generator sitemap, favicon SVG asli, 404, ErrorBoundary, `vercel.json`. Berisi `src/data/types.ts` (sesuai PLAN + field `tipe`, `faktorEksposi`, `sumber`) dan `tools/validate-content.ts` yang menegakkan semua **[V]** di CONTENT_GUIDE.
  DoD: `npm run build` & `npm test` lolos; app jalan dengan data kosong (empty state rapi, tanpa crash); validator berjalan dan melaporkan "0/24 modul".
- [x] **T04 SAMPEL EMAS**: `src/data/modul/manus.ts`, `src/data/soal/manus.ts`, kasus `k01`–`k05` di `src/data/kasus.ts`, persis sesuai CONTENT_GUIDE.
  DoD: validator lolos untuk item tersebut; modul Manus bisa dibuka dari awal sampai skor latihan; 5 kasus bisa dimainkan; screenshot HP 360px disimpan di `docs/review/`.
  **⛔ STOP: laporkan ke Ard (link lokal/preview + screenshot) dan tunggu persetujuan. Setelah disetujui, sampel emas DIBEKUKAN.**
- [x] **T05 Ekstremitas Atas**: wrist, antebrachi, elbow, humerus, shoulder, clavicula, scapula (modul + 10 soal per modul).
- [x] **T06 Ekstremitas Bawah**: pedis, calcaneus, ankle, cruris, knee, patella, femur, collum-femur.
- [x] **T07 Pelvis + Dasar**: hip, sacroiliac, pelvis, orientasi.
- [x] **T08 Vertebra**: cervical, thoracal, lumbal, sacrum-coccyx.
  DoD T05–T08: validator lolos; setiap modul bisa dibuka dan diselesaikan latihannya; gambar cocok dengan proyeksinya.
- [x] **T09 Kasus k06–k30**: sebaran total sesuai CONTENT_GUIDE §5; setiap modul non-orientasi muncul minimal 1×.
  DoD: validator lolos (30 kasus, sebaran region, cakupan modul).
- [x] **T10 QA**: Playwright di 360/768/1440 sesuai Verification Plan di PLAN.md (alur modul, alur kasus, refresh mempertahankan progres, tema tanpa kedip, tanpa scroll horizontal, tap target ≥44px, gambar termuat, 404, Reset Data) + checklist 20 pondasi.
  DoD: semua tes lolos; laporan + screenshot di `docs/review/qa.md`.
- [ ] **T11 Deploy**: proyek Vercel `radpraktik` (scope `sekawan`), `vercel deploy --prod --yes`, `vercel domains add radpraktik.rindia.my.id`, cek HTTPS live + sitemap/robots dapat diakses.
  DoD: https://radpraktik.rindia.my.id live; walkthrough singkat untuk Ard di `docs/review/walkthrough.md`.

## Log Serah Terima

| Tanggal | Agent | Tugas | Status | Catatan / lanjut dari mana |
|---|---|---|---|---|
| 2026-11-23 | Antigravity (planner) | T00 | Selesai | Repo dibuat. Rencana disetujui Ard. Lanjut: T01. |
| 2026-11-23 | extractor (Gemini 4 Hydrogen) | T01 | Selesai | Ekstraksi 24 PDF (204 hal, 54 proyeksi) ke `tools/raw/*.json`. Lanjut: T04 (sampel emas Manus + kasus k01-k05). |
| 2026-11-23 | extractor (Gemini 4 Hydrogen) | T02 | Selesai | Ekstraksi 160 WebP (2,90 MB) ke `public/img/` + `images.json` & `contact-sheet.html`. Lanjut: T04 (sampel emas Manus + kasus k01-k05). |
| 2026-11-23 | scaffold (Gemini 4 Hydrogen) | T03 | Selesai | Kerangka React 19 + TS strict + Clinical Dark, validator `[V]`, dan 9/9 unit test lolos. Lanjut: T04 (sampel emas Manus + kasus k01-k05). |
| 2026-11-23 | sample-author (Gemini 4 Hydrogen) | T04 | Selesai - Menunggu Review Ard | Sampel emas modul Manus (PA/Lateral/Oblik + 10 soal), kasus k01–k05, catatan-konten.md, dan 4 screenshot 360px di `docs/review/`. ⛔ STOP: tunggu persetujuan Ard sebelum T05. |
| 2026-11-23 | t05-ext-atas | T05 | Selesai | 7 modul ekstremitas atas (`wrist`, `antebrachi`, `elbow`, `humerus`, `shoulder`, `clavicula`, `scapula`) + 70 soal lolos validator & `tsc --noEmit`. Lanjut: T10 (QA Playwright). |
| 2026-11-23 | t06-ext-bawah | T06 | Selesai | 8 modul ekstremitas bawah (`pedis`, `calcaneus`, `ankle`, `cruris`, `knee`, `patella`, `femur`, `collum-femur`) + 80 soal lolos validator & `tsc --noEmit`. Lanjut: T10 (QA Playwright). |
| 2026-11-23 | t07-pelvis-dasar | T07 | Selesai | 4 modul pelvis & dasar (`hip`, `sacroiliac`, `pelvis`, `orientasi`) + 40 soal lolos validator & `tsc --noEmit`. Lanjut: T10 (QA Playwright). |
| 2026-11-23 | t08-vertebra | T08 | Selesai | 4 modul vertebra (`cervical`, `thoracal`, `lumbal`, `sacrum-coccyx`) + 40 soal lolos validator & `tsc --noEmit`. Lanjut: T10 (QA Playwright). |
| 2026-11-23 | t09-kasus | T09 | Selesai | Kasus `k06`–`k30` (`src/data/kasus.ts`), rangkuman `catatan-konten.md`, dan finalisasi 24/24 modul, 240 soal, 30/30 kasus lolos `npm run validate`, `build`, `test`. Lanjut: T10 (QA Playwright). |
| 2026-11-23 | qa-deployer | T10 | Selesai | Perbaikan kontras Light Mode (`--on-accent`, `.negatoscope-frame`), Playwright 109/109 lulus di 360/768/1440, audit 20 pondasi & screenshot di `docs/review/qa.md`. Lanjut: T11 (Deploy Vercel). |
