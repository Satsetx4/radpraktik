import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppHeader } from '../components/AppHeader';
import { QuizQuestion } from '../components/QuizQuestion';
import { ScoreRing } from '../components/ScoreRing';
import { SeoHead } from '../components/SeoHead';
import { getAdjacentModuls, getModulBySlug, getModulMeta, getSoalByModul } from '../data';
import type { Soal } from '../data/types';
import { getTransition, TAP_FEEDBACK } from '../lib/motion';
import { useProgress } from '../lib/progress';
import { scrollToTopInstant } from '../lib/scroll';
import { shuffleArray, shuffleQuestion } from '../lib/shuffle';
import { trackEvent } from '../lib/track';

function buildShuffledQuiz(rawSoal: Soal[]): Soal[] {
  return shuffleArray(rawSoal).map((s) => shuffleQuestion(s));
}

export function Latihan() {
  const { slug = '' } = useParams<{ slug: string }>();
  const modul = getModulBySlug(slug);
  const meta = getModulMeta(slug);
  const rawSoal = getSoalByModul(slug);
  const { next } = getAdjacentModuls(slug);
  const { progress, setActiveQuiz, recordQuizScore } = useProgress();
  const reduced = useReducedMotion();

  const [quizSoal, setQuizSoal] = useState<Soal[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [finishedScore, setFinishedScore] = useState<number | null>(null);

  const startFreshQuiz = useCallback(() => {
    if (rawSoal.length === 0) return;
    const shuffled = buildShuffledQuiz(rawSoal);
    setQuizSoal(shuffled);
    setCurrentIdx(0);
    setAnswers({});
    setFinishedScore(null);
    setActiveQuiz({
      modulSlug: slug,
      soalList: shuffled,
      index: 0,
      jawaban: {},
      startedAt: Date.now(),
    });
    trackEvent('mulai_latihan', { modul: slug });
    scrollToTopInstant();
  }, [rawSoal, setActiveQuiz, slug]);

  useEffect(() => {
    if (rawSoal.length === 0) return;
    const saved = progress.kuisAktif;
    if (saved && saved.modulSlug === slug && saved.soalList.length > 0) {
      setQuizSoal(saved.soalList);
      setCurrentIdx(Math.min(saved.index, saved.soalList.length - 1));
      setAnswers(saved.jawaban);
      setFinishedScore(null);
    } else {
      startFreshQuiz();
    }
    // Jalankan saat slug berubah atau halaman baru dimuat
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, rawSoal.length]);

  const title = modul?.judul ?? meta?.judul ?? 'Latihan Soal';
  const backUrl = meta || modul ? `/modul/${slug}?tahap=proyeksi` : '/modul';

  if (rawSoal.length === 0) {
    return (
      <div className="min-h-[100dvh] pb-24 md:pb-12">
        <SeoHead title={`Latihan ${title} — RadPraktik`} />
        <AppHeader
          title={`Latihan: ${title}`}
          backTo={backUrl}
          breadcrumbs={[
            { label: 'Beranda', to: '/' },
            { label: 'Modul', to: '/modul' },
            { label: title, to: `/modul/${slug}` },
            { label: 'Latihan' },
          ]}
        />
        <main className="mx-auto max-w-2xl px-4 py-12 text-center">
          <div className="clinical-card rounded-2xl p-8">
            <h2 className="font-display text-xl font-bold text-[var(--text-primary)]">
              Soal latihan belum tersedia
            </h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Bank soal untuk modul <strong>{title}</strong> belum terisi. Silakan kembali ke materi
              atau pilih modul lainnya.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to={`/modul/${slug}`}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[var(--accent-primary)] px-5 text-sm font-semibold text-[var(--on-accent)]"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                <span>Kembali ke Modul</span>
              </Link>
              <Link
                to="/modul"
                className="inline-flex min-h-[44px] items-center rounded-xl border border-[var(--border-subtle)] px-5 text-sm font-medium text-[var(--text-primary)]"
              >
                Daftar Modul
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const currentSoal = quizSoal[currentIdx];
  const selectedAnswer = currentSoal ? answers[currentSoal.id] : undefined;
  const isLast = currentIdx === quizSoal.length - 1;

  const handleSelectOption = (optIndex: number) => {
    if (!currentSoal || selectedAnswer !== undefined) return;
    const nextAnswers = { ...answers, [currentSoal.id]: optIndex };
    setAnswers(nextAnswers);
    setActiveQuiz({
      modulSlug: slug,
      soalList: quizSoal,
      index: currentIdx,
      jawaban: nextAnswers,
      startedAt: progress.kuisAktif?.startedAt ?? Date.now(),
    });
  };

  const handleNext = () => {
    if (!isLast) {
      const nextIdx = currentIdx + 1;
      setCurrentIdx(nextIdx);
      setActiveQuiz({
        modulSlug: slug,
        soalList: quizSoal,
        index: nextIdx,
        jawaban: answers,
        startedAt: progress.kuisAktif?.startedAt ?? Date.now(),
      });
      scrollToTopInstant();
      return;
    }

    const correctCount = quizSoal.reduce(
      (acc, q) => (answers[q.id] === q.kunci ? acc + 1 : acc),
      0,
    );
    const skor = Math.round((correctCount / quizSoal.length) * 100);
    setFinishedScore(skor);
    recordQuizScore(slug, skor);
    trackEvent('selesai_latihan', { modul: slug, skor });
    scrollToTopInstant();
  };

  if (finishedScore !== null) {
    const correctCount = quizSoal.reduce(
      (acc, q) => (answers[q.id] === q.kunci ? acc + 1 : acc),
      0,
    );

    return (
      <div className="min-h-[100dvh] pb-24 md:pb-12">
        <SeoHead title={`Hasil Latihan ${title} — RadPraktik`} />
        <AppHeader title={`Hasil: ${title}`} backTo={`/modul/${slug}`} />
        <main className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
          <motion.div
            initial={reduced ? undefined : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={getTransition(reduced)}
            className="clinical-card rounded-3xl p-6 text-center sm:p-8"
          >
            <ScoreRing score={finishedScore} size={132} label="Skor Latihan" />
            <h2 className="mt-4 font-display text-2xl font-bold text-[var(--text-primary)]">
              {finishedScore >= 70 ? 'Mantap, Pemahaman Bagus!' : 'Yuk Ulangi Lagi!'}
            </h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Kamu menjawab benar <strong className="text-[var(--text-primary)]">{correctCount}</strong>{' '}
              dari <strong className="text-[var(--text-primary)]">{quizSoal.length}</strong> soal pada
              modul <strong>{title}</strong>.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <motion.button
                type="button"
                whileTap={reduced ? undefined : TAP_FEEDBACK}
                onClick={startFreshQuiz}
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-[var(--accent-primary)] px-5 text-sm font-semibold text-[var(--on-accent)]"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                <span>Ulangi Latihan</span>
              </motion.button>
              {next && (
                <Link
                  to={`/modul/${next.slug}`}
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-5 text-sm font-semibold text-[var(--text-primary)]"
                >
                  <span>Modul Berikutnya: {next.judul}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}
              <Link
                to={`/modul/${slug}`}
                className="inline-flex min-h-[46px] items-center justify-center rounded-xl border border-[var(--border-subtle)] px-5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                Kembali ke Materi
              </Link>
            </div>
          </motion.div>
        </main>
      </div>
    );
  }

  const pct = quizSoal.length > 0 ? Math.round(((currentIdx + 1) / quizSoal.length) * 100) : 0;

  return (
    <div className="min-h-[100dvh] pb-24 md:pb-12">
      <SeoHead title={`Latihan ${title} — RadPraktik`} />
      <AppHeader
        title={`Latihan: ${title}`}
        subtitle={`${currentIdx + 1}/${quizSoal.length}`}
        backTo={`/modul/${slug}`}
      />

      <main className="mx-auto max-w-2xl space-y-5 px-4 py-6 sm:px-6">
        {/* Progress bar */}
        <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--bg-muted)]">
          <motion.div
            className="h-full rounded-full bg-[var(--accent-primary)]"
            animate={{ width: `${pct}%` }}
            transition={getTransition(reduced, { duration: 0.25 })}
          />
        </div>

        {currentSoal && (
          <QuizQuestion
            soal={currentSoal}
            selectedIndex={selectedAnswer}
            onSelect={handleSelectOption}
            questionNumber={currentIdx + 1}
            totalQuestions={quizSoal.length}
            onNext={handleNext}
            isLast={isLast}
          />
        )}
      </main>
    </div>
  );
}
