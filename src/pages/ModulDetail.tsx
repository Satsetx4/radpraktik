import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  Clock,
  PlayCircle,
  ShieldAlert,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { AppHeader } from '../components/AppHeader';
import { ImageLightbox } from '../components/ImageLightbox';
import { ProjectionCard } from '../components/ProjectionCard';
import { SeoHead } from '../components/SeoHead';
import { StageTabs } from '../components/StageTabs';
import { getAdjacentModuls, getModulBySlug, getModulMeta, getSoalByModul } from '../data';
import { REGION_MAP } from '../data/regions';
import type { SoalTipe, TahapId } from '../data/types';
import { getTransition, TAP_FEEDBACK } from '../lib/motion';
import { useProgress } from '../lib/progress';
import { scrollToTopInstant } from '../lib/scroll';

const SOAL_TIPE_META: { tipe: SoalTipe; label: string }[] = [
  { tipe: 'definisi', label: 'Definisi & Istilah' },
  { tipe: 'posisi', label: 'Posisi Pasien & Objek' },
  { tipe: 'sinar', label: 'Central Ray & Eksposi' },
  { tipe: 'kriteria', label: 'Kriteria Radiograf' },
  { tipe: 'proteksi', label: 'Proteksi Radiasi' },
  { tipe: 'prosedur', label: 'Alur Prosedur' },
];

function parseTahap(raw: string | null): TahapId {
  if (raw === 'proyeksi' || raw === 'proteksi' || raw === 'latihan') return raw;
  return 'pra';
}

