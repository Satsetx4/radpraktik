import type { Modul } from '../types';

export const modulScapula: Modul = {
  slug: 'scapula',
  kode: '301-5B',
  judul: 'Os Scapula',
  region: 'ekstremitas-atas',
  kompetensi:
    'Mahasiswa mampu melakukan teknik radiografi os scapula dengan baik dan benar melalui simulasi, role play, dan realplay.',
  sorotan: [
    'Dua proyeksi utama: AP dan Lateral (RAO untuk scapula kanan, LAO untuk scapula kiri) pada kaset 24×30 cm membujur',
    'Proyeksi AP memakai abduksi lengan + fleksi siku serta aba-aba napas biasa; CP 5 cm di bawah processus coracoideus',
    'Proyeksi Lateral memiringkan mid coronal plane (MCP) 45–60° dari kaset dengan dorso manus di pinggang dan aba-aba tahan napas',
    'Keduanya memakai CR horizontal tegak lurus, FFD 100 cm, faktor eksposi 75 kVp, 16 mAs dengan grid',
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
        'Perkenalkan diri, amati keadaan umum, dan tanyakan keluhan bahu kanan/kiri serta depan/belakang',
        'Jelaskan prosedur; lepas logam di lengan dan pasien perempuan ganti baju pasien',
      ],
    },
    {
      judul: 'Persiapan Alat & Bahan',
      poin: [
        'Pesawat sinar-X siap pakai, meteran, dan radiographic phantom',
        'Kaset radiografi, film, dan hanger ukuran 24×30 cm',
        'Marker R/L, plester, gunting, lembar Pb, dan apron',
      ],
    },
  ],
  proyeksi: [
    {
      id: 'ap',
      nama: 'Proyeksi Antero Posterior (AP)',
      posisiPasien: [
        'Pasien berdiri menghadap ke tabung sinar-X',
      ],
      posisiObjek: [
        'Atur scapula yang diperiksa berada di pertengahan film',
        'Abduksikan lengan untuk membawa scapula ke samping, lalu fleksikan elbow joint dan letakkan tangan pada posisi yang nyaman',
        'Atur posisi kaset membujur tubuh dengan batas atas kaset 5 cm di atas shoulder',
        'Arahkan pasien dalam keadaan rileks untuk menghindari pergerakan; aba-aba respirasi: napas biasa',
      ],
      centralRay: 'Horizontal tegak lurus terhadap kaset',
      centralPoint: 'Mid scapula (5 cm di bawah processus coracoideus; kira-kira 2–3 jari ke medial dari caput humerus lalu 3–4 jari ke inferior)',
      ffd: '100 cm',
      faktorEksposi: '75 kVp, 16 mAs, grid, film speed 400',
      kriteria: [
        'Bagian lateral scapula bebas dari superposisi tulang rusuk (costae)',
        'Scapula tampak horizontal dan tidak oblik',
        'Detail scapula tampak melalui paru dan costae yang superposisi (napas dangkal mengaburkan detail paru)',
        'Processus acromion dan angulus inferior tampak jelas',
      ],
      gambar: [
        {
          src: '/img/scapula/ap-1.webp',
          caption: 'Posisi objek os scapula proyeksi AP',
        },
        {
          src: '/img/scapula/ap-2.webp',
          caption: 'Radiograf os scapula proyeksi AP',
        },
      ],
      sumber: 'hal 4-5',
    },
    {
      id: 'lateral',
      nama: 'Proyeksi Lateral',
      posisiPasien: [
        'Pasien berdiri membelakangi tabung sinar-X dengan tubuh oblik ke sisi yang diperiksa (RAO bila scapula kanan, LAO bila scapula kiri)',
      ],
      posisiObjek: [
        'Atur pasien oblik dengan kemiringan mid coronal plane (MCP) 45–60° dari bidang kaset',
        'Fleksikan lengan dan tempelkan dorso manus pada pinggang (punggung wrist joint pada MSP setinggi lumbal) agar scapula tidak superposisi dengan humerus',
        'Atur posisi kaset membujur tubuh, batas atas 5 cm di atas shoulder, dan atur margo medialis scapula di tengah kaset',
        'Arahkan pasien dalam keadaan rileks untuk menghindari pergerakan; aba-aba respirasi: tahan napas',
      ],
      centralRay: 'Horizontal, tegak lurus terhadap kaset',
      centralPoint: 'Midmedial scapula',
      ffd: '100 cm',
      faktorEksposi: '75 kVp, 16 mAs, grid, film speed 400',
      kriteria: [
        'Margo lateralis dan margo medialis scapula saling superposisi',
        'Tidak ada superposisi corpus scapula pada tulang rusuk dan tidak ada superposisi humerus pada area pemeriksaan',
        'Processus acromion dan angulus inferior tercakup lengkap dengan densitas ketebalan lateral scapula yang tepat',
      ],
      gambar: [
        {
          src: '/img/scapula/lateral-1.webp',
          caption: 'Posisi RAO pada proyeksi lateral os scapula',
        },
        {
          src: '/img/scapula/lateral-2.webp',
          caption: 'Radiograf lateral os scapula (posisi RAO/LAO)',
        },
      ],
      sumber: 'hal 5-6',
    },
  ],
  proteksi: [
    'Gunakan apron untuk menutupi daerah panggul pasien agar organ reproduksi terlindungi dari sinar hambur',
    'Atur luas lapangan seoptimal mungkin, objek masuk penyinaran maksimal seluas lapangan kaset',
    'Minta orang tidak berkepentingan keluar ruangan; pendamping yang terpaksa di ruang wajib memakai apron',
    'Hindari pengulangan foto radiograf',
  ],
  pascaPemeriksaan: [
    'Tulis identitas radiografi lalu masukkan kertas identitas pada ID camera',
    'Proses film di kamar gelap: matikan lampu general, buka kaset, dan pasang film pada hanger',
    'Masukkan film ke developer hingga muncul gambaran laten (4 menit) dengan inspeksi singkat memakai safety light',
    'Bilas (rinsing), masukkan ke cairan fixer hingga gambaran tetap, lalu cuci (washing) dan keringkan',
    'Berikan kartu ambil foto bila hasil baik, persilakan pasien memakai baju kembali, lalu kembali ke asal rujukan',
  ],
  evaluasi: [
    'Gambarkan anatomi os scapula dan sebutkan bagian-bagian organnya',
    'Bandingkan hasil radiograf phantom os scapula proyeksi AP dan lateral terhadap standar kriteria evaluasi',
    'Lakukan penilaian radiograf memakai form evaluasi dan kumpulkan laporan praktek minimal 1 referensi textbook maksimal 1 hari setelah praktek',
  ],
};
