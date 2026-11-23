import type { Modul } from '../types';

export const modulKnee: Modul = {
  slug: 'knee',
  kode: '301-8A',
  judul: 'Knee Joint',
  region: 'ekstremitas-bawah',
  kompetensi:
    'Mahasiswa mampu melakukan teknik radiografi knee joint dengan baik dan benar melalui simulasi, role play, dan realplay.',
  sorotan: [
    'Dua proyeksi utama: Antero Posterior (AP) dan Lateral dengan kaset 24×30 cm (speed 400)',
    'Proyeksi AP CP ½ inci (1,3 cm) di bawah apex patella dengan penyudutan variabel berdasar jarak ASIS ke meja',
    'Proyeksi Lateral menekuk lutut 20–30° (maksimal 10° pada kasus fraktur) dan CR menyudut 5–7° cephalad',
    'Evaluasi lateral memastikan kedua epicondylus femoralis superposisi dan ruang sendi patellofemoral terbuka',
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
        'Perkenalkan diri, lakukan anamnesis keluhan lutut, dan pastikan sisi kanan atau kiri',
        'Berikan penjelasan singkat prosedur pemeriksaan sebelum pemotretan dimulai',
        'Pastikan tidak ada benda logam atau penghalang di kaki seperti gelang kaki dan celana panjang tebal',
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
      nama: 'Proyeksi Anterior Posterior (AP)',
      posisiPasien: [
        'Pasien supine di atas meja pemeriksaan dengan tubuh diatur agar pelvis tidak mengalami rotasi',
      ],
      posisiObjek: [
        'Atur kaki pasien dengan menempatkan femoral epicondylus sejajar (paralel) terhadap kaset agar didapat proyeksi true AP',
      ],
      centralRay:
        'Vertikal tegak lurus terhadap kaset (variabel penyudutan berdasar jarak ASIS ke meja: < 18 cm 3–5° caudad, 19–24 cm 0°, > 24 cm 3–5° cephalad)',
      centralPoint: '½ inci (1,3 cm) di bawah apex patella',
      ffd: '100 cm',
      faktorEksposi: '50–55 kVp, 5–6 mAs, non grid, film speed 400',
      kriteria: [
        'Celah sendi femorotibial terbuka dengan lebar ruang sendi sama di kedua sisi jika lutut normal',
        'Lutut ekstensi penuh bila kondisi pasien memungkinkan dan patella superposisi penuh dengan femur',
        'Tidak ada rotasi femur (condylus femoralis simetris) maupun tibia (intercondylar eminence di tengah)',
        'Sedikit superposisi kaput fibula dengan tibia, jaringan lunak, serta detail tulang di sekitar patella tampak jelas',
      ],
      gambar: [
        {
          src: '/img/knee/ap-1.webp',
          caption: 'Posisi proyeksi AP knee joint',
        },
        {
          src: '/img/knee/ap-2.webp',
          caption: 'Radiograf anatomi AP knee joint',
        },
      ],
      sumber: 'hal 4-6',
    },
    {
      id: 'lateral',
      nama: 'Proyeksi Lateral',
      posisiPasien: [
        'Pasien miring dengan sisi yang sakit dekat meja pemeriksaan dan pelvis dipastikan tidak rotasi',
        'Kaki yang sakit diatur ke depan sedangkan kaki satunya lurus ke belakang (atau kaki tidak diperiksa ke depan untuk fiksasi)',
      ],
      posisiObjek: [
        'Fleksikan lutut 20°–30° agar otot kaki rileks dan rongga sendi tampak maksimal (pada kasus fraktur fleksi tidak melebihi 10°)',
        'Tempatkan penyangga di daerah ankle joint untuk menjaga kesejajaran',
        'Atur kedua epicondylus saling superposisi dan patella tegak lurus terhadap kaset',
      ],
      centralRay: 'Menyudut 5–7° ke arah cephalad',
      centralPoint: '1 inci di bawah epicondylus medialis',
      ffd: '100 cm',
      faktorEksposi: '50–55 kVp, 5–6 mAs, non grid, film speed 400',
      kriteria: [
        'Kedua condylus femoralis superposisi (tuberkel adduktor di condylus medialis menjadi penanda arah rotasi)',
        'Celah sendi antara condylus femoralis dengan tibia serta ruang sendi patellofemoral tampak terbuka',
        'Patella tampak dalam profil lateral dan lutut terfleksi 20°–30°',
        'Kaput fibula dan tibia sedikit superposisi serta seluruh jaringan lunak di sekitar lutut tampak jelas',
      ],
      gambar: [
        {
          src: '/img/knee/lateral-1.webp',
          caption: 'Posisi proyeksi lateral knee joint',
        },
        {
          src: '/img/knee/lateral-2.webp',
          caption: 'Radiograf anatomi lateral knee joint',
        },
      ],
      sumber: 'hal 5-7',
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
    'Gambarkan anatomi objek dan sebutkan bagian-bagian anatomi knee joint yang tampak',
    'Bandingkan kriteria anatomi radiograf dengan standar kriteria evaluasi proyeksi AP dan lateral',
    'Nilai radiograf menggunakan form evaluasi dan susun laporan praktek dengan minimal 1 textbook maksimal 1 hari pasca praktek',
  ],
};
