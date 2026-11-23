import type { Kasus } from './types';

export const KASUS_LIST: Kasus[] = [
  {
    id: 'k01',
    modulTerkait: ['manus'],
    skenario:
      'Tn. A, laki-laki 34 tahun, datang ke instalasi radiologi diantar rekan kerjanya setelah tangan kanannya terjepit pintu besi di gudang. Punggung tangan tampak bengkak dan ia mengeluh nyeri saat menggerakkan jari. Pasien sadar penuh, kooperatif, dan mampu duduk tanpa bantuan. Lembar permintaan dari IGD meminta pemeriksaan radiografi ossa manus dextra untuk melihat kemungkinan kelainan tulang. Radiografer perlu menentukan proyeksi rutin yang akan dibuat terlebih dahulu.',
    tahap1: {
      tanya: 'Proyeksi rutin apa yang dibuat pertama kali untuk ossa manus?',
      pilihan: ['Posterior anterior (PA)', 'Anterior posterior (AP)', 'Axial', 'Tangensial'],
      kunci: 0,
    },
    tahap2: {
      tanya: 'Di mana central point untuk proyeksi tersebut?',
      pilihan: [
        'MCP digiti II',
        'MCP digiti III',
        'Processus styloideus radii',
        'Pertengahan os carpal',
      ],
      kunci: 1,
    },
    pembahasan: {
      proyeksi:
        'PA sebagai proyeksi rutin pertama, dilengkapi lateral dan oblik sesuai modul ossa manus.',
      posisi:
        'Pasien duduk menyamping meja, telapak tangan kanan prone di kaset, jari direnggangkan, kedua processus styloideus berjarak sama agar tidak rotasi.',
      centralRay:
        'CR vertikal tegak lurus kaset, CP pada MCP digiti III, FFD 100 cm, 40–50 kVp, 4–5 mAs, non grid.',
      proteksi:
        'Apron menutup daerah panggul, pandangan pasien menjauh dari sumber sinar-X, dan pendamping di ruangan wajib memakai apron.',
      catatan:
        'Karena tangan bengkak, fiksasi memakai sandbag di sisi lengan dan softbag di bawah tangan supaya pasien nyaman dan tidak bergerak.',
    },
    sumber: 'manus hal 5-6',
  },
  {
    id: 'k02',
    modulTerkait: ['wrist'],
    skenario:
      'Ny. S, perempuan 28 tahun, datang ke unit radiologi dari poli rawat jalan setelah terpeleset di teras rumah dan jatuh bertumpu pada pergelangan tangan kiri. Pergelangan tangan tampak nyeri dan sulit digerakkan, namun pasien sadar penuh, kooperatif, serta mampu duduk sendiri di samping meja pemeriksaan. Lembar permintaan mencantumkan pemeriksaan radiografi wrist joint sinistra. Radiografer harus menentukan proyeksi dan pengaturan posisi yang sesuai.',
    tahap1: {
      tanya: 'Proyeksi apa yang digunakan pada pemeriksaan wrist joint sesuai modul?',
      pilihan: [
        'Anterior posterior (AP) dan Lateral',
        'Posterior anterior (PA) dan Aksial',
        'Oblik dan Tangensial',
        'AP Aksial dan Lateral',
      ],
      kunci: 0,
    },
    tahap2: {
      tanya: 'Bagaimana pengaturan posisi tangan pada proyeksi AP wrist joint?',
      pilihan: [
        'Telapak tangan menempel kaset (prone) dan jari-jari direnggangkan',
        'Punggung pergelangan tangan menempel kaset (supine) dan jari diganjal softbag',
        'Sisi jari kelingking menempel kaset dengan jari saling bertumpuk',
        'Tangan dirotasikan 45° dari posisi lateral dengan spon penyangga',
      ],
      kunci: 1,
    },
    pembahasan: {
      proyeksi:
        'Pemeriksaan wrist joint menggunakan proyeksi Anterior Posterior (AP) dan Lateral dengan kaset ukuran 18×24 cm.',
      posisi:
        'Duduk menyamping meja. AP: punggung pergelangan tangan supine di kaset, jari diganjal softbag, kedua processus styloideus berjarak sama. Lateral: sisi kelingking di kaset, processus styloideus superposisi.',
      centralRay:
        'CR vertikal tegak lurus kaset, CP pada pertengahan wrist joint, FFD 100 cm, 40–50 kVp, 4–5 mAs, non grid, film speed 400.',
      proteksi:
        'Gunakan apron untuk menutupi daerah panggul pasien, arahkan pandangan menjauh dari sumber sinar-X, dan pakaikan apron pada pendamping bila ada.',
      catatan:
        'Lepaskan benda logam seperti cincin atau jam tangan; beri sandbag di sisi lengan serta softbag untuk kenyamanan dan fiksasi.',
    },
    sumber: 'wrist hal 3-5',
  },
  {
    id: 'k03',
    modulTerkait: ['ankle'],
    skenario:
      'Sdr. R, laki-laki 22 tahun, dibawa ke ruang radiologi dari IGD menggunakan kursi roda setelah pergelangan kaki kanannya terkilir saat bermain futsal. Area pergelangan kaki bengkak dan nyeri saat digerakkan sehingga ia tidak mampu berdiri, tetapi sadar penuh dan dapat berbaring telentang di meja pemeriksaan. Dokter meminta pemeriksaan radiografi ankle joint dextra. Radiografer perlu memilih proyeksi rutin dan pengaturan sinar yang tepat.',
    tahap1: {
      tanya: 'Kombinasi proyeksi apa yang digunakan pada pemeriksaan ankle joint?',
      pilihan: [
        'AP dan Lateral (mediolateral)',
        'PA dan Oblik 45°',
        'AP Aksial dan Tangensial',
        'Plantodorsal dan Axial',
      ],
      kunci: 0,
    },
    tahap2: {
      tanya: 'Bagaimana pengaturan rotasi kaki dan central point pada proyeksi AP ankle joint?',
      pilihan: [
        'Kaki dirotasikan 90° ke lateral, CP pada maleolus medialis',
        'Kaki dirotasikan medial 5–7° (true AP), CP pada pertengahan kedua maleolus',
        'Kaki plantar fleksi penuh, CP pada basis metatarsal III',
        'Kaki rotasi eksternal 45°, CP pada pertengahan os calcaneus',
      ],
      kunci: 1,
    },
    pembahasan: {
      proyeksi:
        'Proyeksi AP dan Lateral (arah sinar mediolateral) dengan kaset ukuran 18×24 cm melintang dibagi dua.',
      posisi:
        'Pasien supine, kaki yang diperiksa ekstensi dan pedis dorsofleksi. Pada AP, kaki dirotasikan medial 5–7° (true AP) dan kaki sisi lain fleksi. Pada Lateral, kaki dirotasikan 90° ke arah lateral.',
      centralRay:
        'CR vertikal tegak lurus kaset, FFD 100 cm. CP AP di pertengahan kedua maleolus (50–55 kVp); CP Lateral di maleolus medialis (52 kVp), 3–4 mAs, non grid.',
      proteksi:
        'Pasang apron di area panggul, atur luas lapangan seoptimal mungkin maksimal seluas kaset, hindari pengulangan foto, dan pakaikan apron pada pendamping.',
      catatan:
        'Karena pasien tidak mampu berdiri dan nyeri, pemotretan dilakukan supine dengan alat bantu fiksasi softbag dan sandbag agar tidak bergerak.',
    },
    sumber: 'ankle hal 4-6',
  },
  {
    id: 'k04',
    modulTerkait: ['pelvis'],
    skenario:
      'Tn. B, laki-laki 46 tahun, datang dari IGD dengan brankar setelah mengalami benturan pada area panggul akibat kecelakaan lalu lintas. Pasien mengeluh nyeri hebat di pangkal paha dan panggul saat kaki digerakkan sehingga sulit memutar tungkai ke dalam, namun ia sadar dan kooperatif. Lembar permintaan IGD meminta pemeriksaan radiografi pelvis. Radiografer harus menyesuaikan teknik pemotretan dengan kondisi pasien trauma tersebut.',
    tahap1: {
      tanya: 'Proyeksi awal apa yang tepat dilakukan pada pemeriksaan pelvis pasien tersebut?',
      pilihan: [
        'Anterior Posterior (AP)',
        'Posterior Anterior (PA)',
        'AP Aksial inlet',
        'Tangensial bilateral',
      ],
      kunci: 0,
    },
    tahap2: {
      tanya: 'Penyesuaian posisi objek apa yang perlu diperhatikan pada pasien trauma di proyeksi AP pelvis?',
      pilihan: [
        'Tetap memaksa rotasi internal kaki 20° agar collum femoris paralel',
        'Tidak melakukan rotasi internal kaki 15–20° karena kontraindikasi trauma',
        'Memposisikan pasien berdiri tegak menghadap stand kaset',
        'Memiringkan tubuh 45° agar foramen obturator terbuka',
      ],
      kunci: 1,
    },
    pembahasan: {
      proyeksi:
        'Proyeksi AP sebagai pemeriksaan awal pelvis dengan kaset 30×40 cm dan grid, dapat dilengkapi proyeksi Lateral bila kondisi pasien memungkinkan.',
      posisi:
        'Pasien true supine, MSP pada pertengahan meja, kedua SIAS berjarak sama dari meja agar tidak rotasi. Tempatkan sandbag di ankle joint sebagai fiksasi.',
      centralRay:
        'CR tegak lurus pertengahan IR, CP pada pertengahan antara SIAS dan symphysis pubis (5 cm inferior SIAS), FFD 100 cm, 60–65 kVp, 15–25 mAs, eksposi tahan napas.',
      proteksi:
        'Gunakan gonad shield untuk melindungi organ reproduksi, batasi luas lapangan seluas objek, dan minta pengantar keluar atau memakai apron.',
      catatan:
        'Rotasi internal kaki 15–20° dikontraindikasikan pada kasus trauma atau patologis seperti pasien ini agar tidak memperberat cedera.',
    },
    sumber: 'pelvis hal 4-6',
  },
  {
    id: 'k05',
    modulTerkait: ['cervical'],
    skenario:
      'Ny. D, perempuan 39 tahun, datang dari poli rawat jalan dengan keluhan nyeri leher yang menjalar ke bahu sejak tiga hari lalu. Pasien datang berjalan sendiri tanpa alat bantu, sadar penuh, kooperatif, dan dapat berdiri maupun berbaring sesuai instruksi. Tidak ada benda logam setelah ia melepas kalung serta antingnya. Dokter meminta pemeriksaan radiografi vertebra cervicalis untuk evaluasi tulang leher. Radiografer perlu menyiapkan proyeksi dan pengaturan sinar yang tepat.',
    tahap1: {
      tanya: 'Rangkaian proyeksi apa yang digunakan pada pemeriksaan vertebra cervicalis sesuai modul?',
      pilihan: [
        'AP, Lateral, dan AP Aksial Oblik (RPO/LPO)',
        'PA, Lateral, dan Tangensial',
        'AP, Frog-leg, dan Lateral',
        'AP, PA, dan Axial berdiri',
      ],
      kunci: 0,
    },
    tahap2: {
      tanya: 'Bagaimana arah central ray dan titik bidik pada proyeksi AP vertebra cervicalis?',
      pilihan: [
        'CR tegak lurus horizontal, CP setinggi C-7',
        'CR menyudut 15–20° cranial, CP pada C-4 (thyroid cartilage)',
        'CR menyudut 15–20° caudal, CP pada C-1',
        'CR tegak lurus vertikal, CP pada C-2',
      ],
      kunci: 1,
    },
    pembahasan: {
      proyeksi:
        'Pemeriksaan vertebra cervicalis meliputi proyeksi AP, Lateral, dan AP Aksial Oblik (RPO/LPO) dengan kaset 18×24 cm dan grid.',
      posisi:
        'Pasien erect atau supine, kedua bahu rileks lurus ke bawah agar C-7 tidak tertutup bahu, dan dagu sedikit menengadah agar mandibula tidak menutupi cervical atas.',
      centralRay:
        'CP pada C-4 (setinggi thyroid cartilage), 60–65 kVp, 15–20 mAs. AP & Oblik: CR 15–20° cranial; Lateral: CR tegak lurus. FFD AP 100 cm, Lateral & Oblik 152 cm.',
      proteksi:
        'Pasang pelindung gonad, gunakan kaca mata Pb bila tersedia, batasi luas lapangan seluas objek, hindari pengulangan, dan pakai AEC detektor tengah nilai N jika ada.',
      catatan:
        'Bila kurvatura lordotik menonjol, gunakan penyangga kepala untuk mereduksi distorsi dan hindari posisi terpelintir (torsi) saat proyeksi oblik.',
    },
    sumber: 'cervical hal 6-9',
  },
];
