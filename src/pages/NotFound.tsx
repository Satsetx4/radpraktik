import { BookOpen, Crosshair, Home } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';
import { AppHeader } from '../components/AppHeader';
import { SeoHead } from '../components/SeoHead';
import { getTransition, TAP_FEEDBACK } from '../lib/motion';

export function NotFound() {
  const reduced = useReducedMotion();

  return (
    <div className="min-h-[100dvh] pb-24 md:pb-12">
      <SeoHead title="404 — Halaman Tidak Ditemukan | RadPraktik" />
      <AppHeader title="Halaman Tidak Ditemukan" backTo="/" />

      <main className="mx-auto flex max-w-xl flex-col items-center px-4 py-12 text-center">
        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={getTransition(reduced)}
          className="clinical-card w-full rounded-3xl p-8"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-muted)] text-[var(--accent-primary)]">
            <Crosshair className="h-8 w-8" aria-hidden="true" />
          </div>
          <span className="mt-4 inline-block font-mono text-xs font-semibold uppercase tracking-widest text-[var(--accent-amber)]">
            Error 404 • Di Luar Lapangan Kolimasi
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold text-[var(--text-primary)]">
            Halaman yang kamu cari tidak ada
          </h2>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            Mungkin alamat tautan berubah atau salah ketik. Ayo arahkan kembali berkas sinarnya ke
            beranda atau daftar modul.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <motion.div whileTap={reduced ? undefined : TAP_FEEDBACK}>
              <Link
                to="/"
                className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent-primary)] px-5 text-sm font-semibold text-[var(--on-accent)] sm:w-auto"
              >
                <Home className="h-4 w-4" aria-hidden="true" />
                <span>Kembali ke Beranda</span>
              </Link>
            </motion.div>
            <Link
              to="/modul"
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-5 text-sm font-medium text-[var(--text-primary)]"
            >
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              <span>Lihat Daftar Modul</span>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
