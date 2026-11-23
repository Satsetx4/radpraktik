import type { Modul } from '../types';

export const modulCruris: Modul = {
  slug: 'cruris',
  kode: '301-7B',
  judul: 'Os Cruris',
  region: 'ekstremitas-bawah',
  kompetensi:
    'Mahasiswa mampu melakukan teknik radiografi os cruris dengan baik dan benar melalui simulasi, role play, dan realplay.',
  sorotan: [
    'Dua proyeksi utama: AP dan Lateral (mediolateral) pada satu kaset 30×40 cm membujur dibagi dua',
    'Upayakan ankle joint dan knee joint masuk sekaligus dalam area penyinaran',
    'AP mengatur femoral epicondylus sejajar kaset; Lateral mengatur femoral epicondylus dan patella tegak lurus kaset',
    'Central point kedua proyeksi di pertengahan os cruris dengan 55–60 kVp dan 3–4 mAs',
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
        'Perkenalkan diri, lakukan anamnesis keluhan, dan pastikan sisi kaki kanan atau kiri',
        'Berikan penjelasan singkat prosedur pemeriksaan sebelum pemotretan dimulai',
        'Pastikan tidak ada benda logam atau penghalang di kaki seperti gelang kaki dan celana panjang tebal',
      ],
    },
    {
      judul: 'Persiapan Alat & Bahan',
      poin: [
        'Pesawat sinar-X siap pakai beserta meteran dan radiographic phantom',
        'Kaset, film, dan hanger ukuran 30×40 cm',
        'Marker, plester, gunting, lembar Pb, apron, softbag, dan sandbag',
      ],
    },
  ],
  proyeksi: [
    {
      id: 'ap',
      nama: 'Proyeksi AP',
      posisiPasien: [
        'Pasien supine di atas meja pemeriksaan',
      ],
      posisiObjek: [
        'Atur os cruris di pertengahan kaset dan upayakan ankle joint serta knee joint masuk area penyinaran',
        'Atur os cruris sehingga femoral epicondylus sejajar dengan kaset',
        'Posisikan kaset membujur dibagi dua dan arahkan pasien rileks agar tidak bergerak',
      ],
      centralRay: 'Vertikal tegak lurus terhadap kaset',
      centralPoint: 'Pertengahan os cruris',
      ffd: '100 cm',
      faktorEksposi: '55–60 kVp, 3–4 mAs, non grid, film speed 300',
      kriteria: [
        'Ankle joint dan knee joint tampak pada satu atau lebih proyeksi AP',
        'Ankle joint dan knee joint tampak tanpa rotasi',
        'Artikulasi proksimal dan distal tibia serta fibula tampak sedikit tumpang tindih',
        'Detail trabekula dan jaringan lunak sepanjang tungkai bawah tampak jelas',
      ],
      gambar: [
        {
          src: '/img/cruris/ap-1.webp',
          caption: 'Posisi proyeksi AP os cruris',
        },
        {
          src: '/img/cruris/ap-2.webp',
          caption: 'Radiograf anatomi AP os cruris',
        },
      ],
      sumber: 'hal 4-5',
    },
    {
      id: 'lateral',
      nama: 'Proyeksi Lateral (Mediolateral)',
      posisiPasien: [
        'Pasien recumbent di atas meja pemeriksaan menghadap ke arah kaki yang akan diperiksa',
      ],
      posisiObjek: [
        'Fleksikan knee dan atur kaki dorsofleksi',
        'Atur femoral epicondylus dan patella tegak lurus terhadap kaset dengan os cruris di pertengahan kaset',
        'Beri alat bantu fiksasi bila diperlukan dan posisikan kaset membujur pada area yang belum terekspose',
        'Arahkan pasien dalam keadaan rileks untuk menghindari pergerakan',
      ],
      centralRay: 'Vertikal tegak lurus terhadap kaset',
      centralPoint: 'Pertengahan os cruris',
      ffd: '100 cm',
      faktorEksposi: '55–60 kVp, 3–4 mAs, non grid, film speed 300',
      kriteria: [
        'Ankle joint dan knee joint tampak tanpa rotasi dengan detail trabekula dan jaringan lunak baik',
        'Fibula distal terletak di setengah posterior tibia dan sedikit tumpang tindih pada kaput fibula proksimal',
        'Kondilus femoralis bisa tidak superposisi akibat divergensi berkas sinar',
        'Tampak pemisahan moderat antara batang tibia dan fibula kecuali pada ujung artikulasinya',
      ],
      gambar: [
        {
          src: '/img/cruris/lateral-1.webp',
          caption: 'Posisi proyeksi lateral os cruris',
        },
        {
          src: '/img/cruris/lateral-2.webp',
          caption: 'Radiograf anatomi lateral os cruris',
        },
      ],
      sumber: 'hal 5',
    },
  ],
  proteksi: [
    'Gunakan apron untuk menutupi daerah panggul pasien agar organ reproduksi terlindungi dari sinar hambur',
    'Atur luas lapangan seoptimal mungkin agar objek masuk penyinaran, maksimal seluas lapangan kaset',
    'Arahkan pandangan mata pasien menjauh dari sumber sinar-X',
    'Persilakan orang yang tidak berkepentingan keluar ruang; pendamping yang terpaksa ada wajib memakai apron',
    'Hindari atau tidak melakukan pengulangan foto',
  ],
  pascaPemeriksaan: [
    'Beri identitas radiografi (unit, no. registrasi, nama, umur, jenis kelamin, pemeriksaan, tanggal) via ID camera',
    'Proses film di kamar gelap: matikan lampu general, buka kaset, dan pasang film pada hanger',
    'Masukkan film ke cairan developer (±4 menit) hingga muncul gambaran laten dengan inspeksi singkat safety light',
    'Bilas di tangki rinsing, masukkan ke fixer agar tetap, lalu cuci di tangki washing dan keringkan',
    'Arahkan pasien menunggu hasil, berganti baju kembali, beri kartu ambil foto bila baik, lalu kembali ke asal rujukan',
  ],
  evaluasi: [
    'Gambarkan anatomi objek dan sebutkan bagian-bagian anatomi os cruris yang tampak',
    'Bandingkan kriteria anatomi radiograf dengan standar kriteria evaluasi proyeksi AP dan lateral',
    'Nilai radiograf menggunakan form evaluasi dan susun laporan praktek dengan minimal 1 textbook maksimal 1 hari pasca praktek',
  ],
};
