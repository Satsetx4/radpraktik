# CONTENT_GUIDE — Aturan Menulis Konten RadPraktik

Aturan ini **mengikat semua agent**. `npm run validate` menegakkan semua aturan yang diberi tanda **[V]**. Contoh di dokumen ini diambil dari PDF Manus (`sources/pdf/…301-2A MANUS.pdf`, hal 5–6).

## 1. Prinsip
1. **Setia ke PDF.** Setiap fakta harus ada di PDF modulnya. Field `sumber` berisi halaman PDF, misal `"hal 5"`. **[V: wajib ada, format `hal N` atau `hal N-M`]**
2. **Perbaiki typo yang jelas** (misal "keaadaan" → "keadaan", "mka" → "maka"; definisi PA "keluar bagian posterior" → "anterior"). Setiap perbaikan materi (bukan sekadar ejaan) dicatat di `docs/catatan-konten.md`.
3. **Ragu = jangan tebak.** Kalau nilai di PDF janggal atau bertentangan, pakai teks PDF apa adanya dan catat di `docs/catatan-konten.md`.
4. Pembaca adalah **mahasiswa D3/D4** yang sedang belajar untuk praktikum/ujian. Gunakan Bahasa Indonesia baku tapi ringan, kalimat aktif, dan sapaan netral (tanpa "kamu"/"Anda" di soal).

## 2. Istilah baku [V]
Validator menolak varian di kolom kanan.

| Pakai | Jangan pakai |
|---|---|
| oblik | oblique, obliq, obliqe |
| central ray (CR) | centre ray, sentral ray |
| central point (CP) | center point, titik pusat |
| FFD | SID (kecuali PDF menyebutnya) |
| kaset | cassette, kaset film (cukup "kaset") |
| proyeksi | projeksi, proyeksi foto |
| posisi pasien (PP) / posisi objek (PO) | posisi penderita |
| processus styloideus | processus stiloideus, prosesus |
| metacarpophalangeal joint (MCP) | MCP joint, metacarpo phalangeal |
| apron | apron pb, celemek |
| radiograf | foto rontgen, rontgen |

Kata Latin anatomi ditulis seperti di PDF (ossa manus, digiti III, os calcaneus). Angka satuan: `100 cm`, `45°`, `40–50 kVp`, `4–5 mAs`.

## 3. Materi modul (`src/data/modul/<slug>.ts`)
- `kompetensi`: 1 kalimat, ditulis ulang dari bagian A.
- `sorotan`: **2–4 poin** tentang hal yang **khas** di modul ini (proyeksi apa saja, CP unik, fiksasi khusus). **[V: 2–4 item]** Jangan isi hal umum yang ada di semua modul.
- `praPemeriksaan`: kelompok `Administrasi`, `Persiapan Pasien`, `Persiapan Alat & Bahan`, ditulis sebagai checklist singkat (≤ 15 kata per poin). **[V: tiap poin ≤ 120 karakter]**
- `proyeksi[]`: satu entri per proyeksi di bagian D, urut sesuai PDF. Field `posisiPasien`, `posisiObjek` (poin ringkas), `centralRay`, `centralPoint`, `ffd`, `faktorEksposi` (kalau ada di PDF), `kriteria`, `gambar[]` (path dari `public/img/<slug>/`, caption ≤ 60 karakter). **[V: path gambar ada filenya]**
- `proteksi`, `pascaPemeriksaan`, `evaluasi`: poin ringkas dari bagian E, F, G.

**Contoh (Manus, proyeksi PA):**
```ts
{
  id: 'pa',
  nama: 'Proyeksi Posterior Anterior (PA)',
  posisiPasien: ['Duduk menyamping meja pemeriksaan, sisi yang sakit dekat meja', 'Tinggi duduk diatur agar lengan nyaman di atas meja'],
  posisiObjek: [
    'Telapak tangan menempel di kaset (prone), tangan dan lengan satu garis lurus',
    'Tangan di pertengahan lapangan penyinaran, jari-jari direnggangkan',
    'Kedua processus styloideus berjarak sama terhadap kaset agar tidak rotasi',
    'Fiksasi sandbag di kedua sisi lengan, softbag di bawah untuk kenyamanan',
  ],
  centralRay: 'Vertikal tegak lurus terhadap kaset',
  centralPoint: 'Metacarpophalangeal joint digiti III',
  ffd: '100 cm',
  faktorEksposi: '40–50 kVp, 4–5 mAs, non grid, film speed 400',
  kriteria: [],
  gambar: [{ src: '/img/manus/pa-1.webp', caption: 'Posisi PA ossa manus' }],
  sumber: 'hal 5',
}
```

## 4. Soal latihan (`src/data/soal/<slug>.ts`)
### Jumlah & sebaran [V]
Tepat **10 soal per modul**, field `tipe` wajib:

| `tipe` | Jumlah | Isi |
|---|---|---|
| `definisi` | 2 | kompetensi, nama proyeksi, istilah |
| `posisi` | 3 | posisi pasien & objek, fiksasi, anti-rotasi |
| `sinar` | 2 | central ray, central point, FFD, faktor eksposi |
| `kriteria` | 1 | evaluasi/kriteria radiograf, anatomi yang tampak |
| `proteksi` | 1 | proteksi radiasi |
| `prosedur` | 1 | administrasi, pra/pasca pemeriksaan, urutan langkah |

**Pengecualian `orientasi`:** sebarannya 4 `definisi` (proyeksi) · 3 `posisi` (posisi pemotretan) · 2 `proteksi` · 1 `prosedur`.

