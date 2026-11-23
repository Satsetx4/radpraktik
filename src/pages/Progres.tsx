import { AlertCircle, BookOpen, RotateCcw, Trash2, User } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppHeader } from '../components/AppHeader';
import { RegionBar } from '../components/RegionBar';
import { ScoreRing } from '../components/ScoreRing';
import { SeoHead } from '../components/SeoHead';
import { ALL_KASUS, MODUL_META, REGIONS, getModulsByRegion } from '../data';
import { getTransition, TAP_FEEDBACK } from '../lib/motion';
import { useProgress } from '../lib/progress';

type ModulFilter = 'all' | 'done' | 'todo';

interface ProgresProps {
  onOpenOnboarding: () => void;
}

export function Progres({ onOpenOnboarding }: ProgresProps) {
  const { progress, resetAll } = useProgress();
  const [confirmReset, setConfirmReset] = useState(false);
  const [modulFilter, setModulFilter] = useState<ModulFilter>('all');
  const reduced = useReducedMotion();

  const completedModuls = useMemo(
    () =>
      MODUL_META.filter((m) => {
        const p = progress.modul[m.slug];
        return Boolean(p && (p.skorTerbaik !== null || p.dibaca.length >= 3));
      }),
    [progress.modul],
  );

  const filteredModuls = useMemo(() => {
    if (modulFilter === 'all') return MODUL_META;
    return MODUL_META.filter((m) => {
      const p = progress.modul[m.slug];
      const isDone = Boolean(p && (p.skorTerbaik !== null || p.dibaca.length >= 3));
      return modulFilter === 'done' ? isDone : !isDone;
    });
  }, [modulFilter, progress.modul]);

  const bestScores = Object.values(progress.modul)
    .map((m) => m.skorTerbaik)
    .filter((s): s is number => s !== null);

  const avgBestScore =
    bestScores.length > 0
      ? Math.round(bestScores.reduce((a, b) => a + b, 0) / bestScores.length)
      : null;

  const caseScores = Object.values(progress.kasus);
  const avgCaseScore =
    caseScores.length > 0
      ? Math.round(caseScores.reduce((a, b) => a + b, 0) / caseScores.length)
      : null;

  const needReview = MODUL_META.filter((m) => {
    const best = progress.modul[m.slug]?.skorTerbaik;
    return best !== null && best !== undefined && best < 70;
  });

  const handleConfirmReset = () => {
    resetAll();
    setConfirmReset(false);
  };

  return (
    <div className="min-h-[100dvh] pb-24 md:pb-12">
      <SeoHead
        title="Progres Belajar — RadPraktik"
        description="Pantau pencapaian belajar 24 modul radiografi, skor latihan terbaik, dan akurasi kasus klinis."
      />
      <AppHeader
        title="Progres Belajar"
        backTo="/"
        breadcrumbs={[{ label: 'Beranda', to: '/' }, { label: 'Progres' }]}
      />

      <main className="mx-auto max-w-4xl space-y-6 px-4 py-6 sm:px-6">
        {/* Ringkasan Utama */}
        <section className="clinical-card grid gap-6 rounded-2xl p-5 sm:grid-cols-[auto_1fr] sm:items-center sm:p-6">
          <div className="flex justify-center">
            <ScoreRing score={avgBestScore} size={120} label="Rata-rata Skor Terbaik" />
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-muted)]/60 p-3.5">
              <span className="block text-xs text-[var(--text-secondary)]">Modul Selesai</span>
              <span className="mt-1 block font-display text-xl font-bold text-[var(--text-primary)]">
                {completedModuls.length} / {MODUL_META.length}
              </span>
            </div>
            <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-muted)]/60 p-3.5">
              <span className="block text-xs text-[var(--text-secondary)]">Kasus Terjawab</span>
              <span className="mt-1 block font-display text-xl font-bold text-[var(--text-primary)]">
                {caseScores.length} / {ALL_KASUS.length || 30}
              </span>
            </div>
            <div className="col-span-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-muted)]/60 p-3.5 sm:col-span-1">
              <span className="block text-xs text-[var(--text-secondary)]">Akurasi Kasus</span>
              <span className="mt-1 block font-display text-xl font-bold text-[var(--text-primary)]">
                {avgCaseScore === null ? '—' : `${avgCaseScore}%`}
              </span>
            </div>
          </div>
        </section>

        {/* Bar per Region */}
        <section className="clinical-card rounded-2xl p-5 sm:p-6">
          <h2 className="font-display text-lg font-bold text-[var(--text-primary)]">
            Cakupan per Region
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {REGIONS.map((region) => {
              const items = getModulsByRegion(region.id);
              const done = items.filter((m) => {
                const p = progress.modul[m.slug];
                return p && (p.skorTerbaik !== null || p.dibaca.length >= 3);
              }).length;
              return (
                <RegionBar
                  key={region.id}
                  label={region.label}
                  completed={done}
                  total={items.length}
                />
              );
            })}
          </div>
        </section>

        {/* Perlu Diulang */}
        <section className="clinical-card rounded-2xl p-5 sm:p-6">
          <h2 className="flex items-center gap-2 font-display text-lg font-bold text-[var(--text-primary)]">
            <AlertCircle className="h-5 w-5 text-[var(--accent-amber)]" aria-hidden="true" />
            <span>Modul yang Perlu Diulang (Skor &lt; 70%)</span>
          </h2>
          {needReview.length === 0 ? (
            <div className="mt-3 rounded-xl border border-dashed border-[var(--border-subtle)] p-4 text-sm text-[var(--text-secondary)]">
              {bestScores.length === 0 ? (
                <span>
                  Belum ada latihan soal yang diselesaikan.{' '}
                  <Link to="/modul" className="font-medium text-[var(--accent-primary)] hover:underline">
                    Mulai dari daftar modul →
                  </Link>
                </span>
              ) : (
                <span>Semua modul yang sudah dikerjakan memiliki skor terbaik ≥ 70%. Pertahankan!</span>
              )}
            </div>
          ) : (
            <ul className="mt-4 space-y-2.5">
              {needReview.map((meta) => {
                const best = progress.modul[meta.slug]?.skorTerbaik ?? 0;
                return (
                  <li
                    key={meta.slug}
                    className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-muted)]/50 px-4 py-3"
                  >
                    <div>
                      <span className="font-mono text-xs text-[var(--accent-amber)]">{meta.kode}</span>
                      <p className="font-display text-sm font-semibold text-[var(--text-primary)]">
                        {meta.judul}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold text-[var(--accent-amber)]">
                        {best}%
                      </span>
                      <Link
                        to={`/modul/${meta.slug}/latihan`}
                        className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl bg-[var(--accent-primary)] px-3.5 text-xs font-semibold text-[var(--on-accent)]"
                      >
                        <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Ulangi</span>
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </section>

        {/* Rincian Capaian 24 Modul */}
        <section className="clinical-card rounded-2xl p-5 sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-display text-lg font-bold text-[var(--text-primary)]">
              Rincian Capaian 24 Modul
            </h2>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter capaian modul">
              <motion.button
                type="button"
                whileTap={reduced ? undefined : TAP_FEEDBACK}
                onClick={() => setModulFilter('all')}
                className={`min-h-[44px] rounded-xl border px-3.5 text-xs font-medium transition-colors ${
                  modulFilter === 'all'
                    ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)]/15 text-[var(--accent-primary)]'
                    : 'border-[var(--border-subtle)] bg-[var(--bg-muted)]/50 text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                Semua ({MODUL_META.length})
              </motion.button>
              <motion.button
                type="button"
                whileTap={reduced ? undefined : TAP_FEEDBACK}
                onClick={() => setModulFilter('done')}
                className={`min-h-[44px] rounded-xl border px-3.5 text-xs font-medium transition-colors ${
                  modulFilter === 'done'
                    ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)]/15 text-[var(--accent-primary)]'
                    : 'border-[var(--border-subtle)] bg-[var(--bg-muted)]/50 text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                Selesai ({completedModuls.length})
              </motion.button>
              <motion.button
                type="button"
                whileTap={reduced ? undefined : TAP_FEEDBACK}
                onClick={() => setModulFilter('todo')}
                className={`min-h-[44px] rounded-xl border px-3.5 text-xs font-medium transition-colors ${
                  modulFilter === 'todo'
                    ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)]/15 text-[var(--accent-primary)]'
                    : 'border-[var(--border-subtle)] bg-[var(--bg-muted)]/50 text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                Belum Selesai ({MODUL_META.length - completedModuls.length})
              </motion.button>
            </div>
          </div>

          {filteredModuls.length === 0 ? (
            <div className="mt-4 rounded-xl border border-dashed border-[var(--border-subtle)] p-4 text-sm text-[var(--text-secondary)]">
              {modulFilter === 'done'
                ? 'Belum ada modul yang selesai. Mulai baca materi atau kerjakan latihan soal.'
                : 'Semua 24 modul sudah selesai dipelajari!'}
            </div>
          ) : (
            <ul className="mt-4 space-y-2.5">
              {filteredModuls.map((meta) => {
                const modProg = progress.modul[meta.slug];
                const readCount = modProg?.dibaca.length ?? 0;
                const readPct = Math.min(100, Math.round((readCount / 4) * 100));
                const bestScore = modProg?.skorTerbaik ?? null;
                const attempts = modProg?.percobaan ?? 0;

                const barPct = bestScore !== null ? bestScore : readPct;
                const barColorClass =
                  bestScore !== null
                    ? bestScore >= 70
                      ? 'bg-[var(--accent-success)]'
                      : 'bg-[var(--accent-amber)]'
                    : 'bg-[var(--accent-primary)]/70';

                return (
                  <li
                    key={meta.slug}
                    className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-muted)]/40 p-3.5"
                  >
                    <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                      <Link
                        to={`/modul/${meta.slug}`}
                        className="inline-flex min-h-[44px] min-w-0 items-center gap-2.5 rounded-lg transition-colors hover:text-[var(--accent-primary)]"
                      >
                        <span className="shrink-0 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-2 py-0.5 font-mono text-xs text-[var(--accent-primary)]">
                          {meta.kode}
                        </span>
                        <span className="font-display text-sm font-semibold leading-snug text-[var(--text-primary)]">
                          {meta.judul}
                        </span>
                      </Link>

                      <div className="flex shrink-0 flex-wrap items-center gap-2 font-mono text-xs">
                        <span className="text-[var(--text-secondary)]">{readCount}/4 tahap</span>
                        {attempts > 0 && (
                          <span className="rounded-md bg-[var(--bg-elevated)] px-1.5 py-0.5 text-[var(--text-secondary)]">
                            {attempts}×
                          </span>
                        )}
                        {bestScore !== null ? (
                          <span
                            className={`rounded-md px-2 py-0.5 font-semibold ${
                              bestScore >= 70
                                ? 'bg-[var(--accent-success)]/15 text-[var(--accent-success)]'
                                : 'bg-[var(--accent-amber)]/15 text-[var(--accent-amber)]'
                            }`}
                          >
                            {bestScore}%
                          </span>
                        ) : (
                          <span className="rounded-md bg-[var(--bg-elevated)] px-2 py-0.5 text-[var(--text-muted)]">
                            Belum kuis
                          </span>
                        )}
                      </div>
                    </div>

                    <div
                      className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[var(--bg-muted)]"
                      aria-hidden="true"
                    >
                      <motion.div
                        className={`h-full rounded-full ${barColorClass}`}
                        initial={reduced ? { width: `${barPct}%` } : { width: 0 }}
                        whileInView={{ width: `${barPct}%` }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={getTransition(reduced, {
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        })}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </section>

        {/* Profil & Reset Data */}
        <section className="clinical-card rounded-2xl p-5 sm:p-6">
          <h2 className="font-display text-lg font-bold text-[var(--text-primary)]">
            Profil &amp; Pengaturan Data
          </h2>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            Data tersimpan secara lokal di perangkat ini tanpa akun server.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-muted)]/50 p-4">
            <div className="flex items-center gap-3">
              <User className="h-5 w-5 text-[var(--accent-primary)]" aria-hidden="true" />
              <div>
                <span className="block text-xs text-[var(--text-secondary)]">Nama Panggilan</span>
                <span className="font-display text-sm font-bold text-[var(--text-primary)]">
                  {progress.nama || 'Belum diisi'}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={onOpenOnboarding}
              className="min-h-[44px] rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--border-strong)]"
            >
              {progress.nama ? 'Ubah Nama' : 'Isi Nama'}
            </button>
          </div>

          <div className="mt-4 rounded-xl border border-[var(--accent-danger)]/30 bg-[var(--accent-danger)]/5 p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-display text-sm font-bold text-[var(--text-primary)]">
                  Reset Data / Mulai dari Awal
                </h3>
                <p className="text-xs text-[var(--text-secondary)]">
                  Menghapus nama, skor modul, dan skor kasus di perangkat ini hingga 0%.
                </p>
              </div>
              {!confirmReset ? (
                <motion.button
                  type="button"
                  whileTap={reduced ? undefined : TAP_FEEDBACK}
                  onClick={() => setConfirmReset(true)}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[var(--accent-danger)]/50 px-4 text-xs font-semibold text-[var(--accent-danger)] hover:bg-[var(--accent-danger)]/10"
                >
                  <Trash2 className="h-4 w-4" aria-hidden="true" />
                  <span>Reset Data</span>
                </motion.button>
              ) : (
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setConfirmReset(false)}
                    className="min-h-[44px] rounded-xl border border-[var(--border-subtle)] px-4 text-xs font-medium text-[var(--text-primary)]"
                  >
                    Batal
                  </button>
                  <button
                    type="button"
                    onClick={handleConfirmReset}
                    className="min-h-[44px] rounded-xl bg-[var(--accent-danger)] px-4 text-xs font-semibold text-white"
                  >
                    Ya, Hapus Semua
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <Link
              to="/modul"
              className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-[var(--accent-primary)] hover:underline"
            >
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              <span>Kembali Belajar Modul →</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
