import type { Soal } from '../types';

export const soalCervical: Soal[] = [
  {
    id: 'cervical-01',
    modul: 'cervical',
    tipe: 'definisi',
    tanya: 'Rangkaian proyeksi apa saja yang digunakan pada modul teknik radiografi vertebra cervical?',
    pilihan: [
      'PA, Lateral, dan Swimmer',
      'AP, Lateral, dan AP Axial Oblik',
      'AP Axial, PA, dan Open Mouth',
      'Lateral, Oblik PA, dan Flexi',
    ],
    kunci: 1,
    penjelasan:
      'Bagian pelaksanaan pemeriksaan modul cervical mencakup tiga proyeksi utama: AP, Lateral (LAT), dan AP Axial Oblik (R/LPO).',
    sumber: 'hal 6-8',
  },
  {
    id: 'cervical-02',
    modul: 'cervical',
    tipe: 'definisi',
    tanya: 'Patokan permukaan anatomi apakah yang menandai ketinggian C4 sebagai central point vertebra cervical?',
    pilihan: [
      'Ujung inferior angulus mandibulae',
      'Processus spinosus C7 (prominens)',
      'Incisura jugularis sterni atas',
      'Cartilago thyroidea atau jakun',
    ],
    kunci: 3,
    penjelasan:
      'Pada seluruh proyeksi cervical (AP, Lateral, dan AP Axial Oblik), central point diarahkan pada C4 setinggi cartilago thyroidea atau jakun.',
    sumber: 'hal 6-8',
  },
  {
    id: 'cervical-03',
    modul: 'cervical',
    tipe: 'posisi',
    tanya: 'Mengapa dagu pasien diminta sedikit menengadah pada proyeksi AP, lateral, dan oblik vertebra cervical?',
    pilihan: [
      'Agar tidak menghalangi vertebra cervicalis atas',
      'Agar celah intervertebralis lumbal ikut terbuka',
      'Agar bayangan costae pertama bergeser ke bawah',
      'Agar bahu pasien dapat terangkat sejajar telinga',
    ],
    kunci: 0,
    penjelasan:
      'Dagu yang sedikit menengadah mencegah bayangan mandibula menutupi vertebra cervicalis bagian atas (atlas dan axis).',
    sumber: 'hal 6-8',
  },
  {
    id: 'cervical-04',
    modul: 'cervical',
    tipe: 'posisi',
    tanya: 'Berapa sudut MCP leher pasien terhadap kaset saat memposisikan proyeksi AP axial oblik (RPO/LPO) cervical?',
    pilihan: [
      '20° terhadap bidang kaset',
      '30° terhadap bidang kaset',
      '45° terhadap bidang kaset',
      '70° terhadap bidang kaset',
    ],
    kunci: 2,
    penjelasan:
      'Pada proyeksi R/LPO cervical, tubuh dan MCP leher pasien diatur membentuk sudut 45° terhadap kaset dengan perpotongan MSP dan MCP di midline bucky.',
    sumber: 'hal 8',
  },
  {
    id: 'cervical-05',
    modul: 'cervical',
    tipe: 'posisi',
    tanya: 'Mengapa posisi objek yang torsi (terpelintir) harus dihindari pada proyeksi AP axial oblik vertebra cervical?',
    pilihan: [
      'Membuat bahu tampak lebih tinggi di kaset',
      'Mengurangi kejelasan foramen intervertebralis',
      'Menambah dosis radiasi pada kelenjar tiroid',
      'Menyebabkan kedua ramus mandibula tumpang tindih',
    ],
    kunci: 1,
    penjelasan:
      'Catatan modul menyebutkan posisi torsi (terpelintir) pada proyeksi R/LPO justru akan mereduksi gambaran kejelasan foramen intervertebral tulang cervical.',
    sumber: 'hal 8',
  },
  {
    id: 'cervical-06',
    modul: 'cervical',
    tipe: 'sinar',
    tanya: 'Bagaimana pengaturan arah central ray pada proyeksi AP dan AP axial oblik vertebra cervical?',
    pilihan: [
      'Tegak lurus melewati C7 ke tepi atas kaset',
      'Menyudut 10° caudad melewati C4 ke kaset',
      'Menyudut 30–35° cephalad menuju tepi bawah',
      'Menyudut 15–20° cranial melewati C4 ke kaset',
    ],
    kunci: 3,
    penjelasan:
      'Baik proyeksi AP maupun AP axial oblik (R/LPO) cervical menggunakan central ray menyudut 15–20° cranial melewati C4 ke pertengahan kaset.',
    sumber: 'hal 6-8',
  },
  {
    id: 'cervical-07',
    modul: 'cervical',
    tipe: 'sinar',
    tanya: 'Berapa nilai FFD yang diterapkan pada proyeksi lateral dan AP axial oblik vertebra cervical?',
    pilihan: [
      '100 cm dengan teknik non grid',
      '152 cm dengan grid dan 60–65 kVp',
      '120 cm dengan grid dan 75–85 kVp',
      '90 cm dengan teknik tanpa bucky',
    ],
    kunci: 1,
    penjelasan:
      'Proyeksi AP cervical memakai FFD 100 cm, sedangkan proyeksi Lateral dan AP Axial Oblik memakai FFD 152 cm dengan 60–65 kVp, 15–20 mAs, dan grid.',
    sumber: 'hal 6-8',
  },
  {
    id: 'cervical-08',
    modul: 'cervical',
    tipe: 'kriteria',
    tanya: 'Struktur anatomi utama apa yang harus tampak membuka jelas pada kriteria radiograf proyeksi R/LPO cervical?',
    pilihan: [
      'Sendi zygapophyseal tanpa terlihat foramina',
      'Processus spinosus tepat di garis tengah corpus',
      'Intervertebral foramina dari C2–C3 hingga C7–T1',
      'Tiga tulang costae atas dan corpus C7–T3',
    ],
    kunci: 2,
    penjelasan:
      'Kriteria radiograf R/LPO cervical menilai terbukanya foramina intervertebralis dari C2–C3 sampai C7–T1 dengan ukuran dan kontur yang seragam.',
    sumber: 'hal 11',
  },
  {
    id: 'cervical-09',
    modul: 'cervical',
    tipe: 'proteksi',
    tanya: 'Jika pesawat sinar-X dilengkapi Automatic Exposure Control (AEC), bagaimana pengaturannya pada modul cervical?',
    pilihan: [
      'Pilih detektor tengah dengan density neutral (N)',
      'Matikan AEC lalu gunakan eksposi ulang manual',
      'Aktifkan ketiga detektor dengan density +2',
      'Gunakan detektor samping tanpa pelindung gonad',
    ],
    kunci: 0,
    penjelasan:
      'Untuk menghindari pengulangan foto, bila pesawat memiliki AEC, pilih detektor tengah yang diaktivasi dengan nilai density pada posisi neutral (N).',
    sumber: 'hal 9',
  },
  {
    id: 'cervical-10',
    modul: 'cervical',
    tipe: 'prosedur',
    tanya: 'Berapa ukuran kaset dan film radiografi yang disiapkan pada tahap pra-pemeriksaan vertebra cervical?',
    pilihan: [
      '30 × 40 cm untuk ketiga proyeksi',
      '24 × 30 cm untuk posisi melintang',
      '35 × 43 cm dengan orientasi vertikal',
      '18 × 24 cm pada pesawat dan bucky',
    ],
    kunci: 3,
    penjelasan:
      'Pada persiapan alat modul vertebra cervical, ukuran kaset radiografi dan film yang digunakan adalah 18×24 cm.',
    sumber: 'hal 4',
  },
];