### Aturan soal
- Soal ≤ 200 karakter, satu fakta per soal, tidak menyalin kalimat PDF mentah-mentah. **[V]**
- **Tepat 4 pilihan**, tidak boleh ada yang kembar, tanpa "semua benar"/"semua salah"/"A dan B". **[V]**
- Panjang pilihan setara. **Kunci tidak boleh menjadi pilihan terpanjang di lebih dari 4 dari 10 soal per modul.** **[V]**
- Posisi `kunci` di data tersebar (tidak semuanya 0). Tampilan tetap mengacaknya. **[V: tiap indeks 0–3 muncul minimal 1×]**
- Pengecoh harus masuk akal: diambil dari proyeksi lain di modul yang sama atau dari modul tetangga (misal CP digiti II vs III).
- `penjelasan`: 1–2 kalimat yang menyebut **alasan**, ≤ 220 karakter. **[V]**
- ID berformat `<slug>-01` s/d `<slug>-10`. **[V]**

**Contoh (Manus):**
```ts
{
  id: 'manus-04',
  modul: 'manus',
  tipe: 'sinar',
  tanya: 'Di mana central point pada proyeksi lateral ossa manus?',
  pilihan: [
    'Metacarpophalangeal joint digiti III',
    'Metacarpophalangeal joint digiti II',
    'Pertengahan os carpal',
    'Interphalangeal joint digiti I',
  ],
  kunci: 1,
  penjelasan: 'Pada lateral, jari-jari bertumpuk sehingga CP digeser ke MCP digiti II. Pada PA dan oblik, CP tetap di MCP digiti III.',
  sumber: 'hal 6',
}
```

## 5. Contoh kasus (`src/data/kasus.ts`)
### Jumlah & sebaran [V]
Tepat **30 kasus** (`k01`–`k30`): **Ekstremitas Atas 9 · Ekstremitas Bawah 9 · Pelvis 5 · Vertebra 7**. Tiap modul non-orientasi dipakai minimal 1× di `modulTerkait`.

Sampel emas `k01`–`k05`: `manus`, `wrist`, `ankle`, `pelvis`, `cervical`.

### Aturan kasus
- `skenario`: **60–110 kata** **[V]**, satu paragraf, berisi usia & jenis kelamin, mekanisme/keluhan, kondisi pasien (bisa duduk/berdiri/berbaring, kooperatif atau tidak), dan permintaan foto dari dokter **tanpa menyebut proyeksinya** (contoh: "dokter meminta pemeriksaan ossa manus").
- Nama pasien boleh disebut sebagai inisial (Tn. A, Ny. S, An. R). Tanpa nama lengkap.
- **Tanpa diagnosis/patologi di luar PDF.** Keluhan cukup ditulis umum (nyeri, bengkak, pasca jatuh).
- `tahap1`: pertanyaan proyeksi yang tepat/rutin, 4 opsi. **[V]**
- `tahap2`: pertanyaan posisi objek ATAU central ray/point yang sesuai, 4 opsi. **[V]**
- `pembahasan`: `proyeksi`, `posisi`, `centralRay` (termasuk CP & FFD), `proteksi`, dan `catatan` opsional (penyesuaian karena kondisi pasien, **harus berdasar PDF**). Tiap field ≤ 300 karakter. **[V]**
- `sumber`: slug + halaman, misal `"manus hal 5-6"`. **[V]**

**Contoh (k01):**
```ts
{
  id: 'k01',
  modulTerkait: ['manus'],
  skenario: 'Tn. A, laki-laki 34 tahun, datang ke instalasi radiologi diantar rekan kerjanya setelah tangan kanannya terjepit pintu besi di gudang. Punggung tangan tampak bengkak dan ia mengeluh nyeri saat menggerakkan jari. Pasien sadar penuh, kooperatif, dan mampu duduk tanpa bantuan. Lembar permintaan dari IGD meminta pemeriksaan radiografi ossa manus dextra untuk melihat kemungkinan kelainan tulang. Radiografer perlu menentukan proyeksi rutin yang akan dibuat terlebih dahulu.',
  tahap1: {
    tanya: 'Proyeksi rutin apa yang dibuat pertama kali untuk ossa manus?',
    pilihan: ['Posterior anterior (PA)', 'Anterior posterior (AP)', 'Axial', 'Tangensial'],
    kunci: 0,
  },
  tahap2: {
    tanya: 'Di mana central point untuk proyeksi tersebut?',
    pilihan: ['MCP joint digiti II', 'MCP joint digiti III', 'Processus styloideus radii', 'Pertengahan os carpal'],
    kunci: 1,
  },
  pembahasan: {
    proyeksi: 'PA sebagai proyeksi rutin pertama, dilengkapi lateral dan oblik sesuai modul ossa manus.',
    posisi: 'Pasien duduk menyamping meja, telapak tangan kanan prone di kaset, jari direnggangkan, kedua processus styloideus berjarak sama agar tidak rotasi.',
    centralRay: 'CR vertikal tegak lurus kaset, CP pada MCP joint digiti III, FFD 100 cm, 40–50 kVp, 4–5 mAs, non grid.',
    proteksi: 'Apron menutup daerah panggul, pandangan pasien menjauh dari sumber sinar, pendamping di ruangan wajib memakai apron.',
    catatan: 'Karena tangan bengkak, fiksasi memakai sandbag di sisi lengan dan softbag di bawah tangan supaya pasien nyaman dan tidak bergerak.',
  },
  sumber: 'manus hal 5-6',
}
```

## 6. Checklist sebelum commit konten
- [ ] `npm run validate` lolos tanpa error
- [ ] Gaya & panjang setara dengan sampel emas Manus / k01–k05
- [ ] Semua perbaikan materi tercatat di `docs/catatan-konten.md`
- [ ] Gambar tampil dan cocok dengan proyeksinya (dicek di `npm run dev`)
