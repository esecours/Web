import React from 'react';
import { Download, Compass, HelpCircle, PhoneCall, MapPin, HeartPulse, ShieldAlert, Sparkles, WifiOff, ShieldCheck } from 'lucide-react';
import { PageRoute } from '../types';
import { ASSETS } from '../assets/images';
import { usePwa } from '../context/PwaContext';

interface HeroProps {
  setActivePage: (page: PageRoute) => void;
  scrollToSection: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ setActivePage, scrollToSection }) => {
  const { downloadOrInstallPwa, pwaUrl } = usePwa();
  return (
    <section className="relative pt-8 pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-red-50/20">
      {/* Background ambient light rings */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Chaque seconde compte.{' '}
              <span className="bg-gradient-to-r from-red-600 via-red-700 to-rose-600 bg-clip-text text-transparent">
                E-Secours est là.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Une plateforme mobile d'assistance qui vous aide à accéder rapidement aux numéros d'urgence,
              aux conseils de premiers secours, aux outils d'alerte et aux services de santé disponibles autour de vous.
            </p>

            {/* CTAs Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              {/* CTA 1 */}
              <button
                onClick={() => downloadOrInstallPwa()}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-base shadow-xl shadow-red-600/25 hover:shadow-2xl hover:shadow-red-600/35 transition-all duration-200 flex items-center justify-center space-x-2.5 active:scale-98 cursor-pointer"
              >
                <Download className="w-5 h-5 stroke-[2.5]" />
                <span>Télécharger E-Secours</span>
              </button>

              {/* CTA 2 */}
              <button
                onClick={() => setActivePage('fonctionnalites')}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border-2 border-slate-200 hover:border-slate-300 shadow-xs transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Compass className="w-5 h-5 text-red-600" />
                <span>Découvrir la plateforme</span>
              </button>
            </div>

            {/* Key trust bullets */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xs">
                  <WifiOff className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-extrabold text-slate-900 text-xs">Mode Offline</p>
                  <p className="text-[10px] text-slate-500">Sans connexion</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-lg bg-red-100 flex items-center justify-center text-red-700 font-bold text-xs">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-extrabold text-slate-900 text-xs">Secours 1-Clic</p>
                  <p className="text-[10px] text-slate-500">Appel instantané</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-xs">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-extrabold text-slate-900 text-xs">IA Assistant</p>
                  <p className="text-[10px] text-slate-500">Conseil 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Luminous aura frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 via-blue-600/10 to-emerald-500/10 rounded-3xl filter blur-2xl transform rotate-3 scale-95 pointer-events-none"></div>

            <div className="relative bg-white rounded-3xl p-3 shadow-2xl border border-slate-200/80 max-w-md w-full">
              {/* Image banner */}
              <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-slate-900">
                <img
                  src={ASSETS.hero}
                  alt="Citoyen béninois utilisant l'application mobile E-Secours"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent"></div>

                {/* Overlaid App Phone Preview Screen Header */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold px-3 py-1.5 bg-slate-900/70 backdrop-blur-md rounded-xl border border-white/10">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>E-Secours v2.4 Bénin</span>
                  </div>
                  <span className="text-[10px] text-slate-300 font-mono">APP MOBILE</span>
                </div>

                {/* Overlaid Bottom Title */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs font-bold text-red-400 uppercase tracking-wider">Secours & Assistance Santé</p>
                  <p className="text-sm font-extrabold">Cotonou • Porto-Novo • Parakou</p>
                </div>
              </div>

              {/* Floating feature badges around phone */}
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
                <div className="p-2.5 rounded-xl bg-red-50 border border-red-100 flex items-center space-x-2">
                  <PhoneCall className="w-4 h-4 text-red-600 shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold text-red-900 uppercase">Secours</p>
                    <p className="text-xs font-black text-red-700">Appels 1-Clic</p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold text-blue-900 uppercase">Localisation</p>
                    <p className="text-xs font-black text-blue-700">GPS & Communes</p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center space-x-2">
                  <HeartPulse className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold text-emerald-900 uppercase">Santé</p>
                    <p className="text-xs font-black text-emerald-700">Pharmacies 24/7</p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-100 flex items-center space-x-2">
                  <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold text-amber-900 uppercase">Alerte</p>
                    <p className="text-xs font-black text-amber-700">Sirène SOS</p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-purple-50 border border-purple-100 flex items-center space-x-2 col-span-2 sm:col-span-2">
                  <Sparkles className="w-4 h-4 text-purple-600 shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold text-purple-900 uppercase">Assistance IA</p>
                    <p className="text-xs font-black text-purple-700">Guidage Vocal & Texte 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
