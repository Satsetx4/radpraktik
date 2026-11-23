import { describe, expect, it } from 'vitest';
import {
  applyCaseResult,
  applyQuizCompletion,
  applyStageRead,
  createDefaultProgress,
  loadProgress,
  resetProgressStorage,
  saveProgress,
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
});
