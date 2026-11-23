import { describe, expect, it } from 'vitest';
import type { KasusTahap, Soal } from '../data/types';
import { shuffleArray, shuffleKasusTahap, shuffleQuestion } from './shuffle';

describe('shuffleArray', () => {
  it('mempertahankan seluruh elemen tanpa memutasi array asal', () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffleArray(input);
    expect(input).toEqual([1, 2, 3, 4, 5]);
    expect(result).toHaveLength(5);
    expect([...result].sort()).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('shuffleQuestion', () => {
  const sampleSoal: Soal = {
    id: 'manus-04',
    modul: 'manus',
    tipe: 'sinar',
    tanya: 'Di mana central point pada proyeksi lateral ossa manus?',
    pilihan: [
      'Metacarpophalangeal joint digiti III',
      'Metacarpophalangeal joint digiti II',
      'Pertengahan os carpal',
      'Interphalangeal joint digiti I',
    ],
    kunci: 1,
    penjelasan: 'Pada lateral, CP berada di MCP digiti II.',
    sumber: 'hal 6',
  };

  it('memetakan ulang kunci secara akurat ke teks jawaban benar yang sama', () => {
    const expectedAnswer = sampleSoal.pilihan[sampleSoal.kunci];
    for (let seed = 0; seed < 30; seed += 1) {
      let step = seed;
      const deterministicRng = () => {
        step = (step * 9301 + 49297) % 233280;
        return step / 233280;
      };
      const shuffled = shuffleQuestion(sampleSoal, deterministicRng);
      expect(shuffled.pilihan[shuffled.kunci]).toBe(expectedAnswer);
      expect(new Set(shuffled.pilihan)).toEqual(new Set(sampleSoal.pilihan));
    }
  });
});

describe('shuffleKasusTahap', () => {
  it('memetakan ulang kunci pada tahap kasus secara akurat', () => {
    const tahap: KasusTahap = {
      tanya: 'Proyeksi rutin apa yang dibuat pertama kali?',
      pilihan: ['PA', 'AP', 'Axial', 'Tangensial'],
      kunci: 0,
    };
    const expected = tahap.pilihan[tahap.kunci];
    const shuffled = shuffleKasusTahap(tahap, () => 0.1);
    expect(shuffled.pilihan[shuffled.kunci]).toBe(expected);
  });
});
