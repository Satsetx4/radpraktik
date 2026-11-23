import { describe, expect, it } from 'vitest';
import { createSafeStorage, type StorageBackend } from './storage';

describe('createSafeStorage', () => {
  it('tidak crash saat localStorage melempar error dan fallback ke memori', () => {
    const throwingBackend: StorageBackend = {
      getItem() {
        throw new Error('SecurityError: blocked');
      },
      setItem() {
        throw new Error('QuotaExceededError');
      },
      removeItem() {
        throw new Error('SecurityError');
      },
    };

    const safe = createSafeStorage(throwingBackend);
    expect(() => safe.set('nama', 'Rina')).not.toThrow();
    expect(safe.isMemoryFallback()).toBe(true);
    expect(safe.get('nama')).toBe('Rina');
    expect(() => safe.remove('nama')).not.toThrow();
    expect(safe.get('nama')).toBeNull();
  });

  it('menangani JSON korup dengan mengembalikan fallback', () => {
    const store = new Map<string, string>([['radpraktik:v1:progress', '{bukan-json']]);
    const backend: StorageBackend = {
      getItem: (k) => store.get(k) ?? null,
      setItem: (k, v) => {
        store.set(k, v);
      },
      removeItem: (k) => {
        store.delete(k);
      },
    };

    const safe = createSafeStorage(backend);
    expect(safe.getJSON('progress', { nama: '' })).toEqual({ nama: '' });
  });

  it('clearPrefix hanya menghapus key dengan prefix radpraktik:v1:', () => {
    const store = new Map<string, string>([
      ['radpraktik:v1:tema', 'dark'],
      ['radpraktik:v1:progress', '{"nama":"Rina"}'],
      ['other:key', 'keep-me'],
    ]);
    const backend: StorageBackend = {
      getItem: (k) => store.get(k) ?? null,
      setItem: (k, v) => {
        store.set(k, v);
      },
      removeItem: (k) => {
        store.delete(k);
      },
      key: (i) => Array.from(store.keys())[i] ?? null,
      get length() {
        return store.size;
      },
    };

    const safe = createSafeStorage(backend);
    safe.clearPrefix();
    expect(store.has('radpraktik:v1:tema')).toBe(false);
    expect(store.has('radpraktik:v1:progress')).toBe(false);
    expect(store.get('other:key')).toBe('keep-me');
  });
});
