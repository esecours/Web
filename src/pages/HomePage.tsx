import React from 'react';
import { Hero } from '../components/Hero';
import { EmergencyQuickSection } from '../components/EmergencyQuickSection';
import { HowItWorks } from '../components/HowItWorks';
import { AfricanImpactSection } from '../components/AfricanImpactSection';
import { Download, ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';
import { usePwa } from '../context/PwaContext';

interface HomePageProps {
  setActivePage: (page: PageRoute) => void;
  onTriggerSiren?: () => void;
  sirenTriggered?: boolean;
}

export const HomePage: React.FC<HomePageProps> = ({ setActivePage, onTriggerSiren }) => {
  const { downloadOrInstallPwa } = usePwa();
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-0">
      <Hero setActivePage={setActivePage} scrollToSection={scrollToSection} />
      <EmergencyQuickSection setActivePage={setActivePage} onTriggerSiren={onTriggerSiren} />
      <HowItWorks />
      <AfricanImpactSection />

      {/* SECTION CALL-TO-ACTION FINAL */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-red-400 bg-red-950 px-3.5 py-1 rounded-full border border-red-800">
              Inspiration & Sérénité
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              Soyez prêt avant que l'urgence n'arrive.
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Téléchargez E-Secours et gardez les informations essentielles à portée de main pour protéger vos proches.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => downloadOrInstallPwa()}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-base shadow-xl shadow-red-600/30 transition-all flex items-center justify-center space-x-2 cursor-pointer active:scale-98"
            >
              <Download className="w-5 h-5" />
              <span>Télécharger E-Secours</span>
            </button>

            <button
              onClick={() => setActivePage('fonctionnalites')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-base border border-slate-700 transition-all flex items-center justify-center space-x-2"
            >
              <span>Découvrir toutes les fonctionnalités</span>
              <ArrowRight className="w-5 h-5 text-red-400" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

