import { BookOpen, CheckCircle2, Clock, Search } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppHeader } from '../components/AppHeader';
import { SeoHead } from '../components/SeoHead';
import { ALL_MODULS, MODUL_BY_SLUG, MODUL_META, REGIONS } from '../data';
import type { RegionId } from '../data/types';
import { getTransition, HOVER_ELEVATE, TAP_FEEDBACK } from '../lib/motion';
import { useProgress } from '../lib/progress';

export function ModulList() {
  const { progress } = useProgress();
  const reduced = useReducedMotion();
  const [query, setQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<'all' | RegionId>('all');

  const filteredRegions = useMemo(() => {
    const q = query.trim().toLowerCase();
    return REGIONS.filter((r) => selectedRegion === 'all' || r.id === selectedRegion)
      .map((region) => {
        const items = MODUL_META.filter((m) => {
          if (m.region !== region.id) return false;
          if (!q) return true;
          return (
            m.judul.toLowerCase().includes(q) ||
            m.kode.toLowerCase().includes(q) ||
            m.slug.toLowerCase().includes(q)
          );
        });
        return { region, items };
      })
      .filter((group) => group.items.length > 0);
  }, [query, selectedRegion]);

  return (
    <div className="min-h-[100dvh] pb-24 md:pb-12">
      <SeoHead
        title="Daftar Modul — RadPraktik"
        description="Daftar lengkap 24 modul praktikum Teknik Radiografi 1 yang dikelompokkan per region anatomi."
      />
      <AppHeader
        title="Daftar Modul"
        subtitle={`${ALL_MODULS.length}/24 Aktif`}
        backTo="/"
        breadcrumbs={[{ label: 'Beranda', to: '/' }, { label: 'Modul' }]}
      />

      <main className="mx-auto max-w-5xl space-y-6 px-4 py-6 sm:px-6">
        {/* Search & Region Filter */}
        <section className="space-y-3">
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari modul (contoh: manus, cervical, 301-2A)..."
              aria-label="Cari modul radiografi"
              className="min-h-[46px] w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] pl-10 pr-4 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter region">
            <motion.button
              type="button"
              whileTap={reduced ? undefined : TAP_FEEDBACK}
              onClick={() => setSelectedRegion('all')}
              className={`min-h-[44px] rounded-xl border px-3.5 text-xs font-medium transition-colors ${
                selectedRegion === 'all'
                  ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)]/15 text-[var(--accent-primary)]'
                  : 'border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Semua ({MODUL_META.length})
            </motion.button>
            {REGIONS.map((region) => (
              <motion.button
                key={region.id}
                type="button"
                whileTap={reduced ? undefined : TAP_FEEDBACK}
                onClick={() => setSelectedRegion(region.id)}
                className={`min-h-[44px] rounded-xl border px-3.5 text-xs font-medium transition-colors ${
                  selectedRegion === region.id
                    ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)]/15 text-[var(--accent-primary)]'
                    : 'border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {region.label}
              </motion.button>
            ))}
          </div>
        </section>

        {ALL_MODULS.length === 0 && (
          <div className="clinical-card rounded-2xl border-dashed p-5">
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent-amber)]" aria-hidden="true" />
              <div>
                <h2 className="font-display text-sm font-bold text-[var(--text-primary)]">
                  Kerangka 24 Modul Siap
                </h2>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  Konten teks dan soal untuk setiap modul sedang disusun bertahap dari 24 PDF sumber.
                  Kamu tetap dapat melihat peta seluruh modul di bawah ini.
                </p>
              </div>
            </div>
          </div>
        )}

        {filteredRegions.length === 0 ? (
          <div className="clinical-card rounded-2xl p-8 text-center">
            <BookOpen className="mx-auto h-8 w-8 text-[var(--text-muted)]" aria-hidden="true" />
            <h2 className="mt-3 font-display text-lg font-bold text-[var(--text-primary)]">
              Modul tidak ditemukan
            </h2>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              Coba hapus kata kunci pencarian atau pilih filter &ldquo;Semua&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setSelectedRegion('all');
              }}
              className="mt-4 inline-flex min-h-[44px] items-center rounded-xl bg-[var(--accent-primary)] px-4 text-sm font-semibold text-slate-950"
            >
              Tampilkan Semua Modul
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredRegions.map(({ region, items }) => (
              <section key={region.id} className="space-y-3">
                <div className="flex items-baseline justify-between gap-2">
                  <div>
                    <h2 className="font-display text-lg font-bold text-[var(--text-primary)]">
                      {region.label}
                    </h2>
                    <p className="text-xs text-[var(--text-secondary)]">{region.deskripsi}</p>
                  </div>
                  <span className="font-mono text-xs text-[var(--text-secondary)]">
                    {items.length} modul
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((meta) => {
                    const loaded = MODUL_BY_SLUG[meta.slug];
                    const modProg = progress.modul[meta.slug];
                    const readCount = modProg?.dibaca.length ?? 0;
                    const bestScore = modProg?.skorTerbaik ?? null;

                    return (
                      <motion.div
                        key={meta.slug}
                        whileHover={reduced ? undefined : HOVER_ELEVATE}
                        transition={getTransition(reduced)}
                      >
                        <Link
                          to={`/modul/${meta.slug}`}
                          className="clinical-card flex h-full flex-col justify-between rounded-2xl p-4 transition-colors hover:border-[var(--border-strong)]"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2">
                              <span className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-muted)] px-2 py-0.5 font-mono text-xs text-[var(--accent-primary)]">
                                {meta.kode}
                              </span>
                              {loaded ? (
                                bestScore !== null ? (
                                  <span className="inline-flex items-center gap-1 rounded-md bg-[var(--accent-success)]/15 px-2 py-0.5 font-mono text-xs font-medium text-[var(--accent-success)]">
                                    <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
                                    {bestScore}%
                                  </span>
                                ) : (
                                  <span className="font-mono text-xs text-[var(--accent-secondary)]">
                                    {loaded.proyeksi.length} proyeksi
                                  </span>
                                )
                              ) : (
                                <span className="rounded-md bg-[var(--bg-muted)] px-2 py-0.5 font-mono text-[11px] text-[var(--text-muted)]">
                                  Disiapkan
                                </span>
                              )}
                            </div>

                            <h3 className="mt-2.5 font-display text-base font-bold text-[var(--text-primary)]">
                              {meta.judul}
                            </h3>
                          </div>

                          <div className="mt-4 flex items-center justify-between border-t border-[var(--border-subtle)] pt-2.5 text-xs text-[var(--text-secondary)]">
                            <span>{readCount}/4 tahap dibaca</span>
                            <span className="font-medium text-[var(--accent-primary)]">Buka →</span>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
