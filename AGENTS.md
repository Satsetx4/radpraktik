# AGENTS.md — Pintu Masuk untuk Semua Agent

Kamu sedang mengerjakan **RadPraktik**: web app belajar interaktif dari 24 Modul Praktek Laboratorium Teknik Radiografi 1 (JTRR Poltekkes Kemenkes Semarang). Pemilik proyek: **Ard** (GitHub `Satsetx4`). Ard bukan orang teknis, jadi selalu balas dalam Bahasa Indonesia santai dan tanpa jargon.

## Wajib dibaca, berurutan
1. `docs/PLAN.md`: rencana yang sudah disetujui (PRD, arsitektur, desain, skema data). **Ini sumber kebenaran.**
2. `docs/TASKS.md`: daftar tugas + log serah terima. **Ambil tugas pertama yang belum dicentang.**
3. `docs/CONTENT_GUIDE.md`: wajib dibaca sebelum menulis materi, soal, atau kasus.
4. `docs/MODULES.md`: peta 24 modul (slug, kode, region, file PDF).

## Protokol kerja
1. Baca **Log Serah Terima** di `docs/TASKS.md`. Lanjutkan dari catatan agent sebelumnya.
2. Kerjakan **satu tugas** sampai Definisi Selesai-nya (DoD) terpenuhi.
3. Jalankan pengecekan yang relevan (`npm run validate`, `npm run build`, `npm test`) dan pastikan semuanya lolos.
4. Centang tugasnya, isi satu baris di Log Serah Terima, lalu commit: `feat(T05): ekstremitas atas 7 modul`.
5. `git push`. Kalau kuota hampir habis, commit pekerjaan yang ada dengan status `WIP` di log, lengkap dengan catatan "lanjut dari mana".
6. **Gerbang ⛔ di TASKS.md artinya BERHENTI.** Laporkan ke Ard dan tunggu persetujuan. Jangan lanjut ke tugas sesudahnya.

## Aturan keras
- **Setia ke PDF.** Seluruh materi, kunci jawaban, dan pembahasan harus bisa ditunjuk sumbernya di `sources/pdf/`. Jangan menambah pengetahuan dari luar PDF. Kalau ada yang ragu, catat di `docs/catatan-konten.md` dan jangan ditebak.
- **Sampel emas** (`src/data/modul/manus.ts`, `src/data/soal/manus.ts`, kasus `k01`–`k05`) wajib ditiru gaya dan strukturnya. Setelah disetujui Ard, **jangan diubah**.
- **Jangan mengubah** `docs/PLAN.md`, `docs/CONTENT_GUIDE.md`, atau aturan validator untuk "meloloskan" konten. Kalau aturannya memang salah, catat di log dan tanyakan ke Ard.
- **Stack:** React 19 + TypeScript + Vite, Tailwind CSS v4, `motion`, Lucide React, React Router 7. Tanpa backend.
- **Anti-slop:** dilarang emoji sebagai ikon, gradien ungu-biru, font Inter/Roboto untuk judul, teks placeholder/lorem, data dummy, `href="#"`, dan 3 kartu identik di bawah hero.
- **Windows:** jalankan npm lewat `cmd /c "npm ..."` (PowerShell memblokir `npm.ps1`). Untuk proses Node yang lama, pakai `.bat` + `cmd /c` di foreground.
- **Deploy** hanya di tugas T11: `vercel deploy --prod --yes` di scope `sekawan` (cek dulu dengan `vercel whoami` → `tvtclard-9052`), domain `radpraktik.rindia.my.id`.

## Perintah
| Perintah | Fungsi |
|---|---|
| `cmd /c "npm install"` | Pasang dependensi |
| `cmd /c "npm run dev"` | Server lokal |
| `cmd /c "npm run validate"` | Cek integritas & aturan konten |
| `cmd /c "npm run build"` | Build produksi (TypeScript strict) |
| `cmd /c "npm test"` | Unit test (vitest) |
| `python tools/extract.py` | Ekstraksi teks PDF → `tools/raw/` |
| `python tools/extract_images.py` | Ekstraksi gambar → `public/img/` |

*(Perintah npm baru tersedia setelah T03 membuat kerangka app.)*
