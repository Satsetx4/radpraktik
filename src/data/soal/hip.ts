import type { Soal } from '../types';

export const soalHip: Soal[] = [
  {
    id: 'hip-01',
    modul: 'hip',
    tipe: 'definisi',
    tanya: 'Dua variasi teknik proyeksi AP manakah yang dibahas pada modul radiografi hip joint?',
    pilihan: [
      'AP Axial dan AP Oblik',
      'AP Unilateral dan AP Perbandingan',
      'AP Tangensial dan AP Erect',
      'AP Lateral dan PA Axial',
    ],
    kunci: 1,
    penjelasan:
      'Bagian analisa kebutuhan dan pengaturan titik bidik modul hip joint membagi proyeksi AP menjadi AP Unilateral dan AP Perbandingan.',
    sumber: 'hal 3-4',
  },
  {
    id: 'hip-02',
    modul: 'hip',
    tipe: 'definisi',
    tanya: 'Berapa ukuran kaset dan film yang disiapkan untuk pemeriksaan hip joint unilateral serta perbandingan?',
    pilihan: [
      '18×24 cm (unilateral) dan 24×30 cm (perbandingan)',
      '24×30 cm (unilateral) dan 35×35 cm (perbandingan)',
      '24×30 cm (unilateral) dan 30×40 cm (perbandingan)',
      '30×40 cm (unilateral) dan 35×43 cm (perbandingan)',
    ],
    kunci: 2,
    penjelasan:
      'Sesuai persiapan alat modul hip joint, kaset ukuran 24×30 cm dipakai untuk pemeriksaan unilateral dan 30×40 cm untuk perbandingan.',
    sumber: 'hal 3',
  },
  {
    id: 'hip-03',
    modul: 'hip',
    tipe: 'posisi',
    tanya: 'Bagaimana cara memastikan pelvis tidak mengalami rotasi saat memposisikan proyeksi AP hip joint?',
    pilihan: [
      'Kedua SIAS berada pada garis vertikal yang sama',
      'Kedua SIAS berjarak sama dari permukaan meja pemeriksaan',
      'Kedua bahu diganjal bantal agar kurvatura berkurang',
      'Kaki dirotasikan eksternal 45° ke sisi luar tubuh',
    ],
    kunci: 1,
    penjelasan:
      'Pelvis bebas rotasi pada posisi supine ditandai dengan jarak kedua SIAS yang sama terhadap permukaan meja pemeriksaan.',
    sumber: 'hal 4',
  },
  {
    id: 'hip-04',
    modul: 'hip',
    tipe: 'posisi',
    tanya: 'Berapa sudut rotasi internal kaki pada proyeksi AP hip joint dan apa tujuannya?',
    pilihan: [
      '15°–20° agar collum femoris paralel dengan kaset',
      '5°–7° agar maleolus medialis sejajar garis tengah',
      '30°–45° agar trochanter minor tampak menonjol penuh',
      '10°–15° agar acetabulum terbuka ke arah lateral',
    ],
    kunci: 0,
    penjelasan:
      'Rotasi internal kaki 15°–20° membuat collum femoris sejajar dengan IR, namun menjadi kontraindikasi bila kondisi pasien tidak memungkinkan.',
    sumber: 'hal 4',
  },
  {
    id: 'hip-05',
    modul: 'hip',
    tipe: 'posisi',
    tanya: 'Alat bantu fiksasi apa yang ditempatkan di bawah lutut dan ankle joint pada proyeksi AP hip joint?',
    pilihan: [
      'Spon 45° di bawah lutut dan bantal di bawah panggul',
      'Bantalan non-opak di panggul dan softbag di bahu',
      'Sandbag di bawah lutut dan plester di atas kaki',
      'Alat bantu di bawah lutut dan sandbag di ankle joint',
    ],
    kunci: 3,
    penjelasan:
      'Alat bantu diletakkan di bawah lutut (knee) dan sandbag dipasang di ankle joint supaya posisi tungkai pasien tidak berubah saat eksposi.',
    sumber: 'hal 4',
  },
  {
    id: 'hip-06',
    modul: 'hip',
    tipe: 'sinar',
    tanya: 'Di mana letak central point (CP) untuk proyeksi AP hip joint unilateral?',
    pilihan: [
      'Garis tengah tubuh sekitar 2,5 cm di atas symphysis pubis',
      'Tepat 2,5 cm ke arah medial dari SIAS yang diperiksa',
      'Femoral neck, 6,4 cm inferior garis tengah SIAS dan pubis',
      'Pertengahan antara umbilikus dan tepi atas krista iliaka',
    ],
    kunci: 2,
    penjelasan:
      'CP unilateral diarahkan ke femoral neck: titik tengah garis antara SIAS dan superior symphysis pubis lalu ditarik 2,5 inci (6,4 cm) ke inferior.',
    sumber: 'hal 4',
  },
  {
    id: 'hip-07',
    modul: 'hip',
    tipe: 'sinar',
    tanya: 'Berapa FFD dan pengaturan faktor eksposi yang tercantum pada proyeksi AP hip joint?',
    pilihan: [
      'FFD 100 cm, 60–75 kVp, 10–20 mAs, memakai grid',
      'FFD 100 cm, 40–50 kVp, 4–5 mAs, tanpa grid',
      'FFD 152 cm, 60–65 kVp, 15–20 mAs, memakai grid',
      'FFD 100 cm, 70–75 kVp, 16–25 mAs, tanpa grid',
    ],
    kunci: 0,
    penjelasan:
      'Proyeksi AP hip joint memakai central ray vertikal tegak lurus kaset, FFD 100 cm, 60–75 kVp, 10–20 mAs, grid, dan film speed 400.',
    sumber: 'hal 4-5',
  },
  {
    id: 'hip-08',
    modul: 'hip',
    tipe: 'kriteria',
    tanya: 'Bagaimana tampilan trochanter minor yang diharapkan pada kriteria evaluasi radiografi AP hip joint?',
    pilihan: [
      'Tampak menonjol penuh ke arah lateral melebihi batas tulang',
      'Berada di tengah bayangan acetabulum dan caput femoris',
      'Tidak melewati batas medial femur atau hanya tampak sangat sedikit',
      'Superposisi seluruhnya dengan trochanter mayor di bagian atas',
    ],
    kunci: 2,
    penjelasan:
      'Pada proyeksi AP dengan rotasi internal yang benar, trochanter minor tidak memproyeksi melewati batas medial femur atau hanya terlihat sangat sedikit.',
    sumber: 'hal 6',
  },
  {
    id: 'hip-09',
    modul: 'hip',
    tipe: 'proteksi',
    tanya: 'Tindakan proteksi radiasi apa yang diberikan langsung kepada pasien pada pemeriksaan hip joint?',
    pilihan: [
      'Memasang kaca mata Pb tanpa mengatur kolimasi sinar',
      'Memakai gonad shield dan mengatur lapangan seluas objek',
      'Meminta pasien menunduk ke lantai saat tabung menyala',
      'Mengulang foto segera sebelum memeriksa hasil proses film',
    ],
    kunci: 1,
    penjelasan:
      'Proteksi radiasi hip joint meliputi pemakaian gonad shield untuk organ reproduksi, kolimasi seluas objek, serta apron bagi pendamping bila terpaksa ada.',
    sumber: 'hal 5',
  },
  {
    id: 'hip-10',
    modul: 'hip',
    tipe: 'prosedur',
    tanya: 'Pada tahap anamnesis sebelum pemeriksaan hip joint, langkah apa yang harus dilakukan mahasiswa?',
    pilihan: [
      'Langsung membacakan diagnosa pada lembar permintaan pasien',
      'Memaksa rotasi internal kaki sebelum memeriksa keluhan',
      'Mengamati keadaan umum dan menanyakan sisi yang sakit',
      'Memproses film lebih dulu sebelum mencocokkan identitas',
    ],
    kunci: 2,
    penjelasan:
      'Mahasiswa mengamati keadaan umum pasien serta menanyakan keluhan dan sisi sakit (kanan atau kiri) tanpa menyebut isi lembar permintaan.',
    sumber: 'hal 3',
  },
];
