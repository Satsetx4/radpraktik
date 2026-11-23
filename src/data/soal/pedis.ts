import type { Soal } from '../types';

export const soalPedis: Soal[] = [
  {
    id: 'pedis-01',
    modul: 'pedis',
    tipe: 'definisi',
    tanya: 'Proyeksi pemeriksaan apa saja yang digunakan pada modul teknik radiografi ossa pedis?',
    pilihan: [
      'AP dan Lateral',
      'AP dan Oblik medial',
      'PA dan Tangensial',
      'AP Axial dan Lateral',
    ],
    kunci: 1,
    penjelasan:
      'Pada bagian analisa kebutuhan dan pelaksanaan pemeriksaan modul ossa pedis, dua proyeksi yang digunakan adalah Antero Posterior (AP) dan Oblik rotasi ke arah medial.',
    sumber: 'hal 3-5',
  },
  {
    id: 'pedis-02',
    modul: 'pedis',
    tipe: 'definisi',
    tanya: 'Apa posisi permukaan kaki bagian bawah saat menempel pada kaset di proyeksi AP ossa pedis?',
    pilihan: [
      'Plantar pedis menempel pada meja/kaset dengan knee fleksi',
      'Dorsal pedis menempel pada meja/kaset dengan knee ekstensi',
      'Sisi lateral kaki menempel penuh dengan kaki dorsofleksi',
      'Tumit menempel pada kaset dengan plantar pedis tegak lurus',
    ],
    kunci: 0,
    penjelasan:
      'Pada proyeksi AP ossa pedis, knee kaki yang diperiksa difleksikan sehingga seluruh plantar pedis dapat menempel rata di atas kaset atau meja pemeriksaan.',
    sumber: 'hal 4',
  },
  {
    id: 'pedis-03',
    modul: 'pedis',
    tipe: 'posisi',
    tanya: 'Berapa besar sudut plantar pedis terhadap bidang kaset pada proyeksi oblik ossa pedis?',
    pilihan: [
      '15° rotasi ke arah lateral',
      '45° rotasi ke arah lateral',
      '30° rotasi ke arah medial',
      '60° rotasi ke arah medial',
    ],
    kunci: 2,
    penjelasan:
      'Pada proyeksi oblik ossa pedis, kaki dirotasikan ke arah medial hingga plantar pedis membentuk sudut 30° terhadap bidang kaset agar tarsal lateral terpisah baik.',
    sumber: 'hal 5',
  },
  {
    id: 'pedis-04',
    modul: 'pedis',
    tipe: 'posisi',
    tanya: 'Bagaimana pengaturan posisi kaset dan kaki yang tidak diperiksa pada proyeksi AP ossa pedis?',
    pilihan: [
      'Kaset melintang dibagi dua, kaki lain juga difleksikan',
      'Kaset membujur tubuh, kaki yang lain dalam posisi ekstensi',
      'Kaset melintang penuh, kaki lain ditekuk menyilang di depan',
      'Kaset membujur dibagi dua, kaki lain diangkat dari meja',
    ],
    kunci: 1,
    penjelasan:
      'Kaset dipasang membujur tubuh agar seluruh kaki masuk dalam area kaset, sementara kaki yang tidak diperiksa diatur ekstensi menjauhi area penyinaran.',
    sumber: 'hal 4',
  },
  {
    id: 'pedis-05',
    modul: 'pedis',
    tipe: 'posisi',
    tanya: 'Benda apa yang wajib dilepas pasien sebelum pemeriksaan radiografi ossa pedis dilakukan?',
    pilihan: [
      'Jam tangan dan cincin di jari tangan',
      'Ikat pinggang dan kancing baju atas',
      'Kacamata dan penjepit logam rambut',
      'Sepatu dan gelang kaki di area periksa',
    ],
    kunci: 3,
    penjelasan:
      'Persiapan pasien pada modul ossa pedis menekankan pelepasan benda logam atau pengotor pada kaki yang akan diperiksa seperti sepatu dan gelang kaki.',
    sumber: 'hal 3',
  },
  {
    id: 'pedis-06',
    modul: 'pedis',
    tipe: 'sinar',
    tanya: 'Di mana letak central point untuk proyeksi AP dan oblik ossa pedis?',
    pilihan: [
      'Base metatarsal digiti III',
      'Metatarsophalangeal joint digiti I',
      'Pertengahan kedua maleolus',
      '2,5 cm di bawah maleolus medialis',
    ],
    kunci: 0,
    penjelasan:
      'Baik proyeksi AP maupun oblik ossa pedis sama-sama menggunakan titik bidik (central point) pada base metatarsal digiti III dengan FFD 100 cm.',
    sumber: 'hal 4-5',
  },
  {
    id: 'pedis-07',
    modul: 'pedis',
    tipe: 'sinar',
    tanya: 'Bagaimana arah central ray dan faktor eksposi yang digunakan pada proyeksi AP ossa pedis?',
    pilihan: [
      'Menyudut 40° cephalad, 50–55 kVp, 4–5 mAs',
      'Tegak lurus atau 10° posterior, 45–50 kVp, 3–4 mAs',
      'Menyudut 5–7° cephalad, 50–55 kVp, 5–6 mAs',
      'Tegak lurus atau 15° anterior, 55–60 kVp, 6–8 mAs',
    ],
    kunci: 1,
    penjelasan:
      'Proyeksi AP ossa pedis menggunakan central ray tegak lurus atau menyudut 10° ke posterior dengan eksposi 45–50 kVp, 3–4 mAs, non grid, film speed 300.',
    sumber: 'hal 4',
  },
  {
    id: 'pedis-08',
    modul: 'pedis',
    tipe: 'kriteria',
    tanya: 'Struktur anatomi apa yang membedakan kriteria evaluasi proyeksi AP oblik dari proyeksi AP ossa pedis?',
    pilihan: [
      'Tumpang tindih basis metatarsal II sampai V yang rapat',
      'Superposisi penuh pada seluruh tulang tarsal bagian lateral',
      'Basis metatarsal III–V bebas superposisi dan tampak sinus tarsi',
      'Jarak lebar hanya pada celah sendi tibiotalar dan calcaneus',
    ],
    kunci: 2,
    penjelasan:
      'Rotasi medial 30° pada proyeksi oblik membuat basis metatarsal III–V bebas superposisi, tuberositas metatarsal V menonjol, serta sinus tarsi tampak jelas.',
    sumber: 'hal 7',
  },
  {
    id: 'pedis-09',
    modul: 'pedis',
    tipe: 'proteksi',
    tanya: 'Bagaimana aturan pengaturan luas lapangan penyinaran untuk proteksi radiasi pada pemeriksaan ossa pedis?',
    pilihan: [
      'Dibuka seluas meja pemeriksaan agar seluruh tungkai terlihat',
      'Dibatasi hanya pada bagian distal jari kaki tanpa tulang tarsal',
      'Diperlebar melewati tepi kaset untuk mencegah pemotongan objek',
      'Diatur seoptimal mungkin maksimal seluas lapangan kaset dipakai',
    ],
    kunci: 3,
    penjelasan:
      'Proteksi radiasi mewajibkan kolimasi seoptimal mungkin sehingga objek yang diperiksa tercakup, maksimal seluas ukuran lapangan kaset yang digunakan.',
    sumber: 'hal 6',
  },
  {
    id: 'pedis-10',
    modul: 'pedis',
    tipe: 'prosedur',
    tanya: 'Berapa ukuran kaset yang disiapkan dan kapan batas akhir pengumpulan laporan praktek ossa pedis?',
    pilihan: [
      'Kaset 18×24 cm; laporan maksimal 3 hari setelah praktek',
      'Kaset 24×30 cm; laporan maksimal 1 hari setelah praktek',
      'Kaset 30×40 cm; laporan dikumpulkan saat itu juga di lab',
      'Kaset 18×24 cm; laporan maksimal 7 hari setelah praktek',
    ],
    kunci: 1,
    penjelasan:
      'Persiapan alat ossa pedis memakai kaset dan hanger ukuran 24×30 cm, sedangkan laporan praktek wajib dikumpulkan paling lambat 1 hari setelah selesai praktek.',
    sumber: 'hal 4-7',
  },
];
