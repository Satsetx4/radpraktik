import { describe, expect, it } from 'vitest';
import type { Kasus } from '../data/types';
import {
  applyCaseResult,
  applyQuizCompletion,
  applyStageRead,
  createDefaultProgress,
  loadProgress,
  resetProgressStorage,
  saveProgress,
  type ActiveCaseState,
} from './progress';
import { createSafeStorage, type StorageBackend } from './storage';

function makeMemoryStorage() {
  const map = new Map<string, string>();
  const backend: StorageBackend = {
    getItem: (k) => map.get(k) ?? null,
    setItem: (k, v) => {
      map.set(k, v);
    },
    removeItem: (k) => {
      map.delete(k);
    },
    key: (i) => Array.from(map.keys())[i] ?? null,
    get length() {
      return map.size;
    },
  };
  return createSafeStorage(backend);
}

describe('progress state & persistence', () => {
  it('mulai dari fresh start 0% saat storage kosong', () => {
    const safe = makeMemoryStorage();
    const state = loadProgress(safe);
    expect(state.nama).toBe('');
    expect(state.tema).toBe('light');
    expect(state.modul).toEqual({});
    expect(state.kasus).toEqual({});
    expect(state.modulTerakhir).toBeNull();
  });

  it('mencatat skor terbaik dan tidak menurunkannya saat percobaan berikutnya lebih rendah', () => {
    let state = createDefaultProgress('dark');
    state = applyStageRead(state, 'manus', 'pra');
    state = applyStageRead(state, 'manus', 'proyeksi');
    expect(state.modul.manus.dibaca).toEqual(['pra', 'proyeksi']);

    state = applyQuizCompletion(state, 'manus', 90);
    expect(state.modul.manus.skorTerbaik).toBe(90);
    expect(state.modul.manus.skorTerakhir).toBe(90);
    expect(state.modul.manus.percobaan).toBe(1);

    state = applyQuizCompletion(state, 'manus', 60);
    expect(state.modul.manus.skorTerbaik).toBe(90);
    expect(state.modul.manus.skorTerakhir).toBe(60);
    expect(state.modul.manus.percobaan).toBe(2);
  });

  it('menyimpan skor kasus terbaik dan mereset seluruh progres ke 0%', () => {
    const safe = makeMemoryStorage();
    let state = createDefaultProgress('dark');
    state.nama = 'Rina';
    state = applyQuizCompletion(state, 'manus', 80);
    state = applyCaseResult(state, 'k01', 100);
    state = applyCaseResult(state, 'k01', 50);
    expect(state.kasus.k01).toBe(100);

    saveProgress(state, safe);
    const loaded = loadProgress(safe);
    expect(loaded.nama).toBe('Rina');
    expect(loaded.tema).toBe('dark');

    const reset = resetProgressStorage(safe);
    expect(reset.nama).toBe('');
    expect(reset.modul).toEqual({});
    expect(reset.kasus).toEqual({});
    expect(loadProgress(safe)).toEqual(createDefaultProgress('light'));
  });

  it('menyimpan, memuat ulang, dan membersihkan kasusAktif saat reset', () => {
    const safe = makeMemoryStorage();
    const sampleKasus: Kasus = {
      id: 'k01',
      modulTerkait: ['manus'],
      skenario: 'Pasien trauma tangan.',
      tahap1: { tanya: 'Proyeksi?', pilihan: ['PA', 'AP'], kunci: 0 },
      tahap2: { tanya: 'CR?', pilihan: ['Tegak lurus', '15 deg'], kunci: 0 },
      pembahasan: {
        proyeksi: 'PA',
        posisi: 'Duduk',
        centralRay: 'Tegak lurus MCP 3',
        proteksi: 'Apron',
      },
      sumber: 'Modul Manus',
    };
    const kasusAktif: ActiveCaseState = {
      deck: [sampleKasus],
      index: 0,
      ans1: 0,
      ans2: null,
    };

    const state = createDefaultProgress('light');
    state.kasusAktif = kasusAktif;
    saveProgress(state, safe);

    const loaded = loadProgress(safe);
    expect(loaded.kasusAktif).toEqual(kasusAktif);

    const reset = resetProgressStorage(safe);
    expect(reset.kasusAktif).toBeNull();
    expect(loadProgress(safe).kasusAktif).toBeNull();
  });
});
