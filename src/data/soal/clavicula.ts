import type { Soal } from '../types';

export const soalClavicula: Soal[] = [
  {
    id: 'clavicula-01',
    modul: 'clavicula',
    tipe: 'definisi',
    tanya: 'Proyeksi apa yang digunakan dalam modul teknik radiografi os clavicula?',
    pilihan: [
      'AP Axial',
      'PA Oblik',
      'AP dan Lateral',
      'AP Endo-Eksorotasi',
    ],
    kunci: 0,
    penjelasan:
      'Sesuai bagian analisis kebutuhan dan pelaksanaan pemeriksaan modul os clavicula, pemeriksaan dilakukan dengan satu proyeksi utama yaitu AP Axial.',
    sumber: 'hal 3-4',
  },
  {
    id: 'clavicula-02',
    modul: 'clavicula',
    tipe: 'definisi',
    tanya: 'Dua sendi apa saja yang wajib masuk di dalam kaset pada pemeriksaan os clavicula proyeksi AP axial?',
    pilihan: [
      'Scapulohumeral joint dan elbow joint',
      'Acromioclavicular joint dan elbow joint',
      'Sternoclavicular joint dan processus acromion',
      'Glenohumeral joint dan radiocarpal joint',
    ],
    kunci: 2,
    penjelasan:
      'Pada pengaturan posisi objek AP axial os clavicula, batas kaset memastikan mulai dari sternoclavicular joint hingga processus acromion masuk lengkap.',
    sumber: 'hal 4',
  },
  {
    id: 'clavicula-03',
    modul: 'clavicula',
    tipe: 'posisi',
    tanya: 'Bagaimana posisi kaset dan batas atasnya saat pemeriksaan AP axial os clavicula?',
    pilihan: [
      'Kaset membujur, batas atas 5 cm di atas sendi bahu',
      'Kaset melintang, batas atas 3–4 cm di atas processus acromion',
      'Kaset melintang, batas atas tepat sejajar manubrium sterni',
      'Kaset membujur, batas atas 2,5 cm di atas sendi bahu',
    ],
    kunci: 1,
    penjelasan:
      'Pada proyeksi AP axial os clavicula, kaset dipasang melintang dengan batas atas 3–4 cm di atas processus acromion.',
    sumber: 'hal 4',
  },
  {
    id: 'clavicula-04',
    modul: 'clavicula',
    tipe: 'posisi',
    tanya: 'Bagaimana aba-aba pernapasan yang diberikan kepada pasien tepat sebelum eksposi proyeksi AP axial os clavicula?',
    pilihan: [
      'Napas biasa perlahan selama eksposi',
      'Ekspirasi penuh lalu tahan napas',
      'Tarik napas dangkal tanpa menahan',
      'Inspirasi penuh dan tahan napas',
    ],
    kunci: 3,
    penjelasan:
      'Aba-aba eksposi pada pemeriksaan AP axial os clavicula adalah inspirasi penuh dan tahan napas agar klavikula terangkat jelas dan bebas gerak.',
    sumber: 'hal 5',
  },
  {
    id: 'clavicula-05',
    modul: 'clavicula',
    tipe: 'posisi',
    tanya: 'Bagian tubuh mana yang harus menempel di bucky stand bila pemeriksaan AP axial os clavicula dilakukan berdiri?',
    pilihan: [
      'Kepala, leher, dan bahu',
      'Dada depan dan dagu pasien',
      'Sisi lateral lengan dan pinggang',
      'Punggung tangan dan sisi ulna',
    ],
    kunci: 0,
    penjelasan:
      'Jika pasien berdiri menghadap tabung sinar-X, kepala, leher, dan bahu menempel di bucky stand dengan klavikula diatur di tengah kaset.',
    sumber: 'hal 4',
  },
  {
    id: 'clavicula-06',
    modul: 'clavicula',
    tipe: 'sinar',
    tanya: 'Berapa derajat penyudutan tabung sinar-X dan ke arah mana central ray pada proyeksi AP axial os clavicula?',
    pilihan: [
      '15–30° ke arah caudad',
      '15–30° ke arah cephalad',
      '45–60° ke arah lateral',
      'Tegak lurus 0° terhadap kaset',
    ],
    kunci: 1,
    penjelasan:
      'Central ray pada proyeksi AP axial os clavicula disudutkan 15–30° ke arah cephalad untuk memproyeksikan klavikula di atas tulang rusuk.',
    sumber: 'hal 4',
  },
  {
    id: 'clavicula-07',
    modul: 'clavicula',
    tipe: 'sinar',
    tanya: 'Di mana letak central point dan faktor eksposi pada proyeksi AP axial os clavicula?',
    pilihan: [
      'Processus coracoideus; 55–60 kVp, 8–10 mAs, FFD 100 cm',
      'Mid scapula; 75 kVp, 16 mAs, FFD 100 cm',
      'Mid klavikula; 72 kVp, 10 mAs, FFD 100 cm',
      'Pertengahan humerus; 55–60 kVp, 7–8 mAs, FFD 100 cm',
    ],
    kunci: 2,
    penjelasan:
      'Central point diarahkan ke mid klavikula (tengah antara processus acromion dan sternoclavicular joint) dengan 72 kVp, 10 mAs, FFD 100 cm, grid bila perlu.',
    sumber: 'hal 4-5',
  },
  {
    id: 'clavicula-08',
    modul: 'clavicula',
    tipe: 'kriteria',
    tanya: 'Bagaimana posisi proyeksi os clavicula terhadap costae dan scapula pada kriteria evaluasi AP axial yang baik?',
    pilihan: [
      'Seluruh klavikula tersembunyi di bawah tulang rusuk ke-4',
      'Sebagian besar klavikula tampak di atas costae dan scapula',
      'Klavikula tampak vertikal sejajar dengan tepi medial scapula',
      'Hanya ujung acromial yang terlihat tanpa sternoclavicular joint',
    ],
    kunci: 1,
    penjelasan:
      'Pada kriteria evaluasi AP axial, sebagian besar klavikula terproyeksi di atas tulang rusuk dan scapula dengan ujung medial tumpang tindih costae I–II.',
    sumber: 'hal 6',
  },
  {
    id: 'clavicula-09',
    modul: 'clavicula',
    tipe: 'proteksi',
    tanya: 'Bagaimana aturan proteksi radiasi terkait keberadaan pendamping di ruang pemeriksaan os clavicula?',
    pilihan: [
      'Pendamping bebas berdiri di dekat meja asalkan memakai masker',
      'Pendamping duduk di samping tabung sinar-X tanpa pelindung',
      'Pendamping cukup menutup panggulnya dengan kaset cadangan',
      'Orang tak berkepentingan keluar; pendamping terpaksa wajib berapron',
    ],
    kunci: 3,
    penjelasan:
      'Orang yang tidak berkepentingan diminta keluar ruang pemeriksaan; jika terpaksa harus ada pendamping, orang tersebut wajib mengenakan apron.',
    sumber: 'hal 5',
  },
  {
    id: 'clavicula-10',
    modul: 'clavicula',
    tipe: 'prosedur',
    tanya: 'Kapan batas maksimal pengumpulan laporan praktek sesuai bagian evaluasi modul os clavicula?',
    pilihan: [
      'Paling lambat 1 hari setelah selesai praktek',
      'Paling lambat 7 hari setelah selesai praktek',
      'Langsung sebelum pemrosesan film dimulai',
      'Pada akhir semester setelah semua modul selesai',
    ],
    kunci: 0,
    penjelasan:
      'Pada bagian penyusunan laporan praktek modul os clavicula, laporan dilengkapi minimal 1 referensi textbook dan dikumpulkan paling lambat 1 hari setelah praktek.',
    sumber: 'hal 6',
  },
];
