import type { Modul } from '../types';

export const modulCervical: Modul = {
  slug: 'cervical',
  kode: '301-11',
  judul: 'Vertebra Cervical',
  region: 'vertebra',
  kompetensi:
    'Mahasiswa mampu melakukan teknik radiografi os cervicalis dengan baik dan benar melalui simulasi, role play, dan realplay.',
  sorotan: [
    'Tiga proyeksi utama: AP (15–20° cranial), Lateral, dan AP Axial Oblik (RPO/LPO)',
    'FFD proyeksi AP sebesar 100 cm, sedangkan Lateral dan AP Axial Oblik memakai FFD 152 cm',
    'Dagu pasien sedikit menengadah pada semua proyeksi agar tidak menghalangi cervical atas',
    'Central point seluruh proyeksi diarahkan ke C4 setinggi cartilago thyroidea (jakun)',
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
        'Perkenalkan diri, lakukan anamnesis keluhan, dan pertimbangkan curvatura cervicalis',
        'Berikan penjelasan ringkas mengenai prosedur sebelum pemeriksaan dimulai',
        'Pastikan tidak ada benda logam atau perhiasan pada area pemotretan leher',
      ],
    },
    {
      judul: 'Persiapan Alat & Bahan',
      poin: [
        'Pesawat sinar-X siap pakai beserta meteran dan penggaris kaliper',
        'Kaset dan film radiografi ukuran 18×24 cm serta alat bantu penyangga kepala',
        'Marker R/L, plester, gunting, pelindung gonad, dan kaca mata Pb bila tersedia',
      ],
    },
  ],
  proyeksi: [
    {
      id: 'ap',
      nama: 'Proyeksi Anterior Posterior (AP)',
      posisiPasien: [
        'Atur pasien dalam posisi erect atau supine dengan kedua tangan di samping tubuh',
        'Minta kedua bahu pasien rileks menggantung lurus ke bawah',
      ],
      posisiObjek: [
        'Pusatkan midsagittal plane (MSP) pasien tegak lurus pada midline bucky-table',
        'Minta dagu pasien sedikit menengadah agar tidak menghalangi tulang cervicalis atas',
        'Gunakan penyangga kepala bila curvatura lordotic menonjol untuk mereduksi distorsi gambar',
      ],
      centralRay: 'Vertikal atau horizontal menyudut 15–20° cranial melewati C4 ke pertengahan kaset',
      centralPoint: 'C4 (ujung atas permukaan cartilago thyroidea / jakun)',
      ffd: '100 cm',
      faktorEksposi: '60–65 kVp, 15–20 mAs, grid, film speed 400',
      kriteria: [
        'Area C3–T2 dan jaringan lunak sekitar tampak; terlihat 5 corpus cervical bawah dan 2–3 costae atas',
        'Bayangan mandibula dan os occipitale superposisi di atas atlas dan sebagian besar axis',
        'Celah diskus intervertebralis membuka; processus transversus dan processus articularis superposisi',
        'Processus spinosus berjarak sama dari pedikel dan angulus mandibula berjarak sama dari vertebra',
      ],
      gambar: [
        {
          src: '/img/cervical/ap-1.webp',
          caption: 'Posisi erect dan recumbent AP axial cervical',
        },
        {
          src: '/img/cervical/umum-7.webp',
          caption: 'Radiograf anatomi AP axial cervical',
        },
      ],
      sumber: 'hal 6',
    },
    {
      id: 'lateral',
      nama: 'Proyeksi Lateral (LAT)',
      posisiPasien: [
        'Posisi erect: kedua bahu rileks menggantung ke bawah dengan sisi bahu yang difoto menempel kaset vertikal',
        'Posisi tidur recumbent: miring pada sisi bahu yang difoto, lengan abduksi ke ventral dan tangan merapat di depan kepala',
        'Beri penyangga sisi lateral kepala agar sumbu memanjang vertebra cervicalis sejajar kaset',
      ],
      posisiObjek: [
        'Pusatkan midcoronal plane (MCP) pasien tegak lurus pada midline bucky-table dan MSP sejajar kaset',
        'Minta dagu pasien sedikit menengadah agar tidak menghalangi tulang cervicalis atas',
      ],
      centralRay: 'Vertikal atau horizontal tegak lurus melewati C4 ke pertengahan kaset',
      centralPoint: 'C4 (setinggi cartilago thyroidea / jakun pada MCP)',
      ffd: '152 cm',
      faktorEksposi: '60–65 kVp, 15–20 mAs, grid, film speed 400',
      kriteria: [
        'Semua C1–C7 tampak hingga minimal sepertiga T1; bahu diturunkan untuk mengurangi superposisi C7',
        'Leher ekstensi sehingga ramus mandibula tidak tumpang tindih dengan atlas atau axis',
        'Kedua ramus mandibula nyaris saling superposisi sempurna tanpa tanda rotasi atau tilt',
        'Sendi zygapophyseal membuka, C4 berada di pusat radiograf, serta tulang dan jaringan lunak detail',
      ],
      gambar: [
        {
          src: '/img/cervical/lateral-1.webp',
          caption: 'Posisi erect lateral cervical (metode Grandy)',
        },
        {
          src: '/img/cervical/umum-6.webp',
          caption: 'Radiograf anatomi lateral cervical',
        },
      ],
      sumber: 'hal 7',
    },
    {
      id: 'ap-axial-oblik',
      nama: 'Proyeksi AP Axial Oblik (RPO / LPO)',
      posisiPasien: [
        'Dari posisi lateral, atur tubuh erect atau supine oblik 45° terhadap kaset (misal RPO)',
        'Letakkan kedua tangan di samping tubuh dengan kedua bahu rileks lurus ke bawah',
      ],
      posisiObjek: [
        'Atur MCP leher membentuk sudut 45° terhadap kaset; perpotongan MSP dan MCP leher di midline bucky-table',
        'Minta dagu sedikit menengadah agar tidak menghalangi cervical atas',
        'Gunakan penyangga kepala bila curvatura lordotic menonjol dan hindari posisi torsi (terpelintir)',
      ],
      centralRay: 'Vertikal atau horizontal menyudut 15–20° cranial melewati C4 ke pertengahan kaset',
      centralPoint: 'C4 (ujung atas permukaan cartilago thyroidea / jakun)',
      ffd: '152 cm',
      faktorEksposi: '60–65 kVp, 15–20 mAs, grid, film speed 400',
      kriteria: [
        'Foramina intervertebralis tampak membuka dari C2–C3 sampai C7–T1 dengan ukuran dan kontur sama',
        'Celah diskus intervertebralis tampak membuka serta vertebra C1–C7 dan T1 tervisualisasi',
        'Atlas dan axis tidak terhalang dagu pasien serta os occipitale tidak menutupi tulang axis',
      ],
      gambar: [
        {
          src: '/img/cervical/ap-oblik-1.webp',
          caption: 'Posisi erect LPO dan recumbent RPO cervical',
        },
        {
          src: '/img/cervical/umum-8.webp',
          caption: 'Radiograf oblik foramina intervertebralis cervical',
        },
      ],
      sumber: 'hal 8',
    },
  ],
  proteksi: [
    'Gunakan pelindung gonad pada daerah panggul agar organ reproduksi terlindungi dari sinar hambur',
    'Gunakan kaca mata Pb pelindung retina mata pasien apabila fasilitas tersedia',
    'Atur luas lapangan penyinaran sebatas objek vertebra cervicalis yang difoto',
    'Minta orang yang tidak berkepentingan keluar ruang pemeriksaan; pendamping wajib memakai apron',
    'Hindari pengulangan pemotretan; bila memakai AEC, aktifkan detektor tengah pada density neutral (N)',
  ],
  pascaPemeriksaan: [
    'Proses film di kamar gelap: matikan lampu general, buka kaset, dan pasang film pada hanger',
    'Masukkan film ke cairan developer hingga muncul gambaran laten (±4 menit) sambil inspeksi singkat dengan safety light',
    'Bilas (rinsing) film, masukkan ke cairan fixer hingga gambaran tetap, lalu cuci (washing) dan keringkan',
    'Bantu pasien turun dari meja pemeriksaan, minta menunggu hasil, dan berikan kartu ambil foto bila hasil sudah baik',
  ],
  evaluasi: [
    'Gambarkan ulang visualisasi anatomi organ vertebra cervicalis yang diperiksa',
    'Sebutkan seluruh bagian anatomi vertebra cervicalis yang masuk dalam gambaran radiograf',
    'Bandingkan hasil dengan kriteria standar proyeksi AP, Lateral, serta R/LPO lalu susun laporan praktek',
  ],
};
