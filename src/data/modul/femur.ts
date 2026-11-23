import type { Modul } from '../types';

export const modulFemur: Modul = {
  slug: 'femur',
  kode: '301-9A',
  judul: 'Os Femur',
  region: 'ekstremitas-bawah',
  kompetensi:
    'Mahasiswa mampu melakukan teknik radiografi os femur dengan baik dan benar melalui simulasi, role play, dan realplay.',
  sorotan: [
    'Dua proyeksi utama: AP dan Lateral memakai kaset 30×40 cm mencakup hip joint dan knee joint',
    'Bila kedua sendi tidak muat sekaligus, utamakan sendi yang dekat daerah sakit (Femur Proksimal atau Distal)',
    'Proyeksi AP merotasikan kaki internal 15°–20° bila tidak dicurigai adanya fraktur',
    'Faktor eksposi 60–65 kVp (AP) atau 55–65 kVp (Lateral), 10–15 mAs, non grid/grid, film speed 400',
  ],
  praPemeriksaan: [
    {
      judul: 'Administrasi',
      poin: [
        'Cek lembar permintaan: identitas pasien, no. CM/RM, asal rujukan, dan riwayat penyakit',
        'Catat identitas di buku registrasi dan tulis nomor registrasi radiologi pada lembar permintaan',
        'Siapkan kartu ambil foto serta amplop foto sesuai ukuran film yang digunakan',
      ],
    },
    {
      judul: 'Persiapan Pasien',
      poin: [
        'Panggil pasien sesuai lembar permintaan dan cocokkan nama, umur, serta alamat',
        'Perkenalkan diri, lakukan anamnesis keluhan, dan pastikan sisi paha kanan atau kiri',
        'Berikan penjelasan singkat prosedur pemeriksaan sebelum pemotretan dimulai',
        'Pastikan tidak ada benda logam atau benda lain pada kaki yang diperiksa seperti ritsleting celana',
      ],
    },
    {
      judul: 'Persiapan Alat & Bahan',
      poin: [
        'Pesawat sinar-X siap pakai, meteran, penggaris kaliper, dan ID printer',
        'Kaset dan film radiografi ukuran 30×40 cm beserta alat pengolahan film',
        'Marker, plester, gunting, dan lembar Pb (gunakan sandbag/softbag serta gonad shield untuk fiksasi dan proteksi)',
      ],
    },
  ],
  proyeksi: [
    {
      id: 'ap',
      nama: 'Proyeksi Anterior Posterior (AP)',
      posisiPasien: [
        'Pasien posisi supine dengan kedua tangan diletakkan di samping tubuh atau di atas dada',
      ],
      posisiObjek: [
        'Atur os femur pada pertengahan kaset dan pastikan tidak ada rotasi pada pelvis',
        'Rotasikan internal kaki 15°–20° jika tidak dicurigai adanya fraktur, lalu beri fiksasi sandbag atau softbag pada kaki',
        'Atur batas atas kaset pada hip joint dan batas bawah kaset pada knee joint',
        'Bila kedua sendi tidak memungkinkan masuk sekaligus, utamakan sendi pada daerah yang sakit (AP Femur Proksimal atau Distal)',
      ],
      centralRay: 'Vertikal tegak lurus terhadap kaset',
      centralPoint: 'Pertengahan os femur',
      ffd: '100 cm',
      faktorEksposi: '60–65 kVp, 10–15 mAs, non grid/grid, film speed 400',
      kriteria: [
        'Tampak sebagian besar femur beserta sendi yang terdekat dengan lokasi kelainan atau cedera',
        'Collum femoris tidak tampak memendek (foreshortened) dan trochanter minor tidak menonjol melewati tepi medial (atau sangat minimal)',
        'Tidak terjadi rotasi lutut pada femur distal dan alat fiksasi ortopedi (bila ada) tampak utuh',
        'Gonad shield bila dipakai tidak menutupi femur proksimal; detail trabekula batang femur tampak jelas',
      ],
      gambar: [
        {
          src: '/img/femur/ap-1.webp',
          caption: 'Posisi proyeksi AP distal os femur',
        },
        {
          src: '/img/femur/umum-4.webp',
          caption: 'Radiograf AP distal os femur',
        },
        {
          src: '/img/femur/lateral-2.webp',
          caption: 'Radiograf AP proksimal os femur',
        },
      ],
      sumber: 'hal 4-7',
    },
    {
      id: 'lateral',
      nama: 'Proyeksi Lateral',
      posisiPasien: [
        'Pasien miring dengan sisi yang sakit dekat meja pemeriksaan',
        'Kaki yang sakit diatur ke depan sedangkan kaki satunya lurus ke sisi belakang (atau kaki yang tidak diperiksa ke depan untuk fiksasi)',
      ],
      posisiObjek: [
        'Fleksikan lutut kaki yang sakit dan ekstensikan kaki lainnya',
        'Ganjal bagian bawah panggul dengan sandbag dan usahakan hip joint terfiksasi',
        'Atur batas atas kaset pada hip joint dan batas bawah kaset pada knee joint',
        'Bila kedua sendi tidak memungkinkan masuk sekaligus, utamakan sendi daerah yang sakit (Lateral Femur Proksimal atau Distal)',
      ],
      centralRay: 'Vertikal tegak lurus terhadap kaset',
      centralPoint: 'Pertengahan os femur',
      ffd: '100 cm',
      faktorEksposi: '55–65 kVp, 10–15 mAs, grid/non grid, film speed 400',
      kriteria: [
        'Tampak sebagian besar femur beserta sendi terdekat lokasi cedera dan detail trabekula batang femur',
        'Bila knee tercakup: permukaan anterior condylus femoralis superposisi, patella dalam profil, ruang patellofemoral terbuka, dan permukaan inferior condylus tidak superposisi karena divergensi sinar',
        'Bila hip tercakup: paha kontralateral tidak menutupi area objek serta trochanter mayor dan minor tidak menonjol',
      ],
      gambar: [
        {
          src: '/img/femur/lateral-1.webp',
          caption: 'Posisi lateral distal dan proksimal os femur',
        },
        {
          src: '/img/femur/umum-5.webp',
          caption: 'Radiograf lateral distal dan proksimal os femur',
        },
      ],
      sumber: 'hal 5-7',
    },
  ],
  proteksi: [
    'Gunakan gonad shield agar organ reproduksi terlindungi dari sinar hambur',
    'Atur luas lapangan penyinaran seluas objek yang difoto',
    'Persilakan orang yang tidak berkepentingan keluar ruang; pendamping yang terpaksa ada wajib memakai apron',
  ],
  pascaPemeriksaan: [
    'Proses film di kamar gelap: matikan lampu general, buka kaset, dan pasang film pada hanger',
    'Masukkan film ke cairan developer (±4 menit) hingga muncul gambaran laten dengan inspeksi singkat safety light',
    'Bilas film pada tangki rinsing, masukkan ke cairan fixer, lalu cuci di tangki air (washing) dan keringkan',
    'Bantu pasien turun dari meja pemeriksaan dan arahkan menunggu hasil pemrosesan film',
    'Berikan kartu ambil foto bila hasil sudah baik dan persilakan pasien kembali ke asal rujukan',
  ],
  evaluasi: [
    'Gambarkan anatomi objek dan sebutkan bagian-bagian tulang os femur yang tampak',
    'Bandingkan kriteria anatomi radiograf dengan standar kriteria evaluasi proyeksi AP dan lateral',
    'Nilai radiograf menggunakan form evaluasi dan susun laporan praktek dengan minimal 1 textbook maksimal 1 hari pasca praktek',
  ],
};
