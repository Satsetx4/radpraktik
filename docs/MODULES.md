# Peta Modul

Sumber: `sources/pdf/`. Slug dipakai untuk nama file data (`src/data/modul/<slug>.ts`, `src/data/soal/<slug>.ts`), folder gambar (`public/img/<slug>/`), dan rute (`/modul/<slug>`). **Jangan mengganti slug.**

| # | Slug | Kode | Judul tampilan | Region | File PDF |
|---|---|---|---|---|---|
| 1 | `orientasi` | 301-1 | Orientasi Laboratorium & Dasar Proyeksi | `dasar` | PEDOMAN PRAKTEK RAD 301-1 ORIENTASI.pdf |
| 2 | `manus` | 301-2A | Ossa Manus | `ekstremitas-atas` | PEDOMAN PRAKTEK RAD 301-2A MANUS.pdf |
| 3 | `wrist` | 301-2B | Wrist Joint | `ekstremitas-atas` | PEDOMAN PRAKTEK RAD 301-2B WRIST.pdf |
| 4 | `antebrachi` | 301-3A | Antebrachii | `ekstremitas-atas` | PEDOMAN PRAKTEK RAD 301-3A ANTEBRACHI.pdf |
| 5 | `elbow` | 301-3B | Elbow Joint | `ekstremitas-atas` | PEDOMAN PRAKTEK RAD 301-3B  ELBOW.pdf |
| 6 | `humerus` | 301-4A | Os Humerus | `ekstremitas-atas` | PEDOMAN PRAKTEK RAD 301-4A humerus 2015.pdf |
| 7 | `shoulder` | 301-4B | Shoulder Joint | `ekstremitas-atas` | PEDOMAN PRAKTEK RAD 301-4B shoulder 2015.pdf |
| 8 | `clavicula` | 301-5A | Os Clavicula | `ekstremitas-atas` | PEDOMAN PRAKTEK RAD 301-5A OS CLAVICULA.pdf |
| 9 | `scapula` | 301-5B | Os Scapula | `ekstremitas-atas` | PEDOMAN PRAKTEK RAD 301-5B SCAPULA.pdf |
| 10 | `pedis` | 301-6A | Ossa Pedis | `ekstremitas-bawah` | PEDOMAN PRAKTEK RAD 301-6A OSSA PEDIS.pdf |
| 11 | `calcaneus` | 301-6B | Os Calcaneus | `ekstremitas-bawah` | PEDOMAN PRAKTEK RAD 301-6B OS CALCANEUS.pdf |
| 12 | `ankle` | 301-7A | Ankle Joint | `ekstremitas-bawah` | PEDOMAN PRAKTEK RAD 301-7A ANKLE JOINT.pdf |
| 13 | `cruris` | 301-7B | Os Cruris | `ekstremitas-bawah` | PEDOMAN PRAKTEK RAD 301-7B CRURIS.pdf |
| 14 | `knee` | 301-8A | Knee Joint | `ekstremitas-bawah` | PEDOMAN PRAKTEK RAD 301-8A KNEE JOINT.pdf |
| 15 | `patella` | 301-8B | Os Patella | `ekstremitas-bawah` | PEDOMAN PRAKTEK RAD 301-8B Patella.pdf |
| 16 | `femur` | 301-9A | Os Femur | `ekstremitas-bawah` | PEDOMAN PRAKTEK RAD 301-9A femur.pdf |
| 17 | `collum-femur` | 301-9B | Collum Femur | `ekstremitas-bawah` | PEDOMAN PRAKTEK RAD 301-9B collum femur.pdf |
| 18 | `hip` | 301-10A | Hip Joint | `pelvis` | PEDOMAN PRAKTEK RAD 301-10A hip joint.pdf |
| 19 | `sacroiliac` | 301-10B | Sacro-Iliac Joints | `pelvis` | PEDOMAN PRAKTEK RAD 301-10B sacro-iliac joints.pdf |
| 20 | `pelvis` | 301-10C | Pelvis | `pelvis` | PEDOMAN PRAKTEK RAD 301-10C pelvis.pdf |
| 21 | `cervical` | 301-11 | Vertebra Cervical | `vertebra` | PEDOMAN PRAKTEK RAD 301-11 CERVICAL.pdf |
| 22 | `thoracal` | 301-12 | Vertebra Thoracal | `vertebra` | PEDOMAN PRAKTEK RAD 301-12 thoracal.pdf |
| 23 | `lumbal` | 301-13 | Vertebra Lumbal | `vertebra` | PEDOMAN PRAKTEK RAD 301-13 vertebra lumbal.pdf |
| 24 | `sacrum-coccyx` | 301-14 | Os Sacrum & Coccygeus | `vertebra` | PEDOMAN PRAKTEK RAD 301-14 sacrum coccyg.pdf |

## Region
| ID | Label | Urutan |
|---|---|---|
| `dasar` | Dasar | 1 |
| `ekstremitas-atas` | Ekstremitas Atas | 2 |
| `ekstremitas-bawah` | Ekstremitas Bawah | 3 |
| `pelvis` | Pelvis & Panggul | 4 |
| `vertebra` | Vertebra | 5 |

## Fakta PDF yang perlu diketahui
- Struktur heading konsisten: `A. Kompetensi` · `B. Administrasi pemeriksaan radiografi` · `C. Pra pemeriksaan` · `D. Pelaksanaan Pemeriksaan` (sub `1. Proyeksi ...` berisi `a. Posisi pasien (PP)`, `b. Posisi objek (PO)`, `c. Pengaturan sinar`: CR, CP, FFD, faktor eksposi) · `E. Proteksi radiasi` · `F. Pasca pemeriksaan` · `G. Evaluasi radiografi` / `G. Tugas`.
- Modul `orientasi` berbeda: isinya definisi proyeksi, posisi pemotretan, dan prinsip proteksi radiasi, tanpa prosedur per proyeksi.
- Ada 186 gambar mentah. Yang dibuang: hiasan kecil (<80px, misal 27×3), sampul berulang 1096×527, dan duplikat (pakai hash). Beberapa modul berbagi gambar yang sama (misal Antebrachi & Elbow), jadi dedupe dilakukan per modul, bukan global.
- Kaset film & pemrosesan film manual (kamar gelap, developer/fixer) memang materi PDF. Tetap dipakai apa adanya.
