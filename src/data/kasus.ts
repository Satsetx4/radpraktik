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
  {
    id: 'k06',
    modulTerkait: ['antebrachi'],
    skenario:
      'An. R, anak laki-laki 12 tahun, datang ke unit radiologi diantar ibunya setelah jatuh saat bermain sepatu roda dengan lengan bawah kanan menahan tubuh. Lengan bawah kanan tampak bengkak dan terasa nyeri ketika diputar, namun pasien sadar penuh, kooperatif, dan mampu duduk tenang di samping meja pemeriksaan. Benda logam pada pergelangan sudah dilepas. Dokter meminta pemeriksaan radiografi antebrachi dextra untuk evaluasi tulang lengan bawah.',
    tahap1: {
      tanya: 'Kombinasi proyeksi apa yang digunakan pada pemeriksaan antebrachi sesuai modul?',
      pilihan: [
        'PA dan Oblik',
        'AP dan Lateral',
        'AP Axial dan Tangensial',
        'PA dan Axial',
      ],
      kunci: 1,
    },
    tahap2: {
      tanya: 'Bagaimana pengaturan posisi objek pada proyeksi Lateral antebrachi?',
      pilihan: [
        'Lengan lurus supine dengan telapak tangan menghadap ke atas',
        'Siku fleksi 45° dengan sisi radial menempel di atas kaset',
        'Siku fleksi 90°, sisi ulna di kaset, ibu jari di atas menempel telapak tangan',
        'Tangan prone dengan jari direnggangkan di pertengahan kaset',
      ],
      kunci: 2,
    },
    pembahasan: {
      proyeksi:
        'Pemeriksaan antebrachi menggunakan proyeksi AP dan Lateral pada kaset ukuran 24×30 cm.',
      posisi:
        'Duduk menyamping meja. AP: lengan bawah supine satu garis lurus, kedua processus styloideus berjarak sama. Lateral: siku fleksi 90°, sisi ulna di kaset, ibu jari di atas menempel telapak tangan.',
      centralRay:
        'CR vertikal tegak lurus kaset, CP pada pertengahan antebrachi, FFD 100 cm, 50–55 kVp, 5–6 mAs, non grid, film speed 400.',
      proteksi:
        'Pasang apron menutup panggul pasien, arahkan pandangan menjauh dari sumber sinar-X, dan pakaikan apron pada ibu yang mendampingi di ruangan.',
      catatan:
        'Karena pasien anak merasa nyeri, beri softbag di bawah punggung tangan saat AP dan softbag/sandbag di sisi tangan saat lateral untuk kenyamanan dan fiksasi.',
    },
    sumber: 'antebrachi hal 4-5',
  },
  {
    id: 'k07',
    modulTerkait: ['elbow'],
    skenario:
      'Ny. L, perempuan 41 tahun, datang ke instalasi radiologi dari poli rawat jalan setelah terpeleset di lantai dapur yang basah dan terjatuh dengan siku kiri menahan beban tubuh. Area siku kiri tampak sedikit bengkak, terasa nyeri saat diluruskan maupun ditekuk, namun pasien sadar penuh, kooperatif, serta mampu duduk mandiri di samping meja pemeriksaan. Semua benda logam pada lengan sudah dilepas. Dokter meminta pemeriksaan radiografi elbow joint sinistra, sehingga radiografer perlu menentukan proyeksi dan posisi objek yang tepat.',
    tahap1: {
      tanya: 'Proyeksi apa yang digunakan pada pemeriksaan elbow joint sesuai modul?',
      pilihan: [
        'AP dan Lateral',
        'PA dan Oblik',
        'AP Axial dan Lateral',
        'Tangensial dan AP',
      ],
      kunci: 0,
    },
    tahap2: {
      tanya: 'Bagaimana pengaturan kedua epicondylus humerus pada proyeksi AP dan Lateral elbow joint?',
      pilihan: [
        'AP: saling superposisi; Lateral: sejajar terhadap kaset',
        'AP: berjarak sama terhadap kaset; Lateral: tegak lurus meja tanpa fleksi',
        'AP: membentuk sudut 45°; Lateral: diganjal softbag di bawah siku',
        'AP: berjarak sama terhadap kaset; Lateral: saling menumpuk atau superposisi',
      ],
      kunci: 3,
    },
    pembahasan: {
      proyeksi:
        'Pemeriksaan elbow joint menggunakan proyeksi Anterior Posterior (AP) dan Lateral dengan kaset ukuran 18×24 cm.',
      posisi:
        'Duduk menyamping meja. AP: siku supine, tangan dan lengan lurus satu bidang datar, kedua epicondylus berjarak sama. Lateral: fleksi 90° sisi ulna di kaset, ibu jari di atas menempel telapak tangan, epicondylus superposisi.',
      centralRay:
        'CR vertikal tegak lurus kaset, CP pada pertengahan elbow joint, FFD 100 cm, 50–55 kVp, 6–7 mAs, non grid, film speed 400.',
      proteksi:
        'Gunakan apron menutup panggul pasien, arahkan pandangan mata menjauh dari sumber sinar-X, dan pakaikan apron bila ada pendamping di ruangan.',
      catatan:
        'Instruksikan pasien rileks untuk menghindari pergerakan, lalu letakkan softbag atau sandbag di bawah punggung tangan sebagai fiksasi.',
    },
    sumber: 'elbow hal 4-6',
  },
  {
    id: 'k08',
    modulTerkait: ['humerus'],
    skenario:
      'Tn. H, laki-laki 31 tahun, dirujuk dari IGD ke ruang radiologi setelah lengan atas kanannya terbentur palang besi di tempat kerja. Lengan atas kanan terasa nyeri saat digerakkan sehingga pasien lebih nyaman berdiri daripada berbaring lama di meja pemeriksaan. Pasien sadar penuh, kooperatif, mampu berdiri stabil tanpa pusing, serta telah berganti baju pasien dan melepas benda logam. Lembar permintaan mencantumkan pemeriksaan radiografi os humerus dextra, sehingga radiografer perlu menyesuaikan posisi dan pengaturan sinar.',
    tahap1: {
      tanya: 'Kombinasi proyeksi apa yang digunakan pada pemeriksaan os humerus sesuai modul?',
      pilihan: [
        'PA dan Oblik',
        'AP dan Lateral',
        'AP Axial dan Tangensial',
        'AP dan AP endo-eksorotasi',
      ],
      kunci: 1,
    },
    tahap2: {
      tanya: 'Bagaimana pengaturan batas kaset dan posisi lengan pada proyeksi Lateral humerus saat pasien berdiri?',
      pilihan: [
        'Tepi atas kaset sejajar akromion, kedua epicondylus berjarak sama dari kaset',
        'Tepi atas kaset 2,5 cm di atas sendi bahu dan tepi bawah sendi siku, dorso manus menempel pinggang, epicondylus superposisi',
        'Kaset diletakkan melintang di pertengahan lengan atas, telapak tangan menghadap depan',
        'Lengan diangkat lurus ke atas kepala dengan epicondylus paralel kaset',
      ],
      kunci: 1,
    },
    pembahasan: {
      proyeksi:
        'Pemeriksaan os humerus menggunakan proyeksi AP dan Lateral dengan kaset ukuran 24×30 cm; sendi bahu dan siku diupayakan masuk kaset.',
      posisi:
        'Pasien berdiri atau supine. AP: lengan lurus supine, epicondylus berjarak sama. Lateral: lengan bawah endorotasi maksimum (dorso manus menempel pinggang bila berdiri, atau tepi radial menempel meja bila supine), epicondylus superposisi.',
      centralRay:
        'CR vertikal atau horizontal tegak lurus kaset, CP pada pertengahan humerus, FFD 100 cm, 55–60 kVp, 7–8 mAs, non grid, film speed 400.',
      proteksi:
        'Pasang apron menutup panggul, atur luas lapangan maksimal seluas kaset, pandangan menjauh dari sumber sinar-X, hindari pengulangan, dan pendamping memakai apron.',
      catatan:
        'Posisi berdiri dengan CR horizontal serta dorso manus menempel pinggang pada proyeksi lateral dipilih karena pasien kurang nyaman berbaring lama.',
    },
    sumber: 'humerus hal 4-6',
  },
  {
    id: 'k09',
    modulTerkait: ['shoulder'],
    skenario:
      'Ny. M, perempuan 52 tahun, datang ke unit radiologi dari poli ortopedi dengan keluhan nyeri dan rasa kaku pada bahu kiri sejak dua minggu terakhir setelah mengangkat beban berat di rumah. Pasien berjalan mandiri, sadar penuh, kooperatif, serta mampu berdiri tegak maupun berbaring sesuai instruksi. Ia juga sudah berganti baju pasien dan melepas benda logam di sekitar bahu. Dokter meminta pemeriksaan radiografi shoulder joint sinistra, sehingga radiografer harus memilih proyeksi serta titik bidik yang sesuai.',
    tahap1: {
      tanya: 'Proyeksi apa saja yang digunakan pada pemeriksaan shoulder joint sesuai modul?',
      pilihan: [
        'PA dan Oblik',
        'AP Axial dan Lateral',
        'AP atau AP endo-eksorotasi',
        'AP dan Tangensial',
      ],
      kunci: 2,
    },
    tahap2: {
      tanya: 'Bagaimana pengaturan rotasi tubuh dan titik bidik pada proyeksi AP shoulder joint?',
      pilihan: [
        'Tubuh menempel datar di kaset, CP pada mid clavicula',
        'Tubuh miring 45° ke sisi sehat, CP pada acromioclavicular joint',
        'Tubuh dirotasikan 30° ke arah sisi yang sakit, CP pada processus coracoideus',
        'Tubuh dirotasikan 60° membelakangi tabung, CP pada midmedial scapula',
      ],
      kunci: 2,
    },
    pembahasan: {
      proyeksi:
        'Pemeriksaan shoulder joint menggunakan proyeksi AP dan AP endo-eksorotasi dengan kaset ukuran 18×24 cm.',
      posisi:
        'Pasien berdiri atau supine. Tubuh dirotasikan 30° ke arah yang sakit agar scapula paralel kaset (bila supine, sisi sehat diganjal sandbag). Tepi atas kaset 2,5 cm di atas sendi bahu hingga 1/3 proksimal humerus.',
      centralRay:
        'CR vertikal atau horizontal tegak lurus kaset, CP pada processus coracoideus, FFD 100 cm, 55–60 kVp, 8–10 mAs, non grid, film speed 400.',
      proteksi:
        'Gunakan apron menutup daerah panggul, atur luas lapangan seoptimal mungkin maksimal seluas kaset, arahkan pandangan menjauh dari tabung, dan hindari pengulangan.',
      catatan:
        'Minta pasien dalam keadaan rileks agar bahu tidak terangkat saat eksposi berlangsung.',
    },
    sumber: 'shoulder hal 4-6',
  },
  {
    id: 'k10',
    modulTerkait: ['clavicula'],
    skenario:
      'Sdr. F, laki-laki 20 tahun, datang ke instalasi radiologi diantar keluarganya setelah terjatuh dari sepeda dan bahu kanannya membentur aspal jalan. Area tulang selangka kanan terasa nyeri saat lengan diangkat dan tampak bengkak ringan, namun pasien sadar penuh, kooperatif, serta mampu berdiri tegak menempel pada bucky stand. Ia telah berganti baju pasien dan melepas kalung logamnya. Dokter meminta radiografi os clavicula dextra sehingga radiografer perlu menyiapkan proyeksi serta aba-aba napas yang tepat.',
    tahap1: {
      tanya: 'Proyeksi apa yang digunakan pada pemeriksaan os clavicula sesuai modul?',
      pilihan: [
        'PA Axial',
        'Lateral RAO/LAO',
        'AP Oblik',
        'AP Axial',
      ],
      kunci: 3,
    },
    tahap2: {
      tanya: 'Bagaimana arah central ray, titik bidik, dan aba-aba napas pada proyeksi tersebut?',
      pilihan: [
        'CR 15–30° cephalad, CP pada mid clavicula, inspirasi penuh dan tahan napas',
        'CR 15–30° caudad, CP pada sternoclavicular joint, ekspirasi tahan napas',
        'CR tegak lurus horizontal, CP pada processus coracoideus, napas biasa',
        'CR 40° cephalad, CP pada processus acromion, inspirasi penuh',
      ],
      kunci: 0,
    },
    pembahasan: {
      proyeksi:
        'Pemeriksaan os clavicula menggunakan proyeksi AP Axial dengan kaset ukuran 18×24 cm melintang.',
      posisi:
        'Pasien berdiri atau duduk menghadap tabung (atau supine). Kepala, leher, dan bahu menempel bucky stand; batas atas kaset 3–4 cm di atas processus acromion agar sternoclavicular hingga acromioclavicular joint masuk kaset.',
      centralRay:
        'CR menyudut 15–30° ke arah cephalad, CP pada mid clavicula, FFD 100 cm, 72 kVp, 10 mAs, grid bila diperlukan, film speed 400.',
      proteksi:
        'Pasang apron menutup panggul, atur luas lapangan seoptimal mungkin maksimal seluas kaset, arahkan pandangan menjauh dari sumber sinar-X, dan hindari pengulangan.',
      catatan:
        'Aba-aba eksposi adalah inspirasi penuh dan tahan napas agar sebagian besar os clavicula terproyeksi di atas costae dan scapula.',
    },
    sumber: 'clavicula hal 4-5',
  },
  {
    id: 'k11',
    modulTerkait: ['scapula'],
    skenario:
      'Tn. W, laki-laki 37 tahun, datang dari poli rawat jalan ke unit radiologi mengeluh nyeri di punggung atas sisi kanan setelah terbentur saat berolahraga. Pasien datang berjalan sendiri, sadar penuh, kooperatif, dan mampu berdiri tegak menghadap maupun membelakangi tabung sinar-X. Pakaian dalam bagian atas, kancing, dan seluruh benda logam di sekitar bahu telah dilepas serta diganti baju pasien. Dokter meminta pemeriksaan radiografi os scapula dextra agar radiografer menentukan proyeksi dan posisi yang sesuai.',
    tahap1: {
      tanya: 'Kombinasi proyeksi apa yang digunakan pada pemeriksaan os scapula sesuai modul?',
      pilihan: [
        'AP Axial dan PA',
        'AP dan Lateral (dengan posisi RAO/LAO)',
        'AP endo-eksorotasi dan Lateral',
        'PA dan Tangensial',
      ],
      kunci: 1,
    },
    tahap2: {
      tanya: 'Bagaimana posisi pasien dan lengan pada proyeksi Lateral untuk memeriksa scapula kanan?',
      pilihan: [
        'Berdiri posisi LAO dengan lengan abduksi lurus ke atas kepala',
        'Berdiri posisi AP menghadap tabung dengan lengan abduksi dan siku fleksi',
        'Berdiri posisi RAO dengan MCP 45–60° dari kaset, lengan fleksi dan dorso manus menempel pinggang',
        'Berdiri posisi LPO dengan kemiringan 30° dan tangan di samping tubuh',
      ],
      kunci: 2,
    },
    pembahasan: {
      proyeksi:
        'Pemeriksaan os scapula menggunakan proyeksi AP dan Lateral (posisi RAO untuk kanan, LAO untuk kiri) pada kaset 24×30 cm membujur.',
      posisi:
        'AP: berdiri menghadap tabung, lengan abduksi dan siku fleksi agar scapula ke samping. Lateral: membelakangi tabung posisi RAO (MCP 45–60°), dorso manus menempel pinggang agar scapula tidak superposisi humerus.',
      centralRay:
        'CR horizontal tegak lurus kaset, FFD 100 cm, 75 kVp, 16 mAs, grid, film speed 400. CP AP di mid scapula (5 cm di bawah processus coracoideus), napas biasa; CP Lateral di midmedial scapula, tahan napas.',
      proteksi:
        'Tutup panggul pasien dengan apron, atur kolimasi seoptimal mungkin maksimal seluas kaset, hindari pengulangan, dan pakaikan apron pada pendamping bila ada.',
      catatan:
        'Batas atas kaset diletakkan 5 cm di atas shoulder pada kedua proyeksi agar processus acromion dan angulus inferior scapula masuk utuh.',
    },
    sumber: 'scapula hal 4-6',
  },
  {
    id: 'k12',
    modulTerkait: ['shoulder'],
    skenario:
      'Tn. K, laki-laki 45 tahun, datang ke instalasi radiologi dari poli rawat jalan dengan keluhan nyeri pada bahu kanan terutama ketika mengangkat dan memutar lengan ke arah dalam maupun luar. Pasien sadar penuh dan kooperatif, namun mengeluh pusing bila berdiri lama sehingga lebih nyaman berbaring telentang di meja pemeriksaan setelah berganti baju pasien. Dokter meminta pemeriksaan radiografi shoulder joint dextra untuk menilai bagian proksimal humerus pada rotasi berbeda, sehingga radiografer harus memilih proyeksi yang sesuai.',
    tahap1: {
      tanya: 'Proyeksi apa yang digunakan untuk menilai struktur proksimal humerus pada rotasi medial dan lateral?',
      pilihan: [
        'AP Axial 15–30°',
        'Lateral RAO/LAO',
        'Tangensial',
        'AP endo-eksorotasi',
      ],
      kunci: 3,
    },
    tahap2: {
      tanya: 'Bagaimana pengaturan lengan pada proyeksi AP endorotasi dan AP eksorotasi shoulder joint?',
      pilihan: [
        'Endorotasi: lengan diputar maksimal ke arah medial; Eksorotasi: lengan diputar maksimal ke arah lateral',
        'Endorotasi: lengan diangkat ke belakang kepala; Eksorotasi: dorso manus di pinggang',
        'Endorotasi: siku fleksi 90° di atas dada; Eksorotasi: lengan abduksi 90° ke samping',
        'Endorotasi: lengan diputar ke arah lateral; Eksorotasi: lengan diputar ke arah medial',
      ],
      kunci: 0,
    },
    pembahasan: {
      proyeksi:
        'Proyeksi AP endo-eksorotasi shoulder joint menggunakan kaset ukuran 18×24 cm.',
      posisi:
        'Pasien supine, tubuh dirotasikan 30° ke sisi kanan dengan sisi kiri diganjal sandbag. Lengan diputar ke arah medial semaksimal mungkin untuk endorotasi dan ke arah lateral untuk eksorotasi.',
      centralRay:
        'CR vertikal tegak lurus kaset, CP pada processus coracoideus, FFD 100 cm, 55–60 kVp, 8–10 mAs, non grid, film speed 400.',
      proteksi:
        'Pasang apron menutup daerah panggul, batasi luas lapangan seoptimal mungkin maksimal seluas kaset, arahkan pandangan menjauh dari sumber sinar-X, dan hindari pengulangan.',
      catatan:
        'Posisi supine dipilih karena pasien kurang nyaman berdiri lama; beri marker atau tanda panah sesuai arah rotasi dan pastikan bahu tidak terangkat.',
    },
    sumber: 'shoulder hal 4-6',
  },
  {
    id: 'k13',
    modulTerkait: ['pedis'],
    skenario:
      'Ny. E, perempuan 30 tahun, dibawa ke ruang radiologi menggunakan kursi roda setelah punggung kaki kanannya tertimpa kotak besi di tempat kerja. Punggung kaki kanan tampak bengkak dan terasa nyeri saat menapak lantai, tetapi pasien sadar penuh, kooperatif, serta mampu berbaring telentang di meja pemeriksaan dengan lutut ditekuk. Sepatu, kaus kaki, dan gelang kaki sudah dilepas. Dokter meminta pemeriksaan radiografi ossa pedis dextra sehingga radiografer perlu menentukan proyeksi dan kemiringan kaki yang tepat.',
    tahap1: {
      tanya: 'Proyeksi apa yang digunakan pada pemeriksaan ossa pedis sesuai modul?',
      pilihan: [
        'AP Axial dan Lateral',
        'AP dan Oblik (rotasi ke arah medial)',
        'PA dan Tangensial',
        'AP dan Frog-Leg',
      ],
      kunci: 1,
    },
    tahap2: {
      tanya: 'Bagaimana kemiringan kaki dan letak central point pada proyeksi Oblik ossa pedis?',
      pilihan: [
        'Plantar pedis membentuk sudut 45° ke lateral, CP pada os calcaneus',
        'Kaki tegak lurus vertikal tanpa rotasi, CP pada maleolus medialis',
        'Plantar pedis membentuk sudut 30° ke arah medial, CP pada base metatarsal digiti III',
        'Plantar pedis menghadap atas, CP pada pertengahan tarsal',
      ],
      kunci: 2,
    },
    pembahasan: {
      proyeksi:
        'Pemeriksaan ossa pedis menggunakan proyeksi AP dan Oblik (rotasi ke arah medial) dengan kaset ukuran 24×30 cm membujur.',
      posisi:
        'Pasien supine atau duduk di meja, knee fleksi dengan plantar pedis menempel meja/kaset dan kaki lain ekstensi. Pada oblik, kaki dirotasikan ke medial hingga plantar pedis membentuk sudut 30° terhadap bidang kaset.',
      centralRay:
        'CR AP tegak lurus atau 10° posterior; CR Oblik vertikal tegak lurus kaset. CP kedua proyeksi pada base metatarsal digiti III, FFD 100 cm, 45–50 kVp, 3–4 mAs, non grid, film speed 300.',
      proteksi:
        'Gunakan apron menutup panggul pasien, atur luas lapangan seoptimal mungkin maksimal seluas kaset, arahkan pandangan menjauh dari tabung, dan pendamping wajib memakai apron.',
      catatan:
        'Pastikan keseluruhan kaki berada di dalam area kaset dan letakkan alat bantu fiksasi bila diperlukan saat posisi oblik 30°.',
    },
    sumber: 'pedis hal 4-6',
  },
  {
    id: 'k14',
    modulTerkait: ['calcaneus'],
    skenario:
      'Tn. P, laki-laki 36 tahun, datang dari IGD ke ruang radiologi menggunakan kursi roda setelah terjatuh dari tangga dan mendarat pada tumit kiri terlebih dahulu. Tumit kiri tampak nyeri saat ditekan sehingga ia tidak dapat berdiri menumpu berat badan, namun pasien sadar penuh, kooperatif, serta mampu berbaring telentang dan miring di meja pemeriksaan. Sepatu dan kaus kaki telah dilepas. Dokter meminta radiografi os calcaneus sinistra agar radiografer menentukan proyeksi dan arah sinar.',
    tahap1: {
      tanya: 'Kombinasi proyeksi apa yang digunakan pada pemeriksaan os calcaneus sesuai modul?',
      pilihan: [
        'AP dan Oblik 30°',
        'PA dan Tangensial',
        'AP Axial (plantodorsal) dan Lateral (mediolateral)',
        'AP dan AP endo-eksorotasi',
      ],
      kunci: 2,
    },
    tahap2: {
      tanya: 'Bagaimana arah central ray dan titik bidik pada proyeksi AP Axial os calcaneus?',
      pilihan: [
        'CR tegak lurus vertikal, CP pada 2,5 cm di bawah maleolus medialis',
        'CR 40° ke arah cephalad, CP pada base metatarsal digiti III',
        'CR 10° ke arah posterior, CP pada pertengahan kedua maleolus',
        'CR 40° ke arah caudad, CP pada sinus tarsi',
      ],
      kunci: 1,
    },
    pembahasan: {
      proyeksi:
        'Pemeriksaan os calcaneus menggunakan proyeksi AP Axial (plantodorsal) dan Lateral (mediolateral) dengan kaset 18×24 cm membujur.',
      posisi:
        'AP Axial: supine/duduk, ankle di pertengahan kaset, dorsal pedis fleksi agar plantar pedis tegak lurus kaset. Lateral: recumbent ke sisi kiri, beri sandbag di knee atau cruris agar plantar pedis tegak lurus kaset.',
      centralRay:
        'FFD 100 cm, non grid, film speed 300. AP Axial: CR 40° cephalad, CP base metatarsal digiti III (50–55 kVp, 4–5 mAs). Lateral: CR vertikal tegak lurus, CP 2,5 cm di bawah maleolus medialis (45–50 kVp, 3–4 mAs).',
      proteksi:
        'Pasang apron menutup panggul pasien, atur kolimasi seoptimal mungkin maksimal seluas kaset, pandangan menjauh dari sumber sinar-X, dan hindari pengulangan.',
      catatan:
        'Karena pasien tidak mampu berdiri, pemotretan dilakukan di atas meja dengan alat bantu fiksasi sandbag pada knee atau cruris saat proyeksi lateral.',
    },
    sumber: 'calcaneus hal 4-6',
  },
  {
    id: 'k15',
    modulTerkait: ['cruris'],
    skenario:
      'Sdr. T, laki-laki 24 tahun, dibawa dari IGD ke instalasi radiologi menggunakan brankar setelah tungkai bawah kanannya mengalami benturan keras saat bermain sepak bola. Tungkai bawah tampak bengkak dan terasa nyeri saat digerakkan sehingga ia belum mampu berdiri, namun pasien sadar penuh, kooperatif, serta mampu berbaring telentang dan dimiringkan perlahan. Celana panjang tebal dan gelang kaki sudah dilepas. Dokter meminta pemeriksaan radiografi os cruris dextra untuk dievaluasi oleh radiografer.',
    tahap1: {
      tanya: 'Proyeksi apa yang digunakan pada pemeriksaan os cruris sesuai modul?',
      pilihan: [
        'AP dan Lateral (mediolateral)',
        'PA dan Oblik',
        'AP Axial dan Lateral',
        'Tangensial dan AP',
      ],
      kunci: 0,
    },
    tahap2: {
      tanya: 'Bagaimana pengaturan posisi objek dan cakupan sendi pada proyeksi AP os cruris?',
      pilihan: [
        'Femoral epicondylus tegak lurus kaset, hanya ankle joint yang masuk kaset',
        'Os cruris di pertengahan kaset, femoral epicondylus sejajar kaset, upayakan ankle dan knee joint masuk penyinaran',
        'Kaki rotasi medial 30°, batas atas pertengahan os femur',
        'Knee fleksi 90° dengan telapak kaki menempel kaset',
      ],
      kunci: 1,
    },
    pembahasan: {
      proyeksi:
        'Pemeriksaan os cruris menggunakan proyeksi AP dan Lateral (mediolateral) pada kaset ukuran 30×40 cm membujur dibagi dua.',
      posisi:
        'AP: supine, os cruris di pertengahan kaset, femoral epicondylus sejajar kaset, ankle dan knee joint diupayakan masuk. Lateral: recumbent ke sisi sakit, knee fleksi, kaki dorsofleksi, femoral epicondylus dan patella tegak lurus kaset.',
      centralRay:
        'CR vertikal tegak lurus pada kedua proyeksi, CP pada pertengahan os cruris, FFD 100 cm, 55–60 kVp, 3–4 mAs, non grid, film speed 300.',
      proteksi:
        'Tutup panggul pasien dengan apron, atur luas lapangan seoptimal mungkin maksimal seluas kaset, arahkan pandangan menjauh dari tabung, dan hindari pengulangan.',
      catatan:
        'Gunakan alat bantu fiksasi pada proyeksi lateral bila diperlukan untuk menjaga kestabilan tungkai bawah yang bengkak dan nyeri.',
    },
    sumber: 'cruris hal 4-6',
  },
  {
    id: 'k16',
    modulTerkait: ['knee'],
    skenario:
      'Ny. R, perempuan 48 tahun, datang dari poli rawat jalan ke unit radiologi mengeluh nyeri pada lutut kanan yang terasa memberat saat naik tangga sejak satu bulan terakhir. Pasien berjalan mandiri tanpa alat bantu, sadar penuh, kooperatif, serta mampu berbaring telentang dan miring dengan nyaman di meja pemeriksaan. Ia telah mengganti celana tebalnya dengan baju pasien. Dokter meminta pemeriksaan radiografi knee joint dextra, sehingga radiografer harus memilih proyeksi dan titik bidik yang tepat.',
    tahap1: {
      tanya: 'Proyeksi rutin apa yang digunakan pada pemeriksaan knee joint sesuai modul?',
      pilihan: [
        'Tangensial dan AP',
        'PA dan Oblik',
        'AP dan Lateral',
        'AP Axial dan Frog-Leg',
      ],
      kunci: 2,
    },
    tahap2: {
      tanya: 'Di mana letak central point dan bagaimana aturan penyudutan central ray pada proyeksi AP knee joint?',
      pilihan: [
        'CP pada pertengahan os patella; CR selalu 15° cephalad tanpa melihat ketebalan',
        'CP 1 inci di bawah epicondylus medialis; CR selalu 10° caudad',
        'CP 1,3 cm di bawah apex patella; CR tegak lurus atau disesuaikan ketebalan ASIS–meja (3–5° caudad jika <18 cm, 0° jika 19–24 cm, 3–5° cephalad jika >24 cm)',
        'CP pada epicondylus lateralis; CR horizontal tegak lurus kaset',
      ],
      kunci: 2,
    },
    pembahasan: {
      proyeksi:
        'Pemeriksaan knee joint menggunakan proyeksi AP dan Lateral dengan kaset ukuran 24×30 cm.',
      posisi:
        'AP: supine, pelvis tidak rotasi, femoral epicondyles paralel kaset (true AP). Lateral: miring ke sisi sakit tanpa rotasi pelvis, knee fleksi 20–30°, kedua epicondylus superposisi, patella tegak lurus IR.',
      centralRay:
        'FFD 100 cm, 50–55 kVp, 5–6 mAs, non grid, film speed 400. AP: CR tegak lurus atau disesuaikan ketebalan ASIS–meja, CP 1,3 cm di bawah apex patella. Lateral: CR 5–7° cephalad, CP 1 inci di bawah epicondylus medialis.',
      proteksi:
        'Pasang apron menutup panggul pasien, atur luas lapangan seoptimal mungkin maksimal seluas kaset, hindari pengulangan foto, dan pakaikan apron pada pendamping bila ada.',
      catatan:
        'Pada proyeksi lateral, tempatkan penyangga di daerah ankle joint dan posisikan kaki sehat di depan atau belakang sesuai kenyamanan untuk fiksasi.',
    },
    sumber: 'knee hal 4-8',
  },
  {
    id: 'k17',
    modulTerkait: ['patella'],
    skenario:
      'Sdr. D, laki-laki 26 tahun, datang ke unit radiologi dari poli rawat jalan mengeluh nyeri pada bagian depan lutut kiri setelah terjatuh saat bersepeda pagi tadi. Pasien sadar penuh, kooperatif, serta mampu berbaring tengkurap maupun miring secara perlahan di atas meja pemeriksaan dengan bantuan penyangga. Celana panjang tebal dan benda logam di area lutut sudah dilepas. Dokter meminta pemeriksaan radiografi os patella sinistra, sehingga radiografer harus memilih proyeksi serta penyudutan yang tepat.',
    tahap1: {
      tanya: 'Kombinasi proyeksi apa yang digunakan pada pemeriksaan os patella sesuai modul?',
      pilihan: [
        'AP dan Oblik',
        'PA dan AP Axial',
        'Tangensial (Metode Hughston) dan Lateral',
        'AP dan Frog-Leg',
      ],
      kunci: 2,
    },
    tahap2: {
      tanya: 'Bagaimana posisi kaki dan arah central ray pada proyeksi Tangensial (Metode Hughston)?',
      pilihan: [
        'Pasien supine, lutut lurus, CR vertikal tegak lurus melalui apex patella',
        'Pasien prone, knee difleksikan sehingga tibia-fibula bersudut 50–60° terhadap meja, CR 45° cephalad melalui patellofemoral joint',
        'Pasien recumbent lateral, knee fleksi 5–10°, CR 45° caudad',
        'Pasien duduk di tepi meja, knee fleksi 90°, CR horizontal tegak lurus',
      ],
      kunci: 1,
    },
    pembahasan: {
      proyeksi:
        'Pemeriksaan os patella menggunakan proyeksi Tangensial (Metode Hughston) dan Lateral dengan kaset ukuran 24×30 cm.',
      posisi:
        'Tangensial: prone tanpa rotasi, IR di bawah knee, knee fleksi hingga tibia-fibula membentuk 50–60° terhadap meja. Lateral: recumbent lateral sisi sakit dekat meja, knee fleksi 5–10°, epicondylus superposisi, patella tegak lurus IR.',
      centralRay:
        'FFD 100 cm, 8 mAs, non grid, film speed 400. Tangensial: CR 45° cephalad melalui patellofemoral joint (55–65 kVp). Lateral: CR vertikal tegak lurus pada midpatellofemoral joint (50–55 kVp).',
      proteksi:
        'Gunakan apron menutup panggul pasien, atur kolimasi seoptimal mungkin maksimal seluas kaset, arahkan pandangan menjauh dari tabung, dan hindari pengulangan.',
      catatan:
        'Pada proyeksi lateral, beri sandbag di bawah ankle bila perlu dan letakkan kaki sehat di depan kaki yang diperiksa untuk menjaga kestabilan posisi.',
    },
    sumber: 'patella hal 4-7',
  },
  {
    id: 'k18',
    modulTerkait: ['femur'],
    skenario:
      'Tn. G, laki-laki 29 tahun, dibawa dari IGD ke ruang radiologi di atas brankar setelah paha kirinya mengalami benturan keras akibat kecelakaan lalu lintas. Paha kiri tampak bengkak dan terasa sangat nyeri bila digerakkan sehingga pasien tidak mampu memutar kakinya ke dalam, namun ia sadar penuh dan kooperatif. Pakaian dengan resleting logam sudah diganti baju pasien. Dokter meminta pemeriksaan radiografi os femur sinistra, sehingga radiografer harus menyesuaikan posisi objek.',
    tahap1: {
      tanya: 'Proyeksi apa yang digunakan pada pemeriksaan os femur sesuai modul?',
      pilihan: [
        'AP dan Lateral',
        'PA dan Oblik',
        'AP Axial dan Tangensial',
        'Bilateral Frog-Leg dan AP',
      ],
      kunci: 0,
    },
    tahap2: {
      tanya: 'Penyesuaian posisi objek apa yang harus diperhatikan pada kasus nyeri hebat atau kecurigaan cedera tulang paha di proyeksi AP femur?',
      pilihan: [
        'Tetap memutar kaki ke dalam 15–20° dengan tarikan kuat agar simetris',
        'Tidak melakukan rotasi internal kaki 15–20° bila dicurigai fraktur, dan utamakan sendi terdekat area sakit bila kedua sendi tidak muat satu kaset',
        'Memposisikan pasien berdiri tegak agar panjang femur tampak seluruhnya',
        'Memfleksikan panggul dan lutut 45° seperti posisi frog-leg',
      ],
      kunci: 1,
    },
    pembahasan: {
      proyeksi:
        'Pemeriksaan os femur menggunakan proyeksi AP dan Lateral pada kaset 30×40 cm (bila kedua sendi tidak muat, fokuskan proksimal atau distal sesuai area sakit).',
      posisi:
        'AP: supine, tangan di samping/atas dada, pelvis tidak rotasi, batas atas hip joint dan bawah knee joint. Lateral: miring sisi sakit dekat meja, lutut sakit fleksi, kaki lain ekstensi atau ke depan untuk fiksasi, panggul diganjal sandbag.',
      centralRay:
        'CR vertikal tegak lurus kaset, CP pada pertengahan os femur, FFD 100 cm, non grid/grid, film speed 400. AP: 60–65 kVp; Lateral: 55–65 kVp; 10–15 mAs.',
      proteksi:
        'Gunakan gonad shield tanpa menutupi femur proksimal, atur luas lapangan seluas objek, dan minta pengantar keluar atau memakai apron.',
      catatan:
        'Rotasi internal kaki 15–20° hanya dilakukan jika tidak dicurigai fraktur; gunakan sandbag/softbag untuk fiksasi kaki tanpa memaksa rotasi.',
    },
    sumber: 'femur hal 4-6',
  },
  {
    id: 'k19',
    modulTerkait: ['collum-femur'],
    skenario:
      'Ny. N, perempuan 54 tahun, datang ke instalasi radiologi dari poli ortopedi dengan keluhan nyeri di lipat paha kanan saat berjalan jauh sejak beberapa minggu terakhir, tanpa riwayat jatuh atau trauma akut. Pasien berjalan mandiri, sadar penuh, kooperatif, serta mampu berbaring telentang dan menekuk maupun mengabduksikan pinggul kanannya dengan nyaman. Benda logam di area panggul telah dilepas. Dokter meminta pemeriksaan radiografi collum femoris dextra, sehingga radiografer harus menentukan proyeksi yang tepat.',
    tahap1: {
      tanya: 'Proyeksi apa yang sesuai pada modul collum femur untuk kasus non-trauma pada satu sisi?',
      pilihan: [
        'AP Axial 40° cephalad',
        'Lateral recumbent tanpa abduksi',
        'Unilateral Frog-Leg',
        'PA Oblik RAO/LAO',
      ],
      kunci: 2,
    },
    tahap2: {
      tanya: 'Bagaimana pengaturan posisi objek dan titik bidik pada proyeksi Unilateral Frog-Leg?',
      pilihan: [
        'Knee ekstensi penuh, femur rotasi internal 15°, CP pada symphysis pubis',
        'Knee dan hip joint sisi sakit fleksi, femur di abduksi 45° dari vertikal, CP pada mid femoral neck',
        'Kedua kaki lurus sejajar meja, CP 5 cm di atas trochanter mayor',
        'Pasien tengkurap dengan lutut fleksi 60°, CP pada patellofemoral joint',
      ],
      kunci: 1,
    },
    pembahasan: {
      proyeksi:
        'Pemeriksaan collum femur non-trauma satu sisi menggunakan proyeksi Unilateral Frog-Leg (atau Bilateral Frog-Leg bila perbandingan) dengan kaset 24×30 cm.',
      posisi:
        'Pasien supine, tangan di dada, kepala diberi bantalan, pastikan hip kanan tercakup pada kaset. Fleksikan knee dan hip joint yang sakit lalu abduksi femur 45° dari arah vertikal, beri sandbag untuk fiksasi.',
      centralRay:
        'CR tegak lurus kaset pada mid femoral neck, CP pada mid femoral neck, FFD 100 cm, 55–65 kVp, 10–12 mAs, grid/non grid, film speed 400.',
      proteksi:
        'Gunakan gonad shield untuk melindungi organ reproduksi, batasi luas lapangan seluas objek, dan pakaikan apron bila ada pendamping di ruangan.',
      catatan:
        'Proyeksi Unilateral Frog-Leg dipilih untuk kasus non-trauma; bila diminta perbandingan kedua sisi dapat digunakan Bilateral Frog-Leg dengan CP 2,5 cm superior symphysis pubis.',
    },
    sumber: 'collum-femur hal 4-7',
  },
  {
    id: 'k20',
    modulTerkait: ['knee'],
    skenario:
      'Tn. Y, laki-laki 40 tahun, dibawa dari IGD ke ruang radiologi menggunakan kursi roda setelah lutut kirinya terbentur bemper sepeda motor di jalan raya. Lutut kiri tampak bengkak dan terasa nyeri hebat saat ditekuk sehingga ia hanya sanggup menekuk lutut sedikit, namun pasien sadar penuh, kooperatif, serta dapat berbaring miring perlahan. Benda logam di kaki sudah dilepas. Dokter meminta pemeriksaan radiografi knee joint sinistra untuk evaluasi radiografer.',
    tahap1: {
      tanya: 'Proyeksi apa yang digunakan untuk melengkapi pemeriksaan knee joint pasien tersebut?',
      pilihan: [
        'PA dan Oblik medial',
        'Tangensial 45° dan AP',
        'AP dan Lateral',
        'AP Axial dan Frog-Leg',
      ],
      kunci: 2,
    },
    tahap2: {
      tanya: 'Bagaimana batasan sudut fleksi lutut pada proyeksi Lateral bila pasien mengalami kecurigaan fraktur?',
      pilihan: [
        'Lutut tetap harus difleksikan 45° agar patella bergeser',
        'Lutut difleksikan tidak boleh melebihi 10°',
        'Lutut difleksikan 50–60° dalam posisi tengkurap',
        'Lutut difleksikan 90° dengan sandbag di atas paha',
      ],
      kunci: 1,
    },
    pembahasan: {
      proyeksi:
        'Pemeriksaan knee joint menggunakan proyeksi AP dan Lateral dengan kaset ukuran 24×30 cm.',
      posisi:
        'AP: supine dengan femoral epicondyles paralel kaset. Lateral: miring ke sisi kiri tanpa rotasi pelvis, kedua epicondylus superposisi, patella tegak lurus IR, dengan penyangga di bawah ankle joint.',
      centralRay:
        'FFD 100 cm, 50–55 kVp, 5–6 mAs, non grid, film speed 400. AP: CR tegak lurus, CP 1,3 cm di bawah apex patella. Lateral: CR 5–7° cephalad, CP 1 inci di bawah epicondylus medialis.',
      proteksi:
        'Tutup panggul pasien dengan apron, atur luas lapangan seoptimal mungkin maksimal seluas kaset, hindari pengulangan foto, dan pendamping memakai apron bila ada.',
      catatan:
        'Berbeda dari kondisi biasa (fleksi 20–30°), pada kasus kecurigaan fraktur lutut pada proyeksi lateral tidak boleh difleksikan melebihi 10°.',
    },
    sumber: 'knee hal 4-8',
  },
  {
    id: 'k21',
    modulTerkait: ['hip'],
    skenario:
      'Ny. T, perempuan 63 tahun, datang dari IGD ke instalasi radiologi di atas brankar setelah terpeleset di lantai kamar mandi dan jatuh terduduk. Ia mengeluh nyeri hebat di pangkal paha kiri dan tidak sanggup memutar tungkai kirinya ke dalam. Pasien sadar penuh, kooperatif, serta sudah berganti baju pasien dan melepas benda logam di sekitar pinggang. Dokter meminta pemeriksaan radiografi hip joint sinistra, sehingga radiografer harus menyesuaikan proyeksi dan rotasi kaki.',
    tahap1: {
      tanya: 'Proyeksi apa yang tepat dipilih pada pemeriksaan hip joint pasien tersebut sesuai modul?',
      pilihan: [
        'AP Unilateral',
        'Tangensial Bilateral',
        'AP Axial 30° cephalad',
        'Lateral RAO/LAO',
      ],
      kunci: 0,
    },
    tahap2: {
      tanya: 'Di mana letak central point proyeksi AP Unilateral hip joint dan bagaimana perlakuan rotasi internal kaki pada pasien ini?',
      pilihan: [
        'CP pada symphysis pubis; kaki tetap diputar internal 20°',
        'CP pada femoral neck (6,4 cm inferior garis tengah SIAS–symphysis pubis); rotasi internal kaki tidak dilakukan karena kontraindikasi nyeri/trauma',
        'CP 5 cm di atas trochanter mayor; kaki abduksi 45°',
        'CP setinggi crista iliaca; kaki difleksikan 90°',
      ],
      kunci: 1,
    },
    pembahasan: {
      proyeksi:
        'Pemeriksaan hip joint sisi sakit menggunakan proyeksi AP Unilateral dengan kaset ukuran 24×30 cm (atau 30×40 cm untuk perbandingan).',
      posisi:
        'Pasien supine, pelvis tidak rotasi (kedua SIAS berjarak sama dari meja), tangan pada posisi nyaman, beri penyangga di bawah knee dan sandbag di ankle joint.',
      centralRay:
        'CR vertikal tegak lurus kaset, CP pada femoral neck (garis tengah antara SIAS dan superior symphysis pubis ditarik ke inferior 6,4 cm), FFD 100 cm, 60–75 kVp, 10–20 mAs, grid, film speed 400.',
      proteksi:
        'Gunakan gonad shield untuk melindungi organ reproduksi dari sinar hambur, batasi luas lapangan seluas objek, dan minta pengantar keluar atau memakai apron.',
      catatan:
        'Rotasi internal kaki 15–20° dikontraindikasikan bila pasien tidak memungkinkan karena trauma atau nyeri hebat.',
    },
    sumber: 'hip hal 3-5',
  },
  {
    id: 'k22',
    modulTerkait: ['sacroiliac'],
    skenario:
      'Tn. Z, laki-laki 33 tahun, datang dari poli saraf ke ruang radiologi dengan keluhan nyeri di area panggul belakang sisi kanan yang terasa memberat saat duduk lama sejak satu bulan terakhir. Pasien berjalan mandiri, sadar penuh, kooperatif, serta mampu berbaring telentang dengan lutut ditekuk di atas bantal penyangga. Seluruh benda logam di area pinggang telah dilepas. Dokter meminta pemeriksaan radiografi sacro-iliac joint untuk dievaluasi oleh radiografer.',
    tahap1: {
      tanya: 'Proyeksi awal apa yang digunakan pada pemeriksaan sacro-iliac joint sesuai modul?',
      pilihan: [
        'AP Axial',
        'PA caudad 15°',
        'Lateral recumbent',
        'Bilateral Frog-Leg',
      ],
      kunci: 0,
    },
    tahap2: {
      tanya: 'Bagaimana arah central ray dan titik bidik pada proyeksi AP Axial sacro-iliac joint?',
      pilihan: [
        'CR tegak lurus kaset, CP pada 2,5 cm superior symphysis pubis',
        'CR 10° caudad, CP pada pertengahan os sacrum',
        'CR 5–10° cephalad, CP pada midline setinggi pertengahan antara SIAS dan batas atas symphysis pubis',
        'CR 30° cephalad, CP pada 3,8 cm di atas crista iliaca',
      ],
      kunci: 2,
    },
    pembahasan: {
      proyeksi:
        'Pemeriksaan sacro-iliac joint dimulai dengan proyeksi AP Axial (dapat dilengkapi AP Oblik kanan dan kiri) pada kaset ukuran 24×30 cm.',
      posisi:
        'Pasien supine dengan pelvis tidak rotasi (kedua SIAS berjarak sama dari meja), shoulder diberi bantalan untuk mengeliminasi kurvatura lumbal, dan knee fleksi dengan penyangga di bawahnya.',
      centralRay:
        'CR menyudut 5–10° cephalad, CP pada midline setinggi pertengahan SIAS dan superior border symphysis pubis, FFD 100 cm, 60–75 kVp, 10–20 mAs, grid, film speed 400, eksposi tahan napas.',
      proteksi:
        'Gunakan gonad shield untuk melindungi organ reproduksi dari sinar hambur, batasi luas lapangan seluas objek, dan pakaikan apron pada pendamping bila terpaksa masuk.',
      catatan:
        'Pemberian bantalan di shoulder dan fleksi lutut membantu mengurangi kurvatura lumbal agar sendi sacroiliaca tampak lebih jelas.',
    },
    sumber: 'sacroiliac hal 4-7',
  },
  {
    id: 'k23',
    modulTerkait: ['hip'],
    skenario:
      'An. F, anak laki-laki 11 tahun, datang ke instalasi radiologi dari poli ortopedi diantar ibunya dengan keluhan nyeri pada pangkal paha kanan saat berlari sejak dua minggu lalu tanpa riwayat jatuh. Pasien sadar penuh, kooperatif, serta mampu berbaring telentang dan memutar kedua kakinya dengan ringan, sedangkan ibu pasien mendampingi di dalam ruangan agar anak tetap tenang. Dokter meminta radiografi perbandingan kedua hip joint sehingga radiografer perlu mengatur proyeksi dan proteksi.',
    tahap1: {
      tanya: 'Proyeksi apa yang tepat dipilih sesuai permintaan perbandingan kedua sendi panggul pada modul hip joint?',
      pilihan: [
        'AP Unilateral saja',
        'Lateral recumbent kiri dan kanan',
        'AP Perbandingan',
        'PA Axial',
      ],
      kunci: 2,
    },
    tahap2: {
      tanya: 'Bagaimana pengaturan kaki dan letak central point pada proyeksi AP Perbandingan hip joint?',
      pilihan: [
        'Kaki rotasi internal 15–20° (bila non-trauma), CP pada garis tengah tubuh kurang lebih 2,5 cm di atas symphysis pubis',
        'Kaki rotasi eksternal 45°, CP pada femoral neck salah satu sisi',
        'Kaki fleksi 90°, CP pada 5 cm inferior SIAS',
        'Kaki lurus tanpa fiksasi, CP pada L4 setinggi crista iliaca',
      ],
      kunci: 0,
    },
    pembahasan: {
      proyeksi:
        'Pemeriksaan perbandingan kedua sendi panggul menggunakan proyeksi AP Perbandingan pada kaset ukuran 30×40 cm.',
      posisi:
        'Pasien supine, pelvis tidak rotasi (kedua SIAS berjarak sama dari meja). Karena kondisi memungkinkan, kedua kaki dirotasikan internal 15–20° agar collum femoris paralel IR, dengan sandbag di ankle.',
      centralRay:
        'CR vertikal tegak lurus kaset, CP pada garis tengah tubuh kurang lebih 2,5 cm di atas symphysis pubis, FFD 100 cm, 60–75 kVp, 10–20 mAs, grid, film speed 400.',
      proteksi:
        'Pasang gonad shield untuk melindungi organ reproduksi pasien, batasi luas lapangan seluas objek, dan pakaikan apron pada ibu pasien yang mendampingi di dalam ruangan.',
      catatan:
        'Tempatkan alat bantu di bawah knee dan sandbag di ankle joint agar posisi kaki tidak berubah selama pemotretan.',
    },
    sumber: 'hip hal 3-5',
  },
  {
    id: 'k24',
    modulTerkait: ['sacroiliac'],
    skenario:
      'Ny. V, perempuan 38 tahun, datang dari poli rawat jalan ke instalasi radiologi setelah menjalani pemeriksaan awal panggul belakang, dan kini dokter meminta evaluasi lanjutan untuk membandingkan celah sendi sacroiliaca kanan dan kiri. Pasien datang berjalan mandiri, sadar penuh, kooperatif, serta mampu berbaring telentang maupun dimiringkan dengan ganjalan bantal non-opak di meja pemeriksaan. Dokter meminta pemeriksaan perbandingan kedua sacro-iliac joints, sehingga radiografer harus memilih proyeksi serta kemiringan tubuh.',
    tahap1: {
      tanya: 'Proyeksi apa yang digunakan untuk membandingkan masing-masing sendi sacroiliaca kanan dan kiri?',
      pilihan: [
        'AP dan Lateral',
        'AP Oblik kanan dan kiri',
        'PA dan Tangensial',
        'Bilateral Frog-Leg',
      ],
      kunci: 1,
    },
    tahap2: {
      tanya: 'Bagaimana arah kemiringan tubuh dan letak central point pada proyeksi AP Oblik sacro-iliac joint?',
      pilihan: [
        'Tubuh dimiringkan 45° ke sisi yang diperiksa, CP pada symphysis pubis',
        'Tubuh dimiringkan 15–25° ke arah sisi yang diperiksa, CP pada pertengahan SIAS',
        'Tubuh dimiringkan 15–25° ke arah objek yang tidak diperiksa, CP 2,5 cm ke arah medial dari SIAS yang diperiksa',
        'Tubuh tetap supine datar tanpa miring, CP 5 cm inferior SIAS',
      ],
      kunci: 2,
    },
    pembahasan: {
      proyeksi:
        'Proyeksi AP Oblik dibuat untuk sisi kanan dan kiri sebagai perbandingan menggunakan kaset ukuran 24×30 cm.',
      posisi:
        'Dari supine, tubuh dimiringkan 15–25° ke arah objek yang tidak diperiksa hingga SIAS berada di lateral PSIS. Sisi yang terangkat diberi bantalan non-opak dan beri bantalan di antara knee.',
      centralRay:
        'CR vertikal tegak lurus IR, CP 2,5 cm ke arah medial dari SIAS yang diperiksa, FFD 100 cm, 60–75 kVp, 10–20 mAs, grid, film speed 400, eksposi tahan napas.',
      proteksi:
        'Gunakan gonad shield untuk melindungi organ reproduksi, atur luas lapangan seluas objek, dan minta pengantar keluar atau memakai apron.',
      catatan:
        'Pada posisi oblik sacro-iliac joint, pemotretan dilakukan untuk sisi kanan dan kiri secara bergantian untuk perbandingan.',
    },
    sumber: 'sacroiliac hal 4-7',
  },
  {
    id: 'k25',
    modulTerkait: ['thoracal'],
    skenario:
      'Tn. J, laki-laki 44 tahun, datang ke unit radiologi dari poli penyakit dalam dengan keluhan nyeri punggung bagian tengah sejak dua minggu terakhir. Pasien berjalan mandiri tanpa alat bantu, sadar penuh, kooperatif, serta mampu berbaring telentang maupun miring di meja pemeriksaan dengan bantuan bantal. Benda logam dan pakaian tebal sudah diganti dengan baju pasien. Dokter meminta pemeriksaan radiografi vertebra thoracalis, sehingga radiografer perlu menyiapkan proyeksi dan aba-aba napas.',
    tahap1: {
      tanya: 'Proyeksi rutin apa yang digunakan pada pemeriksaan vertebra thoracalis sesuai modul?',
      pilihan: [
        'AP dan Lateral',
        'PA dan Tangensial',
        'AP Axial dan Frog-Leg',
        'Lateral dan Tangensial',
      ],
      kunci: 0,
    },
    tahap2: {
      tanya: 'Bagaimana penentuan batas atas penyinaran dan aba-aba respirasi pada proyeksi AP dan Lateral vertebra thoracalis?',
      pilihan: [
        'Batas atas sejajar crista iliaca; inspirasi penuh tahan napas',
        'Batas atas 1,5–2 inci di atas bahu agar T7 di pertengahan kaset; ekspirasi tahan napas',
        'Batas atas setinggi C4; napas biasa selama eksposi',
        'Batas atas tepat di jugular notch; tahan napas setelah inspirasi',
      ],
      kunci: 1,
    },
    pembahasan: {
      proyeksi:
        'Pemeriksaan vertebra thoracalis menggunakan proyeksi AP dan Lateral (dapat ditambah Oblik) dengan kaset 30×40 cm dan bucky.',
      posisi:
        'AP: supine/erect, MSP di tengah meja, kepala diganjal bantal, kaki fleksi. Lateral: lateral recumbent/erect, kepala diganjal, kaki fleksi dengan sandbag di knee, tangan di depan tubuh, tulang belakang horizontal.',
      centralRay:
        'FFD 100 cm, film speed 400, ekspirasi tahan napas. AP: CR tegak lurus, CP T7 pertengahan jugular notch–processus xiphoideus (55–60 kVp, 8–10 mAs). Lateral: CR tegak lurus (atau 10–15° cephalad bila tanpa pengganjal), CP T7 inferior angle scapula (65–70 kVp, 10–16 mAs).',
      proteksi:
        'Pasang gonad shield menutup daerah panggul, arahkan pandangan menjauh dari sumber sinar-X, batasi luas lapangan maksimal seluas kaset, dan hindari pengulangan.',
      catatan:
        'Pada lateral recumbent, bila tulang belakang belum lurus horizontal beri pengganjal softbag atau sudutkan CR 10–15° cephalad.',
    },
    sumber: 'thoracal hal 4-8',
  },
  {
    id: 'k26',
    modulTerkait: ['lumbal'],
    skenario:
      'Ny. I, perempuan 47 tahun, datang ke instalasi radiologi dari poli saraf dengan keluhan nyeri pinggang bawah sejak satu bulan terakhir tanpa keluhan spesifik pada pangkal tulang ekor. Pasien sadar penuh, kooperatif, dan mampu berbaring telentang dengan lutut ditekuk maupun berbaring miring di atas meja pemeriksaan. Benda logam di sekitar pinggang telah dilepas dan pakaian diganti baju pasien. Dokter meminta pemeriksaan radiografi vertebra lumbalis untuk dievaluasi radiografer.',
    tahap1: {
      tanya: 'Proyeksi rutin apa yang dibuat pertama kali pada pemeriksaan vertebra lumbalis?',
      pilihan: [
        'AP dan Lateral',
        'PA dan Tangensial',
        'AP Axial dan Frog-Leg',
        'Oblik kanan dan kiri saja',
      ],
      kunci: 0,
    },
    tahap2: {
      tanya: 'Di mana letak central point khusus untuk memperlihatkan vertebra lumbalis pada proyeksi AP dan Lateral?',
      pilihan: [
        'Pada L4 setinggi crista iliaca',
        'Pada T7 setinggi inferior angle scapula',
        'Pada L3 (3,8 cm di atas crista iliaca)',
        'Pada 3,8 cm di atas symphysis pubis',
      ],
      kunci: 2,
    },
    pembahasan: {
      proyeksi:
        'Pemeriksaan vertebra lumbalis menggunakan proyeksi AP dan Lateral (dapat dilengkapi Oblik, AP Axial, dan Lateral L5–S1) dengan kaset 30×40 cm dan bucky.',
      posisi:
        'AP: supine/erect, MSP di tengah meja, tangan di dada, kepala diganjal, kaki fleksi agar punggung dekat meja, pelvis tidak rotasi. Lateral: lateral recumbent, MCP di tengah meja, kaki fleksi dengan sandbag di knee, tulang belakang lurus horizontal.',
      centralRay:
        'CR vertikal tegak lurus, CP pada L3 (3,8 cm di atas crista iliaca), FFD 100 cm (disarankan 120 cm), film speed 400, ekspirasi tahan napas. AP: 70–80 kVp, 12–16 mAs; Lateral: 75–85 kVp, 16–20 mAs.',
      proteksi:
        'Pasang gonad shield menutup panggul, arahkan pandangan menjauh dari sumber sinar-X, atur luas lapangan maksimal seluas kaset, dan hindari pengulangan.',
      catatan:
        'Untuk memperlihatkan lumbosacral, CP digeser ke L4 setinggi crista iliaca; kaki ditekuk pada AP agar tulang punggung lebih dekat dengan meja pemeriksaan.',
    },
    sumber: 'lumbal hal 4-9',
  },
  {
    id: 'k27',
    modulTerkait: ['sacrum-coccyx'],
    skenario:
      'Ny. U, perempuan 35 tahun, datang ke unit radiologi diantar suaminya setelah terjatuh terduduk di teras dan mengeluh nyeri hebat di area tulang panggul belakang bagian atas bokong sehingga tidak tahan berbaring telentang. Pasien sadar penuh, kooperatif, serta lebih nyaman berbaring tengkurap maupun miring dengan bantuan bantal penyangga. Benda logam di pinggang sudah dilepas. Dokter meminta pemeriksaan radiografi os sacrum sehingga radiografer harus menyesuaikan proyeksi.',
    tahap1: {
      tanya: 'Bila pasien tidak dapat diposisikan supine, kombinasi proyeksi apa yang digunakan untuk memeriksa os sacrum?',
      pilihan: [
        'AP Axial dan AP Oblik',
        'PA dan Lateral',
        'AP dan Tangensial',
        'Bilateral Frog-Leg dan Lateral',
      ],
      kunci: 1,
    },
    tahap2: {
      tanya: 'Bagaimana arah central ray dan titik bidik pada proyeksi PA os sacrum?',
      pilihan: [
        'CR 15° cephalad, CP pada 5 cm di atas symphysis pubis',
        'CR 10° cephalad, CP pada 5 cm di atas symphysis pubis',
        'CR vertikal tegak lurus, CP pada 9 cm posterior SIAS',
        'CR 15° caudad, CP pada pertengahan lengkung sacrum yang terlihat',
      ],
      kunci: 3,
    },
    pembahasan: {
      proyeksi:
        'Pemeriksaan os sacrum pada pasien yang tidak bisa supine menggunakan proyeksi PA dan Lateral dengan kaset ukuran 24×30 cm dan bucky.',
      posisi:
        'PA: prone, MSP di tengah meja, lengan fleksi simetris di dada, batas atas penyinaran L4–L5 setinggi SIAS. Lateral: lateral recumbent, interiliaca plane di tengah meja, shoulder dan pelvis true lateral, batas atas setinggi L5.',
      centralRay:
        'FFD 100 cm, film speed 400. PA: CR 15° caudad, CP pertengahan lengkung sacrum (65–75 kVp, 16–20 mAs, tahan napas). Lateral: CR tegak lurus, CP 9 cm posterior SIAS (75–85 kVp, 20–25 mAs, ekspirasi tahan napas).',
      proteksi:
        'Arahkan pandangan menjauh dari sumber sinar-X, atur luas lapangan seoptimal mungkin maksimal seluas kaset, hindari pengulangan, dan pendamping wajib memakai apron.',
      catatan:
        'Jika pasien mampu supine, digunakan proyeksi AP dengan CR menyudut 15° cephalad dan CP pada 5 cm di atas symphysis pubis.',
    },
    sumber: 'sacrum-coccyx hal 5-7',
  },
  {
    id: 'k28',
    modulTerkait: ['lumbal'],
    skenario:
      'Tn. M, laki-laki 42 tahun, datang ke instalasi radiologi dari poli ortopedi dengan keluhan nyeri punggung bawah tepat di perbatasan antara pinggang dan panggul. Pasien telah menjalani pemeriksaan dasar sebelumnya dan kini dokter meminta pemeriksaan lanjutan yang terfokus pada daerah lumbosacral junction (L5–S1). Pasien sadar penuh, kooperatif, serta mampu berbaring telentang maupun miring, dan benda logam di pinggang sudah dilepas untuk persiapan pemotretan oleh radiografer.',
    tahap1: {
      tanya: 'Proyeksi khusus apa yang digunakan untuk mengevaluasi lumbosacral junction (L5–S1) sesuai modul lumbal?',
      pilihan: [
        'AP Axial dan Lateral Lumbosacral Junction (L5–S1)',
        'PA dan Tangensial',
        'AP endo-eksorotasi dan Lateral',
        'Bilateral Frog-Leg dan AP',
      ],
      kunci: 0,
    },
    tahap2: {
      tanya: 'Berapa sudut penyinaran central ray pada proyeksi AP Axial dan Lateral Lumbosacral Junction (L5–S1) untuk pasien laki-laki?',
      pilihan: [
        'AP Axial 15° caudad dan Lateral 15° cephalad',
        'AP Axial 35° cephalad dan Lateral 8° caudad',
        'AP Axial 30° cephalad dan Lateral 5° caudad',
        'AP Axial 0° tegak lurus dan Lateral 10° cephalad',
      ],
      kunci: 2,
    },
    pembahasan: {
      proyeksi:
        'Pemeriksaan khusus lumbosacral junction (L5–S1) menggunakan proyeksi AP Axial dan Lateral L5–S1 dengan kaset ukuran 18×24 cm dan bucky.',
      posisi:
        'AP Axial: supine, MSP di tengah meja, tangan di dada, kaki fleksi. Lateral L5–S1: lateral recumbent, MCP di tengah meja, kepala diganjal, kaki fleksi dengan sandbag di knee, tulang belakang lurus horizontal.',
      centralRay:
        'FFD 100 cm, film speed 400, ekspirasi tahan napas. AP Axial: CR 30° cephalad (pria) / 35° (wanita), CP MSP 3,8 cm di atas symphysis pubis (70–80 kVp, 12–16 mAs). Lateral L5–S1: CR 5° caudad (pria) / 8° (wanita), CP 5 cm posterior SIAS dan 3,8 cm inferior crista iliaca (75–85 kVp, 16–20 mAs).',
      proteksi:
        'Pasang gonad shield menutup area panggul, arahkan pandangan menjauh dari sumber sinar-X, batasi kolimasi maksimal seluas kaset, dan hindari pengulangan.',
      catatan:
        'Pertengahan kaset disesuaikan dengan arah CR; bila dilengkapi Oblik 45°, AP oblik memperlihatkan zygapophyseal joint sisi yang dekat kaset.',
    },
    sumber: 'lumbal hal 6-9',
  },
  {
    id: 'k29',
    modulTerkait: ['sacrum-coccyx'],
    skenario:
      'Nn. K, perempuan 25 tahun, datang ke instalasi radiologi setelah terpeleset di tangga rumah dan jatuh dalam posisi terduduk. Ia mengeluh nyeri di bagian paling bawah tulang belakang terutama saat duduk, namun pasien sadar penuh, kooperatif, serta masih mampu berbaring telentang dengan penyangga di bawah lutut maupun miring di meja pemeriksaan. Benda logam di sekitar panggul sudah dilepas. Dokter meminta radiografi os coccygeus untuk dievaluasi oleh radiografer.',
    tahap1: {
      tanya: 'Kombinasi proyeksi rutin apa yang digunakan pada pemeriksaan os coccygeus saat pasien mampu supine?',
      pilihan: [
        'PA dan Oblik',
        'AP dan Lateral',
        'AP Axial dan Tangensial',
        'Lateral dan Frog-Leg',
      ],
      kunci: 1,
    },
    tahap2: {
      tanya: 'Bagaimana arah central ray pada proyeksi AP dan letak central point pada proyeksi Lateral os coccygeus?',
      pilihan: [
        'AP: CR 15° cephalad; Lateral: CP tepat pada SIAS',
        'AP: CR tegak lurus; Lateral: CP pada 5 cm di atas symphysis pubis',
        'AP: CR 10° caudad; Lateral: CP 9 cm posterior SIAS lalu 5 cm ke inferior',
        'AP: CR 10° cephalad; Lateral: CP 9 cm posterior SIAS saja',
      ],
      kunci: 2,
    },
    pembahasan: {
      proyeksi:
        'Pemeriksaan os coccygeus menggunakan proyeksi AP dan Lateral (PA 10° cephalad bila tidak bisa supine) dengan kaset 24×30 cm dan bucky.',
      posisi:
        'AP: supine, MSP di tengah meja, lengan simetris di dada, lutut diberi pengganjal, batas atas L4–L5 setinggi SIAS. Lateral: lateral recumbent, interiliaca plane di tengah meja, shoulder dan pelvis true lateral.',
      centralRay:
        'FFD 100 cm, film speed 400. AP: CR 10° caudad, CP 5 cm di atas symphysis pubis (65–75 kVp, 16–20 mAs, tahan napas). Lateral: CR vertikal tegak lurus, CP 9 cm posterior SIAS dan 5 cm inferior (75–85 kVp, 20–25 mAs, ekspirasi tahan napas).',
      proteksi:
        'Arahkan pandangan menjauh dari sumber sinar-X, atur luas lapangan seoptimal mungkin maksimal seluas kaset, hindari pengulangan, dan pendamping memakai apron.',
      catatan:
        'Perhatikan beda arah sudut AP antara sacrum (15° cephalad) dan coccygeus (10° caudad) agar segmen coccygeus tidak saling tumpang tindih.',
    },
    sumber: 'sacrum-coccyx hal 11-14',
  },
  {
    id: 'k30',
    modulTerkait: ['cervical'],
    skenario:
      'Tn. L, laki-laki 50 tahun, datang dari IGD ke ruang radiologi menggunakan kursi roda setelah mengalami nyeri leher yang menjalar ke lengan kiri. Pasien sadar penuh, kooperatif, kurang kuat berdiri lama, namun dapat berbaring miring atau setengah miring dengan nyaman di meja pemeriksaan setelah melepas kalung serta benda logam. Dokter meminta pemeriksaan radiografi vertebra cervicalis untuk mengevaluasi celah foramen intervertebralis, sehingga radiografer harus memilih proyeksi yang sesuai.',
    tahap1: {
      tanya: 'Proyeksi apa yang digunakan pada modul vertebra cervicalis untuk memperlihatkan foramen intervertebralis?',
      pilihan: [
        'AP standar',
        'Lateral (LAT)',
        'AP Aksial Oblik (RPO/LPO)',
        'PA caudad',
      ],
      kunci: 2,
    },
    tahap2: {
      tanya: 'Bagaimana sudut leher, arah central ray, dan FFD pada proyeksi AP Aksial Oblik vertebra cervicalis?',
      pilihan: [
        'MCP leher 45° terhadap kaset, CR 15–20° cranial melewati C-4, FFD 152 cm',
        'MCP leher 90° terhadap kaset, CR tegak lurus C-4, FFD 100 cm',
        'MCP leher 30° terhadap kaset, CR 15–20° caudad melewati C-7, FFD 100 cm',
        'MCP leher 45° terhadap kaset, CR 10° caudad melewati C-1, FFD 152 cm',
      ],
      kunci: 0,
    },
    pembahasan: {
      proyeksi:
        'Proyeksi AP Aksial Oblik (RPO/LPO) melengkapi pemeriksaan vertebra cervicalis menggunakan kaset ukuran 18×24 cm dan grid.',
      posisi:
        'Pasien supine oblik 45° terhadap kaset, MCP leher membentuk 45° terhadap kaset dengan perpotongan MSP–MCP di midline bucky-table, kedua bahu rileks lurus ke bawah, dagu sedikit menengadah.',
      centralRay:
        'CR menyudut 15–20° cranial melewati C-4 ke pertengahan kaset, CP pada C-4 (ujung permukaan thyroid cartilage), FFD 152 cm, 60–65 kVp, 15–20 mAs, grid, film speed 400.',
      proteksi:
        'Gunakan pelindung gonad dan kaca mata Pb bila tersedia, atur luas lapangan seluas objek, hindari pengulangan, dan pilih detektor tengah AEC nilai N bila tersedia.',
      catatan:
        'Gunakan penyangga kepala bila kurvatura lordotik menonjol dan hindari posisi leher terpelintir (torsi) agar foramen intervertebralis tampak jelas.',
    },
    sumber: 'cervical hal 6-9',
  },
];
