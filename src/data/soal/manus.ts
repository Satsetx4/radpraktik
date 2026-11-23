import type { Soal } from '../types';

export const soalManus: Soal[] = [
  {
    id: 'manus-01',
    modul: 'manus',
    tipe: 'definisi',
    tanya: 'Manakah rangkaian proyeksi pemeriksaan yang tercantum pada modul teknik radiografi ossa manus?',
    pilihan: [
      'AP, Lateral, dan AP Axial',
      'PA, AP, dan Tangensial',
      'PA, Lateral, dan Oblik',
      'AP, Oblik, dan Aksial',
    ],
    kunci: 2,
    penjelasan:
      'Bagian pelaksanaan pemeriksaan modul ossa manus mencakup tiga proyeksi utama, yaitu Posterior Anterior (PA), Lateral, dan Oblik.',
    sumber: 'hal 5-6',
  },
  {
    id: 'manus-02',
    modul: 'manus',
    tipe: 'definisi',
    tanya: 'Pada proyeksi PA ossa manus, permukaan tangan manakah yang menempel langsung pada kaset?',
    pilihan: [
      'Telapak tangan (posisi prone)',
      'Punggung tangan (posisi supine)',
      'Sisi jari kelingking (posisi lateral)',
      'Sisi ibu jari (posisi rotasi medial)',
    ],
    kunci: 0,
    penjelasan:
      'Pada proyeksi PA, berkas sinar menembus dari posterior ke anterior sehingga telapak tangan menempel pada kaset dalam posisi prone.',
    sumber: 'hal 5',
  },
  {
    id: 'manus-03',
    modul: 'manus',
    tipe: 'posisi',
    tanya: 'Bagaimana cara memastikan tangan tidak mengalami rotasi saat memposisikan proyeksi PA ossa manus?',
    pilihan: [
      'Merapatkan seluruh jari tangan hingga saling menempel rapat',
      'Membuat kedua processus styloideus saling superposisi tegak',
      'Merotasikan tangan 45° ke arah prone dengan bantuan spon',
      'Mengatur kedua processus styloideus berjarak sama ke kaset',
    ],
    kunci: 3,
    penjelasan:
      'Kedua processus styloideus diatur berjarak sama terhadap kaset agar posisi tangan sejajar tanpa rotasi, sedangkan superposisi dipakai pada proyeksi lateral.',
    sumber: 'hal 5',
  },
  {
    id: 'manus-04',
    modul: 'manus',
    tipe: 'posisi',
    tanya: 'Bagaimana pengaturan posisi jari-jari tangan saat melakukan proyeksi lateral ossa manus?',
    pilihan: [
      'Direnggangkan selebar mungkin di atas kaset',
      'Saling bertumpuk dan ibu jari difiksasi softbag',
      'Diletakkan di atas spon bersudut 45° satu per satu',
      'Difleksikan penuh dengan telapak tangan menghadap atas',
    ],
    kunci: 1,
    penjelasan:
      'Pada proyeksi lateral, sisi jari kelingking menempel kaset dengan jari saling bertumpuk, sementara ibu jari diberi softbag agar posisinya stabil.',
    sumber: 'hal 5-6',
  },
  {
    id: 'manus-05',
    modul: 'manus',
    tipe: 'posisi',
    tanya: 'Berapa sudut rotasi tangan terhadap kaset pada proyeksi oblik ossa manus?',
    pilihan: [
      '15° ke arah supine',
      '30° ke arah lateral',
      '45° ke arah prone',
      '90° tegak miring',
    ],
    kunci: 2,
    penjelasan:
      'Tangan awalnya diletakkan tegak miring dengan sisi jari kelingking menempel kaset, lalu dirotasikan membentuk sudut 45° ke arah prone dan jari dibuka.',
    sumber: 'hal 6',
  },
  {
    id: 'manus-06',
    modul: 'manus',
    tipe: 'sinar',
    tanya: 'Di mana central point pada proyeksi lateral ossa manus?',
    pilihan: [
      'Metacarpophalangeal joint (MCP) digiti III',
      'Metacarpophalangeal joint (MCP) digiti II',
      'Pertengahan tulang carpal bagian tengah',
      'Interphalangeal joint pada digiti I',
    ],
    kunci: 1,
    penjelasan:
      'Pada proyeksi lateral, jari-jari saling bertumpuk sehingga central point diarahkan ke MCP digiti II, sedangkan pada PA dan oblik tetap di MCP digiti III.',
    sumber: 'hal 6',
  },
  {
    id: 'manus-07',
    modul: 'manus',
    tipe: 'sinar',
    tanya: 'Berapa FFD dan arah central ray yang digunakan pada proyeksi PA, lateral, dan oblik ossa manus?',
    pilihan: [
      '100 cm, vertikal tegak lurus kaset',
      '152 cm, menyudut 15° ke arah cranial',
      '90 cm, menyudut 10° ke arah proksimal',
      '120 cm, horizontal sejajar meja periksa',
    ],
    kunci: 0,
    penjelasan:
      'Ketiga proyeksi ossa manus menggunakan FFD 100 cm dan central ray vertikal tegak lurus terhadap kaset dengan faktor eksposi 40–50 kVp dan 4–5 mAs.',
    sumber: 'hal 5-6',
  },
  {
    id: 'manus-08',
    modul: 'manus',
    tipe: 'kriteria',
    tanya: 'Hal apa yang menjadi fokus evaluasi gambaran anatomi radiologi pada akhir praktikum ossa manus?',
    pilihan: [
      'Kejelasan celah sendi lutut serta jaringan lunak di sekitar patella',
      'Kedua foramina obturatoria tampak simetris tanpa rotasi panggul',
      'Tampak celah intervertebral disk dan foramen intervertebralis C2–T1',
      'Seluruh bagian anatomi tangan serta batas proksimal dan distalnya',
    ],
    kunci: 3,
    penjelasan:
      'Bagian evaluasi radiografi modul manus menilai penyebutan seluruh anatomi tangan yang tampak serta batas proksimal dan batas distalnya.',
    sumber: 'hal 7',
  },
  {
    id: 'manus-09',
    modul: 'manus',
    tipe: 'proteksi',
    tanya: 'Tindakan proteksi radiasi apa yang wajib dilakukan pada pasien selama pemotretan ossa manus?',
    pilihan: [
      'Menutup daerah panggul dengan apron dan menjauhkan pandangan dari sinar-X',
      'Meminta pasien menahan napas penuh lalu memeluk kaset di depan dada',
      'Memasang kaca mata Pb pada pasien tanpa menutup area panggulnya',
      'Menggunakan AEC detektor tengah agar tidak perlu mengulang foto',
    ],
    kunci: 0,
    penjelasan:
      'Apron melindungi organ reproduksi pasien di area panggul dari sinar hambur, pandangan menjauh dari sumber sinar-X, dan pendamping wajib memakai apron.',
    sumber: 'hal 6',
  },
  {
    id: 'manus-10',
    modul: 'manus',
    tipe: 'prosedur',
    tanya: 'Apa urutan pemrosesan film radiograf di kamar gelap setelah kaset dibuka?',
    pilihan: [
      'Developer, fixer, rinsing, lalu washing',
      'Fixer, rinsing, developer, lalu washing',
      'Developer, rinsing, fixer, lalu washing',
      'Washing, developer, fixer, lalu rinsing',
    ],
    kunci: 2,
    penjelasan:
      'Setelah dipasang di hanger, film masuk cairan developer sekitar 4 menit, dibilas di tangki rinsing, dimasukkan ke cairan fixer, lalu dicuci (washing) dan dikeringkan.',
    sumber: 'hal 7',
  },
];
