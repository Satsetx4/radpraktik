import type { Soal } from '../types';

export const soalAnkle: Soal[] = [
  {
    id: 'ankle-01',
    modul: 'ankle',
    tipe: 'definisi',
    tanya: 'Apa tujuan merotasikan kaki ke arah medial sebesar 5–7° pada proyeksi AP ankle joint?',
    pilihan: [
      'Menghindari superposisi dengan kaki yang lain',
      'Mendapatkan gambaran ankle joint true AP',
      'Membuka sendi subtalar dan sinus tarsi',
      'Memisahkan tibia dan fibula secara penuh',
    ],
    kunci: 1,
    penjelasan:
      'Pada proyeksi AP ankle joint, kaki ekstensi dirotasikan ke arah medial 5–7° agar didapatkan proyeksi true AP pada sendi pergelangan kaki.',
    sumber: 'hal 4',
  },
  {
    id: 'ankle-02',
    modul: 'ankle',
    tipe: 'definisi',
    tanya: 'Bagaimana arah lintasan berkas sinar yang digunakan pada proyeksi lateral ankle joint?',
    pilihan: [
      'Plantodorsal',
      'Lateromedial',
      'Anteroposterior',
      'Mediolateral',
    ],
    kunci: 3,
    penjelasan:
      'Judul proyeksi kedua modul ankle joint menyebutkan proyeksi lateral dengan arah sinar mediolateral (sinar masuk dari sisi medial menuju lateral ke kaset).',
    sumber: 'hal 5',
  },
  {
    id: 'ankle-03',
    modul: 'ankle',
    tipe: 'posisi',
    tanya: 'Bagaimana posisi kaset dan kaki yang tidak diperiksa pada proyeksi AP ankle joint?',
    pilihan: [
      'Kaset melintang dibagi 2; kaki lain knee fleksi di meja',
      'Kaset membujur dibagi 2; kaki lain lurus ekstensi di samping kaset',
      'Kaset melintang penuh; kaki lain diangkat di atas bantalan softbag',
      'Kaset membujur penuh; kaki lain ditekuk menyilang di atas tungkai',
    ],
    kunci: 0,
    penjelasan:
      'Pada proyeksi AP ankle joint, kaset 18×24 cm dipasang melintang dibagi dua untuk dua proyeksi, sedangkan kaki lainnya difleksikan dengan plantar pedis menempel meja.',
    sumber: 'hal 4',
  },
  {
    id: 'ankle-04',
    modul: 'ankle',
    tipe: 'posisi',
    tanya: 'Berapa derajat rotasi kaki ke arah lateral untuk memperoleh posisi true lateral ankle joint?',
    pilihan: [
      '30° ke arah lateral dengan plantar pedis menempel kaset',
      '45° ke arah lateral dengan knee fleksi 30° di atas meja',
      '90° ke arah lateral dengan knee ekstensi',
      '15° ke arah lateral dengan kaki diletakkan di atas spon',
    ],
    kunci: 2,
    penjelasan:
      'Pada proyeksi lateral ankle joint, kaki diatur dorsofleksi dengan knee ekstensi lalu dirotasikan 90° ke arah lateral hingga true lateral.',
    sumber: 'hal 5',
  },
  {
    id: 'ankle-05',
    modul: 'ankle',
    tipe: 'posisi',
    tanya: 'Selain gelang kaki, benda apa yang perlu diperhatikan saat persiapan pasien pemeriksaan ankle joint?',
    pilihan: [
      'Cincin dan jam tangan pasien',
      'Celana panjang yang tebal',
      'Kacamata dan anting logam',
      'Ikat pinggang berbahan kulit',
    ],
    kunci: 1,
    penjelasan:
      'Persiapan pasien pada modul ankle joint meminta pelepasan benda logam atau penghalang di kaki seperti gelang kaki dan celana panjang yang tebal.',
    sumber: 'hal 4',
  },
  {
    id: 'ankle-06',
    modul: 'ankle',
    tipe: 'sinar',
    tanya: 'Di mana letak central point untuk proyeksi AP dan proyeksi lateral ankle joint?',
    pilihan: [
      'AP di maleolus lateralis; Lateral di base metatarsal III',
      'AP di maleolus medialis; Lateral di pertengahan dua maleolus',
      'AP di pertengahan kedua maleolus; Lateral di maleolus medialis',
      'AP di apex patella; Lateral di 2,5 cm bawah maleolus medialis',
    ],
    kunci: 2,
    penjelasan:
      'Central point AP diarahkan ke pertengahan kedua maleolus (50–55 kVp), sedangkan pada lateral (mediolateral) tepat di maleolus medialis (52 kVp).',
    sumber: 'hal 4-5',
  },
  {
    id: 'ankle-07',
    modul: 'ankle',
    tipe: 'sinar',
    tanya: 'Berapa nilai FFD, kVp, dan mAs pada proyeksi lateral ankle joint?',
    pilihan: [
      'FFD 100 cm, 52 kVp, 3–4 mAs',
      'FFD 100 cm, 45–50 kVp, 4–5 mAs',
      'FFD 90 cm, 60–65 kVp, 5–6 mAs',
      'FFD 120 cm, 55–60 kVp, 8 mAs',
    ],
    kunci: 0,
    penjelasan:
      'Pengaturan sinar proyeksi lateral ankle joint memakai CR vertikal tegak lurus, FFD 100 cm, 52 kVp, 3–4 mAs, non grid, dan film speed 300.',
    sumber: 'hal 5',
  },
  {
    id: 'ankle-08',
    modul: 'ankle',
    tipe: 'kriteria',
    tanya: 'Pada evaluasi radiograf proyeksi lateral ankle joint, di manakah posisi tulang fibula terhadap tibia seharusnya tampak?',
    pilihan: [
      'Terpisah jauh di depan tulang tibia',
      'Di bagian setengah anterior tulang tibia',
      'Tidak boleh tumpang tindih dengan tibia',
      'Di bagian setengah posterior tulang tibia',
    ],
    kunci: 3,
    penjelasan:
      'Kriteria evaluasi proyeksi lateral ankle joint menyebutkan fibula tampak berada di atas setengah posterior tibia dengan kubah talus medial dan lateral saling superposisi.',
    sumber: 'hal 7',
  },
  {
    id: 'ankle-09',
    modul: 'ankle',
    tipe: 'proteksi',
    tanya: 'Apa langkah wajib apabila terpaksa harus ada pendamping pasien di dalam ruang pemeriksaan ankle joint?',
    pilihan: [
      'Pendamping berdiri di dekat tabung sinar-X tanpa pelindung',
      'Pendamping wajib mengenakan apron pelindung radiasi',
      'Pendamping cukup memalingkan wajah tanpa memakai apron',
      'Pendamping memegang kaset langsung dengan tangan telanjang',
    ],
    kunci: 1,
    penjelasan:
      'Sesuai aturan proteksi radiasi, orang yang tidak berkepentingan keluar ruang, dan apabila terpaksa ada pendamping maka wajib dikenakan apron.',
    sumber: 'hal 6',
  },
  {
    id: 'ankle-10',
    modul: 'ankle',
    tipe: 'prosedur',
    tanya: 'Alat apa yang digunakan pada tahap awal pasca pemeriksaan untuk menuliskan identitas radiografi ankle joint?',
    pilihan: [
      'Tangki rinsing kamar gelap',
      'Radiographic phantom',
      'ID camera dengan kertas identitas',
      'Mesin pengering film otomatis',
    ],
    kunci: 2,
    penjelasan:
      'Bagian pasca pemeriksaan modul ankle joint mengawali pemrosesan dengan menulis data pasien pada kertas identitas lalu memasukkannya ke ID camera.',
    sumber: 'hal 8',
  },
];
