import { Analytics } from '@vercel/analytics/react';
import { MotionConfig } from 'motion/react';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { MobileBottomNav } from './components/MobileBottomNav';
import { OnboardingModal } from './components/OnboardingModal';
import { ProgressProvider, useProgress } from './lib/progress';
import { scrollToTopInstant } from './lib/scroll';
import { Home } from './pages/Home';
import { Kasus } from './pages/Kasus';
import { Latihan } from './pages/Latihan';
import { ModulDetail } from './pages/ModulDetail';
import { ModulList } from './pages/ModulList';
import { NotFound } from './pages/NotFound';
import { Progres } from './pages/Progres';
import { Tentang } from './pages/Tentang';

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    scrollToTopInstant();
  }, [pathname, search]);

  return null;
}

function AppShell() {
  const { progress, setNama } = useProgress();
  const [onboardingOpen, setOnboardingOpen] = useState(false);
  const [dismissedInitial, setDismissedInitial] = useState(false);

  useEffect(() => {
    if (!progress.nama && !dismissedInitial) {
      setOnboardingOpen(true);
    }
  }, [progress.nama, dismissedInitial]);

  const handleCloseOnboarding = () => {
    setOnboardingOpen(false);
    setDismissedInitial(true);
  };

  const handleSaveName = (nama: string) => {
    setNama(nama);
    setOnboardingOpen(false);
    setDismissedInitial(true);
  };

  return (
    <div className="min-h-[100dvh] md:pl-64">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home onOpenOnboarding={() => setOnboardingOpen(true)} />} />
        <Route path="/modul" element={<ModulList />} />
        <Route path="/modul/:slug" element={<ModulDetail />} />
        <Route path="/modul/:slug/latihan" element={<Latihan />} />
        <Route path="/kasus" element={<Kasus />} />
        <Route
          path="/progres"
          element={<Progres onOpenOnboarding={() => setOnboardingOpen(true)} />}
        />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <MobileBottomNav onEditName={() => setOnboardingOpen(true)} />

      <OnboardingModal
        open={onboardingOpen}
        initialName={progress.nama}
        onSave={handleSaveName}
        onClose={handleCloseOnboarding}
      />
    </div>
  );
}

export function App() {
  return (
    <ErrorBoundary>
      <MotionConfig reducedMotion="user">
        <ProgressProvider>
          <AppShell />
          <Analytics />
        </ProgressProvider>
      </MotionConfig>
    </ErrorBoundary>
  );
}

export default App;
