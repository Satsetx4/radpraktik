import { Moon, Sun } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useProgress } from '../lib/progress';
import { getTransition, TAP_FEEDBACK } from '../lib/motion';

export function ThemeToggle() {
  const { progress, toggleTema } = useProgress();
  const reduced = useReducedMotion();
  const isDark = progress.tema === 'dark';

  return (
    <motion.button
      type="button"
      onClick={toggleTema}
      whileTap={reduced ? undefined : TAP_FEEDBACK}
      transition={getTransition(reduced)}
      aria-label={isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
      title={isDark ? 'Ganti ke mode terang' : 'Ganti ke mode gelap'}
      className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)]"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-[var(--accent-amber)]" aria-hidden="true" />
      ) : (
        <Moon className="h-5 w-5 text-[var(--accent-primary)]" aria-hidden="true" />
      )}
    </motion.button>
  );
}
