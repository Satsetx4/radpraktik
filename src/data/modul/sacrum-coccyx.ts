import type { Modul } from '../types';

export const modulSacrumCoccyx: Modul = {
  slug: 'sacrum-coccyx',
  kode: '301-14',
  judul: 'Os Sacrum & Coccygeus',
  region: 'vertebra',
  kompetensi:
    'Mahasiswa mampu melakukan teknik radiografi vertebra sacrum dan coccygeus dengan baik dan benar melalui simulasi, role play, dan realplay.',
  sorotan: [
    'Enam proyeksi untuk dua regio: AP, PA, dan Lateral masing-masing pada Sacrum dan Coccygeus',
    'Penyudutan AP berlawanan: Sacrum 15° cephalad, sedangkan Coccygeus 10° caudad (PA membalik arahnya)',
    'Proyeksi PA prone digunakan apabila pasien tidak dapat diposisikan supine',
    'CP Lateral Sacrum 9 cm posterior SIAS; Lateral Coccygeus bergeser lagi 5 cm ke inferior',
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
        'Perkenalkan diri, lakukan anamnesis keluhan panggul, dan tanyakan foto lama bila ada',
        'Berikan penjelasan ringkas mengenai prosedur sebelum pemeriksaan dimulai',
        'Pastikan tidak ada benda logam atau benda lain di daerah pelvis/panggul',
      ],
    },
    {
      judul: 'Persiapan Alat & Bahan',
      poin: [
        'Pesawat sinar-X siap pakai + bucky, meteran, serta radiographic phantom',
        'Kaset, film, dan hanger ukuran 24×30 cm beserta cairan prosesing dan pengering film',
        'Marker R/L, plester, gunting, lembar Pb, softbag, sandbag, dan apron',
      ],
    },
  ],
  proyeksi: [
    {
      id: 'sacrum-ap',
      nama: 'Proyeksi Anterior Posterior (AP) Sacrum',
      posisiPasien: ['Pasien diposisikan supine di atas meja pemeriksaan'],
      posisiObjek: [
        'Atur midsagittal plane (MSP) pasien tepat pada pertengahan meja pemeriksaan',
        'Fleksikan kedua lengan dan letakkan pada dada senyaman mungkin dalam posisi simetris',
        'Beri pengganjal pada bagian lutut kaki pasien',
        'Atur batas atas penyinaran pada lumbal IV–V, setinggi SIAS',
      ],
      centralRay: 'Menyudut 15° cephalad',
      centralPoint: '2 inci (5 cm) di atas symphysis pubis',
      ffd: '100 cm',
      kaset: '24×30 cm',
      faktorEksposi: '65–75 kVp, 16–20 mAs, film speed 400, tahan napas',
      kriteria: [
        'Sacrum bebas dari pemendekan (foreshortening) dengan lengkung sacrum tampak lurus',
        'Tulang pubis tidak tumpang tindih dengan sacrum dan materi fekal tidak menutupi sacrum',
        'Tidak ada rotasi (alae simetris); sacrum terpusat dan terlihat utuh',
        'Kontras skala pendek (short-scale) dan kolimasi rapat untuk meningkatkan kontras radiograf',
      ],
      gambar: [
        {
          src: '/img/sacrum-coccyx/sacrum-ap-1.webp',
          caption: 'Posisi supine AP axial os sacrum 15° cephalad',
        },
      ],
      sumber: 'hal 5',
    },
    {
      id: 'sacrum-pa',
      nama: 'Proyeksi Posterior Anterior (PA) Sacrum',
      posisiPasien: [
        'Pasien prone di atas meja pemeriksaan (digunakan apabila pasien tidak dapat diposisikan supine)',
      ],
      posisiObjek: [
        'Atur midsagittal plane (MSP) pasien tepat pada pertengahan meja pemeriksaan',
        'Atur kedua lengan fleksi dalam posisi simetris dan senyaman mungkin',
        'Atur batas atas penyinaran pada lumbal IV–V, setinggi SIAS',
      ],
      centralRay: 'Menyudut 15° caudad',
      centralPoint: 'Pertengahan lengkung sacrum yang terlihat',
      ffd: '100 cm',
      kaset: '24×30 cm',
      faktorEksposi: '65–75 kVp, 16–20 mAs, film speed 400, tahan napas',
      kriteria: [],
      gambar: [
        {
          src: '/img/sacrum-coccyx/umum-5.webp',
          caption: 'Radiograf PA axial os sacrum',
        },
      ],
      sumber: 'hal 5-6',
    },
    {
      id: 'sacrum-lateral',
      nama: 'Proyeksi Lateral Sacrum',
      posisiPasien: ['Pasien tidur di atas meja pemeriksaan dengan posisi lateral recumbent'],
      posisiObjek: [
        'Beri bantalan pada kepala dan pinggang untuk menjaga tulang punggung pada posisi horizontal',
        'Tekuk kedua kaki senyaman mungkin; beri pengganjal di knee dan ankle joint bila diperlukan',
        'Atur interiliaca plane pada pertengahan meja dan posisikan bahu serta pelvis true lateral',
        'Atur batas atas penyinaran setinggi lumbal V',
      ],
      centralRay: 'Vertikal tegak lurus terhadap kaset',
      centralPoint: '3,5 inci (9 cm) ke arah posterior dari SIAS',
      ffd: '100 cm',
      kaset: '24×30 cm',
      faktorEksposi: '75–85 kVp, 20–25 mAs, film speed 400, ekspirasi tahan napas',
      kriteria: [
        'Sacrum dan coccyx tampak jelas dengan kontras skala pendek (short-scale)',
        'Tampak kolimasi rapat dan penyerap karet timbal (lead rubber absorber) di belakang sacrum',
        'Tepi posterior tulang ischium dan ilium saling superposisi rapat',
      ],
      gambar: [
        {
          src: '/img/sacrum-coccyx/sacrum-lateral-1.webp',
          caption: 'Posisi lateral recumbent os sacrum dengan lead rubber',
        },
        {
          src: '/img/sacrum-coccyx/umum-4.webp',
          caption: 'Radiograf lateral os sacrum (A) dan coccyx (B)',
        },
      ],
      sumber: 'hal 6-7',
    },
    {
      id: 'coccygeus-ap',
      nama: 'Proyeksi Anterior Posterior (AP) Coccygeus',
      posisiPasien: ['Pasien diposisikan supine di atas meja pemeriksaan'],
      posisiObjek: [
        'Atur midsagittal plane (MSP) pasien tepat pada pertengahan meja pemeriksaan',
        'Fleksikan kedua lengan dan letakkan pada dada senyaman mungkin dalam posisi simetris',
        'Beri pengganjal pada bagian lutut kaki dan atur batas atas penyinaran lumbal IV–V, setinggi SIAS',
      ],
      centralRay: 'Menyudut 10° caudad',
      centralPoint: '2 inci (5 cm) di atas symphysis pubis',
      ffd: '100 cm',
      kaset: '24×30 cm',
      faktorEksposi: '65–75 kVp, 16–20 mAs, film speed 400, tahan napas',
      kriteria: [
        'Segmen-segmen coccygeus tampak terpisah tanpa saling superposisi',
        'Kontras skala pendek pada radiograf dan tidak tampak rotasi',
        'Coccyx berada di pusat radiograf, tampak utuh, dengan kolimasi rapat',
      ],
      gambar: [
        {
          src: '/img/sacrum-coccyx/coccygeus-ap-1.webp',
          caption: 'Posisi supine AP os coccygeus 10° caudad',
        },
        {
          src: '/img/sacrum-coccyx/umum-6.webp',
          caption: 'Radiograf AP os coccygeus',
        },
      ],
      sumber: 'hal 11-12',
    },
    {
      id: 'coccygeus-pa',
      nama: 'Proyeksi Posterior Anterior (PA) Coccygeus',
      posisiPasien: [
        'Pasien prone di atas meja pemeriksaan (digunakan apabila pasien tidak dapat diposisikan supine)',
      ],
      posisiObjek: [
        'Atur midsagittal plane (MSP) pasien tepat pada pertengahan meja pemeriksaan',
        'Atur kedua lengan fleksi dalam posisi simetris dan senyaman mungkin',
        'Atur batas atas penyinaran pada lumbal IV–V, setinggi SIAS',
      ],
      centralRay: 'Menyudut 10° cephalad',
      centralPoint: 'Pertengahan lengkung sacrum yang terlihat',
      ffd: '100 cm',
      kaset: '24×30 cm',
      faktorEksposi: '65–75 kVp, 16–20 mAs, film speed 400, tahan napas',
      kriteria: [],
      gambar: [],
      sumber: 'hal 12',
    },
    {
      id: 'coccygeus-lateral',
      nama: 'Proyeksi Lateral Coccygeus',
      posisiPasien: ['Pasien tidur di atas meja pemeriksaan dengan posisi lateral recumbent'],
      posisiObjek: [
        'Beri bantalan pada kepala dan pinggang untuk menjaga tulang punggung pada posisi horizontal',
        'Tekuk kedua kaki senyaman mungkin; beri pengganjal di knee dan ankle joint bila diperlukan',
        'Atur interiliaca plane pada pertengahan meja dan posisikan bahu serta pelvis true lateral',
        'Atur batas atas penyinaran setinggi lumbal V',
      ],
      centralRay: 'Vertikal tegak lurus terhadap kaset',
      centralPoint: '3,5 inci (9 cm) posterior dari SIAS, lalu 2 inci (5 cm) ke arah inferior',
      ffd: '100 cm',
      kaset: '24×30 cm',
      faktorEksposi: '75–85 kVp, 20–25 mAs, film speed 400, ekspirasi tahan napas',
      kriteria: [
        'Sacrum dan coccyx tampak jelas dengan kontras skala pendek (short-scale)',
        'Tampak kolimasi rapat dan penyerap karet timbal (lead rubber absorber) di belakang sacrum',
        'Tepi posterior tulang ischium dan ilium saling superposisi rapat',
      ],
      gambar: [
        {
          src: '/img/sacrum-coccyx/coccygeus-lateral-1.webp',
          caption: 'Posisi lateral recumbent os coccygeus',
        },
        {
          src: '/img/sacrum-coccyx/umum-4.webp',
          caption: 'Radiograf lateral os sacrum (A) dan coccyx (B)',
        },
      ],
      sumber: 'hal 13',
    },
  ],
  proteksi: [
    'Arahkan pasien agar pandangan menjauhi sumber sinar-X',
    'Atur luas lapangan seoptimal mungkin agar objek tercakup, maksimal seluas lapangan kaset yang digunakan',
    'Minta orang yang tidak berkepentingan keluar ruang pemeriksaan; pendamping wajib memakai apron',
    'Hindari atau tidak melakukan pengulangan pemotretan radiograf',
  ],
  pascaPemeriksaan: [
    'Tulis identitas radiografi (unit, no. reg, nama, umur, kelamin, pemeriksaan, tanggal) lalu cetak ke film memakai ID camera',
    'Proses film di kamar gelap: matikan lampu general, buka kaset, dan pasang film pada hanger',
    'Celupkan film ke developer (±4 menit) dengan inspeksi singkat safety light, lalu rinsing, fixer, washing, dan keringkan',
    'Bantu pasien turun meja, arahkan menunggu hasil, beri kartu ambil foto bila hasil baik, lalu rapikan alat',
  ],
  evaluasi: [
    'Gambarkan anatomi objek os sacrum dan coccygeus yang difoto serta sebutkan bagian-bagiannya',
    'Bandingkan radiograf dengan kriteria standar proyeksi AP dan Lateral sacrum maupun coccygeus',
    'Gunakan form evaluasi untuk menilai radiograf dan kumpulkan laporan praktek maksimal 1 hari setelah praktek',
  ],
};
