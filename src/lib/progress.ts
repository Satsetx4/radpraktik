import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { Soal, TahapId } from '../data/types';
import { storage, type SafeStorage } from './storage';
import { trackEvent } from './track';

export type ThemeMode = 'dark' | 'light';

export interface ModulProgress {
  dibaca: TahapId[];
  skorTerbaik: number | null;
  skorTerakhir: number | null;
  percobaan: number;
}

export interface ActiveQuizState {
  modulSlug: string;
  soalList: Soal[];
  index: number;
  jawaban: Record<string, number>;
  startedAt: number;
}

export interface ProgressState {
  nama: string;
  tema: ThemeMode;
  modulTerakhir: string | null;
  tahapTerakhir: TahapId | null;
  modul: Record<string, ModulProgress>;
  kasus: Record<string, number>;
  kuisAktif?: ActiveQuizState | null;
}

export const PROGRESS_STORAGE_KEY = 'progress';
export const THEME_STORAGE_KEY = 'tema';

export function createDefaultProgress(tema: ThemeMode = 'light'): ProgressState {
  return {
    nama: '',
    tema,
    modulTerakhir: null,
    tahapTerakhir: null,
    modul: {},
    kasus: {},
    kuisAktif: null,
  };
}

export function loadProgress(store: SafeStorage = storage): ProgressState {
  const savedTema = store.get(THEME_STORAGE_KEY);
  const fallbackTema: ThemeMode = savedTema === 'dark' ? 'dark' : 'light';
  const parsed = store.getJSON<Partial<ProgressState> | null>(PROGRESS_STORAGE_KEY, null);

  if (!parsed || typeof parsed !== 'object') {
    return createDefaultProgress(fallbackTema);
  }

  return {
    nama: typeof parsed.nama === 'string' ? parsed.nama : '',
    tema: parsed.tema === 'light' || parsed.tema === 'dark' ? parsed.tema : fallbackTema,
    modulTerakhir: typeof parsed.modulTerakhir === 'string' ? parsed.modulTerakhir : null,
    tahapTerakhir:
      parsed.tahapTerakhir === 'pra' ||
      parsed.tahapTerakhir === 'proyeksi' ||
      parsed.tahapTerakhir === 'proteksi' ||
      parsed.tahapTerakhir === 'latihan'
        ? parsed.tahapTerakhir
        : null,
    modul: parsed.modul && typeof parsed.modul === 'object' ? parsed.modul : {},
    kasus: parsed.kasus && typeof parsed.kasus === 'object' ? parsed.kasus : {},
    kuisAktif: parsed.kuisAktif ?? null,
  };
}

export function saveProgress(state: ProgressState, store: SafeStorage = storage): void {
  store.set(THEME_STORAGE_KEY, state.tema);
  store.setJSON(PROGRESS_STORAGE_KEY, state);
}

export function applyStageRead(
  state: ProgressState,
  slug: string,
  tahap: TahapId,
): ProgressState {
  const existing = state.modul[slug] ?? {
    dibaca: [],
    skorTerbaik: null,
    skorTerakhir: null,
    percobaan: 0,
  };
  const dibaca = existing.dibaca.includes(tahap)
    ? existing.dibaca
    : [...existing.dibaca, tahap];

  return {
    ...state,
    modulTerakhir: slug,
    tahapTerakhir: tahap,
    modul: {
      ...state.modul,
      [slug]: {
        ...existing,
        dibaca,
      },
    },
  };
}

