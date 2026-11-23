import type { Soal } from '../types';

export const soalWrist: Soal[] = [
  {
    id: 'wrist-01',
    modul: 'wrist',
    tipe: 'definisi',
    tanya: 'Proyeksi pemeriksaan apa saja yang digunakan pada modul teknik radiografi wrist joint?',
    pilihan: [
      'PA dan Oblik',
      'AP dan Lateral',
      'AP dan AP Axial',
      'Lateral dan Tangensial',
    ],
    kunci: 1,
    penjelasan:
      'Sesuai analisis kebutuhan dan pelaksanaan pemeriksaan pada modul wrist joint, proyeksi yang digunakan adalah Anterior Posterior (AP) dan Lateral.',
    sumber: 'hal 3-4',
  },
  {
    id: 'wrist-02',
    modul: 'wrist',
    tipe: 'definisi',
    tanya: 'Pada proyeksi AP wrist joint, bagaimana orientasi permukaan pergelangan tangan terhadap kaset?',
    pilihan: [
      'Telapak tangan menempel kaset (prone)',
      'Sisi jari kelingking menempel kaset (lateral)',
      'Punggung pergelangan tangan menempel kaset (supine)',
      'Sisi ibu jari menempel kaset dengan rotasi 45°',
    ],
    kunci: 2,
    penjelasan:
      'Pada proyeksi AP wrist joint, punggung pergelangan tangan diletakkan menempel di atas kaset dalam posisi supine dengan tangan dan lengan satu garis lurus.',
    sumber: 'hal 4',
  },
  {
    id: 'wrist-03',
    modul: 'wrist',
    tipe: 'posisi',
    tanya: 'Mengapa jari-jari tangan diganjal softbag saat memposisikan proyeksi AP wrist joint?',
    pilihan: [
      'Agar pergelangan tangan benar-benar menempel kaset',
      'Agar kedua processus styloideus saling superposisi',
      'Agar tulang carpal terpisah satu sama lain ke arah lateral',
      'Agar pasien lebih mudah menekuk siku membentuk sudut 90°',
    ],
    kunci: 0,
    penjelasan:
      'Mengganjal jari-jari tangan dengan softbag membuat pergelangan tangan menempel rata pada kaset sehingga jarak objek ke film minimal.',
    sumber: 'hal 4',
  },
  {
    id: 'wrist-04',
    modul: 'wrist',
    tipe: 'posisi',
    tanya: 'Bagaimana cara memastikan tidak terjadi rotasi pada proyeksi AP wrist joint?',
    pilihan: [
      'Menempelkan sisi jari kelingking tegak lurus ke kaset',
      'Membuat kedua processus styloideus saling superposisi',
      'Merotasikan pergelangan tangan 45° ke arah medial',
      'Mengatur kedua processus styloideus berjarak sama ke kaset',
    ],
    kunci: 3,
    penjelasan:
      'Pada proyeksi AP, kedua processus styloideus diatur berjarak sama terhadap kaset untuk mencegah rotasi, sedangkan superposisi diterapkan pada proyeksi lateral.',
    sumber: 'hal 4',
  },
  {
    id: 'wrist-05',
    modul: 'wrist',
    tipe: 'posisi',
    tanya: 'Bagaimana pengaturan fiksasi pada proyeksi lateral wrist joint?',
    pilihan: [
      'Spon 45° di bawah punggung tangan dan tali pengikat di bahu',
      'Softbag di kedua sisi tangan dan sandbag di sisi lengan',
      'Softbag di bawah jari tangan tanpa sandbag di lengan',
      'Sandbag diletakkan langsung di atas pertengahan wrist joint',
    ],
    kunci: 1,
    penjelasan:
      'Pada proyeksi lateral wrist joint, fiksasi dilakukan dengan meletakkan softbag di kedua sisi tangan dan sandbag pada sisi lengan.',
    sumber: 'hal 4',
  },
  {
    id: 'wrist-06',
    modul: 'wrist',
    tipe: 'sinar',
    tanya: 'Di mana letak central point pada proyeksi AP dan lateral wrist joint?',
    pilihan: [
      'Pertengahan wrist joint',
      'MCP digiti III',
      'Pertengahan os antebrachii',
      'Processus styloideus ulnae',
    ],
    kunci: 0,
    penjelasan:
      'Baik pada proyeksi AP maupun lateral wrist joint, central point diarahkan tepat pada pertengahan wrist joint.',
    sumber: 'hal 4-5',
  },
  {
    id: 'wrist-07',
    modul: 'wrist',
    tipe: 'sinar',
    tanya: 'Berapa faktor eksposi dan FFD yang dipakai pada pemeriksaan wrist joint?',
    pilihan: [
      '55–60 kVp, 7–8 mAs, FFD 100 cm, non grid',
      '72 kVp, 10 mAs, FFD 100 cm, dengan grid',
      '40–50 kVp, 4–5 mAs, FFD 100 cm, non grid',
      '50–55 kVp, 6–7 mAs, FFD 120 cm, non grid',
    ],
    kunci: 2,
    penjelasan:
      'Kedua proyeksi wrist joint menggunakan FFD 100 cm dengan faktor eksposi 40–50 kVp, 4–5 mAs, non grid, dan film speed 400.',
    sumber: 'hal 4-5',
  },
  {
    id: 'wrist-08',
    modul: 'wrist',
    tipe: 'kriteria',
    tanya: 'Apa poin evaluasi radiografi yang diminta pada akhir praktikum wrist joint?',
    pilihan: [
      'Mengukur sudut kemiringan humerus dan jarak sendi bahu',
      'Menyebutkan anatomi tangan serta batas proksimal dan distalnya',
      'Membandingkan celah sendi siku dengan sisi kontralateral',
      'Menilai tumpang tindih processus coracoideus terhadap costae',
    ],
    kunci: 1,
    penjelasan:
      'Evaluasi radiografi modul wrist joint meliputi penyebutan seluruh anatomi yang masuk dalam radiograf, batas proksimal dan distal, serta kritik evaluasi.',
    sumber: 'hal 5',
  },
  {
    id: 'wrist-09',
    modul: 'wrist',
    tipe: 'proteksi',
    tanya: 'Mengapa apron dipasang menutupi daerah panggul pasien saat pemeriksaan wrist joint?',
    pilihan: [
      'Agar pasien tidak menggerakkan lengan saat duduk',
      'Agar ukuran lapangan penyinaran tampak lebih terang',
      'Untuk menahan kaset agar tetap datar di atas meja',
      'Untuk melindungi organ reproduksi dari sinar hambur',
    ],
    kunci: 3,
    penjelasan:
      'Apron diletakkan menutupi daerah panggul pasien untuk melindungi organ reproduksi dari paparan radiasi sinar hambur.',
    sumber: 'hal 3',
  },
  {
    id: 'wrist-10',
    modul: 'wrist',
    tipe: 'prosedur',
    tanya: 'Ukuran kaset dan film radiografi berapa yang disiapkan pada modul wrist joint?',
    pilihan: [
      '18×24 cm',
      '24×30 cm',
      '30×40 cm',
      '35×35 cm',
    ],
    kunci: 0,
    penjelasan:
      'Pada bagian persiapan alat modul wrist joint, disiapkan kaset radiografi dan film berukuran 18×24 cm.',
    sumber: 'hal 3',
  },
];
