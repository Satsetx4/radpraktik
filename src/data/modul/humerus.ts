import type { Modul } from '../types';

export const modulHumerus: Modul = {
  slug: 'humerus',
  kode: '301-4A',
  judul: 'Os Humerus',
  region: 'ekstremitas-atas',
  kompetensi:
    'Mahasiswa mampu melakukan teknik radiografi os humerus dengan baik dan benar melalui simulasi, role play, dan realplay.',
  sorotan: [
    'Dua proyeksi utama: AP dan Lateral pada kaset 24×30 cm (berdiri atau supine)',
    'Tepi atas kaset diatur 2,5 cm di atas sendi bahu dan tepi bawah mencakup sendi siku',
    'Proyeksi Lateral dicapai dengan endorotasi maksimum hingga tepi radial menempel meja (supine) atau dorso manus di pinggang (berdiri)',
    'Anti-rotasi AP: kedua epicondylus berjarak sama; Lateral: kedua epicondylus saling superposisi',
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
        'Perkenalkan diri, amati keadaan umum, dan anamnesis keluhan (kanan/kiri, atas/bawah)',
        'Berikan penjelasan singkat prosedur; lepas logam di lengan dan ganti baju pasien bila perlu',
      ],
    },
    {
      judul: 'Persiapan Alat & Bahan',
      poin: [
        'Pesawat sinar-X siap pakai, meteran, penggaris kaliper, dan radiographic phantom',
        'Kaset radiografi, film, dan hanger ukuran 24×30 cm',
        'Marker R/L, plester, gunting, dan lembar Pb',
      ],
    },
  ],
  proyeksi: [
    {
      id: 'ap',
      nama: 'Proyeksi Antero Posterior (AP)',
      posisiPasien: [
        'Pasien berdiri atau tidur supine menghadap ke tabung sinar-X',
      ],
      posisiObjek: [
        'Letakkan lengan atas di permukaan kaset atau meja pemeriksaan pada posisi supine; lengan dan tangan lurus dalam satu garis',
        'Atur tepi atas kaset 2,5 cm di atas sendi bahu dan tepi bawah mencakup sendi siku agar kedua sendi masuk kaset',
        'Atur kedua epicondylus berjarak sama terhadap kaset agar tidak terjadi rotasi',
        'Arahkan pasien dalam keadaan rileks untuk menghindari pergerakan',
      ],
      centralRay: 'Vertikal atau horizontal, tegak lurus terhadap kaset',
      centralPoint: 'Pertengahan humerus',
      ffd: '100 cm',
      faktorEksposi: '55–60 kVp, 7–8 mAs, non grid, film speed 400',
      kriteria: [
        'Sendi siku dan sendi bahu tampak jelas pada radiograf',
        'Kedua epicondylus terlihat maksimal tanpa rotasi',
        'Caput humeri dan greater tubercle tampak in profile, dengan lesser tubercle di antara keduanya',
        'Densitas radiograf antara humerus proksimal dan distal seragam tanpa variasi besar',
      ],
      gambar: [
        {
          src: '/img/humerus/ap-2.webp',
          caption: 'Posisi berdiri proyeksi AP os humerus',
        },
        {
          src: '/img/humerus/ap-3.webp',
          caption: 'Radiograf proyeksi AP os humerus',
        },
      ],
      sumber: 'hal 4',
    },
    {
      id: 'lateral',
      nama: 'Proyeksi Lateral',
      posisiPasien: [
        'Pasien berdiri atau tidur supine menghadap ke tabung sinar-X',
      ],
      posisiObjek: [
        'Dari posisi AP, endorotasikan lengan bawah maksimum hingga tepi radial manus menempel meja (supine) atau dorso manus menempel pinggang (berdiri)',
        'Atur tepi atas kaset 2,5 cm di atas sendi bahu dan tepi bawah mencakup sendi siku agar kedua sendi masuk kaset',
        'Atur kedua epicondylus saling superposisi',
        'Arahkan pasien dalam keadaan rileks untuk menghindari pergerakan',
      ],
      centralRay: 'Vertikal atau horizontal, tegak lurus terhadap kaset',
      centralPoint: 'Pertengahan humerus',
      ffd: '100 cm',
      faktorEksposi: '55–60 kVp, 7–8 mAs, non grid, film speed 400',
      kriteria: [
        'Sendi siku dan sendi bahu tampak jelas pada radiograf',
        'Kedua epicondylus saling superposisi',
        'Lesser tubercle tampak superposisi di atas caput humeri',
        'Densitas radiograf humerus proksimal dan distal seimbang',
      ],
      gambar: [
        {
          src: '/img/humerus/ap-1.webp',
          caption: 'Posisi berdiri dorso manus di pinggang (lateral)',
        },
        {
          src: '/img/humerus/lateral-1.webp',
          caption: 'Radiograf proyeksi lateral os humerus',
        },
      ],
      sumber: 'hal 5',
    },
  ],
  proteksi: [
    'Gunakan apron untuk menutupi daerah panggul pasien agar organ reproduksi terlindungi dari sinar hambur',
    'Atur luas lapangan seoptimal mungkin, objek masuk penyinaran maksimal seluas lapangan kaset',
    'Arahkan pasien agar pandangan mata menjauh dari sumber sinar-X',
    'Minta orang tidak berkepentingan keluar ruangan; pendamping yang terpaksa berada di ruang wajib memakai apron',
    'Hindari pengulangan foto radiograf',
  ],
  pascaPemeriksaan: [
    'Tulis identitas radiografi (unit, no. reg, nama, umur, jenis kelamin, pemeriksaan, tanggal) lalu masukkan ke ID camera',
    'Proses film di kamar gelap: matikan lampu general, buka kaset, dan pasang film pada hanger',
    'Masukkan film ke developer hingga muncul gambaran laten (4 menit) dengan inspeksi singkat memakai safety light',
    'Bilas (rinsing), masukkan ke cairan fixer hingga gambaran tetap, lalu cuci (washing) dan keringkan',
    'Bantu pasien turun (bila supine), berikan kartu ambil foto bila hasil baik, dan persilakan kembali ke asal rujukan',
  ],
  evaluasi: [
    'Gambarkan anatomi os humerus dan sebutkan bagian-bagian organnya',
    'Bandingkan kriteria anatomi radiograf phantom os humerus proyeksi AP dan lateral terhadap standar evaluasi',
    'Lakukan penilaian radiograf dengan form evaluasi serta susun laporan praktek beserta minimal 1 referensi textbook',
  ],
};
