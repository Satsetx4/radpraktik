import { BookOpen, GraduationCap, ShieldCheck, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AppHeader } from '../components/AppHeader';
import { SeoHead } from '../components/SeoHead';

export function Tentang() {
  return (
    <div className="min-h-[100dvh] pb-24 md:pb-12">
      <SeoHead
        title="Tentang & Sumber — RadPraktik"
        description="Informasi sumber materi resmi JTRR Poltekkes Kemenkes Semarang dan panduan penggunaan RadPraktik."
      />
      <AppHeader
        title="Tentang & Sumber"
        backTo="/"
        breadcrumbs={[{ label: 'Beranda', to: '/' }, { label: 'Tentang' }]}
      />

      <main className="mx-auto max-w-3xl space-y-6 px-4 py-6 sm:px-6">
        <section className="clinical-card rounded-2xl p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--bg-muted)] text-[var(--accent-primary)]">
              <GraduationCap className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-display text-xl font-bold text-[var(--text-primary)]">
                Sumber Materi Resmi
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                Seluruh materi proyeksi, posisi pasien, posisi objek, arah sinar (Central Ray), titik
                bidik (Central Point), faktor eksposi, hingga proteksi radiasi di{' '}
                <strong className="text-[var(--text-primary)]">RadPraktik</strong> disusun secara
                setia dari{' '}
                <strong className="text-[var(--text-primary)]">
                  24 Modul Praktek Laboratorium Teknik Radiografi 1
                </strong>{' '}
                milik{' '}
                <strong className="text-[var(--text-primary)]">
                  Jurusan Teknik Radiodiagnostik dan Radioterapi (JTRR), Poltekkes Kemenkes Semarang
                </strong>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="clinical-card rounded-2xl p-5 sm:p-6">
          <h2 className="font-display text-lg font-bold text-[var(--text-primary)]">
            Alur Belajar di RadPraktik
          </h2>
          <ol className="mt-4 space-y-3 text-sm text-[var(--text-secondary)]">
            <li className="flex gap-3">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[var(--bg-muted)] font-mono text-xs font-bold text-[var(--accent-primary)]">
                1
              </span>
              <span>
                <strong className="text-[var(--text-primary)]">Pelajari 4 Tahap Modul:</strong>{' '}
                Persiapan &amp; Pra-Pemeriksaan, Proyeksi &amp; Teknik (lengkap dengan ilustrasi
                negatoskop), Proteksi &amp; Evaluasi, lalu Latihan 10 Soal.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[var(--bg-muted)] font-mono text-xs font-bold text-[var(--accent-primary)]">
                2
              </span>
              <span>
                <strong className="text-[var(--text-primary)]">Latihan Soal Acak:</strong> Urutan
                soal dan 4 pilihan jawaban diacak otomatis setiap pengulangan agar belajar tetap
                autentik.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[var(--bg-muted)] font-mono text-xs font-bold text-[var(--accent-primary)]">
                3
              </span>
              <span>
                <strong className="text-[var(--text-primary)]">Simulasi Kasus 2 Tahap:</strong>{' '}
                Tebak proyeksi yang tepat dari skenario klinis, lanjutkan menebak posisi atau arah
                sinar, lalu baca pembahasan lengkapnya.
              </span>
            </li>
          </ol>
        </section>

        <section className="clinical-card rounded-2xl p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent-secondary)]" aria-hidden="true" />
            <div>
              <h2 className="font-display text-base font-bold text-[var(--text-primary)]">
                Privasi &amp; Penyimpanan Lokal
              </h2>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                RadPraktik berjalan tanpa login atau server database pengguna. Nama panggilan,
                riwayat baca, skor terbaik, dan pilihan tema disimpan langsung di{' '}
                <code>localStorage</code> peramban kamu dan dapat dihapus kapan saja melalui halaman{' '}
                <Link to="/progres" className="font-medium text-[var(--accent-primary)] hover:underline">
                  Progres
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/modul"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[var(--accent-primary)] px-5 text-sm font-semibold text-slate-950"
          >
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            <span>Buka Daftar Modul</span>
          </Link>
          <Link
            to="/kasus"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-5 text-sm font-medium text-[var(--text-primary)]"
          >
            <Stethoscope className="h-4 w-4 text-[var(--accent-secondary)]" aria-hidden="true" />
            <span>Coba Kasus Klinis</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
