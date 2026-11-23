import type { Modul } from '../types';

export const modulSacroiliac: Modul = {
  slug: 'sacroiliac',
  kode: '301-10B',
  judul: 'Sacro-Iliac Joints',
  region: 'pelvis',
  kompetensi:
    'Mahasiswa mampu melakukan teknik radiografi sacro-iliac joint dengan baik dan benar melalui simulasi, role play, dan realplay.',
  sorotan: [
    'Dua proyeksi utama: AP Axial (CR menyudut 5°–10° cephalad) dan AP Oblik 15°–25° kanan dan kiri',
    'Pada AP Axial, bahu diberi bantalan untuk mengeliminasi kurvatura lumbal dan lutut difleksikan',
    'Pada AP Oblik, tubuh dimiringkan ke arah objek yang tidak diperiksa; CP 2,5 cm medial dari SIAS yang diperiksa',
  ],
  praPemeriksaan: [
    {
      judul: 'Administrasi',
      poin: [
        'Cek lembar permintaan: identitas pasien, no. CM/RM, asal rujukan (IRJAL, IRNA, IGD, dokter praktek), dan riwayat',
        'Catat identitas di buku registrasi, beri nomor foto (no. reg radiologi), dan tulis pada lembar permintaan',
        'Siapkan kartu ambil foto serta amplop foto sesuai ukuran film yang digunakan',
      ],
    },
    {
      judul: 'Persiapan Pasien',
      poin: [
        'Panggil pasien sesuai lembar permintaan dan cocokkan nama, umur, serta alamat',
        'Perkenalkan diri, amati keadaan umum, dan tanyakan bagian atau sisi keluhan tanpa menyebut isi permintaan',
        'Berikan penjelasan singkat mengenai prosedur pemeriksaan kepada pasien',
        'Pastikan tidak ada benda logam atau benda lain di area yang akan diperiksa',
      ],
    },
    {
      judul: 'Persiapan Alat & Bahan',
      poin: [
        'Pesawat sinar-X siap pakai beserta meteran dan penggaris kaliper',
        'Kaset radiografi dan film ukuran 24×30 cm serta marker, plester, dan gunting',
        'Bantalan bahu, alat bantu lutut, bantalan non-opak 15°–25°, dan gonad shield',
      ],
    },
  ],
  proyeksi: [
    {
      id: 'ap-axial',
      nama: 'Proyeksi Anterior Posterior Axial (AP Axial)',
      posisiPasien: ['Atur pasien dalam posisi supine di atas meja pemeriksaan'],
      posisiObjek: [
        'Atur tubuh pasien agar pelvis tidak rotasi, ditandai kedua SIAS berjarak sama dari permukaan meja pemeriksaan',
        'Beri bantalan pada bahu (shoulder) untuk mengeliminasi kurvatura lumbal',
        'Fleksikan kedua lutut (knee) dan tempatkan alat bantu di bawah lutut agar posisi pasien nyaman',
      ],
      centralRay: 'Menyudut 5°–10° cephalad',
      centralPoint: 'Midline setinggi pertengahan antara SIAS dan tepi atas (superior border) symphysis pubis',
      ffd: '100 cm',
      kaset: '24×30 cm',
      faktorEksposi: '60–75 kVp, 10–20 mAs, grid, film speed 400, eksposi tahan napas',
      kriteria: [],
      gambar: [
        {
          src: '/img/sacroiliac/ap-axial-1.webp',
          caption: 'Posisi AP axial dengan penyudutan sinar cephalad',
        },
        {
          src: '/img/sacroiliac/umum-1.webp',
          caption: 'Radiograf anatomi AP sacro-iliac joints',
        },
      ],
      sumber: 'hal 4',
    },
    {
      id: 'ap-oblik',
      nama: 'Proyeksi Anterior Posterior Oblik (AP Oblik)',
      posisiPasien: ['Atur pasien dalam posisi supine di atas meja pemeriksaan'],
      posisiObjek: [
        'Dari posisi supine, miringkan tubuh 15°–25° ke arah objek yang tidak diperiksa',
        'Angkat SIAS hingga terletak di lateral posterior superior iliac spine (PSIS)',
        'Beri bantalan non-opak di bawah bagian tubuh yang diangkat dan tempatkan bantalan di antara lutut',
        'Buat proyeksi oblik kanan dan kiri sebagai perbandingan',
      ],
      centralRay: 'Vertikal tegak lurus terhadap kaset (IR)',
      centralPoint: '2,5 cm ke arah medial dari SIAS yang diperiksa',
      ffd: '100 cm',
      kaset: '24×30 cm',
      faktorEksposi: '60–75 kVp, 10–20 mAs, grid, film speed 400, eksposi tahan napas',
      kriteria: [],
      gambar: [
        {
          src: '/img/sacroiliac/ap-oblik-1.webp',
          caption: 'Posisi AP oblik 15°–25° dengan bantalan penyangga',
        },
        {
          src: '/img/sacroiliac/ap-oblik-3.webp',
          caption: 'Radiograf perbandingan oblik kanan dan kiri SIJ',
        },
      ],
      sumber: 'hal 5-7',
    },
  ],
  proteksi: [
    'Gunakan gonad shield untuk melindungi organ reproduksi pasien dari sinar hambur',
    'Atur luas lapangan penyinaran seluas objek yang difoto',
    'Persilakan orang yang tidak berkepentingan keluar ruangan; pendamping yang terpaksa ada wajib memakai apron',
  ],
  pascaPemeriksaan: [
    'Proses film di kamar gelap: matikan lampu general, buka kaset, dan pasang film pada hanger',
    'Masukkan film ke cairan developer hingga muncul gambaran laten (±4 menit) sambil inspeksi singkat dengan safety light',
    'Lakukan rinsing di tangki bilas, masukkan ke cairan fixer agar gambaran tetap, lalu washing dan keringkan',
    'Bantu pasien turun dari meja pemeriksaan dan arahkan menunggu hasil pemrosesan film',
    'Berikan kartu ambil foto bila hasil sudah baik dan persilakan pasien kembali ke asal rujukan',
  ],
  evaluasi: [
    'Gambarkan anatomi objek dan sebutkan semua bagian anatomi sendi sacro-iliac yang masuk dalam radiograf',
    'Bandingkan kriteria radiograf yang dibuat dengan kriteria standar memakai form evaluasi',
    'Susun laporan praktek lengkap dengan minimal 1 textbook dan kumpulkan paling lambat 1 hari setelah praktek',
  ],
};
