import type { Modul } from '../types';

export const modulCalcaneus: Modul = {
  slug: 'calcaneus',
  kode: '301-6B',
  judul: 'Os Calcaneus',
  region: 'ekstremitas-bawah',
  kompetensi:
    'Mahasiswa mampu melakukan teknik radiografi os calcaneus dengan baik dan benar melalui simulasi, role play, dan realplay.',
  sorotan: [
    'Dua proyeksi utama: AP Axial (plantodorsal) dan Lateral (mediolateral)',
    'Proyeksi AP Axial menyudutkan tabung 40° ke arah cephalad dengan plantar pedis tegak lurus kaset',
    'Proyeksi Lateral menggunakan CP 2,5 cm di bawah medial malleolus dengan FFD 100 cm',
    'Menggunakan kaset ukuran 18×24 cm dipasang membujur dengan fiksasi sandbag di knee/cruris',
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
        'Kaset, film, dan hanger ukuran 18×24 cm',
        'Marker, plester, gunting, lembar Pb, apron, softbag, dan sandbag',
      ],
    },
  ],
  proyeksi: [
    {
      id: 'ap-axial',
      nama: 'Proyeksi AP Axial (Plantodorsal)',
      posisiPasien: [
        'Pasien supine atau duduk di atas meja pemeriksaan',
      ],
      posisiObjek: [
        'Atur ankle joint kaki yang diperiksa tepat di pertengahan kaset',
        'Fleksikan dorsal pedis hingga plantar pedis tegak lurus terhadap kaset',
        'Posisikan kaset membujur dan arahkan pasien rileks agar tidak bergerak',
      ],
      centralRay: 'Menyudut 40° ke arah cephalad',
      centralPoint: 'Base metatarsal digiti III',
      ffd: '100 cm',
      faktorEksposi: '50–55 kVp, 4–5 mAs, non grid, film speed 300',
      kriteria: [
        'Os calcaneus dan subtalar joint tampak jelas',
        'Tidak terjadi rotasi calcaneus (metatarsal I dan V tidak terproyeksi ke sisi kaki)',
        'Bagian anterior calcaneus tampak tanpa densitas berlebih di bagian posterior',
      ],
      gambar: [
        {
          src: '/img/calcaneus/ap-axial-1.webp',
          caption: 'Posisi proyeksi AP axial os calcaneus',
        },
        {
          src: '/img/calcaneus/ap-axial-2.webp',
          caption: 'Radiograf anatomi AP axial os calcaneus',
        },
      ],
      sumber: 'hal 4',
    },
    {
      id: 'lateral',
      nama: 'Proyeksi Lateral (Mediolateral)',
      posisiPasien: [
        'Pasien recumbent di atas meja pemeriksaan menghadap ke arah kaki yang akan diperiksa',
      ],
      posisiObjek: [
        'Atur pertengahan os calcaneus sejajar dengan kaset',
        'Beri sandbag pada knee atau cruris agar plantar pedis tetap tegak lurus kaset',
        'Posisikan kaset membujur dan arahkan pasien rileks untuk menghindari pergerakan',
      ],
      centralRay: 'Vertikal tegak lurus terhadap kaset',
      centralPoint: '2,5 cm di bawah medial malleolus',
      ffd: '100 cm',
      faktorEksposi: '45–50 kVp, 3–4 mAs, non grid, film speed 300',
      kriteria: [
        'Tidak terjadi rotasi pada os calcaneus',
        'Densitas sustentaculum tali, tuberositas lateral, dan jaringan lunak tampak baik',
        'Tampak sinus tarsi, ankle joint, dan tulang tarsal di sekitarnya',
      ],
      gambar: [
        {
          src: '/img/calcaneus/lateral-1.webp',
          caption: 'Posisi proyeksi lateral os calcaneus',
        },
        {
          src: '/img/calcaneus/lateral-2.webp',
          caption: 'Radiograf anatomi lateral os calcaneus',
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
    'Gambarkan anatomi objek dan sebutkan bagian-bagian tulang os calcaneus yang tampak',
    'Bandingkan kriteria anatomi radiograf dengan standar evaluasi proyeksi AP axial dan lateral',
    'Nilai radiograf menggunakan form evaluasi dan susun laporan praktek dengan minimal 1 textbook maksimal 1 hari pasca praktek',
  ],
};
