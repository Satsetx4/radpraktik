import type { Soal } from '../types';

export const soalPatella: Soal[] = [
  {
    id: 'patella-01',
    modul: 'patella',
    tipe: 'definisi',
    tanya: 'Metode apa yang digunakan pada proyeksi tangential dalam modul teknik radiografi os patella?',
    pilihan: [
      'Metode Cleaves',
      'Metode Hughston',
      'Metode Towne',
      'Metode Waters',
    ],
    kunci: 1,
    penjelasan:
      'Bagian pelaksanaan pemeriksaan modul os patella secara khusus menggunakan Proyeksi Tangential (Metode Hughston) bersama proyeksi Lateral.',
    sumber: 'hal 4',
  },
  {
    id: 'patella-02',
    modul: 'patella',
    tipe: 'definisi',
    tanya: 'Bagaimana posisi pasien yang digunakan untuk melakukan proyeksi tangential Metode Hughston?',
    pilihan: [
      'Prone dengan tubuh tidak rotasi',
      'Supine dengan kedua tangan di dada',
      'Duduk menyamping meja pemeriksaan',
      'Berdiri menghadap bucky stand',
    ],
    kunci: 0,
    penjelasan:
      'Pada proyeksi tangential Metode Hughston, pasien diposisikan prone (tengkurap) dengan kaki yang diperiksa berada di atas meja dan tubuh tidak rotasi.',
    sumber: 'hal 4',
  },
  {
    id: 'patella-03',
    modul: 'patella',
    tipe: 'posisi',
    tanya: 'Berapa derajat sudut yang dibentuk tibia dan fibula terhadap meja pemeriksaan pada Metode Hughston?',
    pilihan: [
      '5°–10°',
      '20°–30°',
      '50°–60°',
      '80°–90°',
    ],
    kunci: 2,
    penjelasan:
      'Pada Metode Hughston, kaset diletakkan di bawah knee lalu lutut difleksikan perlahan hingga tibia dan fibula membentuk sudut 50°–60° terhadap meja.',
    sumber: 'hal 4',
  },
  {
    id: 'patella-04',
    modul: 'patella',
    tipe: 'posisi',
    tanya: 'Berapa sudut fleksi lutut yang dianjurkan pada proyeksi lateral khusus os patella?',
    pilihan: [
      '5° sampai 10°',
      '20° sampai 30°',
      '45° sampai 50°',
      '60° sampai 75°',
    ],
    kunci: 0,
    penjelasan:
      'Berbeda dengan lateral knee joint (20°–30°), proyeksi lateral os patella hanya memfleksikan knee sekitar 5° sampai 10° agar celah patellofemoral terbuka tanpa tarikan berlebih.',
    sumber: 'hal 5',
  },
  {
    id: 'patella-05',
    modul: 'patella',
    tipe: 'posisi',
    tanya: 'Bagaimana pengaturan kaki yang tidak diperiksa pada proyeksi lateral os patella agar posisi pasien stabil?',
    pilihan: [
      'Diekstensikan lurus ke belakang meja pemeriksaan',
      'Diangkat vertikal menggunakan penyangga gantung',
      'Ditekuk ke belakang dan ditahan bantal di tumit',
      'Difleksikan knee dan hip lalu diletakkan di depan kaki periksa',
    ],
    kunci: 3,
    penjelasan:
      'Pada proyeksi lateral os patella, kaki yang tidak diperiksa difleksikan pada knee serta hip dan diletakkan di depan kaki yang diperiksa guna menjaga kestabilan.',
    sumber: 'hal 5',
  },
  {
    id: 'patella-06',
    modul: 'patella',
    tipe: 'sinar',
    tanya: 'Berapa besar sudut central ray dan nilai kVp pada proyeksi tangential Metode Hughston?',
    pilihan: [
      'Tegak lurus kaset; 50–55 kVp',
      '45° ke arah cephalad; 55–65 kVp',
      '40° ke arah cephalad; 45–50 kVp',
      '5–7° ke arah cephalad; 60–65 kVp',
    ],
    kunci: 1,
    penjelasan:
      'Proyeksi tangential Metode Hughston menyudutkan central ray 45° ke arah cephalad melalui patellofemoral joint dengan 55–65 kVp, 8 mAs, non grid, film speed 400.',
    sumber: 'hal 4',
  },
  {
    id: 'patella-07',
    modul: 'patella',
    tipe: 'sinar',
    tanya: 'Di mana letak central point dan bagaimana arah central ray pada proyeksi lateral os patella?',
    pilihan: [
      '1 inci di bawah epicondylus medialis; menyudut 5–7° cephalad',
      '½ inci di bawah apex patella; menyudut 3–5° caudad',
      'Midpatellofemoral joint; vertikal tegak lurus terhadap kaset',
      'Pertengahan os femur; menyudut 45° ke arah cephalad',
    ],
    kunci: 2,
    penjelasan:
      'Proyeksi lateral os patella menggunakan central ray vertikal tegak lurus terhadap kaset dengan central point pada midpatellofemoral joint dan FFD 100 cm.',
    sumber: 'hal 5',
  },
  {
    id: 'patella-08',
    modul: 'patella',
    tipe: 'kriteria',
    tanya: 'Apa indikator kualitas kolimasi dan anatomi yang wajib tampak pada evaluasi proyeksi lateral os patella?',
    pilihan: [
      'Fleksi 5°–10°, celah patellofemoral terbuka, patella profil lateral, dan kolimasi rapat',
      'Fleksi 45°, celah femorotibial menyempit, dan kolimasi terbuka seluas meja',
      'Tampak seluruh tarsal serta kaput fibula berada di depan tibia',
      'Patella superposisi penuh dengan femur dan condylus femoralis tidak sejajar',
    ],
    kunci: 0,
    penjelasan:
      'Kriteria evaluasi proyeksi lateral os patella menilai fleksi knee 5°–10°, celah patellofemoral terbuka, patella dalam profil lateral, serta kolimasi yang rapat.',
    sumber: 'hal 6',
  },
  {
    id: 'patella-09',
    modul: 'patella',
    tipe: 'proteksi',
    tanya: 'Ke mana arah pandangan mata pasien harus diarahkan sebagai bagian dari proteksi radiasi os patella?',
    pilihan: [
      'Menatap tepat ke lampu kolimator tabung',
      'Melihat ke arah kaset di bawah lutut',
      'Mengikuti pergerakan lengan tabung sinar-X',
      'Menjauh dari arah sumber sinar-X',
    ],
    kunci: 3,
    penjelasan:
      'Sesuai poin proteksi radiasi di modul os patella, pasien diberi arahan agar pandangan matanya menjauh dari sumber sinar-X.',
    sumber: 'hal 7',
  },
  {
    id: 'patella-10',
    modul: 'patella',
    tipe: 'prosedur',
    tanya: 'Di mana kaki pasien disandarkan agar rileks pada proyeksi tangential Metode Hughston?',
    pilihan: [
      'Diletakkan rileks di atas kolimator atau dipertahankan pada posisi',
      'Ditempelkan pada penyangga ankle joint yang terpasang di ujung meja',
      'Digantung bebas di tepi meja dengan sandbag di bagian tumit',
      'Ditekuk menempel penuh pada bokong menggunakan sabuk pengikat',
    ],
    kunci: 0,
    penjelasan:
      'Pada langkah posisi objek Metode Hughston, setelah lutut fleksi 50°–60°, kaki dibiarkan rileks di atas kolimator atau dipertahankan tetap pada posisi tersebut.',
    sumber: 'hal 4',
  },
];
