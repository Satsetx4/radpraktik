# Laporan QA Menyeluruh (T10) — RadPraktik

- **Tanggal:** 2026-11-23
- **Build yang diuji:** `dist/` hasil `npm run validate && npm run build`
- **Ringkasan otomatis:** `npm run validate` (24/24 modul, 240 soal, 30/30 kasus), `npm test` (9/9 unit test Vitest), Playwright headless Chromium (**109/109 cek lulus, 0 gagal**) di 3 viewport (`360x800`, `768x1024`, `1440x900`).

---

## 1. Perbaikan Bug dari Temuan QA Visual

Saat inspeksi tangkapan layar Light Mode (`qa-home-light-1440.png`), ditemukan dua masalah kontras yang langsung diperbaiki dan diuji ulang:
1. **Kontras teks tombol utama di Light Mode:** Tombol `bg-[var(--accent-primary)]` sebelumnya memakai `text-slate-950` yang kontrasnya rendah terhadap `#0E7490` di Light Mode. Diperbaiki dengan variabel CSS `--on-accent` (`#FFFFFF` di Light Mode, `#020617` di Dark Mode) pada seluruh tombol/tautan aksi utama (`src/index.css`, `ErrorBoundary.tsx`, `OnboardingModal.tsx`, `Home.tsx`, `ModulList.tsx`, `ModulDetail.tsx`, `Latihan.tsx`, `Kasus.tsx`, `Progres.tsx`, `Tentang.tsx`, `NotFound.tsx`).
2. **`ScoreRing` di dalam panel negatoskop saat Light Mode:** `.negatoscope-frame` tetap berlatar gelap (`#0D141C`) di Light Mode, namun `ScoreRing` masih membaca `--text-primary` / `--text-secondary` versi Light Mode sehingga angka `—` dan label nyaris tak terbaca. Diperbaiki dengan scoping variabel teks/border terang di dalam `.negatoscope-frame` (`src/index.css`).

---

## 2. Hasil Pengujian Skenario Fungsional & Multi-Viewport

| Kategori Uji | Cakupan | Hasil |
|---|---|---|
| **Validasi, Build & Unit Test** | `npm run validate`, `npm run build`, `npm test` | **LULUS** (24/24 modul, 240 soal, 30/30 kasus, 9/9 test) |
| **Fresh Start & Onboarding** | Kondisi awal `0 / 24` & `0 / 30`, tolak input 1 huruf (`A`), terima `"Rindia"` | **LULUS** |
| **Katalog 24 Modul & 5 Region** | `/modul` menampilkan 5 region, 24 kartu modul aktif (`24/24 Aktif`), tanpa badge "Disiapkan" | **LULUS** |
| **Alur Modul (`manus`, `cervical`, `orientasi`)** | 4 tab tahap, seluruh gambar proyeksi termuat (`naturalWidth > 0`), `ImageLightbox` buka/zoom/tutup (X), 10 soal latihan hingga skor muncul, reload halaman mempertahankan progres & skor di `localStorage` | **LULUS** |
| **Alur Kasus (`/kasus`)** | Tebak tahap 1 → tahap 2 → pembahasan + skor muncul → `Kasus Berikutnya` → `Acak Ulang` reset indeks ke `1/30` | **LULUS** |
| **Progres & Reset Data (`/progres`)** | 5 region bar, angka modul & kasus selesai, `Reset Data` → `Ya, Hapus Semua` mengembalikan ke `0 / 24`, `0 / 30`, nama `Belum diisi` | **LULUS** |
| **Tema Dark ↔ Light & Anti-FOUC** | Toggle tersimpan di `localStorage` (`radpraktik:v1:tema`), reload Light Mode menerapkan kelas/tema sebelum `<body>` & `DOMContentLoaded` tanpa kilatan Dark Mode | **LULUS** |
| **Layout Responsif (360 / 768 / 1440)** | Cek `scrollWidth <= innerWidth`, nol elemen meluber ke kanan, tap target tombol/tab/input `>= 44px`, nol `href="#"`, nol gambar rusak di seluruh rute utama | **LULUS** (0 horizontal scroll) |
| **Halaman `/tentang` & 404 (`/halaman-tidak-ada`)** | Credit JTRR Poltekkes Kemenkes Semarang tampil; 404 interaktif tampil dengan tombol `Kembali ke Beranda` | **LULUS** |
| **Stabilitas Console & Runtime** | `0` page error, `0` console error tak terduga (dengan stub `/_vercel/insights/script.js` lokal) | **LULUS** |

