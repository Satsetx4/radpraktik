export const STORAGE_PREFIX = 'radpraktik:v1:';

export interface StorageBackend {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
  key?(index: number): string | null;
  readonly length?: number;
}

export interface SafeStorage {
  get(key: string): string | null;
  set(key: string, value: string): boolean;
  remove(key: string): boolean;
  clearPrefix(): void;
  getJSON<T>(key: string, fallback: T): T;
  setJSON<T>(key: string, value: T): boolean;
  isMemoryFallback(): boolean;
}

function getDefaultBackend(): StorageBackend | null {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return window.localStorage;
    }
  } catch {
    return null;
  }
  return null;
}

export function createSafeStorage(backend?: StorageBackend | null): SafeStorage {
  const memory = new Map<string, string>();
  let usingFallback = false;

  const resolveBackend = (): StorageBackend | null => {
    if (backend !== undefined) return backend;
    return getDefaultBackend();
  };

  const prefixed = (key: string) =>
    key.startsWith(STORAGE_PREFIX) ? key : `${STORAGE_PREFIX}${key}`;

  return {
    get(key: string): string | null {
      const fullKey = prefixed(key);
      const store = resolveBackend();
      if (store) {
        try {
          const val = store.getItem(fullKey);
          if (val !== null) return val;
        } catch {
          usingFallback = true;
        }
      } else {
        usingFallback = true;
      }
      return memory.get(fullKey) ?? null;
    },

    set(key: string, value: string): boolean {
      const fullKey = prefixed(key);
      memory.set(fullKey, value);
      const store = resolveBackend();
      if (store) {
        try {
          store.setItem(fullKey, value);
          return true;
        } catch {
          usingFallback = true;
          return false;
        }
      }
      usingFallback = true;
      return false;
    },

    remove(key: string): boolean {
      const fullKey = prefixed(key);
      memory.delete(fullKey);
      const store = resolveBackend();
      if (store) {
        try {
          store.removeItem(fullKey);
          return true;
        } catch {
          usingFallback = true;
          return false;
        }
      }
      return false;
    },

    clearPrefix(): void {
      for (const k of Array.from(memory.keys())) {
        if (k.startsWith(STORAGE_PREFIX)) {
          memory.delete(k);
        }
      }
      const store = resolveBackend();
      if (!store) return;
      try {
        if (typeof store.length === 'number' && typeof store.key === 'function') {
          const keysToRemove: string[] = [];
          for (let i = 0; i < store.length; i += 1) {
            const k = store.key(i);
            if (k && k.startsWith(STORAGE_PREFIX)) {
              keysToRemove.push(k);
            }
          }
          for (const k of keysToRemove) {
            store.removeItem(k);
          }
        } else {
          store.removeItem(prefixed('progress'));
          store.removeItem(prefixed('tema'));
        }
      } catch {
        usingFallback = true;
      }
    },

    getJSON<T>(key: string, fallback: T): T {
      const raw = this.get(key);
      if (raw === null) return fallback;
      try {
        return JSON.parse(raw) as T;
      } catch {
        return fallback;
      }
    },

    setJSON<T>(key: string, value: T): boolean {
      try {
        return this.set(key, JSON.stringify(value));
      } catch {
        return false;
      }
    },

    isMemoryFallback(): boolean {
      return usingFallback;
    },
  };
}

export const storage = createSafeStorage();
