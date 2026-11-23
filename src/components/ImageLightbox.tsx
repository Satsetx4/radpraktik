import { X, ZoomIn, ZoomOut } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';
import { getTransition, TAP_FEEDBACK } from '../lib/motion';

interface ImageLightboxProps {
  src: string | null;
  caption?: string;
  onClose: () => void;
}

export function ImageLightbox({ src, caption, onClose }: ImageLightboxProps) {
  const [zoomed, setZoomed] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    setZoomed(false);
  }, [src]);

  useEffect(() => {
    if (!src) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [src, onClose]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={caption || 'Pratinjau gambar proyeksi'}
          initial={reduced ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0 }}
          transition={getTransition(reduced, { duration: 0.18 })}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={reduced ? undefined : { scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={reduced ? undefined : { scale: 0.96, opacity: 0 }}
            transition={getTransition(reduced)}
            onClick={(e) => e.stopPropagation()}
            className="negatoscope-frame relative flex max-h-[90dvh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl"
          >
            <div className="flex items-center justify-between gap-2 border-b border-white/10 px-4 py-2.5">
              <p className="truncate text-sm font-medium text-slate-100">
                {caption || 'Gambar Proyeksi'}
              </p>
              <div className="flex shrink-0 items-center gap-2">
                <motion.button
                  type="button"
                  whileTap={reduced ? undefined : TAP_FEEDBACK}
                  onClick={() => setZoomed((z) => !z)}
                  aria-label={zoomed ? 'Perkecil gambar' : 'Perbesar gambar'}
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-100 hover:bg-white/10"
                >
                  {zoomed ? <ZoomOut className="h-5 w-5" /> : <ZoomIn className="h-5 w-5" />}
                </motion.button>
                <motion.button
                  type="button"
                  whileTap={reduced ? undefined : TAP_FEEDBACK}
                  onClick={onClose}
                  aria-label="Tutup gambar"
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>
            </div>

            <div className="flex flex-1 items-center justify-center overflow-auto bg-[#05080C] p-4">
              <img
                src={src}
                alt={caption || 'Ilustrasi proyeksi radiografi'}
                onClick={() => setZoomed((z) => !z)}
                className={`max-h-[72dvh] w-auto cursor-zoom-in rounded-lg object-contain transition-transform duration-200 ${
                  zoomed ? 'scale-150 cursor-zoom-out' : 'scale-100'
                }`}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
