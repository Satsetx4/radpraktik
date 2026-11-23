import type { Soal } from '../types';

export const soalCalcaneus: Soal[] = [
  {
    id: 'calcaneus-01',
    modul: 'calcaneus',
    tipe: 'definisi',
    tanya: 'Proyeksi apa yang digunakan pada pemeriksaan teknik radiografi os calcaneus?',
    pilihan: [
      'AP dan Oblik medial',
      'AP Axial dan Lateral',
      'PA dan Tangensial',
      'Lateral dan AP terbuka',
    ],
    kunci: 1,
    penjelasan:
      'Modul teknik radiografi os calcaneus menetapkan dua proyeksi utama, yaitu AP Axial (plantodorsal) dan Lateral (mediolateral).',
    sumber: 'hal 3-5',
  },
  {
    id: 'calcaneus-02',
    modul: 'calcaneus',
    tipe: 'definisi',
    tanya: 'Apa nama lain arah proyeksi AP axial pada pemeriksaan os calcaneus?',
    pilihan: [
      'Dorsoplantar',
      'Mediolateral',
      'Plantodorsal',
      'Lateromedial',
    ],
    kunci: 2,
    penjelasan:
      'Proyeksi AP axial os calcaneus disebut plantodorsal karena berkas sinar diarahkan dari permukaan plantar pedis menuju sisi dorsal ke arah cephalad.',
    sumber: 'hal 4',
  },
  {
    id: 'calcaneus-03',
    modul: 'calcaneus',
    tipe: 'posisi',
    tanya: 'Bagaimana posisi plantar pedis terhadap kaset pada proyeksi AP axial os calcaneus?',
    pilihan: [
      'Plantar pedis tegak lurus terhadap kaset',
      'Plantar pedis menempel penuh rata di atas permukaan kaset',
      'Plantar pedis miring 30° ke arah medial kaset',
      'Plantar pedis ekstensi penuh menjauhi bidang kaset',
    ],
    kunci: 0,
    penjelasan:
      'Pada proyeksi AP axial os calcaneus, ankle joint diletakkan di pertengahan kaset dan dorsal pedis difleksikan sehingga plantar pedis tegak lurus kaset.',
    sumber: 'hal 4',
  },
  {
    id: 'calcaneus-04',
    modul: 'calcaneus',
    tipe: 'posisi',
    tanya: 'Bagaimana posisi pasien dan penggunaan fiksasi pada proyeksi lateral os calcaneus?',
    pilihan: [
      'Supine di meja pemeriksaan dengan softbag di bawah tumit',
      'Duduk menyamping meja dengan spon 45° di bawah jari kaki',
      'Prone di meja pemeriksaan dengan tibia fleksi 50° ke atas',
      'Recumbent ke sisi sakit dengan sandbag di knee atau cruris',
    ],
    kunci: 3,
    penjelasan:
      'Pada proyeksi lateral os calcaneus, pasien recumbent ke sisi kaki yang diperiksa dan diberi sandbag pada knee atau cruris agar plantar pedis tegak lurus kaset.',
    sumber: 'hal 5',
  },
  {
    id: 'calcaneus-05',
    modul: 'calcaneus',
    tipe: 'posisi',
    tanya: 'Bagian kaki manakah yang diletakkan tepat pada pertengahan kaset saat proyeksi AP axial os calcaneus?',
    pilihan: [
      'Metatarsal digiti III',
      'Ankle joint kaki periksa',
      'Pertengahan os cruris',
      'Maleolus lateralis',
    ],
    kunci: 1,
    penjelasan:
      'Pada proyeksi AP axial os calcaneus, ankle joint kaki yang diperiksa diletakkan di pertengahan kaset dengan posisi kaset membujur.',
    sumber: 'hal 4',
  },
  {
    id: 'calcaneus-06',
    modul: 'calcaneus',
    tipe: 'sinar',
    tanya: 'Berapa besar sudut dan arah central ray pada proyeksi AP axial os calcaneus?',
    pilihan: [
      '40° ke arah cephalad',
      '10° ke arah posterior',
      '45° ke arah caudad',
      'Vertikal tegak lurus kaset',
    ],
    kunci: 0,
    penjelasan:
      'Proyeksi AP axial (plantodorsal) os calcaneus menyudutkan tabung sinar-X sebesar 40° ke arah cephalad dengan FFD 100 cm.',
    sumber: 'hal 4',
  },
  {
    id: 'calcaneus-07',
    modul: 'calcaneus',
    tipe: 'sinar',
    tanya: 'Di mana letak central point dan berapa faktor eksposi proyeksi lateral os calcaneus?',
    pilihan: [
      'Base metatarsal digiti III; 50–55 kVp, 4–5 mAs',
      'Pertengahan kedua maleolus; 52 kVp, 3–4 mAs',
      '2,5 cm di bawah medial malleolus; 45–50 kVp, 3–4 mAs',
      '1 inci di bawah epicondylus medialis; 50–55 kVp, 5–6 mAs',
    ],
    kunci: 2,
    penjelasan:
      'Proyeksi lateral os calcaneus menggunakan central point 2,5 cm di bawah medial malleolus dengan central ray vertikal tegak lurus dan eksposi 45–50 kVp, 3–4 mAs.',
    sumber: 'hal 5',
  },
  {
    id: 'calcaneus-08',
    modul: 'calcaneus',
    tipe: 'kriteria',
    tanya: 'Struktur anatomi apa yang harus tampak jelas beserta densitasnya pada evaluasi proyeksi lateral os calcaneus?',
    pilihan: [
      'Metatarsal I–V terpisah tanpa tumpang tindih satu sama lain',
      'Sustentaculum tali, sinus tarsi, dan ankle joint',
      'Celah sendi patellofemoral dan condylus femoralis superposisi',
      'Trochanter minor di sisi medial dan kaput femoris di acetabulum',
    ],
    kunci: 1,
    penjelasan:
      'Evaluasi radiograf proyeksi lateral os calcaneus menilai tidak adanya rotasi, densitas sustentaculum tali, tuberositas lateral, jaringan lunak, sinus tarsi, dan ankle joint.',
    sumber: 'hal 8',
  },
  {
    id: 'calcaneus-09',
    modul: 'calcaneus',
    tipe: 'proteksi',
    tanya: 'Apa tujuan pemasangan apron pada daerah panggul pasien selama pemotretan os calcaneus?',
    pilihan: [
      'Menahan posisi plantar pedis agar tetap tegak lurus kaset',
      'Mengurangi pengulangan foto akibat pasien menggigil dingin',
      'Melindungi organ reproduksi dari sinar hambur',
      'Meningkatkan kontras jaringan lunak di sekitar sinus tarsi',
    ],
    kunci: 2,
    penjelasan:
      'Sesuai prosedur proteksi radiasi, apron dipasang menutupi daerah panggul pasien untuk melindungi organ reproduksi dari sinar hambur.',
    sumber: 'hal 5',
  },
  {
    id: 'calcaneus-10',
    modul: 'calcaneus',
    tipe: 'prosedur',
    tanya: 'Berapa ukuran kaset dan film yang disiapkan pada alat pemeriksaan os calcaneus?',
    pilihan: [
      '18×24 cm',
      '24×30 cm',
      '30×40 cm',
      '35×35 cm',
    ],
    kunci: 0,
    penjelasan:
      'Daftar persiapan alat pada modul os calcaneus menyebutkan kaset radiografi, film, dan hanger berukuran 18×24 cm.',
    sumber: 'hal 4',
  },
];
