import { CheckCircle2, XCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import type { Soal } from '../data/types';
import { getTransition, TAP_FEEDBACK } from '../lib/motion';

const OPTION_LETTERS = ['A', 'B', 'C', 'D'] as const;

const TIPE_LABELS: Record<Soal['tipe'], string> = {
  definisi: 'Definisi & Istilah',
  posisi: 'Posisi Pasien & Objek',
  sinar: 'Central Ray & Eksposi',
  kriteria: 'Kriteria Radiograf',
  proteksi: 'Proteksi Radiasi',
  prosedur: 'Alur Prosedur',
};

interface QuizQuestionProps {
  soal: Soal;
  selectedIndex: number | undefined;
  onSelect: (index: number) => void;
  questionNumber: number;
  totalQuestions: number;
}

export function QuizQuestion({
  soal,
  selectedIndex,
  onSelect,
  questionNumber,
  totalQuestions,
}: QuizQuestionProps) {
  const reduced = useReducedMotion();
  const isAnswered = selectedIndex !== undefined;
  const isCorrect = isAnswered && selectedIndex === soal.kunci;

  return (
    <div className="clinical-card rounded-2xl p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="font-mono text-xs font-medium text-[var(--accent-primary)]">
          Soal {questionNumber} / {totalQuestions}
        </span>
        <span className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-muted)] px-2.5 py-0.5 text-xs text-[var(--text-secondary)]">
          {TIPE_LABELS[soal.tipe]}
        </span>
      </div>

      <h2 className="mt-3 font-display text-lg font-semibold leading-snug text-[var(--text-primary)] sm:text-xl">
        {soal.tanya}
      </h2>

      <div className="mt-5 space-y-2.5" role="radiogroup" aria-label={soal.tanya}>
        {soal.pilihan.map((opt, idx) => {
          const isThisSelected = selectedIndex === idx;
          const isThisCorrect = idx === soal.kunci;

          let stateClass =
            'border-[var(--border-subtle)] bg-[var(--bg-muted)]/40 hover:border-[var(--border-strong)]';
          if (isAnswered) {
            if (isThisCorrect) {
              stateClass =
                'border-[var(--accent-success)] bg-[var(--accent-success)]/12 text-[var(--text-primary)]';
            } else if (isThisSelected && !isThisCorrect) {
              stateClass =
                'border-[var(--accent-danger)] bg-[var(--accent-danger)]/12 text-[var(--text-primary)]';
            } else {
              stateClass = 'border-[var(--border-subtle)] opacity-60';
            }
          }

          const animateProps =
            reduced || !isAnswered
              ? undefined
              : isThisSelected && !isThisCorrect
                ? { x: [0, -6, 6, -4, 4, 0] }
                : isThisSelected && isThisCorrect
                  ? { scale: [1, 1.02, 1] }
                  : undefined;

          return (
            <motion.button
              key={idx}
              type="button"
              disabled={isAnswered}
              onClick={() => onSelect(idx)}
              whileTap={!isAnswered && !reduced ? TAP_FEEDBACK : undefined}
              animate={animateProps}
              transition={getTransition(reduced, { duration: 0.25 })}
              className={`flex min-h-[48px] w-full items-center gap-3 rounded-xl border px-3.5 py-3 text-left text-sm transition-colors sm:text-base ${stateClass}`}
            >
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] font-mono text-xs font-semibold text-[var(--text-primary)]">
                {OPTION_LETTERS[idx]}
              </span>
              <span className="flex-1 text-[var(--text-primary)]">{opt}</span>
              {isAnswered && isThisCorrect && (
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--accent-success)]" aria-hidden="true" />
              )}
              {isAnswered && isThisSelected && !isThisCorrect && (
                <XCircle className="h-5 w-5 shrink-0 text-[var(--accent-danger)]" aria-hidden="true" />
              )}
            </motion.button>
          );
        })}
      </div>

      {isAnswered && (
        <motion.div
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={getTransition(reduced)}
          className={`mt-5 rounded-xl border p-4 ${
            isCorrect
              ? 'border-[var(--accent-success)]/40 bg-[var(--accent-success)]/10'
              : 'border-[var(--accent-amber)]/40 bg-[var(--accent-amber)]/10'
          }`}
        >
          <div className="flex items-center justify-between gap-2">
            <span
              className={`font-display text-sm font-bold ${
                isCorrect ? 'text-[var(--accent-success)]' : 'text-[var(--accent-amber)]'
              }`}
            >
              {isCorrect ? 'Jawaban tepat!' : 'Belum tepat — cek pembahasannya'}
            </span>
            <span className="font-mono text-xs text-[var(--text-secondary)]">
              Sumber: {soal.sumber}
            </span>
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-primary)]">
            {soal.penjelasan}
          </p>
        </motion.div>
      )}
    </div>
  );
}
