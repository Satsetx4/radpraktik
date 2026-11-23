import type { Soal } from '../types';

export const soalCruris: Soal[] = [
  {
    id: 'cruris-01',
    modul: 'cruris',
    tipe: 'definisi',
    tanya: 'Sendi apa saja yang diupayakan masuk sekaligus dalam area penyinaran pada radiografi os cruris?',
    pilihan: [
      'Hip joint dan knee joint',
      'Ankle joint dan knee joint',
      'Subtalar joint dan ankle joint',
      'Tarsometatarsal dan ankle joint',
    ],
    kunci: 1,
    penjelasan:
      'Pada posisi objek proyeksi AP os cruris, tulang tungkai bawah diatur di pertengahan kaset dengan mengupayakan ankle joint dan knee joint masuk area penyinaran.',
    sumber: 'hal 4',
  },
  {
    id: 'cruris-02',
    modul: 'cruris',
    tipe: 'definisi',
    tanya: 'Berapa ukuran kaset dan bagaimana pembagian orientasinya untuk proyeksi AP dan lateral os cruris?',
    pilihan: [
      'Kaset 30×40 cm membujur dibagi dua',
      'Kaset 24×30 cm melintang dibagi dua',
      'Kaset 18×24 cm membujur penuh',
      'Kaset 30×40 cm melintang penuh',
    ],
    kunci: 0,
    penjelasan:
      'Modul os cruris menggunakan kaset ukuran 30×40 cm yang dipasang membujur dan dibagi dua untuk proyeksi AP serta proyeksi lateral.',
    sumber: 'hal 4-5',
  },
  {
    id: 'cruris-03',
    modul: 'cruris',
    tipe: 'posisi',
    tanya: 'Bagaimana pengaturan femoral epicondylus terhadap kaset pada proyeksi AP os cruris?',
    pilihan: [
      'Membentuk sudut 45° terhadap kaset',
      'Tegak lurus terhadap bidang kaset',
      'Sejajar dengan bidang kaset',
      'Saling superposisi dengan maleolus',
    ],
    kunci: 2,
    penjelasan:
      'Pada proyeksi AP os cruris, kaki diposisikan sehingga femoral epicondylus sejajar dengan bidang kaset agar tungkai bawah tidak mengalami rotasi.',
    sumber: 'hal 4',
  },
  {
    id: 'cruris-04',
    modul: 'cruris',
    tipe: 'posisi',
    tanya: 'Bagaimana posisi femoral epicondylus, patella, dan kaki pada proyeksi lateral os cruris?',
    pilihan: [
      'Femoral epicondylus sejajar kaset, knee ekstensi, dan pedis plantarfleksi',
      'Femoral epicondylus dan patella tegak lurus kaset, knee fleksi, dan kaki dorsofleksi',
      'Patella menghadap atas, knee fleksi penuh, dan plantar pedis menempel meja',
      'Femoral epicondylus miring 30°, knee ekstensi, dan kaki rotasi internal',
    ],
    kunci: 1,
    penjelasan:
      'Proyeksi lateral os cruris memposisikan pasien recumbent ke sisi periksa, knee fleksi, kaki dorsofleksi, serta femoral epicondylus dan patella tegak lurus kaset.',
    sumber: 'hal 5',
  },
  {
    id: 'cruris-05',
    modul: 'cruris',
    tipe: 'posisi',
    tanya: 'Bagaimana posisi pasien saat melakukan proyeksi lateral (mediolateral) os cruris?',
    pilihan: [
      'Duduk menyamping meja dengan tungkai menggantung',
      'Prone dengan bantalan softbag di bawah dorsum pedis',
      'Supine penuh dengan kaset diletakkan vertikal di samping kaki',
      'Recumbent di atas meja ke arah kaki yang akan diperiksa',
    ],
    kunci: 3,
    penjelasan:
      'Pada proyeksi lateral (mediolateral) os cruris, pasien diposisikan recumbent di atas meja pemeriksaan ke arah kaki yang akan diperiksa.',
    sumber: 'hal 5',
  },
  {
    id: 'cruris-06',
    modul: 'cruris',
    tipe: 'sinar',
    tanya: 'Di mana titik bidik (central point) dan bagaimana arah central ray pada proyeksi AP dan lateral os cruris?',
    pilihan: [
      'Pertengahan os cruris; vertikal tegak lurus terhadap kaset',
      'Sepertiga proksimal tibia; menyudut 5° ke arah cephalad',
      'Pertengahan kedua maleolus; vertikal tegak lurus kaset',
      '1 inci di bawah apex patella; menyudut 10° ke arah caudad',
    ],
    kunci: 0,
    penjelasan:
      'Proyeksi AP dan lateral os cruris sama-sama mengarahkan central ray vertikal tegak lurus ke pertengahan os cruris dengan FFD 100 cm.',
    sumber: 'hal 4-5',
  },
  {
    id: 'cruris-07',
    modul: 'cruris',
    tipe: 'sinar',
    tanya: 'Berapa faktor eksposi yang digunakan pada proyeksi AP dan lateral os cruris?',
    pilihan: [
      '45–50 kVp, 3–4 mAs, non grid, speed 300',
      '60–65 kVp, 10–15 mAs, grid, speed 400',
      '55–60 kVp, 3–4 mAs, non grid, speed 300',
      '50–55 kVp, 5–6 mAs, non grid, speed 400',
    ],
    kunci: 2,
    penjelasan:
      'Kedua proyeksi os cruris memakai faktor eksposi 55–60 kVp, 3–4 mAs, tanpa grid (non grid), dengan film speed 300.',
    sumber: 'hal 5',
  },
  {
    id: 'cruris-08',
    modul: 'cruris',
    tipe: 'kriteria',
    tanya: 'Mengapa condylus femoralis pada proyeksi lateral os cruris bisa tampak tidak saling superposisi sempurna?',
    pilihan: [
      'Karena pasien kurang merotasikan kaki ke arah medial 5–7°',
      'Karena terjadinya divergensi berkas sinar terhadap tepi kaset',
      'Karena FFD yang digunakan lebih panjang dari 150 cm',
      'Karena kaset dipasang melintang bukan membujur tubuh',
    ],
    kunci: 1,
    penjelasan:
      'Kriteria evaluasi proyeksi lateral os cruris menjelaskan condylus femoralis mungkin tidak superposisi akibat divergensi berkas sinar (CP berada di tengah cruris).',
    sumber: 'hal 7',
  },
  {
    id: 'cruris-09',
    modul: 'cruris',
    tipe: 'proteksi',
    tanya: 'Manakah tindakan yang bertujuan menekan dosis radiasi berulang pada pasien saat pemeriksaan os cruris?',
    pilihan: [
      'Membuka kolimasi seluas mungkin melebihi tepi kaset',
      'Menggunakan grid berasio tinggi pada tiap pemotretan',
      'Meminta pasien melihat langsung ke arah tabung sinar-X',
      'Menghindari dan tidak melakukan pengulangan foto radiograf',
    ],
    kunci: 3,
    penjelasan:
      'Salah satu poin proteksi radiasi di modul os cruris adalah menghindari atau tidak melakukan pengulangan foto agar pasien tidak menerima dosis tambahan.',
    sumber: 'hal 6',
  },
  {
    id: 'cruris-10',
    modul: 'cruris',
    tipe: 'prosedur',
    tanya: 'Apa yang harus dilakukan segera setelah anamnesis singkat selesai pada tahap pra pemeriksaan os cruris?',
    pilihan: [
      'Menganalisis kesesuaian teknik, proyeksi, persiapan pasien, dan alat',
      'Langsung melakukan pemrosesan film di kamar gelap dengan safety light',
      'Membuat amplop foto setelah pasien selesai berganti pakaian',
      'Menyusun laporan praktek dengan minimal satu buku teks referensi',
    ],
    kunci: 0,
    penjelasan:
      'Setelah anamnesis singkat, mahasiswa segera menganalisis kebutuhan pemeriksaan meliputi teknik, proyeksi (AP dan lateral), persiapan pasien, dan alat.',
    sumber: 'hal 4',
  },
];
