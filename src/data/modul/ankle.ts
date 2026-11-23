import type { Modul } from '../types';

export const modulAnkle: Modul = {
  slug: 'ankle',
  kode: '301-7A',
  judul: 'Ankle Joint',
  region: 'ekstremitas-bawah',
  kompetensi:
    'Mahasiswa mampu melakukan teknik radiografi ankle joint dengan baik dan benar melalui simulasi, role play, dan realplay.',
  sorotan: [
    'Dua proyeksi utama: AP (rotasi medial 5–7° agar true AP) dan Lateral mediolateral (rotasi lateral 90°)',
    'Kaset 18×24 cm dipasang melintang dibagi dua untuk proyeksi AP dan Lateral pada satu kaset',
    'CP proyeksi AP di pertengahan kedua maleolus; Lateral di maleolus medialis (52 kVp)',
    'Memakai ID camera untuk pemberian identitas radiografi sebelum pemrosesan film kamar gelap',
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
        'Pastikan tidak ada benda logam atau penghalang di kaki seperti gelang kaki dan celana panjang tebal',
      ],
    },
    {
      judul: 'Persiapan Alat & Bahan',
      poin: [
        'Pesawat sinar-X siap pakai beserta meteran dan radiographic phantom',
        'Kaset, film, dan hanger ukuran 18×24 cm',
        'Marker, plester, gunting, lembar Pb, apron, softbag, dan sandbag',
      ],
    },
  ],
  proyeksi: [
    {
      id: 'ap',
      nama: 'Proyeksi Antero Posterior (AP)',
      posisiPasien: [
        'Pasien supine di atas meja pemeriksaan',
      ],
      posisiObjek: [
        'Ekstensikan kaki yang diperiksa lalu rotasikan ke arah medial 5–7° agar didapat true AP',
        'Atur pedis dalam posisi dorsofleksi',
        'Fleksikan knee kaki yang lain dengan plantar pedis menempel di atas meja pemeriksaan',
        'Pasang kaset melintang dibagi dua dan letakkan pertengahan kedua maleolus di pertengahan kaset',
        'Arahkan pasien dalam keadaan rileks untuk menghindari pergerakan',
      ],
      centralRay: 'Vertikal tegak lurus terhadap kaset',
      centralPoint: 'Pertengahan kedua maleolus',
      ffd: '100 cm',
      faktorEksposi: '50–55 kVp, 3–4 mAs, non grid, film speed 300',
      kriteria: [
        'Tampak celah sendi tibiotalar dan ankle joint berada di tengah area eksposi',
        'Tumpang tindih normal artikulasi tibiofibular dengan tuberkel anterior sedikit superposisi fibula',
        'Talus sedikit tumpang tindih dengan fibula distal dan tidak ada tumpang tindih pada artikulasi talomaleolar medial',
        'Maleolus medialis dan lateralis, talus dengan densitas tepat, serta jaringan lunak tampak jelas',
      ],
      gambar: [
        {
          src: '/img/ankle/ap-1.webp',
          caption: 'Posisi proyeksi AP ankle joint',
        },
        {
          src: '/img/ankle/ap-2.webp',
          caption: 'Radiograf anatomi AP ankle joint',
        },
      ],
      sumber: 'hal 4',
    },
    {
      id: 'lateral',
      nama: 'Proyeksi Lateral (Arah Sinar Mediolateral)',
      posisiPasien: [
        'Pasien supine di atas meja pemeriksaan',
      ],
      posisiObjek: [
        'Atur kaki yang akan diperiksa dorsofleksi dengan knee ekstensi',
        'Rotasikan kaki 90° ke arah lateral hingga ankle joint dalam posisi true lateral',
        'Gunakan alat bantu fiksasi untuk mempertahankan posisi pasien',
        'Posisikan kaset pada area pembagian yang belum diekspose dan arahkan pasien rileks',
      ],
      centralRay: 'Vertikal tegak lurus terhadap kaset',
      centralPoint: 'Maleolus medialis',
      ffd: '100 cm',
      faktorEksposi: '52 kVp, 3–4 mAs, non grid, film speed 300',
      kriteria: [
        'Ankle joint berada tepat di tengah area eksposi',
        'Sendi tibiotalar tampak jelas dengan kubah talus medial dan lateral saling superposisi',
        'Fibula tampak berada di setengah bagian posterior tibia',
        'Tibia dan fibula distal, talus, serta tarsal di sekitarnya tampak dengan densitas memadai',
      ],
      gambar: [
        {
          src: '/img/ankle/lateral-1.webp',
          caption: 'Posisi proyeksi lateral ankle joint',
        },
        {
          src: '/img/ankle/lateral-2.webp',
          caption: 'Radiograf anatomi lateral ankle joint',
        },
      ],
      sumber: 'hal 5',
    },
  ],
  proteksi: [
    'Gunakan apron untuk menutupi daerah panggul pasien agar organ reproduksi terlindungi dari sinar hambur',
    'Atur luas lapangan seoptimal mungkin agar objek masuk penyinaran, maksimal seluas lapangan kaset',
    'Persilakan orang yang tidak berkepentingan keluar ruang; pendamping yang terpaksa ada wajib memakai apron',
    'Hindari atau tidak melakukan pengulangan foto',
  ],
  pascaPemeriksaan: [
    'Beri identitas radiografi (unit, no. registrasi, nama, umur, jenis kelamin, pemeriksaan, tanggal) via ID camera',
    'Proses film di kamar gelap: matikan lampu general, buka kaset, dan pasang film pada hanger',
    'Masukkan film ke cairan developer (±4 menit) hingga muncul gambaran laten dengan inspeksi singkat safety light',
    'Bilas di tangki rinsing, masukkan ke fixer agar tetap, lalu cuci di tangki washing dan keringkan',
    'Arahkan pasien menunggu hasil, berganti baju kembali, beri kartu ambil foto bila baik, lalu kembali ke asal rujukan',
  ],
  evaluasi: [
    'Gambarkan anatomi objek dan sebutkan bagian-bagian anatomi ankle joint yang tampak',
    'Bandingkan kriteria anatomi radiograf dengan standar kriteria evaluasi proyeksi AP dan lateral',
    'Nilai radiograf menggunakan form evaluasi dan susun laporan praktek dengan minimal 1 textbook maksimal 1 hari pasca praktek',
  ],
};
