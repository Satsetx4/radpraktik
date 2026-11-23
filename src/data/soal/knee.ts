import type { Soal } from '../types';

export const soalKnee: Soal[] = [
  {
    id: 'knee-01',
    modul: 'knee',
    tipe: 'definisi',
    tanya: 'Proyeksi standar apa saja yang ditetapkan pada modul teknik radiografi knee joint?',
    pilihan: [
      'AP dan Lateral',
      'Tangensial dan Lateral',
      'AP dan Oblik medial',
      'AP Axial dan Lateral',
    ],
    kunci: 0,
    penjelasan:
      'Pada bagian analisa kebutuhan dan pelaksanaan pemeriksaan modul knee joint, dua proyeksi standar yang digunakan adalah AP dan Lateral.',
    sumber: 'hal 4-5',
  },
  {
    id: 'knee-02',
    modul: 'knee',
    tipe: 'definisi',
    tanya: 'Mengapa pada proyeksi lateral knee joint lutut normal dianjurkan untuk difleksikan sebesar 20°–30°?',
    pilihan: [
      'Agar patella menempel rata sejajar permukaan kaset',
      'Agar otot kaki rileks dan rongga sendi tampak maksimal',
      'Agar tulang fibula dan tibia terpisah tanpa tumpang tindih',
      'Agar celah sendi ankle ikut masuk dalam kaset 24×30 cm',
    ],
    kunci: 1,
    penjelasan:
      'Fleksi lutut 20°–30° dipilih karena pada posisi ini otot-otot kaki dalam keadaan rileks sehingga mampu menampakkan rongga sendi (joint cavity) secara maksimal.',
    sumber: 'hal 5',
  },
  {
    id: 'knee-03',
    modul: 'knee',
    tipe: 'posisi',
    tanya: 'Berapa batas maksimal sudut fleksi lutut pada proyeksi lateral knee joint jika pasien dicurigai mengalami fraktur?',
    pilihan: [
      'Tidak boleh melebihi 5°',
      'Tidak boleh melebihi 10°',
      'Minimal harus 20°–30°',
      'Harus ditekuk hingga 45°',
    ],
    kunci: 1,
    penjelasan:
      'Modul knee joint memberikan catatan khusus bahwa pada kasus fraktur, kaki pada proyeksi lateral tidak boleh difleksikan melebihi 10°.',
    sumber: 'hal 5',
  },
  {
    id: 'knee-04',
    modul: 'knee',
    tipe: 'posisi',
    tanya: 'Bagaimana pengaturan femoral epicondylus dan patella pada proyeksi lateral knee joint?',
    pilihan: [
      'Kedua epicondylus sejajar kaset dan patella menghadap tabung sinar',
      'Kedua epicondylus miring 15° dan patella sejajar permukaan meja',
      'Kedua epicondylus superposisi dan patella tegak lurus terhadap kaset',
      'Epicondylus medialis di atas patella dan tibia diputar ke medial',
    ],
    kunci: 2,
    penjelasan:
      'Pada posisi objek proyeksi lateral knee joint, kedua epicondylus femoralis diatur saling superposisi sedangkan patella berada tegak lurus terhadap kaset.',
    sumber: 'hal 5',
  },
  {
    id: 'knee-05',
    modul: 'knee',
    tipe: 'posisi',
    tanya: 'Bagaimana cara memperoleh gambaran true AP pada posisi objek proyeksi AP knee joint?',
    pilihan: [
      'Menempatkan femoral epicondylus sejajar dengan kaset tanpa rotasi pelvis',
      'Memutar tungkai bawah ke arah lateral sebesar 45° dari meja',
      'Menempatkan kedua femoral epicondylus saling superposisi tegak lurus',
      'Memfleksikan lutut 20°–30° dengan penyangga softbag di bawah tumit',
    ],
    kunci: 0,
    penjelasan:
      'Untuk menghasilkan proyeksi true AP knee joint, pasien supine dengan pelvis tidak rotasi dan femoral epicondylus ditempatkan sejajar (paralel) dengan kaset.',
    sumber: 'hal 4',
  },
  {
    id: 'knee-06',
    modul: 'knee',
    tipe: 'sinar',
    tanya: 'Bagaimana pengaturan penyudutan central ray pada proyeksi AP knee joint jika jarak ASIS ke permukaan meja kurang dari 18 cm?',
    pilihan: [
      '0° vertikal tegak lurus kaset',
      '3°–5° ke arah cephalad',
      '5°–7° ke arah cephalad',
      '3°–5° ke arah caudad',
    ],
    kunci: 3,
    penjelasan:
      'Variabel penyudutan CR berdasarkan ketebalan ASIS ke meja: < 18 cm disudutkan 3–5° caudad, 19–24 cm 0°, dan > 24 cm disudutkan 3–5° cephalad.',
    sumber: 'hal 4',
  },
  {
    id: 'knee-07',
    modul: 'knee',
    tipe: 'sinar',
    tanya: 'Di mana letak central point dan berapa sudut central ray pada proyeksi lateral knee joint?',
    pilihan: [
      '½ inci di bawah apex patella; sudut 0° tegak lurus kaset',
      'Midpatellofemoral joint; sudut 45° ke arah cephalad',
      '1 inci di bawah epicondylus medialis; sudut 5–7° cephalad',
      'Pertengahan kedua maleolus; sudut 5–7° ke arah caudad',
    ],
    kunci: 2,
    penjelasan:
      'Pada proyeksi lateral knee joint, central ray disudutkan 5–7° ke arah cephalad dengan titik bidik 1 inci di bawah epicondylus medialis pada FFD 100 cm.',
    sumber: 'hal 5',
  },
  {
    id: 'knee-08',
    modul: 'knee',
    tipe: 'kriteria',
    tanya: 'Penanda anatomi apa yang digunakan pada proyeksi lateral knee joint untuk mengecek apakah lutut mengalami overrotasi atau underrotasi?',
    pilihan: [
      'Intercondylar eminence di tengah sendi',
      'Adductor tubercle pada condylus medialis',
      'Sustentaculum tali di os calcaneus',
      'Tuberositas pada basis metatarsal V',
    ],
    kunci: 1,
    penjelasan:
      'Kriteria evaluasi lateral knee joint memakai lokasi adductor tubercle di permukaan posterior condylus medialis untuk menentukan arah overrotasi atau underrotasi.',
    sumber: 'hal 7',
  },
  {
    id: 'knee-09',
    modul: 'knee',
    tipe: 'proteksi',
    tanya: 'Berapa batas maksimal luas lapangan penyinaran yang diperbolehkan dalam proteksi radiasi knee joint?',
    pilihan: [
      'Maksimal seluas lapangan kaset yang dipakai',
      'Harus mencakup seluruh femur dan pedis sekaligus',
      'Setidaknya dua kali ukuran kaset 24×30 cm',
      'Diperlebar keluar tepi kaset agar tidak terpotong',
    ],
    kunci: 0,
    penjelasan:
      'Aturan proteksi radiasi mewajibkan pengaturan kolimasi seoptimal mungkin sehingga objek tercakup dengan batas maksimal seluas lapangan kaset yang digunakan.',
    sumber: 'hal 7',
  },
  {
    id: 'knee-10',
    modul: 'knee',
    tipe: 'prosedur',
    tanya: 'Berapa waktu perkiraan perendaman film dalam cairan developer di kamar gelap hingga muncul gambaran laten pada modul knee joint?',
    pilihan: [
      '1 menit tanpa safety light',
      '4 menit dengan inspeksi singkat safety light',
      '10 menit dengan lampu general menyala',
      '15 menit langsung setelah masuk tangki washing',
    ],
    kunci: 1,
    penjelasan:
      'Pada tahap pemrosesan film di kamar gelap, film dimasukkan ke cairan developer sekitar 4 menit hingga muncul bayangan laten sambil diinspeksi singkat memakai safety light.',
    sumber: 'hal 8',
  },
];
