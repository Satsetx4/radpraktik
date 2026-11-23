import type { Soal } from '../types';

export const soalFemur: Soal[] = [
  {
    id: 'femur-01',
    modul: 'femur',
    tipe: 'definisi',
    tanya: 'Apa yang harus dilakukan jika hip joint dan knee joint tidak memungkinkan masuk sekaligus dalam satu kaset pada radiografi os femur?',
    pilihan: [
      'Memperkecil ukuran kaset menjadi 18×24 cm',
      'Mengutamakan sendi pada daerah yang sakit masuk kaset',
      'Hanya memotret bagian tengah diafisis tanpa sendi apa pun',
      'Mengubah FFD menjadi 60 cm agar seluruh paha tercakup',
    ],
    kunci: 1,
    penjelasan:
      'Catatan modul os femur menegaskan bila kedua sendi tidak muat sekaligus, sendi di daerah yang sakit diutamakan masuk (misal AP/Lateral Femur Proksimal atau Distal).',
    sumber: 'hal 4-5',
  },
  {
    id: 'femur-02',
    modul: 'femur',
    tipe: 'definisi',
    tanya: 'Batas anatomi atas dan bawah kaset yang ideal pada pemeriksaan rutin os femur adalah...',
    pilihan: [
      'Batas atas krista iliaka, batas bawah pertengahan cruris',
      'Batas atas simfisis pubis, batas bawah maleolus medialis',
      'Batas atas trochanter minor, batas bawah tuberositas tibia',
      'Batas atas hip joint, batas bawah knee joint',
    ],
    kunci: 3,
    penjelasan:
      'Pada proyeksi AP maupun lateral os femur, kaset ukuran 30×40 cm diatur dengan batas atas mencakup hip joint dan batas bawah mencakup knee joint.',
    sumber: 'hal 4-5',
  },
  {
    id: 'femur-03',
    modul: 'femur',
    tipe: 'posisi',
    tanya: 'Berapa derajat rotasi internal kaki pada proyeksi AP os femur apabila tidak dicurigai adanya fraktur?',
    pilihan: [
      '5°–7°',
      '15°–20°',
      '30°–45°',
      '90°',
    ],
    kunci: 1,
    penjelasan:
      'Pada proyeksi AP os femur, kaki dirotasikan internal 15°–20° hanya bila tidak ada kecurigaan fraktur agar collum femoris tampak sejajar dengan kaset.',
    sumber: 'hal 4',
  },
  {
    id: 'femur-04',
    modul: 'femur',
    tipe: 'posisi',
    tanya: 'Bagaimana pengaturan kedua tangan pasien pada proyeksi AP os femur?',
    pilihan: [
      'Diletakkan di samping tubuh atau di atas dada',
      'Diletakkan di bawah kepala sebagai bantal',
      'Memegang tepi kaset di bagian panggul',
      'Menekan langsung paha yang sedang diperiksa',
    ],
    kunci: 0,
    penjelasan:
      'Pada posisi pasien proyeksi AP os femur, pasien supine dengan kedua tangan diletakkan di samping tubuh atau di atas dada agar tidak menghalangi area objek.',
    sumber: 'hal 4',
  },
  {
    id: 'femur-05',
    modul: 'femur',
    tipe: 'posisi',
    tanya: 'Bagaimana cara memfiksasi bagian panggul pasien saat melakukan proyeksi lateral os femur?',
    pilihan: [
      'Menarik kedua tungkai lurus ke bawah tanpa penyangga',
      'Meminta pasien menumpukan panggul pada kolimator',
      'Mengganjal bagian bawah panggul menggunakan sandbag',
      'Memasang spon bersudut 45° di bawah pergelangan kaki',
    ],
    kunci: 2,
    penjelasan:
      'Pada proyeksi lateral os femur, lutut sisi sakit difleksikan, kaki lainnya diekstensikan, dan bagian bawah panggul diganjal sandbag agar hip joint terfiksasi.',
    sumber: 'hal 5',
  },
  {
    id: 'femur-06',
    modul: 'femur',
    tipe: 'sinar',
    tanya: 'Di mana titik bidik (central point) dan berapa FFD untuk proyeksi AP dan lateral os femur?',
    pilihan: [
      'Pertengahan os femur; FFD 100 cm',
      'Mid femoral neck; FFD 100 cm',
      '2,5 cm superior symphysis pubis; FFD 120 cm',
      '½ inci di bawah apex patella; FFD 90 cm',
    ],
    kunci: 0,
    penjelasan:
      'Baik proyeksi AP maupun lateral os femur mengarahkan central ray vertikal tegak lurus pada pertengahan os femur dengan jarak fokus ke film (FFD) 100 cm.',
    sumber: 'hal 4-5',
  },
  {
    id: 'femur-07',
    modul: 'femur',
    tipe: 'sinar',
    tanya: 'Berapa faktor eksposi yang tercantum pada proyeksi AP os femur?',
    pilihan: [
      '45–50 kVp, 3–4 mAs, non grid',
      '50–55 kVp, 5–6 mAs, non grid',
      '60–65 kVp, 10–15 mAs, non grid/grid',
      '70–75 kVp, 25–30 mAs, wajib grid',
    ],
    kunci: 2,
    penjelasan:
      'Pengaturan eksposi proyeksi AP os femur menggunakan 60–65 kVp, 10–15 mAs, non grid atau grid, serta film speed 400 (sedangkan lateral 55–65 kVp).',
    sumber: 'hal 4-5',
  },
  {
    id: 'femur-08',
    modul: 'femur',
    tipe: 'kriteria',
    tanya: 'Pada evaluasi radiograf proyeksi AP femur proksimal, bagaimana seharusnya penampakan trochanter minor?',
    pilihan: [
      'Menonjol luas di sisi lateral melebihi trochanter mayor',
      'Tampak terpisah jauh dari tepi medial batang femur',
      'Berada di tengah kaput femoris akibat rotasi eksternal',
      'Tidak tampak melewati batas medial femur atau sangat minimal',
    ],
    kunci: 3,
    penjelasan:
      'Kriteria evaluasi proyeksi AP femur menunjukkan rotasi internal yang benar membuat trochanter minor tidak terlihat melewati tepi medial femur atau hanya tampak sangat kecil.',
    sumber: 'hal 7',
  },
  {
    id: 'femur-09',
    modul: 'femur',
    tipe: 'proteksi',
    tanya: 'Apa syarat penempatan gonad shield pada evaluasi proyeksi AP femur agar tidak mengganggu diagnostik?',
    pilihan: [
      'Gonad shield dipasang di atas seluruh acetabulum',
      'Gonad shield tidak boleh menutupi femur proksimal',
      'Gonad shield diletakkan melintang di atas pertengahan femur',
      'Gonad shield selalu dipasang menutupi trochanter mayor',
    ],
    kunci: 1,
    penjelasan:
      'Kriteria evaluasi proyeksi AP menegaskan gonad shield dipakai bila diindikasikan untuk melindungi organ reproduksi, tetapi tidak boleh menutupi area femur proksimal.',
    sumber: 'hal 6-7',
  },
  {
    id: 'femur-10',
    modul: 'femur',
    tipe: 'prosedur',
    tanya: 'Contoh benda logam apa pada pakaian pasien yang wajib dipastikan tidak ada saat persiapan pasien os femur?',
    pilihan: [
      'Gelang kaki plastik',
      'Kacamata baca tipis',
      'Ritsleting celana',
      'Peniti kerah kemeja',
    ],
    kunci: 2,
    penjelasan:
      'Persiapan pasien pada modul os femur secara eksplisit mencontohkan ritsleting celana sebagai benda logam di sekitar area pemeriksaan yang harus dilepas atau disingkirkan.',
    sumber: 'hal 4',
  },
];
