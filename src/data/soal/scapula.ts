import type { Soal } from '../types';

export const soalScapula: Soal[] = [
  {
    id: 'scapula-01',
    modul: 'scapula',
    tipe: 'definisi',
    tanya: 'Pada proyeksi lateral os scapula, posisi tubuh oblik manakah yang digunakan bila memeriksa scapula kanan?',
    pilihan: [
      'LAO (Left Anterior Oblik)',
      'LPO (Left Posterior Oblik)',
      'RAO (Right Anterior Oblik)',
      'RPO (Right Posterior Oblik)',
    ],
    kunci: 2,
    penjelasan:
      'Pasien berdiri membelakangi tabung dengan tubuh oblik ke sisi yang diperiksa: posisi RAO digunakan untuk scapula kanan dan LAO untuk scapula kiri.',
    sumber: 'hal 5',
  },
  {
    id: 'scapula-02',
    modul: 'scapula',
    tipe: 'definisi',
    tanya: 'Proyeksi apa yang tercantum dalam pelaksanaan pemeriksaan modul teknik radiografi os scapula?',
    pilihan: [
      'AP dan Lateral',
      'AP Axial dan Oblik',
      'PA dan Tangensial',
      'AP Endo-Eksorotasi',
    ],
    kunci: 0,
    penjelasan:
      'Modul teknik radiografi os scapula mencakup dua proyeksi utama, yaitu Antero Posterior (AP) dan Lateral (dengan posisi tubuh RAO/LAO).',
    sumber: 'hal 4-6',
  },
  {
    id: 'scapula-03',
    modul: 'scapula',
    tipe: 'posisi',
    tanya: 'Mengapa lengan pasien diabduksikan dengan siku fleksi pada proyeksi AP os scapula?',
    pilihan: [
      'Agar ujung medial clavicula bergeser menjauhi costae pertama',
      'Menarik scapula ke samping agar bebas superposisi',
      'Supaya kedua epicondylus humerus saling superposisi tegak',
      'Untuk menempatkan dorso manus sejajar di atas vertebra lumbal',
    ],
    kunci: 1,
    penjelasan:
      'Pada proyeksi AP os scapula, lengan diabduksikan untuk menarik scapula ke samping menjauhi tulang rusuk, lalu elbow difleksikan agar tangan nyaman.',
    sumber: 'hal 5',
  },
  {
    id: 'scapula-04',
    modul: 'scapula',
    tipe: 'posisi',
    tanya: 'Berapa derajat kemiringan mid coronal plane (MCP) terhadap bidang kaset pada proyeksi lateral os scapula?',
    pilihan: [
      '15–30°',
      '25–35°',
      '30–40°',
      '45–60°',
    ],
    kunci: 3,
    penjelasan:
      'Pada proyeksi lateral os scapula, tubuh pasien diposisikan oblik dengan kemiringan mid coronal plane (MCP) 45–60° dari bidang kaset.',
    sumber: 'hal 5',
  },
  {
    id: 'scapula-05',
    modul: 'scapula',
    tipe: 'posisi',
    tanya: 'Bagaimana posisi tangan pada proyeksi lateral os scapula agar scapula tidak superposisi dengan humerus?',
    pilihan: [
      'Lengan fleksi, dorso manus menempel pinggang setinggi lumbal',
      'Lengan lurus ke bawah di samping paha posisi supine',
      'Lengan diabduksikan 90° dengan telapak tangan menghadap atas',
      'Lengan dieksorotasikan maksimal menjauhi bidang kaset',
    ],
    kunci: 0,
    penjelasan:
      'Pada proyeksi lateral os scapula, lengan difleksikan dengan dorso manus menempel pada pinggang (wrist di MSP setinggi lumbal) agar humerus tidak menutupi scapula.',
    sumber: 'hal 5',
  },
  {
    id: 'scapula-06',
    modul: 'scapula',
    tipe: 'sinar',
    tanya: 'Di mana letak central point pada proyeksi AP os scapula?',
    pilihan: [
      'Mid klavikula di antara acromion dan sternum',
      'Mid scapula, sekitar 5 cm di bawah processus coracoideus',
      'Margo medialis scapula setinggi vertebra thoracal XII',
      'Pertengahan os humerus pada arah horizontal tegak lurus',
    ],
    kunci: 1,
    penjelasan:
      'Central point proyeksi AP os scapula berada di mid scapula (5 cm di bawah processus coracoideus, kira-kira 2–3 jari medial caput humerus lalu 3–4 jari ke inferior).',
    sumber: 'hal 5',
  },
  {
    id: 'scapula-07',
    modul: 'scapula',
    tipe: 'sinar',
    tanya: 'Berapa faktor eksposi dan penggunaan grid pada pemeriksaan os scapula proyeksi AP serta lateral?',
    pilihan: [
      '55–60 kVp, 8–10 mAs, FFD 100 cm, non grid',
      '72 kVp, 10 mAs, FFD 100 cm, grid bila perlu',
      '75 kVp, 16 mAs, FFD 100 cm, menggunakan grid',
      '50–55 kVp, 6–7 mAs, FFD 100 cm, non grid',
    ],
    kunci: 2,
    penjelasan:
      'Kedua proyeksi os scapula memakai FFD 100 cm, grid, film speed 400, serta faktor eksposi 75 kVp dan 16 mAs dengan central ray horizontal tegak lurus.',
    sumber: 'hal 5-6',
  },
  {
    id: 'scapula-08',
    modul: 'scapula',
    tipe: 'kriteria',
    tanya: 'Apa perbedaan aba-aba pernapasan antara proyeksi AP dan lateral os scapula, dan apa tujuannya pada AP?',
    pilihan: [
      'AP napas biasa agar detail paru kabur, lateral tahan napas',
      'AP memakai tahan napas penuh agar diafragma turun, lateral napas cepat',
      'Keduanya dilakukan saat ekspirasi maksimal untuk mengecilkan bayangan jantung',
      'AP memakai tahan napas dalam, sedangkan lateral menggunakan napas biasa',
    ],
    kunci: 0,
    penjelasan:
      'Proyeksi AP memakai aba-aba napas biasa (dangkal) untuk membantu mengaburkan detail paru yang menimpa scapula, sedangkan proyeksi lateral memakai tahan napas.',
    sumber: 'hal 5-7',
  },
  {
    id: 'scapula-09',
    modul: 'scapula',
    tipe: 'proteksi',
    tanya: 'Bagaimana pengaturan luas lapangan penyinaran yang sesuai dengan aturan proteksi radiasi modul os scapula?',
    pilihan: [
      'Diperlebar hingga mencakup seluruh bagian abdomen serta area panggul',
      'Dibuka penuh agar kedua bahu kanan dan kiri ikut terfoto bersamaan',
      'Diarahkan menyudut 30° agar berkas sinar menjauh dari dinding dada',
      'Seoptimal mungkin, maksimal seluas ukuran kaset',
    ],
    kunci: 3,
    penjelasan:
      'Proteksi radiasi os scapula mengatur luas lapangan seoptimal mungkin dengan batas maksimal seluas ukuran kaset, apron di panggul, dan mencegah pengulangan foto.',
    sumber: 'hal 6',
  },
  {
    id: 'scapula-10',
    modul: 'scapula',
    tipe: 'prosedur',
    tanya: 'Apa instruksi persiapan pasien khusus bagi pasien perempuan pada modul pemeriksaan os scapula?',
    pilihan: [
      'Melepas pakaian dalam bagian atas dan berganti baju pasien',
      'Melepas cincin dan jam tangan tanpa perlu berganti baju',
      'Memakai apron di bagian bahu yang tidak diperiksa',
      'Berpuasa minimal 4 jam sebelum pemeriksaan dimulai',
    ],
    kunci: 0,
    penjelasan:
      'Pada bagian persiapan pasien modul os scapula, benda logam di lengan dilepas dan pasien perempuan diminta melepas pakaian dalam atas lalu berganti baju pasien.',
    sumber: 'hal 4',
  },
];
