import type { ModulMeta, RegionId, RegionInfo } from './types';

export const REGIONS: RegionInfo[] = [
  {
    id: 'dasar',
    label: 'Dasar',
    urutan: 1,
    deskripsi: 'Orientasi laboratorium, terminologi proyeksi, dan proteksi radiasi dasar.',
  },
  {
    id: 'ekstremitas-atas',
    label: 'Ekstremitas Atas',
    urutan: 2,
    deskripsi: 'Dari ossa manus hingga gelang bahu (clavicula & scapula).',
  },
  {
    id: 'ekstremitas-bawah',
    label: 'Ekstremitas Bawah',
    urutan: 3,
    deskripsi: 'Dari ossa pedis hingga femur proksimal (collum femur).',
  },
  {
    id: 'pelvis',
    label: 'Pelvis & Panggul',
    urutan: 4,
    deskripsi: 'Hip joint, sendi sacro-iliac, dan tulang pelvis.',
  },
  {
    id: 'vertebra',
    label: 'Vertebra',
    urutan: 5,
    deskripsi: 'Columna vertebralis dari cervical hingga sacrum & coccygeus.',
  },
];

export const REGION_MAP: Record<RegionId, RegionInfo> = Object.fromEntries(
  REGIONS.map((r) => [r.id, r]),
) as Record<RegionId, RegionInfo>;

export const MODUL_META: ModulMeta[] = [
  { slug: 'orientasi', kode: '301-1', judul: 'Orientasi Laboratorium & Dasar Proyeksi', region: 'dasar', sourcePdf: 'PEDOMAN PRAKTEK RAD 301-1 ORIENTASI.pdf' },
  { slug: 'manus', kode: '301-2A', judul: 'Ossa Manus', region: 'ekstremitas-atas', sourcePdf: 'PEDOMAN PRAKTEK RAD 301-2A MANUS.pdf' },
  { slug: 'wrist', kode: '301-2B', judul: 'Wrist Joint', region: 'ekstremitas-atas', sourcePdf: 'PEDOMAN PRAKTEK RAD 301-2B WRIST.pdf' },
  { slug: 'antebrachi', kode: '301-3A', judul: 'Antebrachii', region: 'ekstremitas-atas', sourcePdf: 'PEDOMAN PRAKTEK RAD 301-3A ANTEBRACHI.pdf' },
  { slug: 'elbow', kode: '301-3B', judul: 'Elbow Joint', region: 'ekstremitas-atas', sourcePdf: 'PEDOMAN PRAKTEK RAD 301-3B  ELBOW.pdf' },
  { slug: 'humerus', kode: '301-4A', judul: 'Os Humerus', region: 'ekstremitas-atas', sourcePdf: 'PEDOMAN PRAKTEK RAD 301-4A humerus 2015.pdf' },
  { slug: 'shoulder', kode: '301-4B', judul: 'Shoulder Joint', region: 'ekstremitas-atas', sourcePdf: 'PEDOMAN PRAKTEK RAD 301-4B shoulder 2015.pdf' },
  { slug: 'clavicula', kode: '301-5A', judul: 'Os Clavicula', region: 'ekstremitas-atas', sourcePdf: 'PEDOMAN PRAKTEK RAD 301-5A OS CLAVICULA.pdf' },
  { slug: 'scapula', kode: '301-5B', judul: 'Os Scapula', region: 'ekstremitas-atas', sourcePdf: 'PEDOMAN PRAKTEK RAD 301-5B SCAPULA.pdf' },
  { slug: 'pedis', kode: '301-6A', judul: 'Ossa Pedis', region: 'ekstremitas-bawah', sourcePdf: 'PEDOMAN PRAKTEK RAD 301-6A OSSA PEDIS.pdf' },
  { slug: 'calcaneus', kode: '301-6B', judul: 'Os Calcaneus', region: 'ekstremitas-bawah', sourcePdf: 'PEDOMAN PRAKTEK RAD 301-6B OS CALCANEUS.pdf' },
  { slug: 'ankle', kode: '301-7A', judul: 'Ankle Joint', region: 'ekstremitas-bawah', sourcePdf: 'PEDOMAN PRAKTEK RAD 301-7A ANKLE JOINT.pdf' },
  { slug: 'cruris', kode: '301-7B', judul: 'Os Cruris', region: 'ekstremitas-bawah', sourcePdf: 'PEDOMAN PRAKTEK RAD 301-7B CRURIS.pdf' },
  { slug: 'knee', kode: '301-8A', judul: 'Knee Joint', region: 'ekstremitas-bawah', sourcePdf: 'PEDOMAN PRAKTEK RAD 301-8A KNEE JOINT.pdf' },
  { slug: 'patella', kode: '301-8B', judul: 'Os Patella', region: 'ekstremitas-bawah', sourcePdf: 'PEDOMAN PRAKTEK RAD 301-8B Patella.pdf' },
  { slug: 'femur', kode: '301-9A', judul: 'Os Femur', region: 'ekstremitas-bawah', sourcePdf: 'PEDOMAN PRAKTEK RAD 301-9A femur.pdf' },
  { slug: 'collum-femur', kode: '301-9B', judul: 'Collum Femur', region: 'ekstremitas-bawah', sourcePdf: 'PEDOMAN PRAKTEK RAD 301-9B collum femur.pdf' },
  { slug: 'hip', kode: '301-10A', judul: 'Hip Joint', region: 'pelvis', sourcePdf: 'PEDOMAN PRAKTEK RAD 301-10A hip joint.pdf' },
  { slug: 'sacroiliac', kode: '301-10B', judul: 'Sacro-Iliac Joints', region: 'pelvis', sourcePdf: 'PEDOMAN PRAKTEK RAD 301-10B sacro-iliac joints.pdf' },
  { slug: 'pelvis', kode: '301-10C', judul: 'Pelvis', region: 'pelvis', sourcePdf: 'PEDOMAN PRAKTEK RAD 301-10C pelvis.pdf' },
  { slug: 'cervical', kode: '301-11', judul: 'Vertebra Cervical', region: 'vertebra', sourcePdf: 'PEDOMAN PRAKTEK RAD 301-11 CERVICAL.pdf' },
  { slug: 'thoracal', kode: '301-12', judul: 'Vertebra Thoracal', region: 'vertebra', sourcePdf: 'PEDOMAN PRAKTEK RAD 301-12 thoracal.pdf' },
  { slug: 'lumbal', kode: '301-13', judul: 'Vertebra Lumbal', region: 'vertebra', sourcePdf: 'PEDOMAN PRAKTEK RAD 301-13 vertebra lumbal.pdf' },
  { slug: 'sacrum-coccyx', kode: '301-14', judul: 'Os Sacrum & Coccygeus', region: 'vertebra', sourcePdf: 'PEDOMAN PRAKTEK RAD 301-14 sacrum coccyg.pdf' },
];

export const MODUL_META_MAP: Record<string, ModulMeta> = Object.fromEntries(
  MODUL_META.map((m) => [m.slug, m]),
);
