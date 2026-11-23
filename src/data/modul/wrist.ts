import type { Modul } from '../types';

export const modulWrist: Modul = {
  slug: 'wrist',
  kode: '301-2B',
  judul: 'Wrist Joint',
  region: 'ekstremitas-atas',
  kompetensi:
    'Mahasiswa mampu melakukan teknik radiografi ossa wrist joint dengan baik dan benar melalui simulasi, role play, dan realplay.',
  sorotan: [
    'Dua proyeksi utama: Anterior Posterior (AP) dan Lateral',
    'Pada proyeksi AP, jari-jari diganjal softbag agar punggung pergelangan tangan menempel kaset',
    'Anti-rotasi AP: kedua processus styloideus berjarak sama; Lateral: saling superposisi',
    'Central point keduanya tepat di pertengahan wrist joint dengan FFD 100 cm',
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
        'Pesawat sinar-X siap pakai beserta meteran',
        'Kaset dan film radiografi ukuran 18×24 cm',
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
        'Letakkan lengan di meja dan tempelkan punggung pergelangan tangan di atas kaset (supine); tangan dan lengan satu garis lurus',
        'Atur pergelangan tangan tepat di pertengahan lapangan penyinaran',
        'Ganjal jari-jari tangan dengan softbag agar pergelangan tangan benar-benar menempel pada kaset',
        'Atur kedua processus styloideus berjarak sama terhadap kaset agar tidak terjadi rotasi',
        'Arahkan pasien rileks; beri sandbag di kedua sisi lengan dan softbag di bawah untuk kenyamanan',
      ],
      centralRay: 'Vertikal tegak lurus terhadap kaset',
      centralPoint: 'Pertengahan wrist joint',
      ffd: '100 cm',
      faktorEksposi: '40–50 kVp, 4–5 mAs, non grid, film speed 400',
      kriteria: [],
      gambar: [
        {
          src: '/img/wrist/umum-2.webp',
          caption: 'Radiograf anatomi AP wrist joint',
        },
      ],
      sumber: 'hal 3-4',
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
        'Letakkan tangan tegak miring di atas kaset dengan sisi jari kelingking menempel dan jari saling bertumpuk; tangan dan lengan satu garis lurus',
        'Atur kedua processus styloideus agar saling superposisi',
        'Arahkan pasien dalam keadaan rileks untuk menghindari pergerakan',
        'Beri softbag di kedua sisi tangan dan sandbag di sisi lengan untuk fiksasi',
      ],
      centralRay: 'Vertikal tegak lurus terhadap kaset',
      centralPoint: 'Pertengahan wrist joint',
      ffd: '100 cm',
      faktorEksposi: '40–50 kVp, 4–5 mAs, non grid, film speed 400',
      kriteria: [],
      gambar: [
        {
          src: '/img/wrist/umum-3.webp',
          caption: 'Radiograf anatomi lateral wrist joint',
        },
      ],
      sumber: 'hal 4-5',
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
    'Bilas (rinsing) film, masukkan ke cairan fixer agar gambaran menjadi tetap, lalu cuci (washing) dan keringkan pada mesin pengering',
    'Berikan kartu ambil foto bila hasil sudah baik dan persilakan pasien kembali ke asal rujukan',
  ],
  evaluasi: [
    'Sebutkan seluruh bagian anatomi tangan/pergelangan yang masuk dalam gambaran radiograf',
    'Identifikasi batas proksimal dan batas distal pada gambaran radiograf',
    'Lakukan kritik dan evaluasi radiograf serta susun laporan praktek',
  ],
};
