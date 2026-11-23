import type { Modul } from '../types';

export const modulElbow: Modul = {
  slug: 'elbow',
  kode: '301-3B',
  judul: 'Elbow Joint',
  region: 'ekstremitas-atas',
  kompetensi:
    'Mahasiswa mampu melakukan teknik radiografi ossa elbow joint dengan baik dan benar melalui simulasi, role play, dan realplay.',
  sorotan: [
    'Dua proyeksi utama: Anterior Posterior (AP) dan Lateral pada kaset 18×24 cm',
    'Anti-rotasi AP: kedua epicondylus humerus berjarak sama terhadap kaset; Lateral: saling menumpuk/superposisi',
    'Lengan bawah dan lengan atas harus berada dalam satu bidang datar di atas meja pemeriksaan',
    'Central point tepat di pertengahan elbow joint dengan faktor eksposi 50–55 kVp, 6–7 mAs',
  ],
  praPemeriksaan: [
    {
      judul: 'Administrasi',
      poin: [
        'Cek lembar permintaan: identitas pasien, no. catatan medik (CM/RM), asal rujukan, dan riwayat',
        'Catat identitas di buku registrasi dan tulis nomor foto pada lembar permintaan pasien',
        'Siapkan kartu ambil foto serta amplop foto sesuai ukuran film yang digunakan',
      ],
    },
    {
      judul: 'Persiapan Pasien',
      poin: [
        'Panggil pasien sesuai lembar permintaan dan cocokkan nama, umur, serta alamat',
        'Perkenalkan diri, lakukan anamnesis keluhan (kanan/kiri), dan amati keadaan umum pasien',
        'Berikan penjelasan singkat mengenai prosedur sebelum pemeriksaan dimulai',
        'Pastikan tidak ada benda logam atau benda lain pada siku tangan yang akan diperiksa',
      ],
    },
    {
      judul: 'Persiapan Alat & Bahan',
      poin: [
        'Pesawat sinar-X siap pakai beserta meteran',
        'Kaset dan film radiografi ukuran 18×24 cm',
        'Marker R/L, plester, gunting, lembar Pb, dan softbag/sandbag',
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
        'Letakkan lengan di meja dan posisikan siku lengan di atas kaset pada posisi supine; tangan dan lengan lurus satu garis',
        'Atur siku lengan tepat di pertengahan lapangan penyinaran',
        'Atur kedua epicondylus humerus berjarak sama terhadap kaset agar tidak terjadi rotasi',
        'Atur lengan bawah dan lengan atas dalam satu bidang datar',
        'Arahkan pasien rileks; beri softbag di bawah punggung tangan untuk kenyamanan',
      ],
      centralRay: 'Vertikal tegak lurus terhadap kaset',
      centralPoint: 'Pertengahan elbow joint',
      ffd: '100 cm',
      faktorEksposi: '50–55 kVp, 6–7 mAs, non grid, film speed 400',
      kriteria: [],
      gambar: [
        {
          src: '/img/elbow/umum-5.webp',
          caption: 'Radiograf anatomi AP elbow joint',
        },
      ],
      sumber: 'hal 4-5',
    },
    {
      id: 'lateral',
      nama: 'Proyeksi Lateral',
      posisiPasien: [
        'Duduk menyamping meja pemeriksaan dengan sisi yang sakit dekat meja',
        'Atur tinggi duduk agar lengan dapat diletakkan nyaman di atas meja pemeriksaan',
      ],
      posisiObjek: [
        'Fleksikan lengan 90° pada meja pemeriksaan dan atur siku tepat di pertengahan lapangan penyinaran',
        'Atur lengan tegak miring di atas kaset pada sisi ulna; ibu jari di atas dan menempel telapak tangan agar benar-benar lateral, tangan dan lengan satu garis lurus',
        'Atur kedua epicondylus humerus agar saling menumpuk/superposisi',
        'Atur lengan bawah dan lengan atas dalam satu bidang datar',
        'Arahkan pasien rileks dan beri softbag/sandbag di bawah punggung tangan untuk fiksasi',
      ],
      centralRay: 'Vertikal tegak lurus terhadap kaset',
      centralPoint: 'Pertengahan elbow joint',
      ffd: '100 cm',
      faktorEksposi: '50–55 kVp, 6–7 mAs, non grid, film speed 400',
      kriteria: [],
      gambar: [
        {
          src: '/img/elbow/umum-6.webp',
          caption: 'Radiograf anatomi lateral elbow joint',
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
    'Bantu pasien turun dari meja pemeriksaan dan arahkan menunggu hasil pemrosesan film',
    'Proses film di kamar gelap: matikan lampu general, buka kaset, dan pasang film pada hanger',
    'Masukkan film ke cairan developer hingga muncul gambaran laten (4 menit) dengan inspeksi singkat memakai safety light',
    'Bilas (rinsing) film pada tangki rinsing, masukkan ke cairan fixer agar gambaran tetap, lalu cuci (washing) dan keringkan',
    'Berikan kartu ambil foto bila hasil sudah baik dan persilakan pasien kembali ke asal rujukan',
  ],
  evaluasi: [
    'Sebutkan seluruh bagian anatomi siku tangan yang masuk dalam gambaran radiograf',
    'Identifikasi batas proksimal dan batas distal dari siku tangan',
    'Lakukan kritik dan evaluasi radiograf serta susun laporan praktek',
  ],
};
