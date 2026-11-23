export type RegionId =
  | 'dasar'
  | 'ekstremitas-atas'
  | 'ekstremitas-bawah'
  | 'pelvis'
  | 'vertebra';

export type TahapId = 'pra' | 'proyeksi' | 'proteksi' | 'latihan';

export type SoalTipe =
  | 'definisi'
  | 'posisi'
  | 'sinar'
  | 'kriteria'
  | 'proteksi'
  | 'prosedur';

export interface Proyeksi {
  id: string;
  nama: string;
  posisiPasien: string[];
  posisiObjek: string[];
  centralRay: string;
  centralPoint: string;
  ffd?: string;
  kaset?: string;
  faktorEksposi?: string;
  kriteria: string[];
  gambar: { src: string; caption: string }[];
  sumber: string;
}

export interface Modul {
  slug: string;
  kode: string;
  judul: string;
  region: RegionId;
  kompetensi: string;
  sorotan: string[];
  praPemeriksaan: { judul: string; poin: string[] }[];
  proyeksi: Proyeksi[];
  proteksi: string[];
  pascaPemeriksaan: string[];
  evaluasi: string[];
}

export interface Soal {
  id: string;
  modul: string;
  tipe: SoalTipe;
  tanya: string;
  pilihan: [string, string, string, string];
  kunci: 0 | 1 | 2 | 3;
  penjelasan: string;
  sumber: string;
}

export interface KasusTahap {
  tanya: string;
  pilihan: string[];
  kunci: number;
}

export interface Kasus {
  id: string;
  modulTerkait: string[];
  skenario: string;
  tahap1: KasusTahap;
  tahap2: KasusTahap;
  pembahasan: {
    proyeksi: string;
    posisi: string;
    centralRay: string;
    proteksi: string;
    catatan?: string;
  };
  sumber: string;
}

export interface RegionInfo {
  id: RegionId;
  label: string;
  urutan: number;
  deskripsi: string;
}

export interface ModulMeta {
  slug: string;
  kode: string;
  judul: string;
  region: RegionId;
  sourcePdf: string;
}
