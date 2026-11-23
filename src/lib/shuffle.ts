import type { KasusTahap, Soal } from '../data/types';

export function shuffleArray<T>(
  items: readonly T[],
  rng: () => number = Math.random,
): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    const tmp = result[i];
    result[i] = result[j];
    result[j] = tmp;
  }
  return result;
}

export function shuffleQuestion(
  soal: Soal,
  rng: () => number = Math.random,
): Soal {
  const indexed = soal.pilihan.map((text, originalIdx) => ({
    text,
    isCorrect: originalIdx === soal.kunci,
  }));
  const shuffled = shuffleArray(indexed, rng);
  const newKunci = shuffled.findIndex((item) => item.isCorrect);

  return {
    ...soal,
    pilihan: [
      shuffled[0].text,
      shuffled[1].text,
      shuffled[2].text,
      shuffled[3].text,
    ],
    kunci: (newKunci >= 0 && newKunci <= 3 ? newKunci : 0) as 0 | 1 | 2 | 3,
  };
}

export function shuffleKasusTahap(
  tahap: KasusTahap,
  rng: () => number = Math.random,
): KasusTahap {
  const indexed = tahap.pilihan.map((text, originalIdx) => ({
    text,
    isCorrect: originalIdx === tahap.kunci,
  }));
  const shuffled = shuffleArray(indexed, rng);
  const newKunci = shuffled.findIndex((item) => item.isCorrect);

  return {
    ...tahap,
    pilihan: shuffled.map((item) => item.text),
    kunci: newKunci >= 0 ? newKunci : 0,
  };
}