---

## 3. Audit 20 Pondasi Web App

| No | Pondasi | Status | Keterangan |
|---|---|---|---|
| 1 | `sitemap.xml` | **Lulus** | `public/sitemap.xml` & `dist/sitemap.xml` berisi 29 URL (`https://radpraktik.rindia.my.id/...`) |
| 2 | `robots.txt` | **Lulus** | `public/robots.txt` mengizinkan crawl & merujuk `https://radpraktik.rindia.my.id/sitemap.xml` |
| 3 | Slot Search Console | **Lulus** | `<meta name="google-site-verification" content="" />` siap pakai di `index.html` |
| 4 | Submit Sitemap | **Lulus** | Struktur XML valid, 29 URL siap disubmit ke GSC |
| 5 | Internal Links | **Lulus** | Tautan kontekstual Beranda ↔ Modul ↔ Latihan ↔ Kasus ↔ Progres ↔ Tentang + navigasi modul sebelum/sesudah |
| 6 | Breadcrumbs | **Lulus** | `Breadcrumbs` aktif di sub-halaman (`AppHeader`) |
| 7 | Canonical URL | **Lulus** | `SeoHead` memperbarui `<link rel="canonical">` sesuai rute aktif (terverifikasi `/modul/manus`) |
| 8 | LocalBusiness Schema | N/A | Tidak berlaku (platform belajar digital, bukan bisnis lokasi fisik) |
| 9 | Organization + WebSite Schema | **Lulus** | JSON-LD `@graph` berisi `Organization` + `WebSite` di `index.html` |
| 10 | Indexing, OG & Twitter Cards | **Lulus** | `robots: index, follow`, `og:*`, dan `twitter:card` lengkap |
| 11 | Zero Broken Links | **Lulus** | 0 tautan `href="#"`, seluruh rute & gambar valid |
| 12 | Validasi Form Nyata | **Lulus** | Validasi nama panggilan (min 2, maks 30 karakter) dengan pesan ramah |
| 13 | Anti-Spam Form | N/A | Tidak berlaku (tidak ada form kirim data ke server / kontak) |
| 14 | Track Form / Quiz Submit | **Lulus** | Event `@vercel/analytics` (`mulai_latihan`, `selesai_latihan`, `buka_kasus`, `jawab_kasus`, `reset_data`) |
| 15 | Track Klik WA | N/A | Tidak berlaku (tidak ada tombol WhatsApp CS/Sales) |
| 16 | Track Klik CTA | **Lulus** | Event `cta_click` pada tombol CTA utama Beranda |
| 17 | Favicon Asli | **Lulus** | `public/favicon.svg` ikon kolimator & central point asli |
| 18 | Custom 404 Interaktif | **Lulus** | `NotFound.tsx` bertema radiologi + tombol pulang ke Beranda & Daftar Modul |
| 19 | Backup, ErrorBoundary & Safe Storage | **Lulus** | `ErrorBoundary.tsx`, `storage.ts` dengan `try/catch` + fallback memori, push ke GitHub |
| 20 | Test All Device | **Lulus** | Lolos Playwright di `360x800`, `768x1024`, dan `1440x900` |

---

## 4. Bukti Screenshot QA (`docs/review/`)

- `docs/review/qa-home-360.png` — Beranda mobile `360x800` (Dark Mode)
- `docs/review/qa-manus-proyeksi-360.png` — Modul Ossa Manus tab Proyeksi `360x800`
- `docs/review/qa-kasus-360.png` — Simulasi Kasus 2 tahap `360x800`
- `docs/review/qa-home-768.png` — Beranda tablet `768x1024`
- `docs/review/qa-home-1440.png` — Beranda desktop `1440x900` (Dark Mode)
- `docs/review/qa-home-light-1440.png` — Beranda desktop `1440x900` (Light Mode setelah perbaikan kontras)
