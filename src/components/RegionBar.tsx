import { motion, useReducedMotion } from 'motion/react';
import { getTransition } from '../lib/motion';

interface RegionBarProps {
  label: string;
  completed: number;
  total: number;
}

export function RegionBar({ label, completed, total }: RegionBarProps) {
  const reduced = useReducedMotion();
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between gap-2 text-sm">
        <span className="font-medium text-[var(--text-primary)]">{label}</span>
        <span className="font-mono text-xs text-[var(--text-secondary)]">
          {completed}/{total} modul ({pct}%)
        </span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-[var(--bg-muted)]">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent-primary)]"
          initial={reduced ? { width: `${pct}%` } : { width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, amount: 0.3 }}
          transition={getTransition(reduced, { duration: 0.45, ease: [0.22, 1, 0.36, 1] })}
        />
      </div>
    </div>
  );
}
