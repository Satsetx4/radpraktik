import { ArrowLeft, Crosshair, LayoutGrid } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { Breadcrumbs, type BreadcrumbItem } from './Breadcrumbs';
import { ThemeToggle } from './ThemeToggle';
import { getTransition, TAP_FEEDBACK } from '../lib/motion';

interface AppHeaderProps {
  title: string;
  subtitle?: string;
  backTo?: string;
  backLabel?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export function AppHeader({
  title,
  subtitle,
  backTo,
  backLabel = 'Kembali',
  breadcrumbs,
}: AppHeaderProps) {
  const navigate = useNavigate();
  const reduced = useReducedMotion();

  return (
    <header className="clinical-surface sticky top-0 z-30 border-b border-[var(--border-subtle)]">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          {backTo ? (
            <motion.button
              type="button"
              onClick={() => navigate(backTo)}
              whileTap={reduced ? undefined : TAP_FEEDBACK}
              transition={getTransition(reduced)}
              aria-label={backLabel}
              className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)]"
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            </motion.button>
          ) : (
            <Link
              to="/"
              aria-label="Beranda RadPraktik"
              className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] text-[var(--accent-primary)] md:hidden"
            >
              <Crosshair className="h-5 w-5" aria-hidden="true" />
            </Link>
          )}

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="truncate font-display text-base font-bold tracking-tight text-[var(--text-primary)] sm:text-lg">
                {title}
              </h1>
              {subtitle && (
                <span className="hidden shrink-0 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-muted)] px-2 py-0.5 font-mono text-xs text-[var(--accent-primary)] sm:inline-block">
                  {subtitle}
                </span>
              )}
            </div>
            {breadcrumbs && breadcrumbs.length > 0 && (
              <div className="mt-0.5 hidden sm:block">
                <Breadcrumbs items={breadcrumbs} />
              </div>
            )}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="https://rindia.my.id"
            title="Kembali ke Meja Tugas Rindia (rindia.my.id)"
            aria-label="Kembali ke Meja Tugas Rindia"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-1.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-3 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--accent-primary)]"
          >
            <LayoutGrid className="h-4 w-4 text-[var(--accent-primary)]" aria-hidden="true" />
            <span className="hidden sm:inline">Meja Rindia</span>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
