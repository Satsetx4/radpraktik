import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { MODUL_META, MODUL_META_MAP } from '../src/data/regions';
import type { Kasus, Modul, RegionId, Soal, SoalTipe } from '../src/data/types';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const isPartial = process.argv.includes('--partial');

const errors: string[] = [];

function addError(scope: string, message: string): void {
  errors.push(`[${scope}] ${message}`);
}

const FORBIDDEN_TERMS: { pattern: RegExp; suggestion: string }[] = [
  { pattern: /\boblique\b/i, suggestion: 'gunakan "oblik"' },
  { pattern: /\bobliq\b/i, suggestion: 'gunakan "oblik"' },
  { pattern: /\bobliqe\b/i, suggestion: 'gunakan "oblik"' },
  { pattern: /\bcentre ray\b/i, suggestion: 'gunakan "central ray"' },
  { pattern: /\bsentral ray\b/i, suggestion: 'gunakan "central ray"' },
  { pattern: /\bcenter point\b/i, suggestion: 'gunakan "central point"' },
  { pattern: /\btitik pusat\b/i, suggestion: 'gunakan "central point"' },
  { pattern: /\bSID\b/, suggestion: 'gunakan "FFD" (kecuali PDF menyebut SID)' },
  { pattern: /\bcassette\b/i, suggestion: 'gunakan "kaset"' },
  { pattern: /\bkaset film\b/i, suggestion: 'gunakan cukup "kaset"' },
  { pattern: /\bprojeksi\b/i, suggestion: 'gunakan "proyeksi"' },
  { pattern: /\bproyeksi foto\b/i, suggestion: 'gunakan "proyeksi"' },
  { pattern: /\bposisi penderita\b/i, suggestion: 'gunakan "posisi pasien" / "posisi objek"' },
  { pattern: /\bprocessus stiloideus\b/i, suggestion: 'gunakan "processus styloideus"' },
  { pattern: /\bprosesus\b/i, suggestion: 'gunakan "processus"' },
  { pattern: /\bMCP joint\b/i, suggestion: 'gunakan "metacarpophalangeal joint (MCP)" atau "MCP digiti ..."' },
  { pattern: /\bmetacarpo phalangeal\b/i, suggestion: 'gunakan "metacarpophalangeal joint (MCP)"' },
  { pattern: /\bapron pb\b/i, suggestion: 'gunakan "apron"' },
  { pattern: /\bcelemek\b/i, suggestion: 'gunakan "apron"' },
  { pattern: /\bfoto rontgen\b/i, suggestion: 'gunakan "radiograf"' },
  { pattern: /\brontgen\b/i, suggestion: 'gunakan "radiograf"' },
];

const PLACEHOLDER_PATTERNS: RegExp[] = [
  /\blorem ipsum\b/i,
  /\byour text here\b/i,
  /\bTODO\b/,
  /\bTBD\b/,
  /\bplaceholder\b/i,
];

function checkTextRules(scope: string, text: string): void {
  for (const rule of FORBIDDEN_TERMS) {
    if (rule.pattern.test(text)) {
      addError(scope, `Istilah terlarang (${rule.pattern.source}): ${rule.suggestion} -> "${text}"`);
    }
  }
  for (const ph of PLACEHOLDER_PATTERNS) {
    if (ph.test(text)) {
      addError(scope, `Teks placeholder terdeteksi: "${text}"`);
    }
  }
}

function isValidSumberHal(sumber: string): boolean {
  return /^hal\s+\d+(-\d+)?$/i.test(sumber.trim());
}

function isValidKasusSumber(sumber: string): boolean {
  return /^[a-z-]+\s+hal\s+\d+(-\d+)?(\s*,\s*[a-z-]+\s+hal\s+\d+(-\d+)?)*$/i.test(
    sumber.trim(),
  );
}

function countWords(text: string): number {
  const clean = text.trim();
  if (!clean) return 0;
  return clean.split(/\s+/).length;
}

async function loadTsExportsFromDir(dirPath: string): Promise<Record<string, unknown>[]> {
  if (!fs.existsSync(dirPath)) return [];
  const files = fs
    .readdirSync(dirPath)
    .filter((f) => f.endsWith('.ts') && !f.endsWith('.test.ts'))
    .sort();
  const results: Record<string, unknown>[] = [];
  for (const file of files) {
    const mod = (await import(pathToFileURL(path.join(dirPath, file)).href)) as Record<
      string,
      unknown
    >;
    results.push(mod);
  }
  return results;
}

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

