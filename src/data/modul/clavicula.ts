import type { Modul } from '../types';

export const modulClavicula: Modul = {
  slug: 'clavicula',
  kode: '301-5A',
  judul: 'Os Clavicula',
  region: 'ekstremitas-atas',
  kompetensi:
    'Mahasiswa mampu melakukan teknik radiografi os clavicle dengan baik dan benar melalui simulasi, role play, dan realplay.',
  sorotan: [
    'Menggunakan satu proyeksi utama: AP Axial dengan kaset 18×24 cm posisi melintang',
    'Central ray disudutkan 15–30° ke arah cephalad tepat pada mid klavikula',
    'Batas atas kaset 3–4 cm di atas processus acromion agar sternoclavicular hingga acromion masuk kaset',
    'Aba-aba eksposi dilakukan saat inspirasi penuh dan tahan napas (72 kVp, 10 mAs)',
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
        'Perkenalkan diri, amati keadaan umum, dan tanyakan keluhan bahu kanan/kiri, depan/belakang',
        'Berikan penjelasan singkat prosedur; lepas logam di bahu (kancing, pin, peniti) dan ganti baju pasien bila perlu',
      ],
    },
    {
      judul: 'Persiapan Alat & Bahan',
      poin: [
        'Pesawat sinar-X siap pakai, meteran, dan radiographic phantom',
        'Kaset radiografi, film, dan hanger ukuran 18×24 cm',
        'Marker R/L, plester, gunting, lembar Pb, dan apron',
      ],
    },
  ],
  proyeksi: [
    {
      id: 'ap-axial',
      nama: 'Proyeksi AP Axial',
      posisiPasien: [
        'Pasien berdiri atau duduk menghadap ke tabung pesawat sinar-X; dapat juga dilakukan dalam posisi supine',
      ],
      posisiObjek: [
        'Bila berdiri: kepala, leher, dan bahu menempel di bucky stand, lalu atur klavikula di tengah kaset; bila supine: atur klavikula di tengah kaset',
        'Atur posisi kaset melintang dengan batas atas kaset 3–4 cm di atas processus acromion',
        'Pastikan sternoclavicular joint hingga processus acromion masuk ke dalam kaset',
        'Arahkan pasien rileks agar tidak bergerak dan bahu tidak terangkat; aba-aba eksposi: inspirasi penuh dan tahan napas',
      ],
      centralRay: 'Disudutkan 15–30° ke arah cephalad',
      centralPoint: 'Mid klavikula (titik tengah antara processus acromion dan sternoclavicular joint pada pertengahan os klavikula)',
      ffd: '100 cm',
      faktorEksposi: '72 kVp, 10 mAs, grid (bila diperlukan), film speed 400',
      kriteria: [
        'Sebagian besar klavikula terproyeksi di atas tulang rusuk dan scapula dengan ujung medial tumpang tindih dengan costae I atau II',
        'Os klavikula tampak dalam posisi horizontal',
        'Seluruh os klavikula beserta acromioclavicular dan sternoclavicular joint tampak lengkap',
      ],
      gambar: [
        {
          src: '/img/clavicula/ap-axial-1.webp',
          caption: 'Posisi AP axial clavicula dengan sudut 15–30° cephalad',
        },
        {
          src: '/img/clavicula/ap-axial-2.webp',
          caption: 'Radiograf proyeksi AP axial os clavicula',
        },
      ],
      sumber: 'hal 4-5',
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
    'Proses film di kamar gelap: matikan lampu general, buka kaset, dan pasang film pada hanger',
    'Masukkan film ke developer hingga muncul gambaran laten (4 menit) dengan inspeksi singkat memakai safety light',
    'Bilas (rinsing), masukkan ke cairan fixer hingga gambaran tetap, lalu cuci (washing) dan keringkan',
    'Arahkan pasien menunggu hasil pemrosesan dan persilakan melepas baju pasien serta memakai bajunya kembali',
    'Berikan kartu ambil foto bila hasil sudah baik dan persilakan pasien kembali ke asal rujukan',
  ],
  evaluasi: [
    'Gambarkan anatomi os klavikula dan sebutkan bagian-bagian organnya',
    'Bandingkan hasil radiograf phantom os klavikula terhadap standar kriteria evaluasi proyeksi AP axial',
    'Lakukan penilaian radiograf dengan form evaluasi dan kumpulkan laporan praktek maksimal 1 hari setelah praktek',
  ],
};
