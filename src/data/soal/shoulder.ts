import type { Soal } from '../types';

export const soalShoulder: Soal[] = [
  {
    id: 'shoulder-01',
    modul: 'shoulder',
    tipe: 'definisi',
    tanya: 'Proyeksi apa yang dipelajari pada modul teknik radiografi shoulder joint?',
    pilihan: [
      'AP dan AP Endo-Eksorotasi',
      'PA dan Lateral Scapula',
      'AP Axial dan Tangensial',
      'AP dan Lateral Transthoracal',
    ],
    kunci: 0,
    penjelasan:
      'Sesuai bagian analisis kebutuhan dan pelaksanaan pemeriksaan modul shoulder joint, proyeksi yang digunakan adalah AP dan AP endo-eksorotasi.',
    sumber: 'hal 4-5',
  },
  {
    id: 'shoulder-02',
    modul: 'shoulder',
    tipe: 'definisi',
    tanya: 'Apa perbedaan arah putaran lengan antara AP endorotasi dan AP eksorotasi pada pemeriksaan shoulder joint?',
    pilihan: [
      'Endorotasi memutar ke arah atas, eksorotasi ke bawah',
      'Endorotasi memutar ke arah medial, eksorotasi ke lateral',
      'Endorotasi memutar ke arah lateral, eksorotasi ke medial',
      'Endorotasi memutar tubuh 45°, eksorotasi tubuh 15°',
    ],
    kunci: 1,
    penjelasan:
      'Dari posisi AP/supine, AP endorotasi memutar lengan ke arah medial semaksimal mungkin, sedangkan AP eksorotasi memutar lengan ke arah lateral semaksimal mungkin.',
    sumber: 'hal 5',
  },
  {
    id: 'shoulder-03',
    modul: 'shoulder',
    tipe: 'posisi',
    tanya: 'Berapa derajat rotasi tubuh ke arah yang sakit agar scapula sejajar film pada pemeriksaan shoulder joint?',
    pilihan: [
      '15° ke arah yang sehat',
      '45° ke arah yang sehat',
      '30° ke arah yang sakit',
      '60° ke arah yang sakit',
    ],
    kunci: 2,
    penjelasan:
      'Tubuh pasien dirotasikan 30° ke arah sisi yang sakit sehingga scapula sisi yang diperiksa paralel dengan permukaan film.',
    sumber: 'hal 4-5',
  },
  {
    id: 'shoulder-04',
    modul: 'shoulder',
    tipe: 'posisi',
    tanya: 'Bagaimana cara menyangga posisi pasien supine setelah tubuh dirotasikan 30° pada pemeriksaan shoulder joint?',
    pilihan: [
      'Sisi yang sakit diganjal softbag setinggi 10 cm',
      'Kedua lutut ditekuk tanpa mengganjal bagian tubuh mana pun',
      'Lengan yang diperiksa diganjal spon bersudut 45°',
      'Sisi yang sehat diganjal dengan sandbag',
    ],
    kunci: 3,
    penjelasan:
      'Pada posisi tidur supine, setelah tubuh dirotasikan 30° ke sisi yang sakit, sisi tubuh yang sehat diganjal sandbag agar posisi stabil.',
    sumber: 'hal 4-5',
  },
  {
    id: 'shoulder-05',
    modul: 'shoulder',
    tipe: 'posisi',
    tanya: 'Bagaimana pengaturan batas atas dan batas bawah kaset pada proyeksi shoulder joint?',
    pilihan: [
      'Tepi atas 2,5 cm di atas sendi bahu, tepi bawah 1/3 proksimal humerus',
      'Tepi atas 5 cm di atas sendi bahu, tepi bawah mencakup sendi siku',
      'Tepi atas sejajar puncak kepala, tepi bawah setinggi umbilikus',
      'Tepi atas tepat di clavicula, tepi bawah setinggi pertengahan humerus',
    ],
    kunci: 0,
    penjelasan:
      'Tepi atas kaset diatur 2,5 cm di atas sendi bahu dan tepi bawah mencakup 1/3 proksimal humerus agar sendi bahu masuk penuh di tengah kaset.',
    sumber: 'hal 4-5',
  },
  {
    id: 'shoulder-06',
    modul: 'shoulder',
    tipe: 'sinar',
    tanya: 'Di mana letak central point pada proyeksi AP dan AP endo-eksorotasi shoulder joint?',
    pilihan: [
      'Pertengahan os humerus',
      'Processus coracoideus',
      'Mid clavicula',
      'Midmedial scapula',
    ],
    kunci: 1,
    penjelasan:
      'Baik pada proyeksi AP maupun AP endo-eksorotasi shoulder joint, central point diarahkan tepat pada processus coracoideus.',
    sumber: 'hal 4-5',
  },
  {
    id: 'shoulder-07',
    modul: 'shoulder',
    tipe: 'sinar',
    tanya: 'Berapa faktor eksposi dan FFD yang digunakan pada pemeriksaan shoulder joint?',
    pilihan: [
      '55–60 kVp, 7–8 mAs, FFD 100 cm, non grid',
      '72 kVp, 10 mAs, FFD 100 cm, dengan grid',
      '55–60 kVp, 8–10 mAs, FFD 100 cm, non grid',
      '75 kVp, 16 mAs, FFD 100 cm, dengan grid',
    ],
    kunci: 2,
    penjelasan:
      'Pemeriksaan shoulder joint menggunakan FFD 100 cm, non grid, film speed 400, dengan faktor eksposi 55–60 kVp dan 8–10 mAs.',
    sumber: 'hal 5',
  },
  {
    id: 'shoulder-08',
    modul: 'shoulder',
    tipe: 'kriteria',
    tanya: 'Struktur apa yang tampak jelas pada radiograf shoulder joint dengan eksorotasi humerus?',
    pilihan: [
      'Lesser tubercle di antara caput dan leher scapula',
      'Greater tubercle dan lokasi insersi tendon supraspinatus',
      'Humerus proksimal dalam posisi true lateral sejati',
      'Seluruh corpus scapula bebas dari superposisi costae',
    ],
    kunci: 1,
    penjelasan:
      'Pada external rotation (eksorotasi), greater tubercle humerus dan lokasi insersi tendon supraspinatus tampak tervisualisasi jelas.',
    sumber: 'hal 7',
  },
  {
    id: 'shoulder-09',
    modul: 'shoulder',
    tipe: 'proteksi',
    tanya: 'Selain penggunaan apron di panggul, langkah proteksi apa yang tercantum pada modul shoulder joint?',
    pilihan: [
      'Memperlebar kolimasi melebihi batas kaset agar tidak terpotong',
      'Mengulang eksposi minimal dua kali untuk memastikan hasil',
      'Meminta pasien menatap sumber sinar-X agar tidak bergerak',
      'Membatasi luas lapangan maksimal seluas kaset dan menghindari pengulangan',
    ],
    kunci: 3,
    penjelasan:
      'Proteksi radiasi modul shoulder joint menekankan apron di panggul, luas lapangan maksimal seluas kaset, pandangan menjauh dari sinar-X, dan menghindari pengulangan foto.',
    sumber: 'hal 6',
  },
  {
    id: 'shoulder-10',
    modul: 'shoulder',
    tipe: 'prosedur',
    tanya: 'Benda apa yang wajib dipastikan tidak ada pada area bahu saat persiapan pasien pemeriksaan shoulder joint?',
    pilihan: [
      'Kancing, pin, dan jarum peniti',
      'Cincin, jam tangan, dan pasir di telapak tangan',
      'Gelang kaki dan kaus kaki berbahan tebal',
      'Sabuk logam dan kunci di saku celana',
    ],
    kunci: 0,
    penjelasan:
      'Pada persiapan pasien bahu, benda logam seperti kancing, pin, dan jarum peniti dilepas; bila memungkinkan pasien berganti baju khusus pasien.',
    sumber: 'hal 4',
  },
];
