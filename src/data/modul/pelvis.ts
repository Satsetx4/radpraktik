import type { Modul } from '../types';

export const modulPelvis: Modul = {
  slug: 'pelvis',
  kode: '301-10C',
  judul: 'Pelvis',
  region: 'pelvis',
  kompetensi:
    'Mahasiswa mampu melakukan teknik radiografi pelvis dengan baik dan benar melalui simulasi, role play, dan realplay.',
  sorotan: [
    'Dua proyeksi utama: AP (true supine) dan Lateral (recumbent lateral) dengan kaset 30×40 cm',
    'Pada AP, rotasi internal kaki 15°–20° dikontraindikasikan pada kasus trauma atau patologis',
    'Pada Lateral, pasang pengganjal di bawah vertebra agar sejajar meja dan kedua SIAS segaris vertikal',
    'CP AP di pertengahan SIAS–symphysis pubis (5 cm inferior SIAS); CP Lateral 2,5 inci (5 cm) di atas trochanter mayor',
  ],
  praPemeriksaan: [
    {
      judul: 'Administrasi',
      poin: [
        'Cek lembar permintaan: identitas pasien, no. CM/RM, asal rujukan (poli, ranap, IGD, dokter praktek), dan riwayat',
        'Catat identitas di buku registrasi, beri nomor foto pasien, dan tulis juga pada lembar permintaan',
        'Siapkan kartu ambil foto serta amplop foto sesuai ukuran film yang digunakan',
      ],
    },
    {
      judul: 'Persiapan Pasien',
      poin: [
        'Panggil pasien sesuai lembar permintaan dan cocokkan nama, umur, serta alamat',
        'Perkenalkan diri, amati keadaan umum, dan tanyakan sisi keluhan tanpa membocorkan isi lembar permintaan',
        'Berikan penjelasan singkat mengenai apa yang akan dilakukan selama pemeriksaan',
        'Pastikan tidak ada benda logam atau benda lain pada daerah panggul yang akan diperiksa',
      ],
    },
    {
      judul: 'Persiapan Alat & Bahan',
      poin: [
        'Pesawat sinar-X siap pakai beserta meteran, penggaris kaliper, dan ID printer',
        'Kaset dan film radiografi ukuran 30×40 cm, marker, plester, gunting, serta alat pengolahan film',
        'Sandbag untuk fiksasi ankle joint, pengganjal vertebra, bantal penyangga lutut, dan gonad shield',
      ],
    },
  ],
  proyeksi: [
    {
      id: 'ap',
      nama: 'Proyeksi Anterior Posterior (AP)',
      posisiPasien: ['Pasien diposisikan supine di atas meja pemeriksaan'],
      posisiObjek: [
        'Atur MSP tubuh pada pertengahan meja pemeriksaan dalam posisi true supine',
        'Rotasikan internal kaki 15°–20° agar collum femoris paralel dengan IR (kontraindikasi pada kasus trauma atau patologis)',
        'Tempatkan sandbag di ankle joint agar posisi tidak berubah',
        'Atur kedua SIAS berjarak sama dari permukaan meja pemeriksaan agar tubuh tidak mengalami rotasi',
      ],
      centralRay: 'Tegak lurus pertengahan kaset (IR)',
      centralPoint:
        'Pertengahan antara SIAS dan symphysis pubis (2 inci / 5 cm inferior SIAS dan 2 inci / 5 cm superior symphysis pubis)',
      ffd: '100 cm',
      kaset: '30×40 cm',
      faktorEksposi: '60–65 kVp, 15–25 mAs, grid, film speed 400, eksposi tahan napas',
      kriteria: [
        'Seluruh pelvis beserta femur proksimal tampak; collum femoris tampak penuh tanpa superposisi',
        'Trochanter minor (bila tampak) berada di batas medial femur dan trochanter mayor tampak dalam profil',
        'Kedua ilium serta kedua trochanter mayor berjarak sama terhadap tepi radiograf',
        'Columna vertebralis bawah berada di tengah radiograf; sacrum dan coccyx segaris dengan symphysis pubis',
        'Foramina obturatoria simetris, ala ilium simetris, dan spina ischiadica tampak seimbang',
      ],
      gambar: [
        {
          src: '/img/pelvis/ap-1.webp',
          caption: 'Posisi pasien AP pelvis dengan rotasi internal kaki',
        },
        {
          src: '/img/pelvis/ap-2.webp',
          caption: 'Radiograf anatomi AP pelvis dengan penanda tulang',
        },
        {
          src: '/img/pelvis/ap-3.webp',
          caption: 'Detail anatomi pelvis, sacrum, dan femur proksimal',
        },
      ],
      sumber: 'hal 4-7',
    },
    {
      id: 'lateral',
      nama: 'Proyeksi Lateral',
      posisiPasien: ['Pasien diposisikan recumbent lateral di atas meja pemeriksaan'],
      posisiObjek: [
        'Pasien tidur miring pada salah satu sisi yang difoto dengan Mid Coronal Plane (MCP) di pertengahan meja',
        'Letakkan pengganjal di bawah columna vertebralis sehingga vertebra paralel dengan permukaan meja pemeriksaan',
        'Atur pelvis true lateral dengan kedua SIAS berada pada garis vertikal yang sama',
        'Tempatkan lutut (knee) satu di atas lutut lainnya serta beri bantal penyangga di lutut untuk stabilitas dan kenyamanan',
      ],
      centralRay: 'Vertikal tegak lurus terhadap kaset',
      centralPoint: '2,5 inci (5 cm) di atas trochanter mayor',
      ffd: '100 cm',
      kaset: '30×40 cm',
      faktorEksposi: '70–75 kVp, 16–25 mAs, grid, film speed 400',
      kriteria: [
        'Seluruh pelvis, femur proksimal, sacrum, dan coccyx tampak',
        'Tepi posterior os ischium dan os ilium saling superposisi serta kedua os femur saling superposisi',
        'Bayangan acetabulum saling superposisi konsentris (lingkaran fossa jauh dan dekat kaset berjarak merata)',
        'Arcus pubis tampak jelas tanpa tertutup oleh os femur',
      ],
      gambar: [
        {
          src: '/img/pelvis/lateral-1.webp',
          caption: 'Posisi recumbent lateral pelvis dengan pengganjal',
        },
        {
          src: '/img/pelvis/lateral-2.webp',
          caption: 'Radiograf anatomi proyeksi lateral pelvis',
        },
      ],
      sumber: 'hal 5-9',
    },
  ],
  proteksi: [
    'Gunakan gonad shield untuk melindungi organ reproduksi dari sinar hambur',
    'Atur luas lapangan penyinaran seluas objek yang diperiksa',
    'Persilakan orang yang tidak berkepentingan keluar ruangan; pendamping yang terpaksa ada wajib memakai apron',
  ],
  pascaPemeriksaan: [
    'Bantu pasien turun dari meja pemeriksaan dan arahkan menunggu hasil pemrosesan film',
    'Berikan kartu ambil foto bila hasil sudah baik dan persilakan pasien kembali ke asal rujukan',
    'Proses film di kamar gelap: matikan lampu general, buka kaset, dan pasang film pada hanger',
    'Masukkan film ke developer (±4 menit) dengan inspeksi singkat safety light hingga muncul gambaran laten',
    'Lakukan rinsing, masukkan ke fixer agar gambaran menjadi tetap, lalu washing dan keringkan pada mesin pengering',
  ],
  evaluasi: [
    'Gambarkan anatomi objek pelvis dan sebutkan bagian-bagian anatominya',
    'Bandingkan kriteria radiograf yang dibuat dengan standar kriteria menggunakan form evaluasi',
    'Susun laporan praktek lengkap dengan minimal 1 textbook dan kumpulkan paling lambat 1 hari setelah praktek',
  ],
};
