import type { Modul } from '../types';

export const modulPatella: Modul = {
  slug: 'patella',
  kode: '301-8B',
  judul: 'Os Patella',
  region: 'ekstremitas-bawah',
  kompetensi:
    'Mahasiswa mampu melakukan teknik radiografi patella dengan baik dan benar melalui simulasi, role play, dan realplay.',
  sorotan: [
    'Dua proyeksi utama: Tangential (Metode Hughston) dan Lateral',
    'Metode Hughston memposisikan pasien prone, knee fleksi 50–60° (tibia-fibula terhadap meja), dan CR 45° cephalad',
    'Proyeksi Lateral memfleksikan lutut 5–10° dengan CP pada midpatellofemoral joint',
    'Kaki pada metode Hughston disandarkan rileks di atas kolimator atau dipertahankan posisinya',
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
        'Perkenalkan diri, lakukan anamnesis keluhan lutut, dan pastikan sisi kanan atau kiri',
        'Berikan penjelasan singkat prosedur pemeriksaan sebelum pemotretan dimulai',
        'Pastikan tidak ada benda logam atau penghalang di kaki seperti gelang kaki dan celana panjang tebal',
      ],
    },
    {
      judul: 'Persiapan Alat & Bahan',
      poin: [
        'Pesawat sinar-X siap pakai beserta meteran dan radiographic phantom',
        'Kaset, film, dan hanger ukuran 24×30 cm',
        'Marker, plester, gunting, lembar Pb, apron, softbag, dan sandbag',
      ],
    },
  ],
  proyeksi: [
    {
      id: 'tangential',
      nama: 'Proyeksi Tangential (Metode Hughston)',
      posisiPasien: [
        'Pasien prone dengan kaki yang akan diperiksa di atas meja pemeriksaan dan tubuh diatur tidak rotasi',
      ],
      posisiObjek: [
        'Letakkan kaset di bawah knee, lalu fleksikan knee perlahan sehingga tibia dan fibula membentuk sudut 50°–60° terhadap meja pemeriksaan',
        'Sandarkan kaki secara rileks di atas kolimator atau pertahankan kaki tetap pada posisi tersebut',
      ],
      centralRay: 'Menyudut 45° ke arah cephalad',
      centralPoint: 'Melalui patellofemoral joint',
      ffd: '100 cm',
      faktorEksposi: '55–65 kVp, 8 mAs, non grid, film speed 400',
      kriteria: [
        'Patella tampak dalam profil penuh (in profile)',
        'Artikulasi patellofemoral tampak terbuka',
        'Permukaan condylus femoralis serta jaringan lunak artikulasi femoropatellar tampak jelas',
        'Detail tulang tercatat baik pada patella dan condylus femoralis',
      ],
      gambar: [
        {
          src: '/img/patella/tangential-1.webp',
          caption: 'Posisi proyeksi tangential metode Hughston',
        },
        {
          src: '/img/patella/tangential-2.webp',
          caption: 'Radiograf tangential patellofemoral joint',
        },
      ],
      sumber: 'hal 4-5',
    },
    {
      id: 'lateral',
      nama: 'Proyeksi Lateral',
      posisiPasien: [
        'Pasien diposisikan recumbent lateral dengan mengupayakan kenyamanan dan tidak menimbulkan nyeri',
      ],
      posisiObjek: [
        'Atur hip yang akan diperiksa dekat meja pemeriksaan dan beri sandbag di bawah ankle bila perlu',
        'Fleksikan knee dan hip kaki yang tidak diperiksa lalu letakkan di depan kaki periksa untuk kestabilan posisi',
        'Fleksikan knee yang diperiksa sekitar 5° sampai 10°',
        'Atur knee pada posisi lateral dengan epicondylus femoralis superposisi dan patella tegak lurus terhadap kaset',
      ],
      centralRay: 'Vertikal tegak lurus terhadap kaset',
      centralPoint: 'Midpatellofemoral joint',
      ffd: '100 cm',
      faktorEksposi: '50–55 kVp, 8 mAs, non grid, film speed 400',
      kriteria: [
        'Lutut tampak terfleksi 5° sampai 10°',
        'Celah sendi patellofemoral tampak terbuka',
        'Patella tampak dalam profil lateral dengan kolimasi rapat',
      ],
      gambar: [
        {
          src: '/img/patella/lateral-1.webp',
          caption: 'Posisi proyeksi lateral os patella',
        },
        {
          src: '/img/patella/lateral-2.webp',
          caption: 'Radiograf lateral os patella',
        },
      ],
      sumber: 'hal 5-6',
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
    'Gambarkan anatomi objek dan sebutkan bagian-bagian anatomi os patella yang tampak',
    'Bandingkan kriteria anatomi radiograf dengan standar kriteria proyeksi tangential dan lateral',
    'Nilai radiograf menggunakan form evaluasi dan susun laporan praktek dengan minimal 1 textbook maksimal 1 hari pasca praktek',
  ],
};
