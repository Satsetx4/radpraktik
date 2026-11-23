import type { Modul } from '../types';

export const modulPedis: Modul = {
  slug: 'pedis',
  kode: '301-6A',
  judul: 'Ossa Pedis',
  region: 'ekstremitas-bawah',
  kompetensi:
    'Mahasiswa mampu melakukan teknik radiografi ossa pedis dengan baik dan benar melalui simulasi, role play, dan realplay.',
  sorotan: [
    'Dua proyeksi utama: Antero Posterior (AP) dan Oblik rotasi ke arah medial 30°',
    'Central ray AP tegak lurus atau menyudut 10° ke posterior; Oblik vertikal tegak lurus',
    'Central point kedua proyeksi sama, yaitu pada base metatarsal digiti III',
    'Kaset 24×30 cm dipasang membujur dengan plantar pedis menempel saat knee fleksi',
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
        'Perkenalkan diri, lakukan anamnesis keluhan, dan pastikan sisi kaki kanan atau kiri',
        'Berikan penjelasan singkat prosedur pemeriksaan sebelum pemotretan dimulai',
        'Pastikan kaki bebas dari benda logam atau pengotor seperti sepatu dan gelang kaki',
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
      id: 'ap',
      nama: 'Proyeksi Antero Posterior (AP)',
      posisiPasien: [
        'Pasien supine atau duduk di atas meja pemeriksaan',
      ],
      posisiObjek: [
        'Fleksikan knee dan tempelkan plantar pedis kaki yang diperiksa pada meja pemeriksaan',
        'Ekstensikan kaki yang lain agar tidak mengganggu lapangan penyinaran',
        'Posisikan kaset membujur tubuh dan atur seluruh kaki masuk dalam area kaset',
        'Pastikan tidak ada rotasi pada kaki dan arahkan pasien rileks agar tidak bergerak',
      ],
      centralRay: 'Tegak lurus atau menyudut 10° ke arah posterior',
      centralPoint: 'Base metatarsal digiti III',
      ffd: '100 cm',
      faktorEksposi: '45–50 kVp, 3–4 mAs, non grid, film speed 300',
      kriteria: [
        'Tidak tampak rotasi pada pedis',
        'Jarak antar pertengahan diafisis metatarsal II sampai IV tampak sama lebar',
        'Tampak tumpang tindih pada basis metatarsal II sampai V',
        'Tampak visualisasi phalanges, tarsal distal dari talus, dan seluruh metatarsal',
      ],
      gambar: [
        {
          src: '/img/pedis/ap-1.webp',
          caption: 'Posisi objek proyeksi AP ossa pedis',
        },
        {
          src: '/img/pedis/ap-2.webp',
          caption: 'Radiograf anatomi AP ossa pedis',
        },
      ],
      sumber: 'hal 4',
    },
    {
      id: 'oblik',
      nama: 'Proyeksi Oblik (Rotasi ke Arah Medial)',
      posisiPasien: [
        'Pasien supine atau duduk di atas meja pemeriksaan',
      ],
      posisiObjek: [
        'Fleksikan knee dan tempelkan plantar pedis kaki yang diperiksa pada meja pemeriksaan',
        'Ekstensikan kaki yang lain',
        'Rotasikan kaki ke arah medial hingga plantar pedis membentuk sudut 30° terhadap kaset; beri fiksasi bila perlu',
        'Posisikan kaset membujur tubuh, pastikan seluruh kaki masuk area kaset, dan arahkan pasien rileks',
      ],
      centralRay: 'Vertikal tegak lurus terhadap kaset',
      centralPoint: 'Base metatarsal digiti III',
      ffd: '100 cm',
      faktorEksposi: '45–50 kVp, 3–4 mAs, non grid, film speed 300',
      kriteria: [
        'Basis metatarsal III sampai V tampak bebas dari superposisi',
        'Tulang tarsal bagian lateral tampak dengan superposisi lebih sedikit dibanding AP',
        'Tampak celah sendi tarsometatarsal dan intertarsal bagian lateral serta sinus tarsi',
        'Tuberositas metatarsal V, basis metatarsal I–II, dan ruang antar batang metatarsal II–V tampak jelas',
      ],
      gambar: [
        {
          src: '/img/pedis/oblik-1.webp',
          caption: 'Posisi objek proyeksi oblik ossa pedis',
        },
        {
          src: '/img/pedis/oblik-2.webp',
          caption: 'Radiograf anatomi oblik ossa pedis',
        },
      ],
      sumber: 'hal 5',
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
    'Proses film di kamar gelap: matikan lampu general, buka kaset, dan pasang film pada hanger',
    'Masukkan film ke cairan developer (±4 menit) hingga muncul gambaran laten dengan inspeksi singkat safety light',
    'Bilas film pada tangki rinsing, masukkan ke cairan fixer, lalu cuci (washing) dan keringkan pada mesin pengering',
    'Arahkan pasien menunggu hasil pemrosesan film dan persilakan berganti baju kembali',
    'Berikan kartu ambil foto bila hasil sudah baik dan persilakan pasien kembali ke asal rujukan',
  ],
  evaluasi: [
    'Gambarkan anatomi objek dan sebutkan bagian-bagian tulang ossa pedis yang tampak',
    'Bandingkan kriteria anatomi radiograf phantom ossa pedis dengan standar evaluasi proyeksi AP dan AP oblik',
    'Nilai radiograf menggunakan form evaluasi dan susun laporan praktek dengan minimal 1 textbook maksimal 1 hari pasca praktek',
  ],
};
