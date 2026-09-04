import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { FirstAidPage } from './pages/FirstAidPage';
import { EmergencyCenterPage } from './pages/EmergencyCenterPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { DownloadPage } from './pages/DownloadPage';
import { PageRoute } from './types';
import { PwaProvider } from './context/PwaContext';

export default function App() {
  const [activePage, setActivePage] = useState<PageRoute>('accueil');
  const [sirenTriggered, setSirenTriggered] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const handleTriggerSiren = () => {
    setSirenTriggered(true);
    // Auto reset trigger flag after 1s so siren component can catch it
    setTimeout(() => {
      setSirenTriggered(false);
    }, 1000);
  };

  const renderActivePage = () => {
    switch (activePage) {
      case 'accueil':
        return (
          <HomePage
            setActivePage={setActivePage}
            onTriggerSiren={handleTriggerSiren}
            sirenTriggered={sirenTriggered}
          />
        );
      case 'apropos':
        return <AboutPage setActivePage={setActivePage} />;
      case 'fonctionnalites':
        return <FeaturesPage setActivePage={setActivePage} />;
      case 'premiers-secours':
        return <FirstAidPage setActivePage={setActivePage} />;
      case 'centre-urgence':
        return (
          <EmergencyCenterPage
            onTriggerSiren={handleTriggerSiren}
            sirenTriggered={sirenTriggered}
          />
        );
      case 'faq':
        return <FaqPage />;
      case 'contact':
        return <ContactPage />;
      case 'telecharger':
        return <DownloadPage setActivePage={setActivePage} />;
      default:
        return (
          <HomePage
            setActivePage={setActivePage}
            onTriggerSiren={handleTriggerSiren}
            sirenTriggered={sirenTriggered}
          />
        );
    }
  };

  return (
    <PwaProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-red-500 selection:text-white flex flex-col justify-between antialiased">
        <div>
          <Header activePage={activePage} setActivePage={setActivePage} />
          <main>{renderActivePage()}</main>
        </div>

        <Footer setActivePage={setActivePage} />
      </div>
    </PwaProvider>
  );
}
