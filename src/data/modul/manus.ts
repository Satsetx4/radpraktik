import type { Modul } from '../types';

export const modulManus: Modul = {
  slug: 'manus',
  kode: '301-2A',
  judul: 'Ossa Manus',
  region: 'ekstremitas-atas',
  kompetensi:
    'Mahasiswa mampu melakukan teknik radiografi ossa manus dengan baik dan benar melalui simulasi, role play, dan realplay.',
  sorotan: [
    'Tiga proyeksi utama: PA, Lateral, dan Oblik 45°',
    'CP PA & Oblik di MCP digiti III; Lateral digeser ke MCP digiti II',
    'Fiksasi sandbag di lengan, softbag di ibu jari (Lateral), atau spon 45° (Oblik)',
  ],
  praPemeriksaan: [
    {
      judul: 'Administrasi',
      poin: [
        'Cek lembar permintaan: identitas pasien, no. catatan medik, asal rujukan, dan riwayat',
        'Catat identitas di buku registrasi dan tulis nomor foto pada lembar permintaan',
        'Siapkan kartu ambil foto serta amplop foto sesuai ukuran film yang digunakan',
      ],
    },
    {
      judul: 'Persiapan Pasien',
      poin: [
        'Panggil pasien sesuai lembar permintaan dan cocokkan nama, umur, serta alamat',
        'Perkenalkan diri, lakukan anamnesis keluhan, dan pastikan sisi tangan kanan atau kiri',
        'Berikan penjelasan singkat mengenai prosedur sebelum pemeriksaan dimulai',
        'Lepaskan benda logam atau pengotor di tangan seperti cincin, jam tangan, dan pasir',
      ],
    },
    {
      judul: 'Persiapan Alat & Bahan',
      poin: [
        'Pesawat sinar-X siap pakai beserta meteran dan penggaris kaliper',
        'Kaset dan film radiografi ukuran 18×24 cm atau 24×30 cm',
        'Marker R/L, plester, gunting, lembar Pb, sandbag, softbag, dan spon 45°',
      ],
    },
  ],
  proyeksi: [
    {
      id: 'pa',
      nama: 'Proyeksi Posterior Anterior (PA)',
      posisiPasien: [
        'Duduk menyamping meja pemeriksaan dengan sisi yang sakit dekat meja',
        'Atur tinggi duduk agar lengan dapat diletakkan nyaman di atas meja pemeriksaan',
      ],
      posisiObjek: [
        'Letakkan lengan di meja dan tempelkan telapak tangan di atas kaset (prone); tangan dan lengan satu garis lurus',
        'Atur tangan di pertengahan lapangan penyinaran, lalu renggangkan jari-jari agar tidak saling berhimpit',
        'Atur kedua processus styloideus berjarak sama terhadap kaset agar tidak terjadi rotasi',
        'Arahkan pasien rileks; beri sandbag di kedua sisi lengan dan softbag di bawah lengan untuk kenyamanan',
      ],
      centralRay: 'Vertikal tegak lurus terhadap kaset',
      centralPoint: 'Metacarpophalangeal joint (MCP) digiti III',
      ffd: '100 cm',
      faktorEksposi: '40–50 kVp, 4–5 mAs, non grid, film speed 400',
      kriteria: [],
      gambar: [
        {
          src: '/img/manus/umum-2.webp',
          caption: 'Radiograf anatomi PA ossa manus',
        },
      ],
      sumber: 'hal 5',
    },
    {
      id: 'lateral',
      nama: 'Proyeksi Lateral',
      posisiPasien: [
        'Duduk menyamping meja pemeriksaan dengan sisi yang sakit dekat meja',
        'Atur tinggi duduk agar lengan dapat diletakkan nyaman di atas meja pemeriksaan',
      ],
      posisiObjek: [
        'Fleksikan lengan di meja dan atur tangan tepat di pertengahan lapangan penyinaran',
        'Letakkan tangan tegak miring di atas kaset dengan sisi jari kelingking menempel dan jari-jari saling bertumpuk',
        'Posisikan tangan dan lengan satu garis lurus serta kedua processus styloideus saling superposisi',
        'Beri softbag di ibu jari untuk fiksasi, serta sandbag di kedua sisi lengan dan softbag di bawah lengan',
      ],
      centralRay: 'Vertikal tegak lurus terhadap kaset',
      centralPoint: 'Metacarpophalangeal joint (MCP) digiti II',
      ffd: '100 cm',
      faktorEksposi: '40–50 kVp, 4–5 mAs, non grid, film speed 400',
      kriteria: [],
      gambar: [
        {
          src: '/img/manus/umum-3.webp',
          caption: 'Radiograf anatomi lateral ossa manus',
        },
      ],
      sumber: 'hal 5-6',
    },
    {
      id: 'oblik',
      nama: 'Proyeksi Oblik',
      posisiPasien: [
        'Duduk menyamping meja pemeriksaan dengan sisi yang sakit dekat meja',
        'Atur tinggi duduk agar lengan dapat diletakkan nyaman di atas meja pemeriksaan',
      ],
      posisiObjek: [
        'Fleksikan lengan di meja dan atur tangan tepat di pertengahan lapangan penyinaran',
        'Letakkan sisi jari kelingking menempel kaset lalu rotasikan tangan membentuk sudut 45° terhadap kaset pada posisi prone',
        'Buka jari-jari agar tidak saling bertumpuk; fiksasi dengan jari atau spon bersudut 45°',
        'Ukur ketebalan objek yang akan diperiksa sebelum pengaturan eksposi',
      ],
      centralRay: 'Vertikal tegak lurus terhadap kaset',
      centralPoint: 'Metacarpophalangeal joint (MCP) digiti III',
      ffd: '100 cm',
      faktorEksposi: '40–50 kVp, 4–5 mAs, non grid, film speed 400',
      kriteria: [],
      gambar: [
        {
          src: '/img/manus/umum-4.webp',
          caption: 'Radiograf anatomi oblik ossa manus',
        },
      ],
      sumber: 'hal 6',
    },
  ],
  proteksi: [
    'Gunakan apron untuk menutupi daerah panggul pasien agar organ reproduksi terlindungi dari sinar hambur',
    'Arahkan pasien agar pandangan mata menjauh dari sumber sinar-X',
    'Minta orang yang tidak berkepentingan keluar ruang pemeriksaan; jika terpaksa ada pendamping, wajib memakai apron',
  ],
  pascaPemeriksaan: [
    'Proses film di kamar gelap: matikan lampu general, buka kaset, dan pasang film pada hanger',
    'Masukkan film ke cairan developer hingga muncul gambaran laten (±4 menit) sambil inspeksi singkat dengan safety light',
    'Bilas (rinsing) film, masukkan ke cairan fixer agar gambaran menjadi tetap, lalu cuci (washing) dan keringkan',
    'Bantu pasien turun dari meja pemeriksaan dan minta menunggu hasil pemrosesan film',
    'Berikan kartu ambil foto bila hasil sudah baik dan persilakan pasien kembali ke asal rujukan',
  ],
  evaluasi: [
    'Sebutkan seluruh bagian anatomi tangan yang masuk dalam gambaran radiograf',
    'Identifikasi batas proksimal dan batas distal dari tulang tangan',
    'Lakukan kritik dan evaluasi radiograf serta susun laporan praktek',
  ],
};
