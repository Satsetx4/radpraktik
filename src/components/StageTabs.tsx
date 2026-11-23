import { CheckCircle2 } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import type { TahapId } from '../data/types';
import { getTransition, TAP_FEEDBACK } from '../lib/motion';

export interface StageTabItem {
  id: TahapId;
  label: string;
  shortLabel: string;
}

export const STAGE_TABS: StageTabItem[] = [
  { id: 'pra', label: '1. Persiapan', shortLabel: 'Persiapan' },
  { id: 'proyeksi', label: '2. Proyeksi', shortLabel: 'Proyeksi' },
  { id: 'proteksi', label: '3. Proteksi & Eval', shortLabel: 'Proteksi' },
  { id: 'latihan', label: '4. Latihan', shortLabel: 'Latihan' },
];

interface StageTabsProps {
  active: TahapId;
  completed?: TahapId[];
  onChange: (tahap: TahapId) => void;
}

export function StageTabs({ active, completed = [], onChange }: StageTabsProps) {
  const reduced = useReducedMotion();

  return (
    <div
      role="tablist"
      aria-label="Tahap pembelajaran modul"
      className="clinical-card grid grid-cols-4 gap-1 rounded-2xl p-1.5"
    >
      {STAGE_TABS.map((tab) => {
        const isActive = active === tab.id;
        const isDone = completed.includes(tab.id);
        return (
          <motion.button
            key={tab.id}
            role="tab"
            type="button"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            whileTap={reduced ? undefined : TAP_FEEDBACK}
            transition={getTransition(reduced)}
            className={`relative flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl px-2 py-2 text-xs font-medium transition-colors sm:text-sm ${
              isActive
                ? 'text-[var(--text-primary)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="stage-tab-pill"
                transition={getTransition(reduced)}
                className="absolute inset-0 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-muted)]"
              />
            )}
            <span className="relative z-10 flex items-center gap-1 truncate">
              <span className="sm:hidden">{tab.shortLabel}</span>
              <span className="hidden sm:inline">{tab.label}</span>
              {isDone && (
                <CheckCircle2
                  className="h-3.5 w-3.5 shrink-0 text-[var(--accent-secondary)]"
                  aria-label="Sudah dibaca"
                />
              )}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
