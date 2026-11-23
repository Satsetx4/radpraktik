import { AlertTriangle, Home, RotateCcw } from 'lucide-react';
import { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(_error: Error, _info: ErrorInfo): void {
    // Error boundary menangkap render crash agar pengguna tidak menemui layar putih
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[100dvh] items-center justify-center bg-[var(--bg-base)] p-6">
          <div className="clinical-card max-w-md rounded-2xl p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--accent-amber)]/40 bg-[var(--accent-amber)]/10 text-[var(--accent-amber)]">
              <AlertTriangle className="h-6 w-6" aria-hidden="true" />
            </div>
            <h1 className="mt-4 font-display text-xl font-bold text-[var(--text-primary)]">
              Ada kendala tampilan
            </h1>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Tenang, data belajarmu tetap aman. Coba muat ulang halaman atau kembali ke Beranda.
            </p>
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-[var(--accent-primary)] px-4 text-sm font-semibold text-[var(--on-accent)]"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                Muat Ulang
              </button>
              <a
                href="/"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-[var(--border-subtle)] px-4 text-sm font-medium text-[var(--text-primary)]"
              >
                <Home className="h-4 w-4" aria-hidden="true" />
                Ke Beranda
              </a>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
