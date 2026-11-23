import type { Soal } from '../types';

export const soalOrientasi: Soal[] = [
  {
    id: 'orientasi-01',
    modul: 'orientasi',
    tipe: 'definisi',
    tanya: 'Bagaimana arah perjalanan sinar pada proyeksi Posterior–Anterior (PA)?',
    pilihan: [
      'Datang melalui bagian anterior dan keluar bagian posterior',
      'Datang melalui bagian posterior dan keluar bagian anterior',
      'Datang secara menyudut 10° atau lebih pada bidang longitudinal',
      'Datang tepat sepanjang tepi luar dari permukaan tubuh pasien',
    ],
    kunci: 1,
    penjelasan:
      'Pada proyeksi PA, sinar datang menembus dari sisi posterior dahulu lalu keluar melalui bagian anterior (kebalikan dari proyeksi AP).',
    sumber: 'hal 2',
  },
  {
    id: 'orientasi-02',
    modul: 'orientasi',
    tipe: 'definisi',
    tanya: 'Proyeksi manakah yang didefinisikan sebagai sinar datang secara menyudut pada bidang longitudinal sebesar 10° atau lebih?',
    pilihan: [
      'Tangensial',
      'Lateral',
      'Axial',
      'Oblik',
    ],
    kunci: 2,
    penjelasan:
      'Proyeksi Axial menyudut ≥10° pada bidang longitudinal, sedangkan Tangensial menyentuh tepi luar permukaan tubuh dan Oblik datang dari sisi menyudut.',
    sumber: 'hal 2',
  },
  {
    id: 'orientasi-03',
    modul: 'orientasi',
    tipe: 'definisi',
    tanya: 'Manakah definisi yang tepat untuk proyeksi Tangensial dalam dasar proyeksi radiografi?',
    pilihan: [
      'Menyentuh sepanjang tepi luar permukaan tubuh',
      'Sinar datang lurus melalui salah satu sisi tubuh pasien',
      'Sinar datang melalui bagian depan lalu keluar ke belakang',
      'Sinar datang menyudut dari sisi samping menuju garis tengah',
    ],
    kunci: 0,
    penjelasan:
      'Proyeksi Tangensial adalah sinar datang tepat sepanjang tepi luar dari permukaan tubuh sehingga menampakkan kontur tepi objek.',
    sumber: 'hal 2',
  },
  {
    id: 'orientasi-04',
    modul: 'orientasi',
    tipe: 'definisi',
    tanya: 'Pada proyeksi Oblik, dari arah manakah berkas sinar datang menuju tubuh pasien?',
    pilihan: [
      'Tegak lurus dari arah anterior ke posterior tubuh',
      'Menyentuh lurus batas luar kulit tanpa menembus tengah',
      'Melalui tepat salah satu sisi samping kanan atau kiri',
      'Dari sisi tubuh dalam sudut miring (menyudut)',
    ],
    kunci: 3,
    penjelasan:
      'Proyeksi Oblik didefinisikan sebagai sinar datang dari sisi yang menyudut, berbeda dengan Lateral yang melalui lurus salah satu sisi tubuh.',
    sumber: 'hal 2',
  },
  {
    id: 'orientasi-05',
    modul: 'orientasi',
    tipe: 'posisi',
    tanya: 'Apa perbedaan utama antara posisi recumbent Trendelenburg’s dan posisi Fowler?',
    pilihan: [
      'Trendelenburg’s miring ke kiri, sedangkan Fowler miring ke kanan',
      'Trendelenburg’s kepala lebih rendah; Fowler lebih tinggi',
      'Trendelenburg’s bertumpu pada kaki, sedangkan Fowler duduk di kursi',
      'Trendelenburg’s tubuh tengkurap, sedangkan Fowler tubuh telentang',
    ],
    kunci: 1,
    penjelasan:
      'Keduanya merupakan posisi supine; pada Trendelenburg’s kepala lebih rendah daripada kaki, sedangkan pada Fowler kepala lebih tinggi daripada kaki.',
    sumber: 'hal 2',
  },
  {
    id: 'orientasi-06',
    modul: 'orientasi',
    tipe: 'posisi',
    tanya: 'Bagaimana pengaturan kedua kaki pasien pada posisi pemotretan Sims?',
    pilihan: [
      'Kedua tungkai lurus sejajar dalam posisi supine telentang',
      'Kedua lutut dan panggul fleksi, abduksi, serta rotasi eksternal',
      'Lateral dengan kaki bawah lurus dan satunya fleksi',
      'Pasien bertumpu penuh pada kedua kaki di depan penyangga kaset',
    ],
    kunci: 2,
    penjelasan:
      'Sims adalah posisi recumbent lateral dengan kaki yang menempel pada meja dalam keadaan lurus, sedangkan kaki lainnya difleksikan.',
    sumber: 'hal 2',
  },
  {
    id: 'orientasi-07',
    modul: 'orientasi',
    tipe: 'posisi',
    tanya: 'Posisi supine di mana lutut dan panggul difleksikan, diabduksikan, serta dirotasi eksternal disebut posisi apa?',
    pilihan: [
      'Lithotomy',
      'Prone',
      'Fowler',
      'Sims',
    ],
    kunci: 0,
    penjelasan:
      'Posisi Lithotomy adalah posisi supine dengan knee dan hip fleksi, diabduksikan, serta rotasi eksternal dengan dukungan penopang kaki.',
    sumber: 'hal 2',
  },
  {
    id: 'orientasi-08',
    modul: 'orientasi',
    tipe: 'proteksi',
    tanya: 'Batas maksimal pengaturan luas lapangan penyinaran yang dianjurkan pada prinsip proteksi radiasi adalah seberapa luas?',
    pilihan: [
      'Seluas seluruh permukaan meja pemeriksaan radiografi',
      'Maksimal seluas lapangan kaset yang dipakai',
      'Dua kali lebih lebar dari ukuran kaset yang terpasang',
      'Bebas sesuai tinggi badan pasien tanpa dibatasi kolimasi',
    ],
    kunci: 1,
    penjelasan:
      'Luas lapangan diatur seoptimal mungkin agar objek yang diperiksa masuk dalam penyinaran dan maksimal seluas lapangan kaset yang dipakai.',
    sumber: 'hal 3',
  },
  {
    id: 'orientasi-09',
    modul: 'orientasi',
    tipe: 'proteksi',
    tanya: 'Apa tindakan wajib apabila terpaksa harus ada pendamping di dalam ruang pemeriksaan saat eksposi berlangsung?',
    pilihan: [
      'Pendamping diminta berdiri tepat di belakang pasien tanpa alat',
      'Pendamping cukup menutup mata saat tombol eksposi ditekan',
      'Pendamping diizinkan masuk asalkan memakai apron',
      'Pendamping diminta memegang kaset dengan tangan tanpa pelindung',
    ],
    kunci: 2,
    penjelasan:
      'Orang yang tidak berkepentingan diminta keluar ruangan; jika terpaksa ada pendamping, orang tersebut wajib mengenakan apron pelindung.',
    sumber: 'hal 3',
  },
  {
    id: 'orientasi-10',
    modul: 'orientasi',
    tipe: 'prosedur',
    tanya: 'Alat simulasi khusus apa yang tercantum pada daftar persiapan alat modul orientasi laboratorium radiografi?',
    pilihan: [
      'Radiographic phantom dan hanger ukuran 18×24 cm',
      'Komputer pengolah gambar digital tanpa memakai kaset',
      'Tabung oksigen portabel dan monitor jantung pasien',
      'Kursi roda khusus dan tiang penyangga infus',
    ],
    kunci: 0,
    penjelasan:
      'Daftar persiapan alat simulasi orientasi mencakup pesawat sinar-X, kaset dan film, hanger 18×24 cm, radiographic phantom, marker, plester, gunting, lembar Pb, meteran, dan apron.',
    sumber: 'hal 5',
  },
];
