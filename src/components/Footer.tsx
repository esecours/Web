import React, { useState } from 'react';
import { Shield, Phone, Mail, ChevronRight } from 'lucide-react';
import { PageRoute } from '../types';
import { LegalModal } from './LegalModal';

interface FooterProps {
  setActivePage: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | 'data' | 'mentions' | null>(null);

  const handleNav = (page: PageRoute) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900 relative overflow-hidden">
      {/* Decorative subtle background gradient blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white font-bold shadow-lg shadow-red-600/30">
                <Shield className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">E-SECOURS</span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              La technologie au service de l'assistance et de la prévention. Une plateforme mobile conçue pour répondre
              aux réalités ouest-africaines et sauver des vies en situation d'urgence.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Urgences Nationales : 112 / 118 / 117</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Support : +229 01 47203671</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <span>contact@e-secours.com</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 text-red-400">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { route: 'accueil' as PageRoute, label: 'Accueil' },
                { route: 'apropos' as PageRoute, label: 'À propos' },
                { route: 'fonctionnalites' as PageRoute, label: 'Fonctionnalités' },
                { route: 'premiers-secours' as PageRoute, label: 'Premiers secours' },
                { route: 'faq' as PageRoute, label: 'FAQ' },
                { route: 'contact' as PageRoute, label: 'Contact' },
              ].map((item) => (
                <li key={item.route}>
                  <button
                    onClick={() => handleNav(item.route)}
                    className="hover:text-white transition-colors flex items-center space-x-1 group text-slate-400"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-red-500 transition-colors" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Ressources */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 text-blue-400">Ressources</h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button onClick={() => handleNav('centre-urgence')} className="hover:text-white transition-colors flex items-center space-x-1">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Numéros d'urgence Bénin</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('premiers-secours')} className="hover:text-white transition-colors flex items-center space-x-1">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Conseils Premiers Secours</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('fonctionnalites')} className="hover:text-white transition-colors flex items-center space-x-1">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Pharmacies & Hôpitaux</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('fonctionnalites')} className="hover:text-white transition-colors flex items-center space-x-1">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Assistant Virtual 24/7</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('telecharger')} className="hover:text-white transition-colors flex items-center space-x-1">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Mode Hors Ligne</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Légal */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 text-emerald-400">Légal</h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button onClick={() => setLegalModal('privacy')} className="hover:text-white transition-colors text-left">
                  Politique de confidentialité
                </button>
              </li>
              <li>
                <button onClick={() => setLegalModal('terms')} className="hover:text-white transition-colors text-left">
                  Conditions d'utilisation
                </button>
              </li>
              <li>
                <button onClick={() => setLegalModal('data')} className="hover:text-white transition-colors text-left">
                  Protection des données (APDP)
                </button>
              </li>
              <li>
                <button onClick={() => setLegalModal('mentions')} className="hover:text-white transition-colors text-left">
                  Mentions légales
                </button>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-900">
              <p className="text-xs text-slate-500 font-semibold mb-2">Suivez-nous :</p>
              <div className="flex items-center space-x-3">
                {['Facebook', 'LinkedIn', 'X', 'TikTok', 'Instagram'].map((network) => (
                  <span
                    key={network}
                    className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-400 hover:text-white hover:border-red-500 cursor-pointer transition-colors"
                  >
                    {network[0]}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-4 sm:space-y-0">
          <p>© 2026 E-Secours. Tous droits réservés.</p>
        </div>
      </div>

      <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
    </footer>
  );
};
