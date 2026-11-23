import type { Modul } from '../types';

export const modulHip: Modul = {
  slug: 'hip',
  kode: '301-10A',
  judul: 'Hip Joint',
  region: 'pelvis',
  kompetensi:
    'Mahasiswa mampu melakukan teknik radiografi hip joint dengan baik dan benar melalui simulasi, role play, dan realplay.',
  sorotan: [
    'Proyeksi AP mencakup teknik Unilateral (kaset 24×30 cm) dan Perbandingan (kaset 30×40 cm)',
    'Rotasi internal kaki 15°–20° agar collum femoris paralel dengan kaset (kontraindikasi bila tidak memungkinkan)',
    'CP Unilateral di femoral neck (6,4 cm inferior garis tengah SIAS–symphysis pubis); Perbandingan 2,5 cm di atas symphysis pubis',
  ],
  praPemeriksaan: [
    {
      judul: 'Administrasi',
      poin: [
        'Cek lembar permintaan: identitas pasien, no. CM/RM, asal rujukan (IRJA, IRNA, IGD, dokter praktek), dan riwayat',
        'Catat identitas di buku registrasi, beri nomor foto (no. reg radiologi), dan tulis pada lembar permintaan',
        'Siapkan kartu ambil foto serta amplop foto sesuai ukuran film yang digunakan',
      ],
    },
    {
      judul: 'Persiapan Pasien',
      poin: [
        'Panggil pasien sesuai lembar permintaan dan cocokkan nama, umur, serta alamat',
        'Perkenalkan diri, amati keadaan umum, dan tanyakan sisi keluhan (kanan atau kiri) tanpa membocorkan permintaan',
        'Berikan penjelasan singkat mengenai prosedur sebelum pemeriksaan dimulai',
        'Pastikan tidak ada benda logam di area panggul seperti jarum, ikat pinggang, dan resleting celana',
      ],
    },
    {
      judul: 'Persiapan Alat & Bahan',
      poin: [
        'Pesawat sinar-X siap pakai beserta meteran, penggaris kaliper, dan ID printer',
        'Kaset dan film radiografi ukuran 24×30 cm (unilateral) serta 30×40 cm (perbandingan)',
        'Marker R/L, plester, gunting, lembar Pb (gonad shield), alat bantu knee, sandbag, dan alat pengolahan film',
      ],
    },
  ],
  proyeksi: [
    {
      id: 'ap',
      nama: 'Proyeksi Anterior Posterior (AP)',
      posisiPasien: ['Atur pasien dalam posisi supine di atas meja pemeriksaan'],
      posisiObjek: [
        'Atur tubuh agar pelvis tidak rotasi, ditandai kedua SIAS berjarak sama dari permukaan meja pemeriksaan',
        'Posisikan kedua tangan pasien senyaman mungkin',
        'Rotasikan internal kaki 15°–20° agar collum femoris paralel dengan IR (kontraindikasi jika pasien tidak memungkinkan)',
        'Tempatkan alat bantu di bawah lutut (knee) dan sandbag di ankle joint agar posisi tidak berubah',
      ],
      centralRay: 'Vertikal tegak lurus terhadap kaset',
      centralPoint:
        'Unilateral: femoral neck (titik tengah antara SIAS dan superior symphysis pubis ditarik ke inferior 2,5 inci / 6,4 cm); Perbandingan: garis tengah tubuh ±2,5 cm di atas symphysis pubis',
      ffd: '100 cm',
      kaset: '24×30 cm (unilateral) atau 30×40 cm (perbandingan)',
      faktorEksposi: '60–75 kVp, 10–20 mAs, grid, film speed 400',
      kriteria: [
        'Caput femoris (femoral head) terpenetrasi dan tampak melalui acetabulum',
        'Bagian os ilium dan os pubis yang berdekatan dengan symphysis pubis tampak jelas',
        'Sendi panggul (hip joint) dan seluruh perangkat ortopedi (bila ada) terlihat lengkap',
        'Trochanter mayor tampak dalam profil dan seluruh sumbu panjang collum femoris tidak memendek',
        'Sepertiga proksimal os femur tampak; trochanter minor tidak melewati batas medial femur atau hanya tampak sangat sedikit',
      ],
      gambar: [
        {
          src: '/img/hip/ap-1.webp',
          caption: 'Diagram penentuan central point femoral head dan neck',
        },
        {
          src: '/img/hip/ap-2.webp',
          caption: 'Posisi pasien proyeksi AP hip joint dengan CR 0°',
        },
        {
          src: '/img/hip/ap-3.webp',
          caption: 'Posisi pasien AP perbandingan dengan fiksasi kaki',
        },
        {
          src: '/img/hip/ap-4.webp',
          caption: 'Radiograf anatomi AP hip joint berlabel',
        },
      ],
      sumber: 'hal 4-6',
    },
  ],
  proteksi: [
    'Gunakan gonad shield untuk melindungi organ reproduksi pasien dari sinar hambur',
    'Atur luas lapangan penyinaran sebatas luas objek yang difoto',
    'Persilakan orang yang tidak berkepentingan keluar ruangan; pendamping yang terpaksa ada wajib memakai apron',
  ],
  pascaPemeriksaan: [
    'Proses film di kamar gelap: matikan lampu general, buka kaset, dan pasang film pada hanger',
    'Masukkan film ke cairan developer hingga muncul gambaran laten (±4 menit) sambil inspeksi singkat dengan safety light',
    'Lakukan rinsing pada tangki bilas, masukkan ke cairan fixer agar gambaran menjadi tetap, lalu washing dan keringkan',
    'Bantu pasien turun dari meja pemeriksaan dan arahkan untuk menunggu hasil pemrosesan film',
    'Berikan kartu ambil foto bila hasil sudah baik dan persilakan pasien kembali ke asal rujukan',
  ],
  evaluasi: [
    'Gambarkan anatomi objek hip joint dan sebutkan bagian-bagian anatominya',
    'Bandingkan kriteria anatomi radiograf yang dibuat dengan standar kriteria evaluasi menggunakan form evaluasi',
    'Susun laporan praktek lengkap dengan minimal 1 referensi textbook dan kumpulkan maksimal 1 hari setelah praktek',
  ],
};