function validateModul(modul: Modul): void {
  const scope = `modul:${modul.slug}`;
  const meta = MODUL_META_MAP[modul.slug];
  if (!meta) {
    addError(scope, `Slug "${modul.slug}" tidak terdaftar di docs/MODULES.md.`);
  } else {
    if (modul.kode !== meta.kode) {
      addError(scope, `Kode "${modul.kode}" tidak sesuai MODULES.md ("${meta.kode}").`);
    }
    if (modul.region !== meta.region) {
      addError(scope, `Region "${modul.region}" tidak sesuai MODULES.md ("${meta.region}").`);
    }
  }

  if (!modul.kompetensi.trim()) {
    addError(scope, 'Field kompetensi wajib diisi.');
  } else {
    checkTextRules(scope, modul.kompetensi);
  }

  if (!Array.isArray(modul.sorotan) || modul.sorotan.length < 2 || modul.sorotan.length > 4) {
    addError(scope, `Field sorotan harus 2-4 item (saat ini ${modul.sorotan?.length ?? 0}).`);
  } else {
    modul.sorotan.forEach((s, i) => checkTextRules(`${scope}.sorotan[${i}]`, s));
  }

  for (const [gIdx, grp] of modul.praPemeriksaan.entries()) {
    checkTextRules(`${scope}.pra[${gIdx}].judul`, grp.judul);
    for (const [pIdx, p] of grp.poin.entries()) {
      if (!p.trim()) {
        addError(`${scope}.pra[${gIdx}].poin[${pIdx}]`, 'Poin praPemeriksaan kosong.');
      }
      if (p.length > 120) {
        addError(`${scope}.pra[${gIdx}].poin[${pIdx}]`, `Panjang poin > 120 karakter (${p.length}).`);
      }
      checkTextRules(`${scope}.pra[${gIdx}].poin[${pIdx}]`, p);
    }
  }

  if (modul.slug !== 'orientasi' && modul.proyeksi.length === 0) {
    addError(scope, 'Modul non-orientasi wajib memiliki minimal 1 proyeksi.');
  }

  const proyIds = new Set<string>();
  for (const proy of modul.proyeksi) {
    const pScope = `${scope}.proyeksi:${proy.id}`;
    if (proyIds.has(proy.id)) {
      addError(pScope, `ID proyeksi duplikat "${proy.id}".`);
    }
    proyIds.add(proy.id);

    if (!isValidSumberHal(proy.sumber || '')) {
      addError(pScope, `Field sumber "${proy.sumber}" harus berformat "hal N" atau "hal N-M".`);
    }
    checkTextRules(pScope, proy.nama);
    checkTextRules(pScope, proy.centralRay);
    checkTextRules(pScope, proy.centralPoint);
    if (proy.faktorEksposi) checkTextRules(pScope, proy.faktorEksposi);
    proy.posisiPasien.forEach((t, i) => checkTextRules(`${pScope}.pp[${i}]`, t));
    proy.posisiObjek.forEach((t, i) => checkTextRules(`${pScope}.po[${i}]`, t));
    proy.kriteria.forEach((t, i) => checkTextRules(`${pScope}.kriteria[${i}]`, t));

    for (const img of proy.gambar) {
      if (!img.src.startsWith(`/img/${modul.slug}/`)) {
        addError(pScope, `Path gambar "${img.src}" harus diawali "/img/${modul.slug}/".`);
      }
      const diskPath = path.join(rootDir, 'public', img.src.replace(/^\//, ''));
      if (!fs.existsSync(diskPath)) {
        addError(pScope, `File gambar tidak ditemukan di disk: ${diskPath}`);
      }
      if (!img.caption.trim()) {
        addError(pScope, `Caption gambar "${img.src}" wajib diisi.`);
      } else if (img.caption.length > 60) {
        addError(pScope, `Caption gambar > 60 karakter (${img.caption.length}): "${img.caption}"`);
      }
      checkTextRules(pScope, img.caption);
    }
  }

  modul.proteksi.forEach((t, i) => checkTextRules(`${scope}.proteksi[${i}]`, t));
  modul.pascaPemeriksaan.forEach((t, i) => checkTextRules(`${scope}.pasca[${i}]`, t));
  modul.evaluasi.forEach((t, i) => checkTextRules(`${scope}.evaluasi[${i}]`, t));
}

function validateSoalSet(slug: string, soalList: Soal[], seenIds: Set<string>): void {
  const scope = `soal:${slug}`;
  if (soalList.length !== 10) {
    addError(scope, `Jumlah soal harus tepat 10 (saat ini ${soalList.length}).`);
  }

  const tipeCounts: Record<SoalTipe, number> = {
    definisi: 0,
    posisi: 0,
    sinar: 0,
    kriteria: 0,
    proteksi: 0,
    prosedur: 0,
  };
  const kunciCounts: [number, number, number, number] = [0, 0, 0, 0];
  let longestIsKeyCount = 0;

  soalList.forEach((s, idx) => {
    const qScope = `${scope}#${s.id || idx + 1}`;
    const expectedId = `${slug}-${String(idx + 1).padStart(2, '0')}`;
    if (s.id !== expectedId) {
      addError(qScope, `ID soal "${s.id}" harus berformat "${expectedId}".`);
    }
    if (seenIds.has(s.id)) {
      addError(qScope, `ID soal duplikat "${s.id}".`);
    }
    seenIds.add(s.id);

    if (s.modul !== slug) {
      addError(qScope, `Field modul "${s.modul}" tidak cocok dengan "${slug}".`);
    }

    if (s.tipe in tipeCounts) {
      tipeCounts[s.tipe] += 1;
    } else {
      addError(qScope, `Tipe soal tidak valid: "${String(s.tipe)}".`);
    }

    if (!s.tanya.trim()) {
      addError(qScope, 'Pertanyaan kosong.');
    } else {
      if (s.tanya.length > 200) {
        addError(qScope, `Panjang soal > 200 karakter (${s.tanya.length}).`);
      }
      if (/\b(kamu|anda)\b/i.test(s.tanya)) {
        addError(qScope, `Soal dilarang memakai sapaan "kamu"/"Anda": "${s.tanya}"`);
      }
      checkTextRules(qScope, s.tanya);
    }

    if (!Array.isArray(s.pilihan) || s.pilihan.length !== 4) {
      addError(qScope, 'Pilihan jawaban harus tepat 4 opsi.');
    } else {
      const normalized = s.pilihan.map((p) => p.trim().toLowerCase());
      if (new Set(normalized).size !== 4) {
        addError(qScope, 'Ada pilihan jawaban yang kembar.');
      }
      for (const opt of s.pilihan) {
        if (!opt.trim()) addError(qScope, 'Ada pilihan jawaban yang kosong.');
        if (/semua\s+(jawaban\s+)?(benar|salah)/i.test(opt) || /\b[a-d]\s*(dan|&)\s*[a-d]\b/i.test(opt)) {
          addError(qScope, `Pilihan terlarang ("semua benar/salah" atau "A dan B"): "${opt}"`);
        }
        checkTextRules(qScope, opt);
      }

      const lengths = s.pilihan.map((p) => p.trim().length);
      const maxLen = Math.max(...lengths);
      const minLen = Math.min(...lengths);
      const kunciLen = lengths[s.kunci] ?? 0;
      if (maxLen > minLen && kunciLen === maxLen && lengths.filter((l) => l === maxLen).length === 1) {
        longestIsKeyCount += 1;
      }
    }

    if (![0, 1, 2, 3].includes(s.kunci)) {
      addError(qScope, `Nilai kunci tidak valid: ${String(s.kunci)}.`);
    } else {
      kunciCounts[s.kunci] += 1;
    }

    if (!s.penjelasan.trim()) {
      addError(qScope, 'Penjelasan wajib diisi.');
    } else {
      if (s.penjelasan.length > 220) {
        addError(qScope, `Panjang penjelasan > 220 karakter (${s.penjelasan.length}).`);
      }
      checkTextRules(qScope, s.penjelasan);
    }

    if (!isValidSumberHal(s.sumber || '')) {
      addError(qScope, `Sumber soal "${s.sumber}" harus berformat "hal N" atau "hal N-M".`);
    }
  });

  if (soalList.length === 10) {
    if (slug === 'orientasi') {
      if (
        tipeCounts.definisi !== 4 ||
        tipeCounts.posisi !== 3 ||
        tipeCounts.proteksi !== 2 ||
        tipeCounts.prosedur !== 1 ||
        tipeCounts.sinar !== 0 ||
        tipeCounts.kriteria !== 0
      ) {
        addError(
          scope,
          `Sebaran tipe soal orientasi wajib 4 definisi, 3 posisi, 2 proteksi, 1 prosedur (saat ini: ${JSON.stringify(tipeCounts)}).`,
        );
      }
    } else {
      if (
        tipeCounts.definisi !== 2 ||
        tipeCounts.posisi !== 3 ||
        tipeCounts.sinar !== 2 ||
        tipeCounts.kriteria !== 1 ||
        tipeCounts.proteksi !== 1 ||
        tipeCounts.prosedur !== 1
      ) {
        addError(
          scope,
          `Sebaran tipe soal wajib 2 definisi, 3 posisi, 2 sinar, 1 kriteria, 1 proteksi, 1 prosedur (saat ini: ${JSON.stringify(tipeCounts)}).`,
        );
      }
    }

    if (longestIsKeyCount > 4) {
      addError(
        scope,
        `Kunci jawaban menjadi pilihan terpanjang di ${longestIsKeyCount}/10 soal (maksimal 4/10).`,
      );
    }

    kunciCounts.forEach((cnt, idx) => {
      if (cnt < 1) {
        addError(scope, `Distribusi kunci indeks ${idx} tidak muncul sama sekali (minimal 1x).`);
      }
    });
  }
}

function validateKasusList(kasusList: Kasus[]): void {
  const seenIds = new Set<string>();
  const regionCounts: Record<RegionId, number> = {
    dasar: 0,
    'ekstremitas-atas': 0,
    'ekstremitas-bawah': 0,
    pelvis: 0,
    vertebra: 0,
  };
  const coveredModules = new Set<string>();

  kasusList.forEach((k, idx) => {
    const scope = `kasus:${k.id || idx + 1}`;
    const expectedId = `k${String(idx + 1).padStart(2, '0')}`;
    if (k.id !== expectedId) {
      addError(scope, `ID kasus "${k.id}" harus berformat "${expectedId}".`);
    }
    if (seenIds.has(k.id)) {
      addError(scope, `ID kasus duplikat "${k.id}".`);
    }
    seenIds.add(k.id);

    if (!Array.isArray(k.modulTerkait) || k.modulTerkait.length === 0) {
      addError(scope, 'modulTerkait wajib berisi minimal 1 slug modul.');
    } else {
      k.modulTerkait.forEach((slug) => {
        if (!MODUL_META_MAP[slug]) {
          addError(scope, `modulTerkait "${slug}" tidak ditemukan di MODULES.md.`);
        } else {
          coveredModules.add(slug);
        }
      });
      const primaryMeta = MODUL_META_MAP[k.modulTerkait[0]];
      if (primaryMeta) {
        regionCounts[primaryMeta.region] += 1;
      }
    }

    const words = countWords(k.skenario);
    if (words < 60 || words > 110) {
      addError(scope, `Panjang skenario harus 60-110 kata (saat ini ${words} kata).`);
    }
    checkTextRules(scope, k.skenario);

    for (const [stageName, stage] of [
      ['tahap1', k.tahap1],
      ['tahap2', k.tahap2],
    ] as const) {
      checkTextRules(`${scope}.${stageName}`, stage.tanya);
      if (stage.pilihan.length !== 4) {
        addError(`${scope}.${stageName}`, 'Pilihan harus tepat 4 opsi.');
      } else {
        const norm = stage.pilihan.map((p) => p.trim().toLowerCase());
        if (new Set(norm).size !== 4) {
          addError(`${scope}.${stageName}`, 'Pilihan mengandung duplikat.');
        }
        stage.pilihan.forEach((opt) => checkTextRules(`${scope}.${stageName}`, opt));
      }
      if (![0, 1, 2, 3].includes(stage.kunci)) {
        addError(`${scope}.${stageName}`, `Kunci tidak valid: ${stage.kunci}`);
      }
    }

    const pembFields: (keyof Kasus['pembahasan'])[] = [
      'proyeksi',
      'posisi',
      'centralRay',
      'proteksi',
      'catatan',
    ];
    for (const field of pembFields) {
      const val = k.pembahasan[field];
      if (field !== 'catatan' && (!val || !val.trim())) {
        addError(`${scope}.pembahasan`, `Field "${field}" wajib diisi.`);
      }
      if (val) {
        if (val.length > 300) {
          addError(
            `${scope}.pembahasan`,
            `Field "${field}" > 300 karakter (${val.length}).`,
          );
        }
        checkTextRules(`${scope}.pembahasan.${field}`, val);
      }
    }

    if (!isValidKasusSumber(k.sumber || '')) {
      addError(scope, `Sumber kasus "${k.sumber}" harus berformat "<slug> hal N" atau "<slug> hal N-M".`);
    }
  });

  if (!isPartial) {
    if (kasusList.length !== 30) {
      addError('kasus', `Total kasus wajib tepat 30 (saat ini ${kasusList.length}).`);
    }
    if (
      regionCounts['ekstremitas-atas'] !== 9 ||
      regionCounts['ekstremitas-bawah'] !== 9 ||
      regionCounts.pelvis !== 5 ||
      regionCounts.vertebra !== 7
    ) {
      addError(
        'kasus',
        `Sebaran region kasus wajib Ekstremitas Atas 9, Ekstremitas Bawah 9, Pelvis 5, Vertebra 7 (saat ini: ${JSON.stringify(regionCounts)}).`,
      );
    }
    for (const meta of MODUL_META) {
      if (meta.slug !== 'orientasi' && !coveredModules.has(meta.slug)) {
        addError('kasus', `Modul non-orientasi "${meta.slug}" belum terpakai di kasus mana pun.`);
      }
    }
  }
}

async function main(): Promise<void> {
  const modulExports = await loadTsExportsFromDir(path.join(rootDir, 'src', 'data', 'modul'));
  const soalExports = await loadTsExportsFromDir(path.join(rootDir, 'src', 'data', 'soal'));

  const moduls = new Map<string, Modul>();
  for (const mod of modulExports) {
    for (const val of Object.values(mod)) {
      if (isModul(val)) {
        if (moduls.has(val.slug)) {
          addError('modul', `Slug modul duplikat "${val.slug}".`);
        }
        moduls.set(val.slug, val);
      }
    }
  }

  const soalByModul = new Map<string, Soal[]>();
  for (const mod of soalExports) {
    for (const val of Object.values(mod)) {
      if (isSoalArray(val) && val.length > 0) {
        const slug = val[0].modul;
        if (soalByModul.has(slug)) {
          addError('soal', `File soal duplikat untuk modul "${slug}".`);
        }
        soalByModul.set(slug, val);
      }
    }
  }

  const kasusMod = (await import(
    pathToFileURL(path.join(rootDir, 'src', 'data', 'kasus.ts')).href
  )) as { KASUS_LIST?: Kasus[] };
  const kasusList = kasusMod.KASUS_LIST ?? [];

  for (const modul of moduls.values()) {
    validateModul(modul);
    if (!soalByModul.has(modul.slug)) {
      addError(`modul:${modul.slug}`, 'Belum memiliki file soal di src/data/soal/.');
    }
  }

  const seenSoalIds = new Set<string>();
  for (const [slug, soalList] of soalByModul.entries()) {
    if (!moduls.has(slug)) {
      addError(`soal:${slug}`, 'File soal ada, tetapi modulnya belum ada di src/data/modul/.');
    }
    validateSoalSet(slug, soalList, seenSoalIds);
  }

  if (kasusList.length > 0 || !isPartial) {
    validateKasusList(kasusList);
  }

  if (!isPartial && moduls.size !== MODUL_META.length) {
    addError('global', `Total modul wajib ${MODUL_META.length} (saat ini ${moduls.size}/${MODUL_META.length} modul).`);
  }

  const totalSoal = Array.from(soalByModul.values()).reduce((sum, list) => sum + list.length, 0);
  console.log(
    `Ringkasan validasi${isPartial ? ' (mode --partial)' : ''}: ${moduls.size}/${MODUL_META.length} modul, ${totalSoal} soal, ${kasusList.length}/30 kasus.`,
  );

  if (errors.length > 0) {
    console.error(`\nDitemukan ${errors.length} pelanggaran aturan CONTENT_GUIDE:`);
    for (const err of errors) {
      console.error(` - ${err}`);
    }
    process.exit(1);
  }

  console.log('Validasi konten LOLOS.');
}

main().catch((err) => {
  console.error('Validator gagal dijalankan:', err);
  process.exit(1);
});
