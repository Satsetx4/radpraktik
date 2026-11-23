import type { Modul } from '../types';

export const modulThoracal: Modul = {
  slug: 'thoracal',
  kode: '301-12',
  judul: 'Vertebra Thoracal',
  region: 'vertebra',
  kompetensi:
    'Mahasiswa mampu melakukan teknik radiografi vertebra thoracal dengan baik dan benar melalui simulasi, role play, dan realplay.',
  sorotan: [
    'Tiga proyeksi utama: AP (55–60 kVp, 8–10 mAs), Lateral, dan Oblik (65–70 kVp, 10–16 mAs)',
    'Batas atas penyinaran 1,5–2 inci di atas bahu sehingga T7 berada di pertengahan kaset',
    'Lateral memakai central ray tegak lurus bila pinggang diganjal, atau 10–15° cephalad tanpa pengganjal',
    'Oblik merotasikan tubuh 20° dari lateral (MCP 70° ke meja); semua eksposi saat ekspirasi tahan napas',
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
        'Perkenalkan diri, lakukan anamnesis keluhan, dan tanyakan riwayat foto lama bila ada',
        'Berikan penjelasan ringkas mengenai prosedur sebelum pemeriksaan dimulai',
        'Pastikan tidak ada benda logam atau benda pengganggu pada area punggung dan dada',
      ],
    },
    {
      judul: 'Persiapan Alat & Bahan',
      poin: [
        'Pesawat sinar-X siap pakai + bucky, meteran, serta radiographic phantom',
        'Kaset, film, dan hanger ukuran 30×40 cm beserta cairan prosesing dan pengering film',
        'Marker R/L, plester, gunting, lembar Pb, softbag, sandbag, dan apron',
      ],
    },
  ],
  proyeksi: [
    {
      id: 'ap',
      nama: 'Proyeksi Anterior Posterior (AP)',
      posisiPasien: [
        'Posisikan pasien tubuh tegak (berdiri atau duduk tegak lurus) atau supine di atas meja pemeriksaan',
        'Letakkan lengan di samping tubuh sehingga kedua bahu berada pada satu garis lurus',
        'Bila supine, beri bantalan kepala untuk menghindari kifosis dari vertebra thoracal',
      ],
      posisiObjek: [
        'Atur midsagittal plane (MSP) pasien tepat pada pertengahan meja pemeriksaan',
        'Tekuk/fleksikan kedua kaki agar tulang punggung lebih dekat dengan meja pemeriksaan',
        'Atur batas atas penyinaran 1,5–2 inci di atas bahu agar T7 berada di pertengahan kaset',
      ],
      centralRay: 'Vertikal tegak lurus terhadap kaset',
      centralPoint: 'T7 (pertengahan jugular notch dan processus xiphoideus pada MSP)',
      ffd: '100 cm',
      faktorEksposi: '55–60 kVp, 8–10 mAs, film speed 400, ekspirasi tahan napas',
      kriteria: [
        'Seluruh 12 vertebra thoracal tampak dengan latitud eksposi luas (atau 2 radiograf atas dan bawah)',
        'Berkas sinar-X terkolimasi rapat pada columna vertebralis thoracalis',
        'Processus spinosus berada di garis tengah pasien dan columna vertebralis sejajar di tengah radiograf',
        'Costae, bahu, paru, dan diafragma ikut tervisualisasi bila memakai reseptor 35×43 cm',
      ],
      gambar: [
        {
          src: '/img/thoracal/ap-2.webp',
          caption: 'Posisi supine AP vertebra thoracal',
        },
        {
          src: '/img/thoracal/ap-1.webp',
          caption: 'Radiograf anatomi AP vertebra thoracal',
        },
      ],
      sumber: 'hal 4-5',
    },
    {
      id: 'lateral',
      nama: 'Proyeksi Lateral',
      posisiPasien: [
        'Pasien tidur di atas meja pemeriksaan dengan posisi lateral recumbent atau berdiri true lateral',
      ],
      posisiObjek: [
        'Beri bantalan kepala agar tulang punggung horizontal; bila berdiri, sediakan tiang pegangan untuk tangan',
        'Tekuk kedua kaki dengan sandbag di lutut sebagai fiksasi dan posisikan tangan di depan tubuh',
        'Atur pertengahan setengah bagian belakang thorax pada pertengahan meja pemeriksaan',
        'Luruskan tulang belakang dengan mengganjal softbag di bawah pinggang; batas atas 1,5–2 inci di atas bahu',
      ],
      centralRay:
        'Vertikal tegak lurus terhadap kaset (bila thoracal lurus/diganjal); tanpa pengganjal 10–15° cephalad',
      centralPoint: 'T7 (setinggi inferior angle dari os scapula)',
      ffd: '100 cm',
      faktorEksposi: '65–70 kVp, 10–16 mAs, film speed 400, ekspirasi tahan napas',
      kriteria: [
        'Vertebra tampak jelas melalui bayangan costae dan paru; 12 vertebra terpusat (T1–T3 kurang optimal)',
        'Bagian posterior costae saling superposisi menandakan pasien tidak mengalami rotasi',
        'Celah diskus intervertebralis tampak terbuka dengan latitud eksposi yang luas',
        'Kolimasi berkas sinar-X rapat untuk mengurangi radiasi hambur',
      ],
      gambar: [
        {
          src: '/img/thoracal/lateral-2.webp',
          caption: 'Posisi recumbent dan berdiri lateral thoracal',
        },
        {
          src: '/img/thoracal/lateral-1.webp',
          caption: 'Radiograf anatomi lateral vertebra thoracal',
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
        'PA oblik (tidur): lengan sisi dekat meja lurus di belakang tubuh dan kaki lurus; lengan lain untuk fiksasi dan kaki ditekuk',
        'AP oblik (tidur): lengan sisi dekat meja menjadi bantalan kepala dan kaki lurus; sisi lain ditarik ke belakang dengan telapak kaki menempel meja',
        'Rotasikan tubuh 20° dari lateral (MCP membentuk 70° terhadap meja) dan atur tulang punggung di tengah meja',
        'Atur batas atas penyinaran 1,5–2 inci di atas bahu; bila berdiri, pegang bucky stand untuk fiksasi',
      ],
      centralRay: 'Vertikal tegak lurus terhadap kaset',
      centralPoint: 'T7 (setinggi inferior angle dari os scapula)',
      ffd: '100 cm',
      faktorEksposi: '65–70 kVp, 10–16 mAs, film speed 400, ekspirasi tahan napas',
      kriteria: [
        'Seluruh 12 vertebra thoracal tampak dengan latitud eksposi yang luas',
        'Sendi zygapophyseal terdekat dengan kaset tampak pada PA oblik, sedangkan sisi terjauh tampak pada AP oblik',
      ],
      gambar: [
        {
          src: '/img/thoracal/oblik-1.webp',
          caption: 'Posisi PA oblik (LAO) dan AP oblik (RPO) thoracal',
        },
        {
          src: '/img/thoracal/oblik-2.webp',
          caption: 'Posisi berdiri PA oblik vertebra thoracal',
        },
      ],
      sumber: 'hal 6-7',
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
    'Gambarkan anatomi objek vertebra thoracal yang difoto dan sebutkan bagian-bagiannya',
    'Bandingkan radiograf dengan kriteria standar proyeksi AP, Lateral, dan Oblik',
    'Gunakan form evaluasi untuk menilai radiograf dan kumpulkan laporan praktek maksimal 1 hari setelah praktek',
  ],
};
