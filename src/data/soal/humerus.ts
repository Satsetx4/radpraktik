import type { Soal } from '../types';

export const soalHumerus: Soal[] = [
  {
    id: 'humerus-01',
    modul: 'humerus',
    tipe: 'definisi',
    tanya: 'Proyeksi apa yang digunakan dalam modul teknik radiografi os humerus?',
    pilihan: [
      'AP dan AP Endo-Eksorotasi',
      'PA dan Oblik 45°',
      'AP dan Lateral',
      'AP Axial dan Lateral',
    ],
    kunci: 2,
    penjelasan:
      'Sesuai modul teknik radiografi os humerus, pemeriksaan rutin menggunakan dua proyeksi, yaitu Antero Posterior (AP) dan Lateral.',
    sumber: 'hal 3-5',
  },
  {
    id: 'humerus-02',
    modul: 'humerus',
    tipe: 'definisi',
    tanya: 'Sendi apa saja yang wajib masuk ke dalam lapangan penyinaran dan kaset pada radiografi os humerus?',
    pilihan: [
      'Sendi bahu dan sendi siku',
      'Sendi siku dan wrist joint',
      'Sternoclavicular dan acromioclavicular joint',
      'Scapulohumeral joint dan metacarpophalangeal joint',
    ],
    kunci: 0,
    penjelasan:
      'Kedua sendi yang berbatasan langsung dengan os humerus, yakni sendi bahu di proksimal dan sendi siku di distal, wajib masuk dalam kaset.',
    sumber: 'hal 4-5',
  },
  {
    id: 'humerus-03',
    modul: 'humerus',
    tipe: 'posisi',
    tanya: 'Berapa jarak tepi atas kaset terhadap sendi bahu saat memposisikan proyeksi AP dan lateral os humerus?',
    pilihan: [
      '1 cm di bawah sendi bahu',
      '2,5 cm di atas sendi bahu',
      '5 cm di atas sendi bahu',
      'Tepat setinggi pertengahan caput humeri',
    ],
    kunci: 1,
    penjelasan:
      'Tepi atas kaset diatur 2,5 cm di atas sendi bahu dan tepi bawah mencakup sendi siku agar kedua sendi tidak terpotong.',
    sumber: 'hal 4-5',
  },
  {
    id: 'humerus-04',
    modul: 'humerus',
    tipe: 'posisi',
    tanya: 'Bagaimana cara memposisikan lengan pasien berdiri untuk proyeksi lateral os humerus?',
    pilihan: [
      'Lengan dieksorotasikan hingga telapak tangan menghadap ke depan',
      'Lengan diabduksikan 90° menjauhi tubuh dengan siku lurus',
      'Lengan diangkat ke atas kepala dengan punggung tangan di dahi',
      'Lengan diendorotasikan maksimum dengan dorso manus menempel pinggang',
    ],
    kunci: 3,
    penjelasan:
      'Pada pasien berdiri, proyeksi lateral dicapai dengan endorotasi maksimum hingga dorso manus menempel pinggang sehingga kedua epicondylus superposisi.',
    sumber: 'hal 5',
  },
  {
    id: 'humerus-05',
    modul: 'humerus',
    tipe: 'posisi',
    tanya: 'Bagaimana posisi tangan pada pasien supine saat melakukan proyeksi lateral os humerus?',
    pilihan: [
      'Tepi radial manus menempel pada meja pemeriksaan',
      'Telapak tangan menempel datar di atas kaset',
      'Punggung tangan menempel datar di atas meja pemeriksaan',
      'Sisi ulna menempel kaset dengan siku fleksi 45°',
    ],
    kunci: 0,
    penjelasan:
      'Pada posisi pasien supine, lengan bawah diendorotasikan maksimum dari posisi AP hingga tepi radial manus menempel pada meja pemeriksaan.',
    sumber: 'hal 5',
  },
  {
    id: 'humerus-06',
    modul: 'humerus',
    tipe: 'sinar',
    tanya: 'Di mana letak central point dan arah central ray pada pemeriksaan os humerus?',
    pilihan: [
      'Processus coracoideus, menyudut 15° ke cephalad',
      'Pertengahan humerus, vertikal atau horizontal tegak lurus kaset',
      'Pertengahan elbow joint, vertikal tegak lurus kaset',
      'Mid scapula, horizontal tegak lurus kaset',
    ],
    kunci: 1,
    penjelasan:
      'Pada posisi berdiri maupun supine, central point diarahkan ke pertengahan humerus dengan central ray vertikal atau horizontal tegak lurus kaset.',
    sumber: 'hal 4-5',
  },
  {
    id: 'humerus-07',
    modul: 'humerus',
    tipe: 'sinar',
    tanya: 'Berapa faktor eksposi dan FFD yang digunakan pada proyeksi AP dan lateral os humerus?',
    pilihan: [
      '50–55 kVp, 6–7 mAs, FFD 100 cm, non grid',
      '55–60 kVp, 8–10 mAs, FFD 100 cm, non grid',
      '55–60 kVp, 7–8 mAs, FFD 100 cm, non grid',
      '72 kVp, 10 mAs, FFD 100 cm, dengan grid',
    ],
    kunci: 2,
    penjelasan:
      'Pemeriksaan os humerus menggunakan FFD 100 cm, non grid, film speed 400, serta faktor eksposi 55–60 kVp dan 7–8 mAs.',
    sumber: 'hal 4-5',
  },
  {
    id: 'humerus-08',
    modul: 'humerus',
    tipe: 'kriteria',
    tanya: 'Pada kriteria evaluasi radiograf proyeksi lateral os humerus, di manakah tampak proyeksi lesser tubercle?',
    pilihan: [
      'Superposisi di atas caput humeri',
      'Terpisah di sisi lateral caput humeri',
      'Di antara caput humeri dan greater tubercle',
      'Superposisi dengan olecranon fossa di distal',
    ],
    kunci: 0,
    penjelasan:
      'Pada proyeksi lateral os humerus, kedua epicondylus saling superposisi dan lesser tubercle tampak superposisi di atas caput humeri.',
    sumber: 'hal 7',
  },
  {
    id: 'humerus-09',
    modul: 'humerus',
    tipe: 'proteksi',
    tanya: 'Bagaimana pengaturan luas lapangan penyinaran yang benar menurut bagian proteksi radiasi os humerus?',
    pilihan: [
      'Dibuka selebar mungkin agar seluruh dinding dada terlihat',
      'Dikecilkan sepertiga bagian tengah saja tanpa mencakup sendi',
      'Diperlebar melampaui batas kaset untuk mengantisipasi gerak',
      'Seoptimal mungkin, maksimal seluas lapangan kaset yang dipakai',
    ],
    kunci: 3,
    penjelasan:
      'Luas lapangan penyinaran diatur seoptimal mungkin agar objek tercakup dengan batas maksimal seluas ukuran kaset yang digunakan.',
    sumber: 'hal 5',
  },
  {
    id: 'humerus-10',
    modul: 'humerus',
    tipe: 'prosedur',
    tanya: 'Alat apa yang digunakan pada tahap pasca pemeriksaan os humerus untuk merekam identitas pasien pada film?',
    pilihan: [
      'Tangki rinsing',
      'ID camera',
      'Penggaris kaliper',
      'Safety light',
    ],
    kunci: 1,
    penjelasan:
      'Identitas radiografi ditulis pada kertas yang tersedia lalu dimasukkan ke dalam ID camera sebelum pemrosesan film di kamar gelap.',
    sumber: 'hal 6',
  },
];
