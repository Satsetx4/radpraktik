import type { Soal } from '../types';

export const soalElbow: Soal[] = [
  {
    id: 'elbow-01',
    modul: 'elbow',
    tipe: 'definisi',
    tanya: 'Proyeksi apa saja yang dilakukan pada modul teknik radiografi elbow joint?',
    pilihan: [
      'AP dan Oblik',
      'PA dan Axial',
      'AP dan Lateral',
      'Lateral dan Tangensial',
    ],
    kunci: 2,
    penjelasan:
      'Modul teknik radiografi elbow joint mencakup dua proyeksi utama, yaitu proyeksi Anterior Posterior (AP) dan proyeksi Lateral.',
    sumber: 'hal 4-5',
  },
  {
    id: 'elbow-02',
    modul: 'elbow',
    tipe: 'definisi',
    tanya: 'Bagian tulang manakah yang dijadikan patokan untuk mencegah rotasi pada pemeriksaan elbow joint?',
    pilihan: [
      'Kedua epicondylus humerus',
      'Kedua processus styloideus',
      'Processus coracoideus dan acromion',
      'Caput radii dan incisura trochlearis',
    ],
    kunci: 0,
    penjelasan:
      'Patokan kesejajaran elbow joint adalah kedua epicondylus humerus: berjarak sama ke kaset pada AP dan saling superposisi pada lateral.',
    sumber: 'hal 4-5',
  },
  {
    id: 'elbow-03',
    modul: 'elbow',
    tipe: 'posisi',
    tanya: 'Bagaimana posisi kedua epicondylus humerus yang benar saat memposisikan proyeksi lateral elbow joint?',
    pilihan: [
      'Berjarak sama terhadap permukaan kaset',
      'Saling menumpuk atau superposisi',
      'Membentuk sudut 45° terhadap bidang meja',
      'Diputar ke arah medial semaksimal mungkin',
    ],
    kunci: 1,
    penjelasan:
      'Pada proyeksi lateral elbow joint dengan fleksi siku 90°, kedua epicondylus humerus diatur saling menumpuk atau superposisi.',
    sumber: 'hal 5',
  },
  {
    id: 'elbow-04',
    modul: 'elbow',
    tipe: 'posisi',
    tanya: 'Bagaimana pengaturan posisi bidang antara lengan bawah dan lengan atas pada proyeksi AP serta lateral elbow joint?',
    pilihan: [
      'Lengan atas diangkat lebih tinggi 15° dari meja',
      'Lengan bawah diposisikan lebih rendah dari bidang kaset',
      'Siku ditekuk ke atas sehingga lengan membentuk sudut tegak',
      'Lengan bawah dan lengan atas berada dalam satu bidang datar',
    ],
    kunci: 3,
    penjelasan:
      'Baik pada proyeksi AP maupun lateral elbow joint, lengan bawah dan lengan atas diatur dalam satu bidang datar agar sendi siku sejajar kaset.',
    sumber: 'hal 4-5',
  },
  {
    id: 'elbow-05',
    modul: 'elbow',
    tipe: 'posisi',
    tanya: 'Bagaimana posisi tangan saat melakukan proyeksi lateral elbow joint?',
    pilihan: [
      'Sisi ulna menempel kaset dengan ibu jari di atas menempel telapak tangan',
      'Telapak tangan menempel rata di atas kaset dengan jari direnggangkan',
      'Punggung tangan menempel di atas kaset dan jari diganjal softbag',
      'Sisi ibu jari menempel kaset dengan tangan dirotasikan 45° ke prone',
    ],
    kunci: 0,
    penjelasan:
      'Pada proyeksi lateral elbow joint, lengan diletakkan tegak miring pada sisi ulna dengan ibu jari di atas dan menempel pada telapak tangan.',
    sumber: 'hal 5',
  },
  {
    id: 'elbow-06',
    modul: 'elbow',
    tipe: 'sinar',
    tanya: 'Di mana central point dan arah central ray pada proyeksi AP serta lateral elbow joint?',
    pilihan: [
      'Pertengahan antebrachi, vertikal tegak lurus kaset',
      'Pertengahan elbow joint, vertikal tegak lurus kaset',
      'Pertengahan humerus, horizontal tegak lurus kaset',
      'Processus coracoideus, menyudut 15° ke cephalad',
    ],
    kunci: 1,
    penjelasan:
      'Proyeksi AP dan lateral elbow joint memakai central ray vertikal tegak lurus kaset dengan central point di pertengahan elbow joint.',
    sumber: 'hal 5',
  },
  {
    id: 'elbow-07',
    modul: 'elbow',
    tipe: 'sinar',
    tanya: 'Berapa faktor eksposi dan FFD yang digunakan pada proyeksi AP serta lateral elbow joint?',
    pilihan: [
      '40–50 kVp, 4–5 mAs, FFD 100 cm, non grid',
      '50–55 kVp, 5–6 mAs, FFD 100 cm, non grid',
      '50–55 kVp, 6–7 mAs, FFD 100 cm, non grid',
      '55–60 kVp, 7–8 mAs, FFD 100 cm, non grid',
    ],
    kunci: 2,
    penjelasan:
      'Kedua proyeksi elbow joint menggunakan FFD 100 cm, non grid, film speed 400, dengan faktor eksposi 50–55 kVp dan 6–7 mAs.',
    sumber: 'hal 5',
  },
  {
    id: 'elbow-08',
    modul: 'elbow',
    tipe: 'kriteria',
    tanya: 'Apa fokus evaluasi gambaran anatomi radiologi pada akhir praktikum elbow joint?',
    pilihan: [
      'Kejelasan celah sendi bahu dan posisi tuberculum minus',
      'Seluruh anatomi siku tangan beserta batas proksimal dan distalnya',
      'Kedua acromioclavicular dan sternoclavicular joint secara utuh',
      'Jarak antara seluruh tulang metacarpal dan phalang distal',
    ],
    kunci: 1,
    penjelasan:
      'Bagian evaluasi radiografi modul elbow joint meminta penyebutan semua bagian anatomi siku tangan yang tampak serta batas proksimal dan distalnya.',
    sumber: 'hal 6',
  },
  {
    id: 'elbow-09',
    modul: 'elbow',
    tipe: 'proteksi',
    tanya: 'Ke mana arah pandangan mata pasien harus diarahkan selama pemotretan elbow joint?',
    pilihan: [
      'Menatap lurus ke arah kolimator tabung sinar-X',
      'Menunduk melihat tepat ke tengah kaset radiografi',
      'Menghadap langsung ke sisi meja kontrol operator',
      'Menjauh dari sumber sinar-X',
    ],
    kunci: 3,
    penjelasan:
      'Sebagai proteksi radiasi, pasien diarahkan agar pandangan mata menjauh dari sumber sinar-X dan daerah panggul ditutup dengan apron.',
    sumber: 'hal 5',
  },
  {
    id: 'elbow-10',
    modul: 'elbow',
    tipe: 'prosedur',
    tanya: 'Ukuran kaset dan film berapa yang disiapkan untuk pemeriksaan elbow joint?',
    pilihan: [
      '18×24 cm',
      '24×30 cm',
      '30×40 cm',
      '35×35 cm',
    ],
    kunci: 0,
    penjelasan:
      'Pada persiapan alat modul elbow joint, kaset radiografi dan film yang digunakan berukuran 18×24 cm.',
    sumber: 'hal 4',
  },
];
