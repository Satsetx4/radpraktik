import { BarChart3, BookOpen, Crosshair, ExternalLink, FolderKanban, Home, Info, Stethoscope, User } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { getTransition } from '../lib/motion';
import { useProgress } from '../lib/progress';

const NAV_ITEMS = [
  { to: '/', label: 'Beranda', icon: Home, end: true },
  { to: '/modul', label: 'Modul', icon: BookOpen, end: false },
  { to: '/kasus', label: 'Kasus', icon: Stethoscope, end: false },
  { to: '/progres', label: 'Progres', icon: BarChart3, end: false },
] as const;

interface MobileBottomNavProps {
  onEditName?: () => void;
}

export function MobileBottomNav({ onEditName }: MobileBottomNavProps) {
  const { progress } = useProgress();
  const reduced = useReducedMotion();

  return (
    <>
      {/* Mobile Bottom Bar */}
      <nav
        aria-label="Navigasi utama"
        className="clinical-surface fixed inset-x-0 bottom-0 z-40 border-t border-[var(--border-subtle)] pb-[env(safe-area-inset-bottom)] md:hidden"
      >
        <ul className="mx-auto grid max-w-md grid-cols-4">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `relative flex min-h-[56px] flex-col items-center justify-center gap-1 px-2 py-1.5 text-xs font-medium transition-colors ${
                      isActive
                        ? 'text-[var(--accent-primary)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="mobile-nav-pill"
                          transition={getTransition(reduced)}
                          className="absolute top-0 h-0.5 w-10 rounded-full bg-[var(--accent-primary)]"
                        />
                      )}
                      <Icon className="h-5 w-5" aria-hidden="true" />
                      <span>{item.label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Desktop Left Sidebar */}
      <aside
        aria-label="Sidebar navigasi"
        className="clinical-surface fixed inset-y-0 left-0 z-40 hidden w-64 flex-col justify-between border-r border-[var(--border-subtle)] p-5 md:flex"
      >
        <div>
          <NavLink to="/" className="flex items-center gap-3 rounded-xl p-1.5">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] text-[var(--accent-primary)]">
              <Crosshair className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <span className="block font-display text-lg font-bold tracking-tight text-[var(--text-primary)]">
                RadPraktik
              </span>
              <span className="block font-mono text-[11px] text-[var(--text-secondary)]">
                Teknik Radiografi 1
              </span>
            </div>
          </NavLink>

          <nav aria-label="Menu desktop" className="mt-6 space-y-1.5">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `relative flex min-h-[44px] items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-[var(--accent-primary)]'
                        : 'text-[var(--text-secondary)] hover:bg-[var(--bg-muted)] hover:text-[var(--text-primary)]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="desktop-nav-pill"
                          transition={getTransition(reduced)}
                          className="absolute inset-0 -z-10 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-elevated)]"
                        />
                      )}
                      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>{item.label}</span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="space-y-2.5 border-t border-[var(--border-subtle)] pt-4">
          <button
            type="button"
            onClick={onEditName}
            className="flex min-h-[44px] w-full items-center gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-3 py-2 text-left text-sm transition-colors hover:border-[var(--border-strong)]"
          >
            <User className="h-4 w-4 shrink-0 text-[var(--accent-secondary)]" aria-hidden="true" />
            <div className="min-w-0 flex-1">
              <span className="block truncate font-medium text-[var(--text-primary)]">
                {progress.nama || 'Mahasiswa'}
              </span>
              <span className="block text-xs text-[var(--text-secondary)]">
                {progress.nama ? 'Ubah nama panggilan' : 'Isi nama panggilan'}
              </span>
            </div>
          </button>

          <NavLink
            to="/tentang"
            className={({ isActive }) =>
              `flex min-h-[44px] items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors ${
                isActive
                  ? 'bg-[var(--bg-elevated)] font-medium text-[var(--accent-primary)]'
                  : 'text-[var(--text-secondary)] hover:bg-[var(--bg-muted)] hover:text-[var(--text-primary)]'
              }`
            }
          >
            <Info className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Tentang &amp; Sumber</span>
          </NavLink>

          <div className="space-y-1 border-t border-[var(--border-subtle)] pt-2.5">
            <a
              href="https://rindia.my.id"
              className="flex min-h-[44px] items-center justify-between gap-2 rounded-xl px-3 py-2 text-sm text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-muted)] hover:text-[var(--accent-primary)]"
            >
              <span className="flex min-w-0 items-center gap-3">
                <FolderKanban className="h-4 w-4 shrink-0 text-[var(--accent-primary)]" aria-hidden="true" />
                <span className="truncate">Meja Tugas Rindia</span>
              </span>
              <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-60" aria-hidden="true" />
            </a>
            <a
              href="https://anfis.rindia.my.id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] items-center justify-between gap-2 rounded-xl px-3 py-2 text-sm text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-muted)] hover:text-[var(--accent-primary)]"
            >
              <span className="flex min-w-0 items-center gap-3">
                <FolderKanban className="h-4 w-4 shrink-0 text-[var(--accent-secondary)]" aria-hidden="true" />
                <span className="truncate">AnFis — Anatomi Fisiologi</span>
              </span>
              <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-60" aria-hidden="true" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
