import type { Modul } from '../types';

export const modulCollumFemur: Modul = {
  slug: 'collum-femur',
  kode: '301-9B',
  judul: 'Collum Femur',
  region: 'ekstremitas-bawah',
  kompetensi:
    'Mahasiswa mampu melakukan teknik radiografi collum femoris dengan baik dan benar melalui simulasi, role play, dan realplay.',
  sorotan: [
    'Dua proyeksi utama: Bilateral Frog-Leg dan Unilateral Frog-Leg (untuk kasus non-trauma)',
    'Kedua proyeksi mengabduksikan paha 45°; Bilateral memakai MSP di tengah bucky table dan CP 2,5 cm superior symphysis pubis',
    'Unilateral Frog-Leg mengarahkan CP pada mid femoral neck (55–65 kVp, 10–12 mAs, grid/non grid)',
    'Evaluasi radiograf memastikan collum femoris bebas dari superposisi trochanter mayor akibat abduksi berlebih',
  ],
  praPemeriksaan: [
    {
      judul: 'Administrasi',
      poin: [
        'Cek lembar permintaan: identitas pasien, no. CM/RM, asal rujukan, dan riwayat penyakit',
        'Catat identitas di buku registrasi dan tulis nomor foto pada lembar permintaan pasien',
        'Siapkan kartu ambil foto serta amplop foto sesuai ukuran film yang digunakan',
      ],
    },
    {
      judul: 'Persiapan Pasien',
      poin: [
        'Panggil pasien sesuai lembar permintaan dan cocokkan nama, umur, serta alamat',
        'Perkenalkan diri, lakukan anamnesis keluhan, dan pastikan sisi panggul kanan atau kiri',
        'Berikan penjelasan singkat prosedur pemeriksaan (unilateral frog-leg pada kasus non-trauma)',
        'Pastikan tidak ada benda logam atau benda lain pada daerah panggul dan paha yang diperiksa',
      ],
    },
    {
      judul: 'Persiapan Alat & Bahan',
      poin: [
        'Pesawat sinar-X siap pakai beserta meteran',
        'Kaset dan film radiografi ukuran 24×30 cm',
        'Marker, plester, gunting, lembar Pb (siapkan alat bantu fiksasi/sandbag serta gonad shield)',
      ],
    },
  ],
  proyeksi: [
    {
      id: 'bilateral-frog-leg',
      nama: 'Proyeksi Bilateral (Frog-Leg)',
      posisiPasien: [
        'Pasien supine, kedua tangan diletakkan di dada, dan beri bantalan pada kepala',
      ],
      posisiObjek: [
        'Atur midsagittal plane (MSP) tepat pada pertengahan bucky table',
        'Atur pelvis tidak rotasi dengan memastikan kedua SIAS berjarak sama terhadap meja pemeriksaan',
        'Beri alat bantu untuk menjaga objek tetap terfiksasi',
        'Fleksikan hip joint dan kedua kaki, lalu atur kedua kaki abduksi sebesar 45°',
      ],
      centralRay: 'Tegak lurus terhadap kaset',
      centralPoint: '2,5 cm superior symphysis pubis',
      ffd: '100 cm',
      faktorEksposi: '60–65 kVp, 20–25 mAs, grid, film speed 400',
      kriteria: [
        'Tidak tampak rotasi pelvis yang ditandai gambaran panggul simetris',
        'Acetabulum, kaput femoris, dan collum femoris tampak jelas untuk perbandingan kedua sisi',
        'Trochanter minor tampak pada sisi medial femur dan sumbu femur membentuk sudut sama dari tulang panggul',
        'Collum femoris tampak tanpa superposisi trochanter mayor (abduksi berlebih menyebabkan trochanter mayor menutupi collum)',
      ],
      gambar: [
        {
          src: '/img/collum-femur/bilateral-frog-leg-1.webp',
          caption: 'Posisi proyeksi bilateral frog-leg',
        },
        {
          src: '/img/collum-femur/umum-4.webp',
          caption: 'Radiograf AP perbandingan collum femoris',
        },
      ],
      sumber: 'hal 4-8',
    },
    {
      id: 'unilateral-frog-leg',
      nama: 'Proyeksi Unilateral (Frog-Leg)',
      posisiPasien: [
        'Pasien supine, kedua tangan diletakkan di dada, beri bantalan di kepala, dan pastikan hip yang sakit tercakup pada kaset',
      ],
      posisiObjek: [
        'Fleksikan knee dan hip joint pada sisi yang sakit',
        'Abduksikan femur sebesar 45° dari arah vertikal',
        'Atur femoral neck tepat pada pertengahan kaset dan beri sandbag untuk fiksasi kaki',
      ],
      centralRay: 'Tegak lurus terhadap kaset pada mid femoral neck',
      centralPoint: 'Mid femoral neck',
      ffd: '100 cm',
      faktorEksposi: '55–65 kVp, 10–12 mAs, grid/non grid, film speed 400',
      kriteria: [],
      gambar: [
        {
          src: '/img/collum-femur/unilateral-frog-leg-2.webp',
          caption: 'Posisi proyeksi unilateral frog-leg',
        },
        {
          src: '/img/collum-femur/unilateral-frog-leg-1.webp',
          caption: 'Teknik lokalisasi hip joint dan collum femoris',
        },
        {
          src: '/img/collum-femur/umum-5.webp',
          caption: 'Radiograf unilateral collum femoris',
        },
      ],
      sumber: 'hal 5',
    },
  ],
  proteksi: [
    'Gunakan gonad shield untuk melindungi organ reproduksi dari paparan sinar hambur',
    'Atur luas lapangan penyinaran seluas objek yang diperiksa',
    'Persilakan orang yang tidak berkepentingan keluar ruang; pendamping yang terpaksa ada wajib memakai apron',
  ],
  pascaPemeriksaan: [
    'Bantu pasien turun dari meja pemeriksaan, arahkan menunggu hasil, dan beri kartu ambil foto bila baik lalu kembali ke rujukan',
    'Proses film di kamar gelap: matikan lampu general, buka kaset, dan pasang film pada hanger',
    'Lakukan tahap developing di cairan developer (±4 menit) dengan inspeksi singkat cahaya safety light',
    'Lanjutkan tahap rinsing pada tangki air, lalu fixing di cairan fixer agar gambaran menjadi tetap',
    'Lakukan tahap washing dengan memasukkan film ke air lalu keringkan pada mesin pengering film',
  ],
  evaluasi: [
    'Gambarkan anatomi objek dan sebutkan bagian-bagian anatomi collum femoris yang tampak',
    'Bandingkan kriteria anatomi radiograf dengan standar kriteria evaluasi proyeksi bilateral frog-leg',
    'Nilai radiograf menggunakan form evaluasi dan susun laporan praktek dengan minimal 1 textbook maksimal 1 hari pasca praktek',
  ],
};
