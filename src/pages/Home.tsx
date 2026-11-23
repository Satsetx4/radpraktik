import { ArrowRight, BookOpen, Compass, Info, Play, Sparkles, Stethoscope, User } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';
import { AppHeader } from '../components/AppHeader';
import { RegionBar } from '../components/RegionBar';
import { ScoreRing } from '../components/ScoreRing';
import { SeoHead } from '../components/SeoHead';
import {
  ALL_KASUS,
  ALL_MODULS,
  MODUL_META,
  REGIONS,
  getModulMeta,
  getModulsByRegion,
} from '../data';
import { getTransition, HOVER_ELEVATE, TAP_FEEDBACK } from '../lib/motion';
import { useProgress } from '../lib/progress';
import { trackEvent } from '../lib/track';

interface HomeProps {
  onOpenOnboarding: () => void;
}

export function Home({ onOpenOnboarding }: HomeProps) {
  const { progress } = useProgress();
  const reduced = useReducedMotion();

  const lastMeta = progress.modulTerakhir ? getModulMeta(progress.modulTerakhir) : undefined;

  const completedModulesCount = Object.values(progress.modul).filter(
    (m) => m.skorTerbaik !== null || m.dibaca.length >= 3,
  ).length;

  const scores = Object.values(progress.modul)
    .map((m) => m.skorTerbaik)
    .filter((s): s is number => s !== null);
  const avgScore =
    scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : null;

  const kasusSolvedCount = Object.keys(progress.kasus).length;
  const featuredKasus = ALL_KASUS.length > 0 ? ALL_KASUS[0] : null;

  return (
    <div className="min-h-[100dvh] pb-24 md:pb-12">
      <SeoHead
        title="RadPraktik — Belajar Teknik Radiografi 1 Interaktif"
        description="Materi 24 modul praktikum radiografi, 240 soal latihan acak, dan 30 studi kasus klinis interaktif."
      />
      <AppHeader title="RadPraktik" subtitle="Teknik Radiografi 1" />

      <main className="mx-auto max-w-5xl space-y-6 px-4 py-6 sm:px-6">
        {/* Asymmetric Hero Section */}
        <motion.section
          initial={reduced ? undefined : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={getTransition(reduced)}
          className="clinical-card clinical-grid-bg relative overflow-hidden rounded-3xl p-5 sm:p-8"
        >
          <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-3 py-1 text-xs font-medium text-[var(--accent-primary)]">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Laboratorium Radiografi 1 • 24 Modul</span>
              </div>

              <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
                {progress.nama ? `Halo, ${progress.nama}` : 'Siap Praktikum Radiografi?'}
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                Pelajari posisi pasien, posisi objek, arah central ray, hingga proteksi radiasi dari
                24 modul praktikum, lalu uji pemahamanmu lewat latihan soal dan simulasi kasus klinis.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {lastMeta ? (
                  <motion.div whileTap={reduced ? undefined : TAP_FEEDBACK}>
                    <Link
                      to={`/modul/${lastMeta.slug}${
                        progress.tahapTerakhir ? `?tahap=${progress.tahapTerakhir}` : ''
                      }`}
                      onClick={() => trackEvent('cta_click', { target: 'lanjut_modul' })}
                      className="inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-[var(--accent-primary)] px-5 text-sm font-semibold text-slate-950 transition-opacity hover:opacity-95"
                    >
                      <Play className="h-4 w-4" aria-hidden="true" />
                      <span>Lanjutkan: {lastMeta.judul}</span>
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div whileTap={reduced ? undefined : TAP_FEEDBACK}>
                    <Link
                      to="/modul"
                      onClick={() => trackEvent('cta_click', { target: 'jelajahi_modul' })}
                      className="inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-[var(--accent-primary)] px-5 text-sm font-semibold text-slate-950 transition-opacity hover:opacity-95"
                    >
                      <BookOpen className="h-4 w-4" aria-hidden="true" />
                      <span>Jelajahi 24 Modul</span>
                    </Link>
                  </motion.div>
                )}

                <motion.div whileTap={reduced ? undefined : TAP_FEEDBACK}>
                  <Link
                    to="/kasus"
                    onClick={() => trackEvent('cta_click', { target: 'buka_kasus_home' })}
                    className="inline-flex min-h-[46px] items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)]"
                  >
                    <Stethoscope className="h-4 w-4 text-[var(--accent-secondary)]" aria-hidden="true" />
                    <span>Simulasi Kasus</span>
                  </Link>
                </motion.div>

                <button
                  type="button"
                  onClick={onOpenOnboarding}
                  className="inline-flex min-h-[46px] items-center gap-2 rounded-xl border border-[var(--border-subtle)] px-4 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-muted)] hover:text-[var(--text-primary)]"
                >
                  <User className="h-4 w-4" aria-hidden="true" />
                  <span>{progress.nama ? 'Ganti Nama' : 'Isi Nama Panggilan'}</span>
                </button>
              </div>
            </div>

            {/* Negatoscope Telemetry Panel */}
            <div className="negatoscope-frame flex items-center justify-between gap-4 rounded-2xl p-5">
              <ScoreRing score={avgScore} size={104} label="Rata-rata Skor" />
              <div className="flex-1 space-y-2.5 text-sm">
                <div>
                  <span className="block font-mono text-xs text-slate-400">Modul Selesai</span>
                  <span className="font-display text-lg font-bold text-slate-100">
                    {completedModulesCount} / {MODUL_META.length}
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-xs text-slate-400">Kasus Terjawab</span>
                  <span className="font-display text-lg font-bold text-slate-100">
                    {kasusSolvedCount} / {ALL_KASUS.length || 30}
                  </span>
                </div>
                <div className="pt-1">
                  <span className="inline-block rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 font-mono text-[11px] text-cyan-300">
                    {ALL_MODULS.length}/{MODUL_META.length} modul siap
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Two Asymmetric Action Panels (Kasus + Tentang) */}
        <section className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            whileHover={reduced ? undefined : HOVER_ELEVATE}
            transition={getTransition(reduced)}
            className="clinical-card flex flex-col justify-between rounded-2xl p-5"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-[var(--accent-secondary)]">
                  <Stethoscope className="h-4 w-4" aria-hidden="true" />
                  KASUS KLINIS ACAK
                </span>
                <span className="font-mono text-xs text-[var(--text-secondary)]">
                  2 Tahap Tebakan
                </span>
              </div>
              {featuredKasus ? (
                <>
                  <h3 className="mt-2 font-display text-lg font-bold text-[var(--text-primary)]">
                    Latih insting klinis sebelum masuk ruang X-ray
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-sm text-[var(--text-secondary)]">
                    {featuredKasus.skenario}
                  </p>
                </>
              ) : (
                <>
                  <h3 className="mt-2 font-display text-lg font-bold text-[var(--text-primary)]">
                    Simulasi Kasus Klinis Bertahap
                  </h3>
                  <p className="mt-1.5 text-sm text-[var(--text-secondary)]">
                    Daftar 30 kasus klinis sedang disusun dari modul praktikum. Kamu tetap bisa
                    membuka halaman kasus atau menjelajahi peta 24 modul terlebih dahulu.
                  </p>
                </>
              )}
            </div>
            <div className="mt-4">
              <Link
                to="/kasus"
                className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-[var(--accent-primary)] hover:underline"
              >
                <span>Buka Halaman Kasus</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            whileHover={reduced ? undefined : HOVER_ELEVATE}
            transition={getTransition(reduced)}
            className="clinical-card flex flex-col justify-between rounded-2xl p-5"
          >
            <div>
              <span className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-[var(--accent-primary)]">
                <Compass className="h-4 w-4" aria-hidden="true" />
                PANDUAN &amp; SUMBER
              </span>
              <h3 className="mt-2 font-display text-lg font-bold text-[var(--text-primary)]">
                JTRR Poltekkes Kemenkes Semarang
              </h3>
              <p className="mt-1.5 text-sm text-[var(--text-secondary)]">
                Seluruh materi, kriteria radiograf, dan faktor eksposi merujuk langsung pada 24 PDF
                Pedoman Praktek Lab Teknik Radiografi 1.
              </p>
            </div>
            <div className="mt-4">
              <Link
                to="/tentang"
                className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-[var(--accent-primary)] hover:underline"
              >
                <Info className="h-4 w-4" aria-hidden="true" />
                <span>Baca Tentang &amp; Cara Pakai</span>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Region Progress Section */}
        <section className="clinical-card rounded-2xl p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
                Progres per Region Anatomi
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Selesaikan minimal 3 tahap materi atau latihan soal untuk menandai modul selesai.
              </p>
            </div>
            <Link
              to="/progres"
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl border border-[var(--border-subtle)] px-3.5 text-xs font-medium text-[var(--text-primary)] hover:border-[var(--border-strong)]"
            >
              <span>Detail Progres</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {REGIONS.map((region) => {
              const regionModuls = getModulsByRegion(region.id);
              const done = regionModuls.filter((m) => {
                const p = progress.modul[m.slug];
                return p && (p.skorTerbaik !== null || p.dibaca.length >= 3);
              }).length;
              return (
                <RegionBar
                  key={region.id}
                  label={region.label}
                  completed={done}
                  total={regionModuls.length}
                />
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-subtle)] pt-5 text-xs text-[var(--text-secondary)]">
          <p>
            Sumber materi: Modul Praktek Lab Teknik Radiografi 1 — JTRR Poltekkes Kemenkes Semarang.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/tentang" className="hover:text-[var(--accent-primary)] hover:underline">
              Tentang
            </Link>
            <Link to="/progres" className="hover:text-[var(--accent-primary)] hover:underline">
              Reset Data
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
