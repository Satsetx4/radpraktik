import type { Modul } from '../types';

export const modulShoulder: Modul = {
  slug: 'shoulder',
  kode: '301-4B',
  judul: 'Shoulder Joint',
  region: 'ekstremitas-atas',
  kompetensi:
    'Mahasiswa mampu melakukan teknik radiografi shoulder joint dengan baik dan benar melalui simulasi, role play, dan realplay.',
  sorotan: [
    'Dua kelompok proyeksi: AP dan AP Endo-Eksorotasi pada kaset 18×24 cm',
    'Tubuh dirotasikan 30° ke arah yang sakit agar scapula paralel terhadap film (sisi sehat diganjal sandbag bila supine)',
    'Central point diarahkan ke processus coracoideus dengan tepi atas kaset 2,5 cm di atas sendi bahu',
    'Rotasi lengan ke medial (endorotasi) atau lateral (eksorotasi) diberi marker arah rotasi',
  ],
  praPemeriksaan: [
    {
      judul: 'Administrasi',
      poin: [
        'Cek lembar permintaan: identitas pasien, no. catatan medik (CM/RM), asal rujukan, dan riwayat',
        'Catat identitas di buku registrasi dan tulis nomor foto (no. reg radiologi) pada lembar permintaan',
        'Siapkan kartu ambil foto serta amplop foto sesuai ukuran film yang digunakan',
      ],
    },
    {
      judul: 'Persiapan Pasien',
      poin: [
        'Panggil pasien, cocokkan nama lengkap, umur, serta alamat sesuai lembar permintaan',
        'Perkenalkan diri, amati keadaan umum, dan tanyakan keluhan sisi kanan atau kiri',
        'Berikan penjelasan singkat prosedur; lepas logam di bahu (kancing, pin, peniti) dan ganti baju pasien bila perlu',
      ],
    },
    {
      judul: 'Persiapan Alat & Bahan',
      poin: [
        'Pesawat sinar-X siap pakai, meteran, dan radiographic phantom',
        'Kaset radiografi, film, dan hanger ukuran 18×24 cm',
        'Marker R/L, plester, gunting, lembar Pb, dan sandbag',
      ],
    },
  ],
  proyeksi: [
    {
      id: 'ap',
      nama: 'Proyeksi Anterior Posterior (AP)',
      posisiPasien: [
        'Pasien berdiri atau tidur supine',
      ],
      posisiObjek: [
        'Rotasikan tubuh 30° ke arah yang sakit agar scapula sisi yang diperiksa paralel dengan film; bila supine, ganjal sisi yang sehat dengan sandbag',
        'Atur tepi atas kaset 2,5 cm di atas sendi bahu dan tepi bawah mencakup 1/3 proksimal humerus',
        'Atur lengan atas pada posisi supine dan posisikan bahu yang sakit di pertengahan lapangan penyinaran serta masuk kaset',
        'Arahkan pasien rileks agar tidak bergerak dan bahu tidak terangkat',
      ],
      centralRay: 'Vertikal atau horizontal, tegak lurus terhadap kaset',
      centralPoint: 'Processus coracoideus',
      ffd: '100 cm',
      faktorEksposi: '55–60 kVp, 8–10 mAs, non grid, film speed 400',
      kriteria: [
        'Tampak struktur tulang dan jaringan lunak bahu serta humerus proksimal pada posisi anatomis',
        'Hubungan sendi scapulohumeral dan area bursa subakromial terlihat jelas',
        'Pada rotasi netral, tampak bagian posterior insersi tendon supraspinatus',
      ],
      gambar: [
        {
          src: '/img/shoulder/umum-5.webp',
          caption: 'Posisi dan radiograf AP shoulder rotasi netral',
        },
        {
          src: '/img/shoulder/umum-8.webp',
          caption: 'Radiograf AP shoulder rotasi netral',
        },
      ],
      sumber: 'hal 4-5',
    },
    {
      id: 'ap-endo-eksorotasi',
      nama: 'Proyeksi AP Endo-Eksorotasi',
      posisiPasien: [
        'Pasien berdiri atau tidur supine',
      ],
      posisiObjek: [
        'Rotasikan tubuh 30° ke arah yang sakit agar scapula paralel dengan film; bila supine, ganjal sisi sehat dengan sandbag',
        'Posisikan bahu sakit di pertengahan lapangan penyinaran; tepi atas kaset 2,5 cm di atas sendi bahu dan tepi bawah 1/3 proksimal humerus',
        'AP endorotasi: rotasikan lengan dari posisi AP/supine ke arah medial semaksimal mungkin, beri marker panah sesuai arah rotasi',
        'AP eksorotasi: rotasikan lengan dari posisi AP/supine ke arah lateral semaksimal mungkin, beri marker panah sesuai arah rotasi',
        'Arahkan pasien rileks agar tidak bergerak dan bahu tidak terangkat',
      ],
      centralRay: 'Vertikal atau horizontal, tegak lurus terhadap kaset',
      centralPoint: 'Processus coracoideus',
      ffd: '100 cm',
      faktorEksposi: '55–60 kVp, 8–10 mAs, non grid, film speed 400',
      kriteria: [
        'Eksorotasi: tampak greater tubercle humerus dan lokasi insersi tendon supraspinatus',
        'Endorotasi: humerus proksimal tampak dalam posisi true lateral dan profil insersi tendon subscapular bila abduksi cukup',
      ],
      gambar: [
        {
          src: '/img/shoulder/ap-endo-eksorotasi-1.webp',
          caption: 'Posisi AP shoulder eksorotasi humerus',
        },
        {
          src: '/img/shoulder/umum-9.webp',
          caption: 'Radiograf AP shoulder eksorotasi',
        },
        {
          src: '/img/shoulder/umum-10.webp',
          caption: 'Radiograf AP shoulder endorotasi',
        },
      ],
      sumber: 'hal 5',
    },
  ],
  proteksi: [
    'Gunakan apron untuk menutupi daerah panggul pasien agar organ reproduksi terlindungi dari sinar hambur',
    'Atur luas lapangan seoptimal mungkin, objek masuk penyinaran maksimal seluas lapangan kaset',
    'Arahkan pasien agar pandangan mata menjauh dari sumber sinar-X',
    'Minta orang tidak berkepentingan keluar ruangan; pendamping yang terpaksa di ruang wajib memakai apron',
    'Hindari pengulangan foto radiograf',
  ],
  pascaPemeriksaan: [
    'Tulis identitas radiografi lalu masukkan kertas identitas pada ID camera',
    'Proses film di kamar gelap: matikan lampu general, buka kaset, dan pasang film pada hanger',
    'Masukkan film ke developer hingga muncul gambaran laten (4 menit) dengan inspeksi singkat memakai safety light',
    'Bilas (rinsing), masukkan ke cairan fixer hingga gambaran tetap, lalu cuci (washing) dan keringkan',
    'Bantu pasien turun (bila supine), berikan kartu ambil foto bila hasil baik, dan persilakan kembali ke asal rujukan',
  ],
  evaluasi: [
    'Gambarkan anatomi objek bahu dan sebutkan seluruh bagian anatomi yang masuk dalam radiograf',
    'Sebutkan kriteria radiografi bahu serta bandingkan hasil phantom dengan standar rotasi eksternal, netral, dan internal',
    'Lakukan kritik evaluasi radiograf memakai form evaluasi dan susun laporan praktek minimal 1 textbook',
  ],
};
