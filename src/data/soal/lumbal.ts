import type { Soal } from '../types';

export const soalLumbal: Soal[] = [
  {
    id: 'lumbal-01',
    modul: 'lumbal',
    tipe: 'definisi',
    tanya: 'Kelima proyeksi pemeriksaan yang terdapat pada modul teknik radiografi vertebra lumbal adalah?',
    pilihan: [
      'AP, PA, Lateral, Oblik, dan Flexi',
      'PA, Lateral, Swimmer, dan Axial',
      'AP, Lateral, Oblik, AP Axial, dan Lateral L5–S1',
      'AP, AP Oblik, PA Oblik, dan Tangensial',
    ],
    kunci: 2,
    penjelasan:
      'Pelaksanaan pemeriksaan modul lumbal terdiri dari lima proyeksi: AP, Lateral, Oblik, AP Axial, serta Lateral Lumbosacral Junction (L5–S1).',
    sumber: 'hal 4-9',
  },
  {
    id: 'lumbal-02',
    modul: 'lumbal',
    tipe: 'definisi',
    tanya: 'Pada proyeksi AP oblik vertebra lumbal, sendi zygapophyseal sisi manakah yang ditampakkan jelas?',
    pilihan: [
      'Sisi yang dekat dengan kaset',
      'Sisi yang jauh dari kaset',
      'Sisi atas yang jauh dari meja',
      'Sisi tengah di depan corpus',
    ],
    kunci: 0,
    penjelasan:
      'Modul menegaskan ketentuan proyeksi AP oblik lumbal adalah memperlihatkan zygapophyseal joint sisi yang dekat kaset, berbeda dengan vertebra thoracal.',
    sumber: 'hal 6',
  },
  {
    id: 'lumbal-03',
    modul: 'lumbal',
    tipe: 'posisi',
    tanya: 'Berapa sudut rotasi tubuh pasien dari posisi lateral atau MCP pada proyeksi oblik vertebra lumbal?',
    pilihan: [
      '20° dari lateral/MCP',
      '30° dari lateral/MCP',
      '60° dari lateral/MCP',
      '45° dari lateral/MCP',
    ],
    kunci: 3,
    penjelasan:
      'Pada proyeksi oblik vertebra lumbal (baik recumbent maupun berdiri), tubuh pasien dirotasikan sebesar 45° dari posisi lateral atau MCP.',
    sumber: 'hal 6',
  },
  {
    id: 'lumbal-04',
    modul: 'lumbal',
    tipe: 'posisi',
    tanya: 'Di manakah posisi kedua tangan pasien saat dilakukan pemotretan proyeksi AP supine vertebra lumbal?',
    pilihan: [
      'Lurus ke atas di samping kepala',
      'Diletakkan di atas dada pasien',
      'Dilipat di bawah kepala pasien',
      'Menggenggam tepi meja periksa',
    ],
    kunci: 1,
    penjelasan:
      'Pada posisi pasien proyeksi AP dan AP axial vertebra lumbal, kedua tangan diletakkan di atas dada agar tidak menghalangi area objek.',
    sumber: 'hal 4-7',
  },
  {
    id: 'lumbal-05',
    modul: 'lumbal',
    tipe: 'posisi',
    tanya: 'Apa tujuan menekuk kedua kaki pasien saat memposisikan proyeksi AP supine vertebra lumbal?',
    pilihan: [
      'Agar tulang punggung lebih dekat meja',
      'Agar ukuran pelvis tampak lebih lebar',
      'Agar kedua tangan tidak bergerak bebas',
      'Agar bayangan costae tidak terpotong',
    ],
    kunci: 0,
    penjelasan:
      'Menekuk/memfleksikan kaki pasien pada posisi AP supine membuat lengkung lumbal berkurang sehingga tulang punggung lebih dekat ke meja pemeriksaan.',
    sumber: 'hal 4',
  },
  {
    id: 'lumbal-06',
    modul: 'lumbal',
    tipe: 'sinar',
    tanya: 'Bagaimana perbedaan titik bidik (CP) pada proyeksi AP antara pemeriksaan lumbosacral dengan lumbal saja?',
    pilihan: [
      'Lumbosacral di L2, lumbal di L5',
      'Lumbosacral di T12, lumbal di L4',
      'Lumbosacral di L4, lumbal di L3',
      'Lumbosacral di S2, lumbal di L1',
    ],
    kunci: 2,
    penjelasan:
      'Pada proyeksi AP dan Lateral, CP lumbosacral berada di L4 (setinggi krista iliaka), sedangkan untuk lumbal di L3 (3,8 cm di atas krista iliaka).',
    sumber: 'hal 5-6',
  },
  {
    id: 'lumbal-07',
    modul: 'lumbal',
    tipe: 'sinar',
    tanya: 'Berapa penyudutan central ray pada proyeksi AP axial lumbosacral junction untuk pasien pria dan wanita?',
    pilihan: [
      'Pria 5° caudad, wanita 8° caudad',
      'Pria 30° cephalad, wanita 35° cephalad',
      'Pria 15° cephalad, wanita 10° caudad',
      'Pria 20° cranial, wanita 25° cranial',
    ],
    kunci: 1,
    penjelasan:
      'Pada AP axial L5–S1, central ray diarahkan 30–35° cephalad (pria 30°, wanita 35°) dengan CP di MSP 3,8 cm di atas symphysis pubis; sudut 5°/8° caudad dipakai pada lateral L5–S1.',
    sumber: 'hal 8',
  },
  {
    id: 'lumbal-08',
    modul: 'lumbal',
    tipe: 'kriteria',
    tanya: 'Pada evaluasi radiograf oblik lumbal, jika pedikel tampak terlalu anterior pada corpus vertebra, apa penyebabnya?',
    pilihan: [
      'Central ray disudutkan terlalu cephalad',
      'Pasien menarik napas penuh saat eksposi',
      'Rotasi tubuh pasien terlalu berlebihan',
      'Rotasi tubuh pasien belum cukup',
    ],
    kunci: 3,
    penjelasan:
      'Kriteria proyeksi oblik lumbal menyatakan pedikel yang tampak terlalu anterior pada corpus menandakan rotasi kurang, sedangkan terlalu posterior menandakan rotasi berlebihan.',
    sumber: 'hal 12',
  },
  {
    id: 'lumbal-09',
    modul: 'lumbal',
    tipe: 'proteksi',
    tanya: 'Apa fungsi pemasangan gonad shield di daerah panggul pada pemeriksaan radiografi vertebra lumbal?',
    pilihan: [
      'Menahan tubuh agar tetap lurus horizontal',
      'Melindungi organ reproduksi dari sinar hambur',
      'Menyamakan ketebalan pinggang dan thorax',
      'Mencegah artefak karet pakaian di abdomen',
    ],
    kunci: 1,
    penjelasan:
      'Gonad shield dipasang menutupi daerah panggul pasien untuk melindungi organ reproduksi dari paparan radiasi sinar hambur.',
    sumber: 'hal 9',
  },
  {
    id: 'lumbal-10',
    modul: 'lumbal',
    tipe: 'prosedur',
    tanya: 'Berapa ukuran kaset, film, dan hanger yang disiapkan khusus untuk pemeriksaan lumbosacral joint (L5–S1)?',
    pilihan: [
      '24 × 30 cm dengan posisi melintang',
      '30 × 40 cm sama dengan lumbosacral',
      '18 × 24 cm khusus sendi L5–S1',
      '35 × 43 cm dengan orientasi vertikal',
    ],
    kunci: 2,
    penjelasan:
      'Pada bagian persiapan alat modul lumbal disiapkan kaset 30×40 cm untuk lumbosacral dan ukuran 18×24 cm khusus untuk lumbosacral joint (L5–S1).',
    sumber: 'hal 4',
  },
];
