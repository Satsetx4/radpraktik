import { Crosshair, Expand, ImageOff, Maximize2, Radio, Ruler } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';
import type { Proyeksi } from '../data/types';
import { getTransition, HOVER_ELEVATE } from '../lib/motion';

interface ProjectionCardProps {
  proyeksi: Proyeksi;
  index: number;
  onOpenImage: (src: string, caption: string) => void;
}

export function ProjectionCard({ proyeksi, index, onOpenImage }: ProjectionCardProps) {
  const reduced = useReducedMotion();
  const [failedImgs, setFailedImgs] = useState<Record<string, boolean>>({});

  return (
    <motion.article
      whileHover={reduced ? undefined : HOVER_ELEVATE}
      transition={getTransition(reduced)}
      className="clinical-card overflow-hidden rounded-2xl p-4 sm:p-6"
    >
      <div className="flex flex-wrap items-start justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent-primary)]">
            Proyeksi {index + 1}
          </span>
          <h3 className="mt-0.5 font-display text-lg font-bold text-[var(--text-primary)] sm:text-xl">
            {proyeksi.nama}
          </h3>
        </div>
        <span className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-muted)] px-2.5 py-1 font-mono text-xs text-[var(--text-secondary)]">
          {proyeksi.sumber}
        </span>
      </div>

      {/* Spec Chips */}
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-muted)] px-2.5 py-1 font-mono text-xs text-[var(--text-primary)]">
          <Radio className="h-3.5 w-3.5 text-[var(--accent-primary)]" aria-hidden="true" />
          CR: {proyeksi.centralRay}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-muted)] px-2.5 py-1 font-mono text-xs text-[var(--text-primary)]">
          <Crosshair className="h-3.5 w-3.5 text-[var(--accent-secondary)]" aria-hidden="true" />
          CP: {proyeksi.centralPoint}
        </span>
        {proyeksi.ffd && (
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-muted)] px-2.5 py-1 font-mono text-xs text-[var(--text-primary)]">
            <Ruler className="h-3.5 w-3.5 text-[var(--accent-primary)]" aria-hidden="true" />
            FFD {proyeksi.ffd}
          </span>
        )}
        {proyeksi.kaset && (
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-muted)] px-2.5 py-1 font-mono text-xs text-[var(--text-secondary)]">
            <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
            Kaset {proyeksi.kaset}
          </span>
        )}
        {proyeksi.faktorEksposi && (
          <span className="inline-flex items-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-muted)] px-2.5 py-1 font-mono text-xs text-[var(--text-secondary)]">
            {proyeksi.faktorEksposi}
          </span>
        )}
      </div>

      {/* Negatoscope Image Frame */}
      {proyeksi.gambar.length > 0 && (
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {proyeksi.gambar.map((img) => {
            const isFailed = failedImgs[img.src];
            return (
              <div
                key={img.src}
                className="negatoscope-frame group relative overflow-hidden rounded-xl p-2"
              >
                {isFailed ? (
                  <div className="flex h-44 flex-col items-center justify-center gap-2 text-slate-400">
                    <ImageOff className="h-6 w-6" aria-hidden="true" />
                    <span className="text-xs">Gambar belum tersedia</span>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => onOpenImage(img.src, img.caption)}
                    className="relative block w-full overflow-hidden rounded-lg text-left focus-visible:outline-2 focus-visible:outline-[var(--accent-primary)]"
                    aria-label={`Perbesar gambar ${img.caption}`}
                  >
                    <img
                      src={img.src}
                      alt={img.caption}
                      loading="lazy"
                      onError={() =>
                        setFailedImgs((prev) => ({ ...prev, [img.src]: true }))
                      }
                      className="h-48 w-full object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                    />
                    <span className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-black/60 text-white backdrop-blur-sm">
                      <Expand className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </button>
                )}
                <p className="mt-2 truncate px-1 text-xs text-slate-300">
                  {img.caption}
                </p>
              </div>
            );
          })}
        </div>
      )}

      {/* PP & PO Details */}
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-muted)]/60 p-3.5">
          <h4 className="font-display text-sm font-semibold text-[var(--accent-primary)]">
            Posisi Pasien (PP)
          </h4>
          <ul className="mt-2 space-y-1.5 text-sm text-[var(--text-primary)]">
            {proyeksi.posisiPasien.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-primary)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-muted)]/60 p-3.5">
          <h4 className="font-display text-sm font-semibold text-[var(--accent-secondary)]">
            Posisi Objek (PO)
          </h4>
          <ul className="mt-2 space-y-1.5 text-sm text-[var(--text-primary)]">
            {proyeksi.posisiObjek.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-secondary)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Kriteria Radiograf */}
      {proyeksi.kriteria.length > 0 && (
        <div className="mt-4 rounded-xl border border-[var(--border-subtle)] p-3.5">
          <h4 className="font-display text-sm font-semibold text-[var(--text-primary)]">
            Kriteria Radiograf
          </h4>
          <ul className="mt-2 space-y-1.5 text-sm text-[var(--text-secondary)]">
            {proyeksi.kriteria.map((k, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--text-secondary)]" />
                <span>{k}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.article>
  );
}
