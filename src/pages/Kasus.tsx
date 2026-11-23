import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  RotateCcw,
  ShieldAlert,
  Shuffle,
  Stethoscope,
  XCircle,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppHeader } from '../components/AppHeader';
import { SeoHead } from '../components/SeoHead';
import { ALL_KASUS, getModulMeta } from '../data';
import type { Kasus as KasusType } from '../data/types';
import { getTransition, TAP_FEEDBACK } from '../lib/motion';
import { useProgress } from '../lib/progress';
import { shuffleArray, shuffleKasusTahap } from '../lib/shuffle';
import { trackEvent } from '../lib/track';

const LETTERS = ['A', 'B', 'C', 'D'] as const;

function prepareCaseDeck(list: KasusType[]): KasusType[] {
  return shuffleArray(list).map((item) => ({
    ...item,
    tahap1: shuffleKasusTahap(item.tahap1),
    tahap2: shuffleKasusTahap(item.tahap2),
  }));
}

export function Kasus() {
  const { progress, recordCaseScore } = useProgress();
  const reduced = useReducedMotion();

  const [deck, setDeck] = useState<KasusType[]>(() => prepareCaseDeck(ALL_KASUS));
  const [idx, setIdx] = useState(0);
  const [ans1, setAns1] = useState<number | null>(null);
  const [ans2, setAns2] = useState<number | null>(null);

  const currentCase = deck[idx];

  useEffect(() => {
    if (currentCase) {
      trackEvent('buka_kasus', { id: currentCase.id });
    }
  }, [currentCase]);

  const reshuffleAll = useCallback(() => {
    setDeck(prepareCaseDeck(ALL_KASUS));
    setIdx(0);
    setAns1(null);
    setAns2(null);
  }, []);

  const handleNextCase = () => {
    setAns1(null);
    setAns2(null);
    if (idx + 1 < deck.length) {
      setIdx((i) => i + 1);
    } else {
      setDeck(prepareCaseDeck(ALL_KASUS));
      setIdx(0);
    }
  };

  const handleSelectTahap1 = (optIdx: number) => {
    if (ans1 !== null) return;
    setAns1(optIdx);
  };

  const handleSelectTahap2 = (optIdx: number) => {
    if (!currentCase || ans1 === null || ans2 !== null) return;
    setAns2(optIdx);
    const s1 = ans1 === currentCase.tahap1.kunci ? 1 : 0;
    const s2 = optIdx === currentCase.tahap2.kunci ? 1 : 0;
    const skor = (s1 + s2) * 50;
    recordCaseScore(currentCase.id, skor);
    trackEvent('jawab_kasus', { id: currentCase.id, skor });
  };

  const earnedScore = useMemo(() => {
    if (!currentCase || ans1 === null || ans2 === null) return null;
    const s1 = ans1 === currentCase.tahap1.kunci ? 1 : 0;
    const s2 = ans2 === currentCase.tahap2.kunci ? 1 : 0;
    return (s1 + s2) * 50;
  }, [currentCase, ans1, ans2]);

  if (ALL_KASUS.length === 0) {
    return (
      <div className="min-h-[100dvh] pb-24 md:pb-12">
        <SeoHead
          title="Contoh Kasus Klinis — RadPraktik"
          description="Simulasi 30 kasus radiografi 2 tahap: tebak proyeksi, tebak posisi/central ray, dan pembahasan."
        />
        <AppHeader
          title="Contoh Kasus"
          subtitle="0/30 Kasus"
          backTo="/"
          breadcrumbs={[{ label: 'Beranda', to: '/' }, { label: 'Kasus' }]}
        />
        <main className="mx-auto max-w-2xl px-4 py-12 text-center">
          <div className="clinical-card rounded-2xl p-8">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--bg-muted)] text-[var(--accent-secondary)]">
              <Stethoscope className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="mt-4 font-display text-xl font-bold text-[var(--text-primary)]">
              Kasus Klinis Sedang Disiapkan
            </h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              30 skenario kasus bertahap (Tebak Proyeksi → Tebak Posisi/CR → Pembahasan) belum
              terisi di tahap kerangka ini. Sambil menunggu, kamu bisa menjelajahi peta 24 modul.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/modul"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[var(--accent-primary)] px-5 text-sm font-semibold text-[var(--on-accent)]"
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                <span>Jelajahi Modul</span>
              </Link>
              <Link
                to="/"
                className="inline-flex min-h-[44px] items-center rounded-xl border border-[var(--border-subtle)] px-5 text-sm font-medium text-[var(--text-primary)]"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!currentCase) return null;

  return (
    <div className="min-h-[100dvh] pb-24 md:pb-12">
      <SeoHead
        title="Contoh Kasus Klinis — RadPraktik"
        description="Simulasi kasus radiografi 2 tahap: tebak proyeksi lalu tebak posisi/central ray."
      />
      <AppHeader
        title="Contoh Kasus"
        subtitle={`${idx + 1}/${deck.length}`}
        backTo="/"
        breadcrumbs={[{ label: 'Beranda', to: '/' }, { label: 'Kasus' }]}
      />

      <main className="mx-auto max-w-3xl space-y-5 px-4 py-6 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-lg border border-[var(--border-strong)] bg-[var(--bg-muted)] px-2.5 py-1 font-mono text-xs text-[var(--accent-primary)]">
              Kasus {currentCase.id.toUpperCase()}
            </span>
            {currentCase.modulTerkait.map((slug) => {
              const meta = getModulMeta(slug);
              return (
                <Link
                  key={slug}
                  to={`/modul/${slug}`}
                  className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-2.5 py-1 text-xs text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--accent-primary)]"
                >
                  {meta?.judul ?? slug}
                </Link>
              );
            })}
          </div>
          <button
            type="button"
            onClick={reshuffleAll}
            className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl border border-[var(--border-subtle)] px-3 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            <Shuffle className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Acak Ulang ({Object.keys(progress.kasus).length}/{ALL_KASUS.length})</span>
          </button>
        </div>

        {/* Skenario */}
        <section className="clinical-card rounded-2xl p-5">
          <span className="font-mono text-xs font-medium text-[var(--accent-secondary)]">
            SKENARIO KLINIS
          </span>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-primary)] sm:text-base">
            {currentCase.skenario}
          </p>
        </section>

        {/* Tahap 1 */}
        <section className="clinical-card rounded-2xl p-5">
          <span className="font-mono text-xs font-medium text-[var(--accent-primary)]">
            TAHAP 1 • TEBAK PROYEKSI
          </span>
          <h2 className="mt-1.5 font-display text-base font-bold text-[var(--text-primary)] sm:text-lg">
            {currentCase.tahap1.tanya}
          </h2>
          <div className="mt-4 space-y-2">
            {currentCase.tahap1.pilihan.map((opt, i) => {
              const answered = ans1 !== null;
              const isSelected = ans1 === i;
              const isCorrect = i === currentCase.tahap1.kunci;

              let cls = 'border-[var(--border-subtle)] bg-[var(--bg-muted)]/40 hover:border-[var(--border-strong)]';
              if (answered) {
                if (isCorrect) cls = 'border-[var(--accent-success)] bg-[var(--accent-success)]/12';
                else if (isSelected) cls = 'border-[var(--accent-danger)] bg-[var(--accent-danger)]/12';
                else cls = 'border-[var(--border-subtle)] opacity-60';
              }

              return (
                <motion.button
                  key={i}
                  type="button"
                  disabled={answered}
                  whileTap={!answered && !reduced ? TAP_FEEDBACK : undefined}
                  onClick={() => handleSelectTahap1(i)}
                  className={`flex min-h-[46px] w-full items-center gap-3 rounded-xl border px-3.5 py-2.5 text-left text-sm ${cls}`}
                >
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] font-mono text-xs font-semibold">
                    {LETTERS[i]}
                  </span>
                  <span className="flex-1 text-[var(--text-primary)]">{opt}</span>
                  {answered && isCorrect && (
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--accent-success)]" />
                  )}
                  {answered && isSelected && !isCorrect && (
                    <XCircle className="h-5 w-5 shrink-0 text-[var(--accent-danger)]" />
                  )}
                </motion.button>
              );
            })}
          </div>
        </section>

        {/* Tahap 2 */}
        {ans1 !== null && (
          <motion.section
            initial={reduced ? undefined : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={getTransition(reduced)}
            className="clinical-card rounded-2xl p-5"
          >
            <span className="font-mono text-xs font-medium text-[var(--accent-primary)]">
              TAHAP 2 • TEBAK POSISI / ARAH SINAR
            </span>
            <h2 className="mt-1.5 font-display text-base font-bold text-[var(--text-primary)] sm:text-lg">
              {currentCase.tahap2.tanya}
            </h2>
            <div className="mt-4 space-y-2">
              {currentCase.tahap2.pilihan.map((opt, i) => {
                const answered = ans2 !== null;
                const isSelected = ans2 === i;
                const isCorrect = i === currentCase.tahap2.kunci;

                let cls = 'border-[var(--border-subtle)] bg-[var(--bg-muted)]/40 hover:border-[var(--border-strong)]';
                if (answered) {
                  if (isCorrect) cls = 'border-[var(--accent-success)] bg-[var(--accent-success)]/12';
                  else if (isSelected) cls = 'border-[var(--accent-danger)] bg-[var(--accent-danger)]/12';
                  else cls = 'border-[var(--border-subtle)] opacity-60';
                }

                return (
                  <motion.button
                    key={i}
                    type="button"
                    disabled={answered}
                    whileTap={!answered && !reduced ? TAP_FEEDBACK : undefined}
                    onClick={() => handleSelectTahap2(i)}
                    className={`flex min-h-[46px] w-full items-center gap-3 rounded-xl border px-3.5 py-2.5 text-left text-sm ${cls}`}
                  >
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] font-mono text-xs font-semibold">
                      {LETTERS[i]}
                    </span>
                    <span className="flex-1 text-[var(--text-primary)]">{opt}</span>
                    {answered && isCorrect && (
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--accent-success)]" />
                    )}
                    {answered && isSelected && !isCorrect && (
                      <XCircle className="h-5 w-5 shrink-0 text-[var(--accent-danger)]" />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.section>
        )}

        {/* Pembahasan */}
        {ans2 !== null && earnedScore !== null && (
          <motion.section
            initial={reduced ? undefined : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={getTransition(reduced)}
            className="clinical-card space-y-4 rounded-2xl border-[var(--border-strong)] p-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
              <div>
                <span className="font-mono text-xs text-[var(--accent-secondary)]">
                  PEMBAHASAN KASUS
                </span>
                <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
                  Skor Kasus: {earnedScore}%
                </h3>
              </div>
              <span className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-muted)] px-2.5 py-1 font-mono text-xs text-[var(--text-secondary)]">
                Sumber: {currentCase.sumber}
              </span>
            </div>

            <dl className="space-y-3 text-sm">
              <div>
                <dt className="font-semibold text-[var(--accent-primary)]">Proyeksi</dt>
                <dd className="mt-0.5 text-[var(--text-primary)]">{currentCase.pembahasan.proyeksi}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--accent-secondary)]">Posisi Pasien &amp; Objek</dt>
                <dd className="mt-0.5 text-[var(--text-primary)]">{currentCase.pembahasan.posisi}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--text-primary)]">Central Ray, CP &amp; Eksposi</dt>
                <dd className="mt-0.5 text-[var(--text-primary)]">{currentCase.pembahasan.centralRay}</dd>
              </div>
              <div className="rounded-xl border border-[var(--accent-amber)]/35 bg-[var(--accent-amber)]/10 p-3">
                <dt className="flex items-center gap-1.5 font-semibold text-[var(--accent-amber)]">
                  <ShieldAlert className="h-4 w-4" aria-hidden="true" />
                  <span>Proteksi Radiasi</span>
                </dt>
                <dd className="mt-1 text-[var(--text-primary)]">{currentCase.pembahasan.proteksi}</dd>
              </div>
              {currentCase.pembahasan.catatan && (
                <div>
                  <dt className="font-semibold text-[var(--text-secondary)]">Catatan Penyesuaian</dt>
                  <dd className="mt-0.5 text-[var(--text-primary)]">{currentCase.pembahasan.catatan}</dd>
                </div>
              )}
            </dl>

            <div className="flex flex-wrap justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={reshuffleAll}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[var(--border-subtle)] px-4 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                <span>Acak Ulang</span>
              </button>
              <motion.button
                type="button"
                whileTap={reduced ? undefined : TAP_FEEDBACK}
                onClick={handleNextCase}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[var(--accent-primary)] px-5 text-sm font-semibold text-[var(--on-accent)]"
              >
                <span>Kasus Berikutnya</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </motion.button>
            </div>
          </motion.section>
        )}
      </main>
    </div>
  );
}
