import type { Kasus, Modul, ModulMeta, RegionId, Soal } from './types';
import { MODUL_META, MODUL_META_MAP, REGIONS } from './regions';
import { KASUS_LIST } from './kasus';

type ModulExport = Record<string, unknown>;

const rawModulFiles = import.meta.glob<ModulExport>('./modul/*.ts', { eager: true });
const rawSoalFiles = import.meta.glob<ModulExport>('./soal/*.ts', { eager: true });

function isModul(val: unknown): val is Modul {
  return (
    typeof val === 'object' &&
    val !== null &&
    'slug' in val &&
    'proyeksi' in val &&
    'praPemeriksaan' in val
  );
}

function isSoalArray(val: unknown): val is Soal[] {
  return (
    Array.isArray(val) &&
    (val.length === 0 ||
      (typeof val[0] === 'object' &&
        val[0] !== null &&
        'tanya' in val[0] &&
        'pilihan' in val[0] &&
        'kunci' in val[0]))
  );
}

const modulEntries: Record<string, Modul> = {};
for (const modExports of Object.values(rawModulFiles)) {
  for (const value of Object.values(modExports)) {
    if (isModul(value)) {
      modulEntries[value.slug] = value;
    }
  }
}

const soalEntries: Record<string, Soal[]> = {};
for (const soalExports of Object.values(rawSoalFiles)) {
  for (const value of Object.values(soalExports)) {
    if (isSoalArray(value) && value.length > 0) {
      soalEntries[value[0].modul] = value;
    }
  }
}

export const MODUL_BY_SLUG: Record<string, Modul> = modulEntries;
export const SOAL_BY_MODUL: Record<string, Soal[]> = soalEntries;

export const ALL_MODULS: Modul[] = MODUL_META.map((meta) => modulEntries[meta.slug]).filter(
  (m): m is Modul => Boolean(m),
);

export const ALL_SOAL: Soal[] = ALL_MODULS.flatMap((m) => soalEntries[m.slug] ?? []);

export const ALL_KASUS: Kasus[] = KASUS_LIST;

export function getModulBySlug(slug: string): Modul | undefined {
  return MODUL_BY_SLUG[slug];
}

export function getModulMeta(slug: string): ModulMeta | undefined {
  return MODUL_META_MAP[slug];
}

export function getSoalByModul(slug: string): Soal[] {
  return SOAL_BY_MODUL[slug] ?? [];
}

export function getAdjacentModuls(slug: string): {
  prev: ModulMeta | undefined;
  next: ModulMeta | undefined;
} {
  const idx = MODUL_META.findIndex((m) => m.slug === slug);
  if (idx === -1) return { prev: undefined, next: undefined };
  return {
    prev: idx > 0 ? MODUL_META[idx - 1] : undefined,
    next: idx < MODUL_META.length - 1 ? MODUL_META[idx + 1] : undefined,
  };
}

export function getModulsByRegion(region: RegionId): ModulMeta[] {
  return MODUL_META.filter((m) => m.region === region);
}

export { REGIONS, MODUL_META };
