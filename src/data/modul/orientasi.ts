import type { Modul } from '../types';

export const modulOrientasi: Modul = {
  slug: 'orientasi',
  kode: '301-1',
  judul: 'Orientasi Laboratorium & Dasar Proyeksi',
  region: 'dasar',
  kompetensi:
    'Mahasiswa mampu menerapkan penempatan proyeksi, posisi pemotretan, prinsip dasar pemeriksaan, peralatan, dan proteksi radiasi di laboratorium radiografi.',
  sorotan: [
    'Enam proyeksi dasar radiografi: AP, PA, Axial (sudut ≥10°), Tangensial, Lateral, dan Oblik',
    'Posisi pemotretan dasar: berdiri, duduk, serta recumbent (supine, prone, lateral, Trendelenburg’s, Fowler, Sims, lithotomy)',
    'Empat prinsip proteksi radiasi: apron panggul, kolimasi optimal, pembatasan pendamping, dan hindari pengulangan',
    'Alur administrasi pemeriksaan serta pengenalan peralatan dasar termasuk radiographic phantom',
  ],
  praPemeriksaan: [
    {
      judul: 'Proyeksi Dasar Radiografi',
      poin: [
        'Anterior–Posterior (AP): sinar datang melalui bagian anterior dahulu dan keluar bagian posterior',
        'Posterior–Anterior (PA): sinar datang melalui bagian posterior dahulu dan keluar bagian anterior',
        'Axial: sinar datang secara menyudut pada bidang longitudinal dengan sudut 10° atau lebih',
        'Tangensial: sinar datang tepat sepanjang tepi luar dari permukaan tubuh',
        'Lateral: sinar datang melalui salah satu sisi tubuh',
        'Oblik: sinar datang dari sisi yang menyudut',
      ],
    },
    {
      judul: 'Posisi Pemotretan Pasien',
      poin: [
        'Berdiri: posisi pasien bertumpu pada kedua kakinya; Duduk: duduk di meja pemeriksaan atau kursi yang disediakan',
        'Recumbent Supine: pasien berbaring di meja pemeriksaan dengan bagian belakang menempel',
        'Recumbent Prone: pasien berbaring di meja pemeriksaan dengan bagian depan menempel',
        'Recumbent Lateral: pasien berbaring di meja pemeriksaan dengan salah satu sisi tubuh menempel',
        'Trendelenburg’s: posisi supine dengan kepala lebih rendah dibandingkan kaki',
        'Fowler: posisi supine dengan kepala lebih tinggi dibandingkan kaki',
        'Sims: posisi lateral dengan kaki yang menempel pada meja lurus dan kaki lainnya fleksi',
        'Lithotomy: posisi supine dengan knee dan hip fleksi, diabduksikan, rotasi eksternal, dan penopang kaki',
      ],
    },
    {
      judul: 'Administrasi Pemeriksaan',
      poin: [
        'Cek lembar permintaan: identitas (nama, umur, alamat, no. CM/RM), asal rujukan, permintaan foto, dan riwayat',
        'Catat identitas di buku registrasi dan tulis nomor foto pasien pada lembar permintaan',
        'Buat kartu ambil foto dan amplop foto sesuai ukuran film yang digunakan',
      ],
    },
    {
      judul: 'Persiapan Pasien',
      poin: [
        'Panggil pasien sesuai lembar permintaan dan cocokkan nama, umur, serta alamat sebelum masuk ruangan',
        'Perkenalkan diri dengan salam, nama, dan unit tugas, lalu amati keadaan umum serta tanyakan keluhan tanpa membocorkan',
        'Lakukan recall anatomi normal, analisa kebutuhan proyeksi, dan beri penjelasan ringkas prosedur ke pasien',
        'Singkirkan benda logam (kancing, pin, jarum peniti) di area periksa dan ganti baju pasien bila memungkinkan',
      ],
    },
    {
      judul: 'Persiapan Alat & Bahan',
      poin: [
        'Pesawat sinar-X siap pakai beserta meteran dan radiographic phantom untuk simulasi laboratorium',
        'Kaset radiografi, film, serta hanger ukuran 18×24 cm',
        'Marker R/L, plester, gunting, lembar Pb, dan apron pelindung',
      ],
    },
  ],
  proyeksi: [],
  proteksi: [
    'Gunakan apron untuk menutupi daerah panggul pasien agar organ reproduksi terlindungi dari sinar hambur',
    'Atur luas lapangan seoptimal mungkin agar objek masuk penyinaran, maksimal seluas lapangan kaset yang digunakan',
    'Persilakan orang yang tidak berkepentingan keluar ruang pemeriksaan; pendamping yang terpaksa ada wajib memakai apron',
    'Hindari atau jangan melakukan pengulangan foto radiografi',
  ],
  pascaPemeriksaan: [],
  evaluasi: [
    'Susun laporan praktek menggunakan form laporan yang tersedia di laboratorium',
    'Lengkapi laporan praktek dengan referensi minimal 1 buku teks (textbook)',
    'Kumpulkan laporan praktek paling lambat 1 hari setelah selesai praktikum',
  ],
};
