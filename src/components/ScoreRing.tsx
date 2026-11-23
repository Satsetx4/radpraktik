import { motion, useReducedMotion } from 'motion/react';
import { getTransition } from '../lib/motion';

interface ScoreRingProps {
  score: number | null;
  size?: number;
  label?: string;
}

export function ScoreRing({ score, size = 112, label = 'Skor' }: ScoreRingProps) {
  const reduced = useReducedMotion();
  const safeScore = score === null ? 0 : Math.max(0, Math.min(100, score));
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const strokeColor =
    score === null
      ? 'var(--text-muted)'
      : safeScore >= 70
        ? 'var(--accent-success)'
        : 'var(--accent-amber)';

  return (
    <div className="inline-flex flex-col items-center gap-1.5">
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="var(--border-subtle)"
            strokeWidth={strokeWidth}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={
              reduced
                ? { strokeDashoffset: circumference * (1 - safeScore / 100) }
                : { strokeDashoffset: circumference }
            }
            animate={{ strokeDashoffset: circumference * (1 - safeScore / 100) }}
            transition={getTransition(reduced, { duration: 0.65, ease: [0.22, 1, 0.36, 1] })}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-2xl font-bold text-[var(--text-primary)]">
            {score === null ? '—' : `${safeScore}%`}
          </span>
        </div>
      </div>
      {label && <span className="text-xs font-medium text-[var(--text-secondary)]">{label}</span>}
    </div>
  );
}
