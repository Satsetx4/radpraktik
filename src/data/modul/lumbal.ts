import type { Modul } from '../types';

export const modulLumbal: Modul = {
  slug: 'lumbal',
  kode: '301-13',
  judul: 'Vertebra Lumbal',
  region: 'vertebra',
  kompetensi:
    'Mahasiswa mampu melakukan teknik radiografi vertebra lumbal dengan baik dan benar melalui simulasi, role play, dan real play.',
  sorotan: [
    'Lima proyeksi lengkap: AP, Lateral, Oblik 45°, AP Axial, dan Lateral Lumbosacral Junction (L5–S1)',
    'CP AP & Lateral dibedakan: L4 (setinggi krista iliaka) untuk lumbosacral atau L3 (3,8 cm di atasnya) untuk lumbal',
    'AP oblik lumbal menampakkan zygapophyseal joint sisi dekat kaset (berbeda dengan thoracal)',
    'Kaset 30×40 cm untuk lumbosacral dan 18×24 cm khusus untuk lumbosacral joint (L5–S1)',
  ],
  praPemeriksaan: [
    {
      judul: 'Administrasi',
      poin: [
        'Cek lembar permintaan: identitas pasien, no. catatan medik, asal rujukan, dan riwayat',
        'Catat identitas di buku registrasi dan tulis nomor foto pada lembar permintaan',
        'Siapkan kartu ambil foto serta amplop foto sesuai ukuran film yang digunakan',
      ],
    },
    {
      judul: 'Persiapan Pasien',
      poin: [
        'Panggil pasien sesuai lembar permintaan dan cocokkan nama, umur, serta alamat',
        'Perkenalkan diri, lakukan anamnesis keluhan pinggang, dan tanyakan foto lama bila ada',
        'Berikan penjelasan ringkas mengenai prosedur sebelum pemeriksaan dimulai',
        'Pastikan tidak ada benda logam atau pengganggu di area pinggang dan abdomen',
      ],
    },
    {
      judul: 'Persiapan Alat & Bahan',
      poin: [
        'Pesawat sinar-X siap pakai + bucky, meteran, serta radiographic phantom',
        'Kaset, film, dan hanger 30×40 cm (lumbosacral) serta 18×24 cm (L5–S1)',
        'Marker R/L, plester, gunting, lembar Pb, softbag, sandbag, apron, dan alat kamar gelap',
      ],
    },
  ],
  proyeksi: [
    {
      id: 'ap',
      nama: 'Proyeksi Anterior Posterior (AP)',
      posisiPasien: [
        'Pasien tubuh tegak (berdiri tegak lurus) atau supine di atas meja pemeriksaan',
        'Letakkan kedua tangan di atas dada; bila supine, beri bantalan kepala untuk menghindari kifosis thoracal',
      ],
      posisiObjek: [
        'Atur midsagittal plane (MSP) pasien tepat pada pertengahan meja pemeriksaan',
        'Tekuk/fleksikan kaki pasien agar tulang punggung lebih dekat dengan meja pemeriksaan',
        'Atur pelvis agar tidak mengalami rotasi',
      ],
      centralRay: 'Vertikal tegak lurus terhadap kaset',
      centralPoint:
        'L4 (pada MSP setinggi krista iliaka) untuk lumbosacral, atau L3 (3,8 cm di atas krista iliaka) untuk lumbal',
      ffd: '100 cm (disarankan 120 cm)',
      kaset: '30×40 cm',
      faktorEksposi: '70–80 kVp, 12–16 mAs, film speed 400, ekspirasi tahan napas',
      kriteria: [
        'Area dari thoracal bawah hingga sacrum tampak dengan kolimasi ke tepi lateral otot psoas',
        'Tidak ada artefak di pertengahan abdomen (misalnya karet elastis pakaian dalam)',
        'Penetrasi memadai di semua struktur vertebra dengan celah intervertebralis terbuka',
        'Sendi sacroiliac berjarak sama dari vertebra; vertebra simetris dengan processus spinosus di tengah corpus',
      ],
      gambar: [
        {
          src: '/img/lumbal/ap-2.webp',
          caption: 'Posisi supine AP vertebra lumbal',
        },
        {
          src: '/img/lumbal/ap-1.webp',
          caption: 'Radiograf anatomi AP vertebra lumbal',
        },
      ],
      sumber: 'hal 4-5',
    },
    {
      id: 'lateral',
      nama: 'Proyeksi Lateral',
      posisiPasien: [
        'Pasien tidur di atas meja pemeriksaan dengan posisi lateral recumbent atau berdiri',
      ],
      posisiObjek: [
        'Beri bantalan kepala agar tulang punggung horizontal dan atur MCP pada pertengahan meja pemeriksaan',
        'Tekuk kedua kaki dengan sandbag di bagian lutut sebagai fiksasi dan posisikan tangan di depan tubuh',
        'Atur tulang belakang agar horizontal/lurus; bila tidak lurus, beri pengganjal softbag',
      ],
      centralRay: 'Vertikal tegak lurus terhadap kaset',
      centralPoint:
        'L4 (setinggi krista iliaka) untuk lumbosacral, atau L3 (3,8 cm di atas krista iliaka) untuk lumbal',
      ffd: '100 cm (disarankan 120 cm)',
      kaset: '30×40 cm',
      faktorEksposi: '75–85 kVp, 16–20 mAs, film speed 400, ekspirasi tahan napas',
      kriteria: [
        'Area dari thoracal bawah hingga coccyx/sacrum sejajar di tengah radiograf dengan tepi posterior corpus superposisi',
        'Celah diskus intervertebralis tampak terbuka dan processus spinosus terlihat jelas',
        'Kedua krista iliaka nyaris saling superposisi saat berkas sinar tidak disudutkan',
      ],
      gambar: [
        {
          src: '/img/lumbal/lateral-2.webp',
          caption: 'Posisi lateral recumbent lumbal dengan dan tanpa ganjal',
        },
        {
          src: '/img/lumbal/lateral-1.webp',
          caption: 'Radiograf anatomi lateral vertebra lumbal',
        },
      ],
      sumber: 'hal 5-6',
    },
    {
      id: 'oblik',
      nama: 'Proyeksi Oblik',
      posisiPasien: [
        'Pasien tidur di atas meja pemeriksaan dengan posisi lateral recumbent atau berdiri',
      ],
      posisiObjek: [
        'PA oblik (tidur): lengan sisi dekat meja lurus di belakang tubuh dan kaki lurus; sisi lain untuk fiksasi dan kaki ditekuk',
        'AP oblik (tidur): lengan sisi dekat meja diatur nyaman, kaki ditekuk dengan telapak kaki menempel meja sebagai fiksasi',
        'Rotasikan tubuh 45° dari lateral atau MCP (berlaku pula saat posisi berdiri)',
        'AP oblik memperlihatkan zygapophyseal joint sisi yang dekat kaset (berbeda dengan vertebra thoracal)',
      ],
      centralRay: 'Vertikal tegak lurus terhadap kaset',
      centralPoint: '5 cm dari MSP ke arah SIAS yang jauh, setinggi 4 cm di atas krista iliaka',
      ffd: '100 cm atau 120 cm',
      kaset: '30×40 cm',
      faktorEksposi: '65–70 kVp, 10–16 mAs, film speed 400, ekspirasi tahan napas',
      kriteria: [
        'Area dari vertebra thoracal bawah hingga sacrum tervisualisasi',
        'Zygapophyseal joint terdekat kaset terbuka dan tampak seragam menembus corpus vertebra ("Scottie dog")',
        'Pedikel terlalu anterior menandakan rotasi kurang; terlalu posterior menandakan rotasi berlebihan',
        'Columna vertebralis sejajar meja sehingga celah sendi T12–L1 dan L1–L2 tetap terbuka',
      ],
      gambar: [
        {
          src: '/img/lumbal/oblik-1.webp',
          caption: 'Posisi AP oblik RPO dan LPO vertebra lumbal',
        },
        {
          src: '/img/lumbal/oblik-4.webp',
          caption: 'Radiograf AP oblik RPO ("Scottie dog")',
        },
      ],
      sumber: 'hal 6-7',
    },
    {
      id: 'ap-axial',
      nama: 'Proyeksi AP Axial (Lumbosacral Junction)',
      posisiPasien: [
        'Pasien tubuh tegak (berdiri tegak lurus) atau supine di atas meja pemeriksaan',
        'Letakkan tangan di atas dada; bila supine, beri bantalan kepala untuk menghindari kifosis thoracal',
      ],
      posisiObjek: [
        'Atur midsagittal plane (MSP) pasien tepat pada pertengahan meja pemeriksaan',
        'Tekuk/fleksikan kaki pasien agar tulang punggung lebih dekat dengan meja pemeriksaan',
        'Atur pelvis tidak mengalami rotasi',
      ],
      centralRay:
        'Menyudut 30–35° cephalad (pria: 30°, wanita: 35°); sesuaikan pertengahan kaset dengan central ray',
      centralPoint: 'Pada MSP setinggi 3,8 cm di atas symphysis pubis',
      ffd: '100 cm',
      kaset: '18×24 cm',
      faktorEksposi: '70–80 kVp, 12–16 mAs, film speed 400, ekspirasi tahan napas',
      kriteria: [],
      gambar: [
        {
          src: '/img/lumbal/ap-axial-1.webp',
          caption: 'Posisi supine AP axial L5–S1 sudut 30–35° cephalad',
        },
      ],
      sumber: 'hal 7-8',
    },
    {
      id: 'lateral-ls-junction',
      nama: 'Proyeksi Lateral Lumbosacral Junction (L5–S1)',
      posisiPasien: ['Pasien diposisikan lateral recumbent di atas meja pemeriksaan'],
      posisiObjek: [
        'Beri bantalan kepala agar tulang punggung horizontal dan atur MCP pada pertengahan meja pemeriksaan',
        'Tekuk kedua kaki dengan sandbag di lutut sebagai fiksasi dan posisikan tangan di depan tubuh',
        'Atur tulang belakang dalam posisi horizontal/lurus; beri pengganjal softbag bila tidak dapat lurus',
      ],
      centralRay:
        'Sesuaikan sudut dengan posisi SIAS atau arahkan pria 5° caudad, wanita 8° caudad; sesuaikan kaset dengan CR',
      centralPoint: '5 cm dari MCP ke arah posterior SIAS dan 3,8 cm ke arah inferior krista iliaka',
      ffd: '100 cm',
      kaset: '18×24 cm',
      faktorEksposi: '75–85 kVp, 16–20 mAs, film speed 400, ekspirasi tahan napas',
      kriteria: [
        'Celah sendi lumbosacral (L5–S1) tampak terbuka dan berada di tengah area penyinaran',
        'Berkas sinar-X terkolimasi mencakup seluruh L5 dan bagian atas sacrum',
        'Kedua krista iliaka nyaris saling superposisi saat berkas sinar tidak disudutkan',
      ],
      gambar: [
        {
          src: '/img/lumbal/lateral-ls-junction-1.webp',
          caption: 'Posisi dan skema penyudutan lateral L5–S1 junction',
        },
      ],
      sumber: 'hal 8-9',
    },
  ],
  proteksi: [
    'Gunakan gonad shield untuk menutupi daerah panggul agar organ reproduksi terlindungi dari sinar hambur',
    'Arahkan pasien agar pandangan menjauhi sumber sinar-X',
    'Atur luas lapangan seoptimal mungkin agar objek tercakup, maksimal seluas lapangan kaset yang digunakan',
    'Minta orang yang tidak berkepentingan keluar ruang pemeriksaan; pendamping wajib memakai apron',
    'Hindari atau tidak melakukan pengulangan pemotretan',
  ],
  pascaPemeriksaan: [
    'Tulis identitas radiografi (unit, no. reg, nama, umur, kelamin, pemeriksaan, tanggal) lalu cetak ke film memakai ID camera',
    'Proses film di kamar gelap: matikan lampu general, buka kaset, dan pasang film pada hanger',
    'Celupkan film ke developer (±4 menit) dengan inspeksi singkat safety light, lalu rinsing, fixer, washing, dan keringkan',
    'Bantu pasien turun meja, arahkan menunggu hasil, beri kartu ambil foto bila hasil baik, lalu rapikan alat',
  ],
  evaluasi: [
    'Gambarkan anatomi objek vertebra lumbal yang difoto dan sebutkan bagian-bagiannya',
    'Bandingkan radiograf dengan kriteria standar proyeksi AP, Lateral, Oblik, dan Lateral L5–S1',
    'Gunakan form evaluasi untuk menilai radiograf dan kumpulkan laporan praktek maksimal 1 hari setelah praktek',
  ],
};