export function ModulDetail() {
  const { slug = '' } = useParams<{ slug: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTahap = parseTahap(searchParams.get('tahap'));
  const reduced = useReducedMotion();

  const modul = getModulBySlug(slug);
  const meta = getModulMeta(slug);
  const soalList = getSoalByModul(slug);
  const { prev, next } = getAdjacentModuls(slug);
  const { progress, markStageRead } = useProgress();

  const [lightbox, setLightbox] = useState<{
    images: { src: string; caption: string }[];
    index: number;
  } | null>(null);

  const soalDistribution = useMemo(() => {
    const counts: Record<SoalTipe, number> = {
      definisi: 0,
      posisi: 0,
      sinar: 0,
      kriteria: 0,
      proteksi: 0,
      prosedur: 0,
    };
    for (const s of soalList) {
      counts[s.tipe] = (counts[s.tipe] ?? 0) + 1;
    }
    return SOAL_TIPE_META.map((item) => ({
      ...item,
      count: counts[item.tipe],
    })).filter((item) => item.count > 0);
  }, [soalList]);

  useEffect(() => {
    if (modul && activeTahap !== 'latihan') {
      markStageRead(modul.slug, activeTahap);
    }
  }, [modul, activeTahap, markStageRead]);

  const handleStageChange = (tahap: TahapId) => {
    setSearchParams({ tahap }, { replace: true });
    scrollToTopInstant();
  };

  if (!meta && !modul) {
    return (
      <div className="min-h-[100dvh] pb-24 md:pb-12">
        <SeoHead title="Modul Tidak Ditemukan — RadPraktik" />
        <AppHeader title="Modul Tidak Ditemukan" backTo="/modul" />
        <main className="mx-auto max-w-2xl px-4 py-12 text-center">
          <div className="clinical-card rounded-2xl p-8">
            <BookOpen className="mx-auto h-10 w-10 text-[var(--text-muted)]" aria-hidden="true" />
            <h2 className="mt-4 font-display text-xl font-bold text-[var(--text-primary)]">
              Modul tidak ditemukan
            </h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Pastikan alamat modul benar atau pilih langsung dari daftar 24 modul.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/modul"
                className="inline-flex min-h-[44px] items-center rounded-xl bg-[var(--accent-primary)] px-5 text-sm font-semibold text-[var(--on-accent)]"
              >
                Lihat Daftar Modul
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

  const displayTitle = modul?.judul ?? meta?.judul ?? slug;
  const displayKode = modul?.kode ?? meta?.kode ?? '';
  const regionInfo = REGION_MAP[(modul?.region ?? meta?.region ?? 'dasar')];

  const breadcrumbs = [
    { label: 'Beranda', to: '/' },
    { label: 'Modul', to: '/modul' },
    { label: regionInfo.label },
    { label: displayTitle },
  ];

  if (!modul) {
    return (
      <div className="min-h-[100dvh] pb-24 md:pb-12">
        <SeoHead title={`${displayTitle} — RadPraktik`} />
        <AppHeader
          title={displayTitle}
          subtitle={displayKode}
          backTo="/modul"
          breadcrumbs={breadcrumbs}
        />
        <main className="mx-auto max-w-3xl space-y-6 px-4 py-8 sm:px-6">
          <div className="clinical-card rounded-2xl p-6 text-center sm:p-8">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--accent-amber)]/30 bg-[var(--accent-amber)]/10 text-[var(--accent-amber)]">
              <Clock className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="mt-4 font-display text-xl font-bold text-[var(--text-primary)]">
              Materi Modul {displayKode} Sedang Disiapkan
            </h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Sumber PDF ({meta?.sourcePdf}) sudah terdaftar di sistem. Konten proyeksi, gambar,
              dan 10 soal latihan untuk <strong>{displayTitle}</strong> akan segera terisi.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/modul"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[var(--accent-primary)] px-5 text-sm font-semibold text-[var(--on-accent)]"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                <span>Kembali ke Daftar Modul</span>
              </Link>
              <Link
                to="/"
                className="inline-flex min-h-[44px] items-center rounded-xl border border-[var(--border-subtle)] px-5 text-sm font-medium text-[var(--text-primary)]"
              >
                Ke Beranda
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            {prev ? (
              <Link
                to={`/modul/${prev.slug}`}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 text-sm text-[var(--text-primary)] hover:border-[var(--border-strong)]"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                <span>{prev.judul}</span>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link
                to={`/modul/${next.slug}`}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 text-sm text-[var(--text-primary)] hover:border-[var(--border-strong)]"
              >
                <span>{next.judul}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            )}
          </div>
        </main>
      </div>
    );
  }

  const modProgress = progress.modul[modul.slug];
  const hasResumeQuiz = progress.kuisAktif?.modulSlug === modul.slug;

  return (
    <div className="min-h-[100dvh] pb-24 md:pb-12">
      <SeoHead
        title={`${modul.judul} (${modul.kode}) — RadPraktik`}
        description={modul.kompetensi}
      />
      <AppHeader
        title={modul.judul}
        subtitle={modul.kode}
        backTo="/modul"
        breadcrumbs={breadcrumbs}
      />

      <main className="mx-auto max-w-4xl space-y-5 px-4 py-6 sm:px-6">
        {/* Kompetensi & Sorotan */}
        <section className="clinical-card rounded-2xl p-4 sm:p-5">
          <span className="font-mono text-xs font-medium text-[var(--accent-primary)]">
            KOMPETENSI MODUL
          </span>
          <p className="mt-1 text-sm leading-relaxed text-[var(--text-primary)] sm:text-base">
            {modul.kompetensi}
          </p>
          {modul.sorotan.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {modul.sorotan.map((item, i) => (
                <span
                  key={i}
                  className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-muted)] px-2.5 py-1 text-xs text-[var(--text-secondary)]"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </section>

        {/* 4 Stage Tabs */}
        <StageTabs
          active={activeTahap}
          completed={modProgress?.dibaca ?? []}
          onChange={handleStageChange}
        />

        {/* Tab Panel Content */}
        {activeTahap === 'pra' && (
          <motion.section
            key="pra"
            initial={reduced ? undefined : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={getTransition(reduced)}
            className="space-y-4"
          >
            {modul.praPemeriksaan.map((group, idx) => (
              <div key={idx} className="clinical-card rounded-2xl p-4 sm:p-5">
                <h2 className="flex items-center gap-2 font-display text-base font-bold text-[var(--text-primary)]">
                  <ClipboardCheck className="h-4 w-4 text-[var(--accent-primary)]" aria-hidden="true" />
                  <span>{group.judul}</span>
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-[var(--text-secondary)]">
                  {group.poin.map((p, i) => (
                    <li key={i} className="flex gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-secondary)]" />
                      <span className="text-[var(--text-primary)]">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="flex justify-end">
              <motion.button
                type="button"
                whileTap={reduced ? undefined : TAP_FEEDBACK}
                onClick={() => handleStageChange('proyeksi')}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[var(--accent-primary)] px-5 text-sm font-semibold text-[var(--on-accent)]"
              >
                <span>Lanjut: Proyeksi &amp; Teknik</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </motion.button>
            </div>
          </motion.section>
        )}

        {activeTahap === 'proyeksi' && (
          <motion.section
            key="proyeksi"
            initial={reduced ? undefined : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={getTransition(reduced)}
            className="space-y-4"
          >
            {modul.proyeksi.length === 0 ? (
              <div className="clinical-card rounded-2xl p-6 text-center text-sm text-[var(--text-secondary)]">
                Modul orientasi berisi dasar-dasar proyeksi dan proteksi tanpa prosedur per proyeksi.
              </div>
            ) : (
              modul.proyeksi.map((proy, idx) => (
                <ProjectionCard
                  key={proy.id}
                  proyeksi={proy}
                  index={idx}
                  onOpenImage={(images, index) => setLightbox({ images, index })}
                />
              ))
            )}
            <div className="flex justify-end">
              <motion.button
                type="button"
                whileTap={reduced ? undefined : TAP_FEEDBACK}
                onClick={() => handleStageChange('proteksi')}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[var(--accent-primary)] px-5 text-sm font-semibold text-[var(--on-accent)]"
              >
                <span>Lanjut: Proteksi &amp; Evaluasi</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </motion.button>
            </div>
          </motion.section>
        )}

        {activeTahap === 'proteksi' && (
          <motion.section
            key="proteksi"
            initial={reduced ? undefined : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={getTransition(reduced)}
            className="space-y-4"
          >
            <div className="rounded-2xl border border-[var(--accent-amber)]/40 bg-[var(--accent-amber)]/10 p-4 sm:p-5">
              <h2 className="flex items-center gap-2 font-display text-base font-bold text-[var(--accent-amber)]">
                <ShieldAlert className="h-5 w-5" aria-hidden="true" />
                <span>Proteksi Radiasi</span>
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-[var(--text-primary)]">
                {modul.proteksi.map((item, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-amber)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {modul.pascaPemeriksaan.length > 0 && (
              <div className="clinical-card rounded-2xl p-4 sm:p-5">
                <h2 className="font-display text-base font-bold text-[var(--text-primary)]">
                  Pasca Pemeriksaan
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-[var(--text-primary)]">
                  {modul.pascaPemeriksaan.map((item, i) => (
                    <li key={i} className="flex gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-secondary)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {modul.evaluasi.length > 0 && (
              <div className="clinical-card rounded-2xl p-4 sm:p-5">
                <h2 className="font-display text-base font-bold text-[var(--text-primary)]">
                  Evaluasi / Tugas Praktikum
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-[var(--text-secondary)]">
                  {modul.evaluasi.map((item, i) => (
                    <li key={i} className="flex gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--text-secondary)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex justify-end">
              <Link
                to={`/modul/${modul.slug}/latihan`}
                className="inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-[var(--accent-primary)] px-5 text-sm font-semibold text-[var(--on-accent)]"
              >
                <PlayCircle className="h-4 w-4" aria-hidden="true" />
                <span>Mulai Latihan {soalList.length || 10} Soal</span>
              </Link>
            </div>
          </motion.section>
        )}

        {activeTahap === 'latihan' && (
          <motion.section
            key="latihan"
            initial={reduced ? undefined : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={getTransition(reduced)}
            className="clinical-card rounded-2xl p-6 text-center"
          >
            <h2 className="font-display text-xl font-bold text-[var(--text-primary)]">
              Latihan Soal {modul.judul}
            </h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              {soalList.length > 0
                ? `${soalList.length} soal pilihan ganda. Urutan soal dan opsi diacak setiap kali kamu mengulang, lengkap dengan pembahasan langsung.`
                : 'Soal latihan untuk modul ini sedang disiapkan.'}
            </p>

            {modProgress && modProgress.skorTerbaik !== null && (
              <div className="mx-auto mt-5 max-w-md space-y-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-muted)]/70 p-4 text-left">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-lg bg-[var(--bg-elevated)] px-2.5 py-2">
                    <span className="block text-[11px] text-[var(--text-secondary)]">Skor Terbaik</span>
                    <strong
                      className={`mt-0.5 block font-mono text-base ${
                        modProgress.skorTerbaik >= 70
                          ? 'text-[var(--accent-success)]'
                          : 'text-[var(--accent-amber)]'
                      }`}
                    >
                      {modProgress.skorTerbaik}%
                    </strong>
                  </div>
                  <div className="rounded-lg bg-[var(--bg-elevated)] px-2.5 py-2">
                    <span className="block text-[11px] text-[var(--text-secondary)]">Skor Terakhir</span>
                    <strong className="mt-0.5 block font-mono text-base text-[var(--text-primary)]">
                      {modProgress.skorTerakhir !== null ? `${modProgress.skorTerakhir}%` : '—'}
                    </strong>
                  </div>
                  <div className="rounded-lg bg-[var(--bg-elevated)] px-2.5 py-2">
                    <span className="block text-[11px] text-[var(--text-secondary)]">Percobaan</span>
                    <strong className="mt-0.5 block font-mono text-base text-[var(--text-primary)]">
                      {modProgress.percobaan}×
                    </strong>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-[var(--text-secondary)]">
                    <span>Capaian Terbaik</span>
                    <span className="font-mono">{modProgress.skorTerbaik}%</span>
                  </div>
                  <div
                    className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--bg-elevated)]"
                    aria-hidden="true"
                  >
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        modProgress.skorTerbaik >= 70
                          ? 'bg-[var(--accent-success)]'
                          : 'bg-[var(--accent-amber)]'
                      }`}
                      style={{ width: `${Math.min(100, modProgress.skorTerbaik)}%` }}
                    />
                  </div>
                </div>
              </div>
            )}

            {soalDistribution.length > 0 && (
              <div className="mx-auto mt-5 max-w-xl text-left">
                <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                  Kisi-kisi {soalList.length} Soal Modul
                </h3>
                <div className="mt-2.5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {soalDistribution.map((item) => (
                    <div
                      key={item.tipe}
                      className="flex items-center justify-between gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-muted)]/50 px-3 py-2 text-xs"
                    >
                      <span className="truncate font-medium text-[var(--text-primary)]">
                        {item.label}
                      </span>
                      <span className="shrink-0 rounded-md bg-[var(--bg-elevated)] px-1.5 py-0.5 font-mono text-[11px] font-semibold text-[var(--accent-primary)]">
                        {item.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {soalList.length > 0 ? (
                <Link
                  to={`/modul/${modul.slug}/latihan`}
                  className="inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-[var(--accent-primary)] px-6 text-sm font-semibold text-[var(--on-accent)]"
                >
                  <PlayCircle className="h-4 w-4" aria-hidden="true" />
                  <span>{hasResumeQuiz ? 'Lanjutkan Latihan' : 'Mulai Latihan Sekarang'}</span>
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => handleStageChange('pra')}
                  className="inline-flex min-h-[44px] items-center rounded-xl border border-[var(--border-subtle)] px-5 text-sm font-medium text-[var(--text-primary)]"
                >
                  Kembali ke Persiapan
                </button>
              )}
            </div>
          </motion.section>
        )}

        {/* Adjacent Module Links */}
        <nav
          aria-label="Navigasi antar modul"
          className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-subtle)] pt-4"
        >
          {prev ? (
            <Link
              to={`/modul/${prev.slug}`}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 text-sm text-[var(--text-primary)] hover:border-[var(--border-strong)]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>{prev.judul}</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              to={`/modul/${next.slug}`}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 text-sm text-[var(--text-primary)] hover:border-[var(--border-strong)]"
            >
              <span>{next.judul}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </nav>
      </main>

      <ImageLightbox
        images={lightbox?.images ?? []}
        initialIndex={lightbox?.index ?? 0}
        open={lightbox !== null}
        onClose={() => setLightbox(null)}
      />
    </div>
  );
}