export function applyQuizCompletion(
  state: ProgressState,
  slug: string,
  skor: number,
): ProgressState {
  const clamped = Math.max(0, Math.min(100, Math.round(skor)));
  const existing = state.modul[slug] ?? {
    dibaca: [],
    skorTerbaik: null,
    skorTerakhir: null,
    percobaan: 0,
  };
  const dibaca = existing.dibaca.includes('latihan')
    ? existing.dibaca
    : [...existing.dibaca, 'latihan' as TahapId];
  const skorTerbaik =
    existing.skorTerbaik === null ? clamped : Math.max(existing.skorTerbaik, clamped);

  return {
    ...state,
    modulTerakhir: slug,
    tahapTerakhir: 'latihan',
    kuisAktif: null,
    modul: {
      ...state.modul,
      [slug]: {
        dibaca,
        skorTerbaik,
        skorTerakhir: clamped,
        percobaan: existing.percobaan + 1,
      },
    },
  };
}

export function applyCaseResult(
  state: ProgressState,
  kasusId: string,
  skor: number,
): ProgressState {
  const clamped = Math.max(0, Math.min(100, Math.round(skor)));
  const prev = state.kasus[kasusId];
  const best = typeof prev === 'number' ? Math.max(prev, clamped) : clamped;

  return {
    ...state,
    kasus: {
      ...state.kasus,
      [kasusId]: best,
    },
  };
}

export function resetProgressStorage(store: SafeStorage = storage): ProgressState {
  store.clearPrefix();
  return createDefaultProgress('light');
}

function syncDocumentTheme(tema: ThemeMode): void {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  root.dataset.theme = tema;
  if (tema === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute('content', tema === 'dark' ? '#08120F' : '#00A572');
  }
}

export interface ProgressContextValue {
  progress: ProgressState;
  setNama: (nama: string) => void;
  setTema: (tema: ThemeMode) => void;
  toggleTema: () => void;
  markStageRead: (slug: string, tahap: TahapId) => void;
  recordQuizScore: (slug: string, skor: number) => void;
  setActiveQuiz: (quiz: ActiveQuizState | null) => void;
  recordCaseScore: (kasusId: string, skor: number) => void;
  resetAll: () => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<ProgressState>(() => loadProgress());

  useEffect(() => {
    syncDocumentTheme(progress.tema);
    saveProgress(progress);
  }, [progress]);

  const setNama = useCallback((nama: string) => {
    const clean = nama.trim();
    setProgress((prev) => ({ ...prev, nama: clean }));
  }, []);

  const setTema = useCallback((tema: ThemeMode) => {
    setProgress((prev) => ({ ...prev, tema }));
  }, []);

  const toggleTema = useCallback(() => {
    setProgress((prev) => ({
      ...prev,
      tema: prev.tema === 'dark' ? 'light' : 'dark',
    }));
  }, []);

  const markStageRead = useCallback((slug: string, tahap: TahapId) => {
    setProgress((prev) => applyStageRead(prev, slug, tahap));
  }, []);

  const recordQuizScore = useCallback((slug: string, skor: number) => {
    setProgress((prev) => applyQuizCompletion(prev, slug, skor));
  }, []);

  const setActiveQuiz = useCallback((quiz: ActiveQuizState | null) => {
    setProgress((prev) => ({ ...prev, kuisAktif: quiz }));
  }, []);

  const recordCaseScore = useCallback((kasusId: string, skor: number) => {
    setProgress((prev) => applyCaseResult(prev, kasusId, skor));
  }, []);

  const resetAll = useCallback(() => {
    const fresh = resetProgressStorage();
    setProgress(fresh);
    syncDocumentTheme(fresh.tema);
    trackEvent('reset_data');
  }, []);

  const value = useMemo<ProgressContextValue>(
    () => ({
      progress,
      setNama,
      setTema,
      toggleTema,
      markStageRead,
      recordQuizScore,
      setActiveQuiz,
      recordCaseScore,
      resetAll,
    }),
    [
      progress,
      setNama,
      setTema,
      toggleTema,
      markStageRead,
      recordQuizScore,
      setActiveQuiz,
      recordCaseScore,
      resetAll,
    ],
  );

  return React.createElement(ProgressContext.Provider, { value }, children);
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) {
    throw new Error('useProgress must be used inside ProgressProvider');
  }
  return ctx;
}
