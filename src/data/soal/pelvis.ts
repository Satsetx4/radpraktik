import type { Soal } from '../types';

export const soalPelvis: Soal[] = [
  {
    id: 'pelvis-01',
    modul: 'pelvis',
    tipe: 'definisi',
    tanya: 'Proyeksi apa saja yang digunakan dalam pemeriksaan radiografi pelvis sesuai modul?',
    pilihan: [
      'AP dan Lateral',
      'PA dan Oblik',
      'AP Axial dan Tangensial',
      'Lateral dan Frog-leg',
    ],
    kunci: 0,
    penjelasan:
      'Bagian analisa kebutuhan dan pelaksanaan pemeriksaan modul pelvis menetapkan dua proyeksi, yaitu AP dan Lateral.',
    sumber: 'hal 3-5',
  },
  {
    id: 'pelvis-02',
    modul: 'pelvis',
    tipe: 'definisi',
    tanya: 'Bagaimana posisi pasien yang dimaksud dengan recumbent lateral pada proyeksi lateral pelvis?',
    pilihan: [
      'Berdiri tegak menyamping terhadap stand kaset',
      'Berbaring telentang dengan kedua kaki lurus ke depan',
      'Berbaring miring pada salah satu sisi yang difoto',
      'Berbaring tengkurap dengan kepala lebih rendah',
    ],
    kunci: 2,
    penjelasan:
      'Recumbent lateral berarti pasien berbaring miring pada salah satu sisi tubuh yang akan difoto dengan Mid Coronal Plane (MCP) di tengah meja.',
    sumber: 'hal 5-6',
  },
  {
    id: 'pelvis-03',
    modul: 'pelvis',
    tipe: 'posisi',
    tanya: 'Kapan rotasi internal kaki 15°–20° pada proyeksi AP pelvis TIDAK boleh dilakukan?',
    pilihan: [
      'Saat pasien datang dari poli rawat jalan tanpa nyeri',
      'Pada pasien dengan kasus trauma atau patologis',
      'Saat kaset ukuran 30×40 cm dipasang secara melintang',
      'Saat pasien mampu berbaring true supine dengan tenang',
    ],
    kunci: 1,
    penjelasan:
      'Rotasi internal kaki 15°–20° bertujuan menyejajarkan collum femoris dengan IR, tetapi menjadi kontraindikasi pada kasus trauma atau patologis.',
    sumber: 'hal 5',
  },
  {
    id: 'pelvis-04',
    modul: 'pelvis',
    tipe: 'posisi',
    tanya: 'Bagaimana cara memastikan pelvis true lateral pada proyeksi lateral pelvis?',
    pilihan: [
      'Kedua SIAS berada pada garis vertikal yang sama',
      'Kedua SIAS berjarak sama dari permukaan meja periksa',
      'Kedua kaki dirotasikan ke arah dalam sebesar 15°–20°',
      'Tubuh dimiringkan 25° dengan bantuan spon non-opak',
    ],
    kunci: 0,
    penjelasan:
      'Pada posisi recumbent lateral, pelvis diatur true lateral dengan menempatkan kedua SIAS pada garis vertikal yang sama dan mengganjal vertebra.',
    sumber: 'hal 6',
  },
  {
    id: 'pelvis-05',
    modul: 'pelvis',
    tipe: 'posisi',
    tanya: 'Mengapa pada proyeksi lateral pelvis diletakkan pengganjal di bawah columna vertebralis?',
    pilihan: [
      'Agar tulang belakang membentuk sudut 30° terhadap meja',
      'Agar tulang belakang paralel dengan permukaan meja',
      'Agar kedua trochanter mayor bergeser saling menjauh',
      'Agar arcus pubis tertutup oleh bayangan os femur',
    ],
    kunci: 1,
    penjelasan:
      'Pengganjal di bawah columna vertebralis membuat vertebra paralel dengan permukaan meja pemeriksaan, disertai bantal di antara lutut untuk stabilitas.',
    sumber: 'hal 6',
  },
  {
    id: 'pelvis-06',
    modul: 'pelvis',
    tipe: 'sinar',
    tanya: 'Di mana letak central point (CP) pada proyeksi AP pelvis?',
    pilihan: [
      'Tepat 2,5 inci (5 cm) di atas trochanter mayor',
      'Tepat 2,5 cm ke arah medial dari SIAS sisi sakit',
      'Pertengahan antara SIAS dan symphysis pubis',
      'Setinggi batas atas krista iliaka pada garis tengah tubuh',
    ],
    kunci: 2,
    penjelasan:
      'CP proyeksi AP pelvis berada di pertengahan antara SIAS dan symphysis pubis, yakni 2 inci (5 cm) inferior SIAS dan 2 inci (5 cm) superior symphysis pubis.',
    sumber: 'hal 5',
  },
  {
    id: 'pelvis-07',
    modul: 'pelvis',
    tipe: 'sinar',
    tanya: 'Bagaimana pengaturan faktor eksposi proyeksi Lateral pelvis dibandingkan proyeksi AP pelvis?',
    pilihan: [
      'Lebih rendah: 40–50 kVp dan 4–5 mAs tanpa grid',
      'Sama persis: 60–65 kVp dan 15–25 mAs tanpa memakai grid',
      'Lebih rendah: 50–55 kVp dan 5–10 mAs dengan grid',
      'Lebih tinggi: 70–75 kVp dan 16–25 mAs, grid',
    ],
    kunci: 3,
    penjelasan:
      'Proyeksi AP memakai 60–65 kVp (15–25 mAs), sedangkan proyeksi Lateral memerlukan daya tembus lebih tinggi yaitu 70–75 kVp (16–25 mAs) dengan grid.',
    sumber: 'hal 5-6',
  },
  {
    id: 'pelvis-08',
    modul: 'pelvis',
    tipe: 'kriteria',
    tanya: 'Manakah tanda radiograf proyeksi AP pelvis yang menunjukkan posisi pasien bebas rotasi?',
    pilihan: [
      'Kedua os femur dan tepi posterior ischium saling superposisi',
      'Foramina obturatoria dan ala ilium tampak simetris',
      'Arcus pubis tampak menyamping tertutup oleh caput femoris',
      'Lingkaran fossa acetabulum tampak bertumpuk secara konsentris',
    ],
    kunci: 1,
    penjelasan:
      'Pada AP pelvis yang bebas rotasi, foramina obturatoria dan ala ilium tampak simetris, kedua ilium berjarak sama ke tepi, serta sacrum segaris symphysis pubis.',
    sumber: 'hal 7',
  },
  {
    id: 'pelvis-09',
    modul: 'pelvis',
    tipe: 'proteksi',
    tanya: 'Apa fungsi utama penggunaan gonad shield dalam pemeriksaan radiografi pelvis?',
    pilihan: [
      'Mengurangi gerak pasien saat menahan napas selama eksposi',
      'Meningkatkan kontras gambaran tulang sacrum dan coccyx',
      'Mempercepat proses pembangkitan bayangan laten di developer',
      'Melindungi organ reproduksi dari sinar hambur',
    ],
    kunci: 3,
    penjelasan:
      'Gonad shield dipasang untuk melindungi organ reproduksi dari sinar hambur, disertai pembatasan luas lapangan seluas objek dan apron untuk pendamping.',
    sumber: 'hal 6',
  },
  {
    id: 'pelvis-10',
    modul: 'pelvis',
    tipe: 'prosedur',
    tanya: 'Berapa ukuran kaset yang disiapkan pada pemeriksaan radiografi pelvis serta batas akhir pengumpulan laporan?',
    pilihan: [
      'Kaset 30×40 cm; laporan dikumpulkan maksimal 1 hari',
      'Kaset 24×30 cm; laporan dikumpulkan maksimal 3 hari kerja',
      'Kaset 18×24 cm; laporan dikumpulkan sebelum pasien pulang',
      'Kaset 35×43 cm; laporan dikumpulkan maksimal 7 hari kerja',
    ],
    kunci: 0,
    penjelasan:
      'Pemeriksaan pelvis memakai kaset radiografi ukuran 30×40 cm, dan laporan praktek dilengkapi minimal 1 textbook dikumpulkan paling lambat 1 hari setelah praktek.',
    sumber: 'hal 4-10',
  },
];
