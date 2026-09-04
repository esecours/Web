import React from 'react';
import { Volume2, Smartphone, Download, AlertTriangle, Radio } from 'lucide-react';

interface SirenSectionProps {
  externalTrigger?: boolean;
}

export const SirenSection: React.FC<SirenSectionProps> = () => {
  return (
    <section id="signal-sonore" className="py-20 bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950/90 px-3.5 py-1 rounded-full border border-amber-800 inline-flex items-center space-x-1.5">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Fonctionnalité Embarquée Dans L'Application</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Signal Sonore de Détresse & Alarme Haute Fréquence
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Directement intégré dans l'application mobile <strong className="text-white">E-Secours</strong>, le dispositif d'alerte permet de déclencher une alarme stridente à puissance maximale pour attirer immédiatement l'attention de l'entourage en cas de danger.
          </p>
        </div>

        {/* Presentation Showcase Box */}
        <div className="max-w-3xl mx-auto bg-slate-800/90 rounded-3xl p-8 border border-red-500/30 shadow-2xl text-center space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-red-600 text-white flex items-center justify-center mx-auto shadow-xl shadow-red-600/30 animate-pulse">
            <Volume2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-black text-white">Alarme SOS Déclenchable en 1 Clic</h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
              Utile en cas d'agression sur la voie publique, de malaise brutal en lieu isolé ou de piégeage dans les décombres. L'alarme émet un signal sonore de détresse modulé couplé au flash visuel de votre téléphone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-md mx-auto text-xs">
            <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700">
              <span className="text-amber-400 font-bold block mb-0.5">🔊 Puissance Maximale</span>
              <span className="text-slate-400">Force le volume du smartphone au niveau maximal même en mode silencieux.</span>
            </div>
            <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700">
              <span className="text-emerald-400 font-bold block mb-0.5">⚡ Déclenchement Express</span>
              <span className="text-slate-400">Bouton SOS d'accès rapide sur l'écran d'accueil de l'application.</span>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="/#telecharger"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('telecharger');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else window.location.hash = '#telecharger';
              }}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-sm shadow-lg shadow-red-600/30 transition-all inline-flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Tester la Sirène dans l'Application Mobile</span>
            </a>
          </div>

          {/* Important Disclaimer */}
          <div className="p-3.5 bg-slate-900/90 rounded-2xl border border-amber-500/40 text-amber-200 text-xs text-left flex items-start space-x-2">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>
              <strong>Rappel important :</strong> Le signal sonore est un outil complémentaire pour attirer l'attention à proximité. Il ne remplace pas un appel direct aux secours (SAMU 112 / Pompiers 118).
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
