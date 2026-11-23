import type { Modul } from '../types';

export const modulAntebrachi: Modul = {
  slug: 'antebrachi',
  kode: '301-3A',
  judul: 'Antebrachii',
  region: 'ekstremitas-atas',
  kompetensi:
    'Mahasiswa mampu melakukan teknik radiografi ossa antebrachii dengan baik dan benar melalui simulasi, role play, dan realplay.',
  sorotan: [
    'Dua proyeksi utama: Anterior Posterior (AP) dan Lateral dengan kaset 24×30 cm',
    'Pada proyeksi Lateral, lengan difleksikan 90° dengan sisi ulna menempel kaset dan ibu jari di atas menempel telapak tangan',
    'Lengan bawah dan lengan atas harus berada dalam satu bidang datar pada proyeksi Lateral',
    'Central point tepat di pertengahan antebrachi dengan faktor eksposi 50–55 kVp, 5–6 mAs',
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
        'Panggil pasien sesuai lembar permintaan dan cocokkan nama, umur, serta alamat',
        'Perkenalkan diri, lakukan anamnesis keluhan (kanan/kiri, sisi atas/bawah), dan amati keadaan umum',
        'Berikan penjelasan singkat mengenai prosedur sebelum pemeriksaan dimulai',
        'Lepaskan benda logam atau pengotor di tangan/lengan seperti gelang tangan, jam tangan, dan pasir',
      ],
    },
    {
      judul: 'Persiapan Alat & Bahan',
      poin: [
        'Pesawat sinar-X siap pakai, meteran, dan penggaris kaliper',
        'Kaset dan film radiografi ukuran 24×30 cm',
        'Marker R/L, plester, gunting, lembar Pb, sandbag, dan softbag',
      ],
    },
  ],
  proyeksi: [
    {
      id: 'ap',
      nama: 'Proyeksi Anterior Posterior (AP)',
      posisiPasien: [
        'Duduk menyamping meja pemeriksaan dengan sisi yang sakit dekat meja',
        'Atur tinggi duduk agar lengan dapat diletakkan nyaman di atas meja pemeriksaan',
      ],
      posisiObjek: [
        'Letakkan lengan pada meja pemeriksaan dan tempatkan lengan bawah di atas kaset pada posisi supine',
        'Posisikan tangan dan lengan lurus dalam satu garis',
        'Atur lengan bawah tepat di pertengahan lapangan penyinaran',
        'Atur kedua processus styloideus berjarak sama terhadap kaset agar tidak terjadi rotasi',
        'Arahkan pasien rileks; beri softbag di bawah punggung tangan untuk kenyamanan pasien',
      ],
      centralRay: 'Vertikal tegak lurus terhadap kaset',
      centralPoint: 'Pertengahan antebrachi',
      ffd: '100 cm',
      faktorEksposi: '50–55 kVp, 5–6 mAs, non grid, film speed 400',
      kriteria: [],
      gambar: [
        {
          src: '/img/antebrachi/umum-6.webp',
          caption: 'Radiograf anatomi AP ossa antebrachii',
        },
      ],
      sumber: 'hal 4',
    },
    {
      id: 'lateral',
      nama: 'Proyeksi Lateral',
      posisiPasien: [
        'Duduk menyamping meja pemeriksaan dengan sisi yang sakit dekat meja',
        'Atur tinggi duduk agar lengan dapat diletakkan nyaman di atas meja pemeriksaan',
      ],
      posisiObjek: [
        'Fleksikan lengan 90° pada meja pemeriksaan dan atur lengan bawah tepat di pertengahan lapangan penyinaran',
        'Letakkan lengan bawah tegak miring di atas kaset pada sisi ulna; ibu jari berada di atas dan menempel telapak tangan agar benar-benar lateral',
        'Posisikan tangan dan lengan dalam satu garis lurus, serta lengan bawah dan lengan atas dalam satu bidang datar',
        'Arahkan pasien dalam keadaan rileks untuk menghindari pergerakan',
        'Beri softbag/sandbag di samping kedua sisi tangan untuk fiksasi',
      ],
      centralRay: 'Vertikal tegak lurus terhadap kaset',
      centralPoint: 'Pertengahan antebrachi',
      ffd: '100 cm',
      faktorEksposi: '50–55 kVp, 5–6 mAs, non grid, film speed 400',
      kriteria: [],
      gambar: [
        {
          src: '/img/antebrachi/umum-5.webp',
          caption: 'Radiograf anatomi lateral ossa antebrachii',
        },
      ],
      sumber: 'hal 5',
    },
  ],
  proteksi: [
    'Gunakan apron untuk menutupi daerah panggul pasien agar organ reproduksi terlindungi dari sinar hambur',
    'Arahkan pasien agar pandangan mata menjauh dari sumber sinar-X',
    'Minta orang yang tidak berkepentingan keluar ruang pemeriksaan; jika terpaksa ada pendamping, wajib memakai apron',
  ],
  pascaPemeriksaan: [
    'Proses film di kamar gelap: matikan lampu general, buka kaset, dan pasang film pada hanger',
    'Masukkan film ke cairan developer hingga muncul gambaran laten (4 menit) dengan inspeksi singkat memakai safety light',
    'Bilas (rinsing) film pada tangki rinsing, masukkan ke cairan fixer agar gambaran tetap, lalu cuci (washing) dan keringkan',
    'Bantu pasien turun dari meja pemeriksaan dan minta menunggu hasil pemrosesan film',
    'Berikan kartu ambil foto bila hasil sudah baik dan persilakan pasien kembali ke asal rujukan',
  ],
  evaluasi: [
    'Sebutkan seluruh bagian anatomi lengan bawah yang masuk dalam gambaran radiograf',
    'Identifikasi batas proksimal dan batas distal dari lengan bawah',
    'Lakukan kritik dan evaluasi radiograf serta susun laporan praktek',
  ],
};
