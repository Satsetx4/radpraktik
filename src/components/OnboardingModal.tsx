import { Sparkles, UserCheck, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useState, type FormEvent } from 'react';
import { getTransition, TAP_FEEDBACK } from '../lib/motion';

interface OnboardingModalProps {
  open: boolean;
  initialName?: string;
  onSave: (nama: string) => void;
  onClose: () => void;
}

export function OnboardingModal({
  open,
  initialName = '',
  onSave,
  onClose,
}: OnboardingModalProps) {
  const [nama, setNama] = useState(initialName);
  const [error, setError] = useState('');
  const reduced = useReducedMotion();

  useEffect(() => {
    if (open) {
      setNama(initialName);
      setError('');
    }
  }, [open, initialName]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = nama.trim();
    if (trimmed.length < 2) {
      setError('Isi nama panggilan minimal 2 huruf ya.');
      return;
    }
    if (trimmed.length > 30) {
      setError('Nama panggilan maksimal 30 karakter ya.');
      return;
    }
    setError('');
    onSave(trimmed);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="onboarding-title"
          initial={reduced ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0 }}
          transition={getTransition(reduced, { duration: 0.18 })}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={reduced ? undefined : { scale: 0.96, y: 8, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={reduced ? undefined : { scale: 0.96, y: 8, opacity: 0 }}
            transition={getTransition(reduced)}
            onClick={(e) => e.stopPropagation()}
            className="clinical-card w-full max-w-md rounded-2xl p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--bg-muted)] text-[var(--accent-primary)]">
                  <UserCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 id="onboarding-title" className="font-display text-lg font-bold text-[var(--text-primary)]">
                    Selamat Datang di RadPraktik
                  </h2>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Tanpa login. Progres tersimpan otomatis di perangkat ini.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup dialog"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl text-[var(--text-secondary)] hover:bg-[var(--bg-muted)] hover:text-[var(--text-primary)]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-4">
              <div>
                <label
                  htmlFor="nama-panggilan"
                  className="block text-sm font-medium text-[var(--text-primary)]"
                >
                  Nama panggilan kamu
                </label>
                <input
                  id="nama-panggilan"
                  type="text"
                  value={nama}
                  onChange={(e) => {
                    setNama(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Contoh: Rindia"
                  maxLength={35}
                  autoFocus
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? 'nama-error' : undefined}
                  className="mt-1.5 min-h-[46px] w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-muted)] px-3.5 text-base text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none"
                />
                {error && (
                  <p id="nama-error" className="mt-1.5 text-xs font-medium text-[var(--accent-danger)]">
                    {error}
                  </p>
                )}
                <div className="mt-2.5">
                  <motion.button
                    type="button"
                    whileTap={reduced ? undefined : TAP_FEEDBACK}
                    onClick={() => {
                      setError('');
                      setNama('Rindia');
                      onSave('Rindia');
                    }}
                    className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-3.5 text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
                  >
                    <Sparkles className="h-3.5 w-3.5 text-[var(--accent-primary)]" aria-hidden="true" />
                    <span>Pakai nama cepat: Rindia</span>
                  </motion.button>
                </div>
              </div>

              <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="min-h-[44px] rounded-xl border border-[var(--border-subtle)] px-4 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-muted)] hover:text-[var(--text-primary)]"
                >
                  Nanti saja
                </button>
                <motion.button
                  type="submit"
                  whileTap={reduced ? undefined : TAP_FEEDBACK}
                  className="min-h-[44px] rounded-xl bg-[var(--accent-primary)] px-5 text-sm font-semibold text-[var(--on-accent)] transition-opacity hover:opacity-95"
                >
                  Mulai Belajar
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
