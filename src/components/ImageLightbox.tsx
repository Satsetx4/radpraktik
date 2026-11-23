import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';
import { getTransition, TAP_FEEDBACK } from '../lib/motion';

interface ImageLightboxProps {
  images: { src: string; caption: string }[];
  initialIndex?: number;
  open: boolean;
  onClose: () => void;
}

export function ImageLightbox({
  images,
  initialIndex = 0,
  open,
  onClose,
}: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoomed, setZoomed] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const clamped =
      images.length > 0 ? Math.max(0, Math.min(initialIndex, images.length - 1)) : 0;
    setCurrentIndex(clamped);
  }, [open, images, initialIndex]);

  useEffect(() => {
    setZoomed(false);
  }, [currentIndex, open]);

  const hasMultiple = images.length > 1;
  const safeIndex =
    images.length > 0 ? Math.max(0, Math.min(currentIndex, images.length - 1)) : 0;
  const currentImage = open && images.length > 0 ? images[safeIndex] : null;

  const handlePrev = useCallback(() => {
    if (images.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleNext = useCallback(() => {
    if (images.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!open || images.length === 0) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && images.length > 1) {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight' && images.length > 1) {
        e.preventDefault();
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, images.length, onClose, handlePrev, handleNext]);

  return (
    <AnimatePresence>
      {currentImage && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={currentImage.caption || 'Pratinjau gambar proyeksi'}
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
              <div className="flex min-w-0 items-center gap-2.5">
                {hasMultiple && (
                  <span className="shrink-0 rounded-md border border-white/15 bg-white/10 px-2 py-0.5 font-mono text-xs text-slate-200">
                    {safeIndex + 1} / {images.length}
                  </span>
                )}
                <p className="truncate text-sm font-medium text-slate-100">
                  {currentImage.caption || 'Gambar Proyeksi'}
                </p>
              </div>
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

            <div className="relative flex flex-1 items-center justify-center overflow-auto bg-[var(--bg-negatoscope)] p-4">
              <img
                src={currentImage.src}
                alt={currentImage.caption || 'Ilustrasi proyeksi radiografi'}
                onClick={() => setZoomed((z) => !z)}
                className={`max-h-[68dvh] w-auto cursor-zoom-in rounded-lg object-contain transition-transform duration-200 ${
                  zoomed ? 'scale-150 cursor-zoom-out' : 'scale-100'
                }`}
              />
            </div>

            {hasMultiple && (
              <div className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-2.5">
                <motion.button
                  type="button"
                  whileTap={reduced ? undefined : TAP_FEEDBACK}
                  onClick={handlePrev}
                  aria-label="Gambar sebelumnya"
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3 text-xs font-medium text-slate-100 hover:bg-white/10"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  <span>Sebelumnya</span>
                </motion.button>
                <span className="font-mono text-xs text-slate-300">
                  {safeIndex + 1} / {images.length}
                </span>
                <motion.button
                  type="button"
                  whileTap={reduced ? undefined : TAP_FEEDBACK}
                  onClick={handleNext}
                  aria-label="Gambar berikutnya"
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3 text-xs font-medium text-slate-100 hover:bg-white/10"
                >
                  <span>Berikutnya</span>
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </motion.button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
