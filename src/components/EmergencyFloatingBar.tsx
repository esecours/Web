import React, { useState } from 'react';
import { Smartphone, Download, X, ShieldAlert, ChevronUp, CheckCircle2 } from 'lucide-react';
import { PageRoute } from '../types';

interface EmergencyFloatingBarProps {
  setActivePage: (page: PageRoute) => void;
  onTriggerSiren?: () => void;
}

export const EmergencyFloatingBar: React.FC<EmergencyFloatingBarProps> = ({ setActivePage }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-40 max-w-sm w-[calc(100vw-2rem)] sm:w-auto">
      {expanded ? (
        <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-2xl border border-red-500/30 animate-scale-up space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="font-extrabold text-xs tracking-wider text-red-400 uppercase">Application E-Secours Bénin</span>
            </div>
            <button
              onClick={() => setExpanded(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Les numéros d'urgence (SAMU 112, Pompiers 118, Police 117), la sirène de détresse et les fiches de premiers secours sont <strong className="text-white">directement intégrés dans l'application mobile E-Secours</strong> pour un accès rapide et 100% hors-ligne.
          </p>

          <div className="space-y-1.5 text-[11px] text-slate-300">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Appels d'urgence en 1 clic sans connexion</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Guides et fiches réflexes enregistrés</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Géo-localisation des pharmacies de garde</span>
            </div>
          </div>

          <button
            onClick={() => {
              setActivePage('telecharger');
              setExpanded(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl font-bold text-xs shadow-lg shadow-red-600/30 transition-all flex items-center justify-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Télécharger l'Application Mobile</span>
          </button>
        </div>
      ) : (
        <button
          onClick={() => setExpanded(true)}
          className="flex items-center space-x-2.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 py-3 rounded-full shadow-2xl shadow-red-600/40 font-bold text-xs uppercase tracking-wider border-2 border-white/20 hover:scale-105 active:scale-95 transition-all"
        >
          <Smartphone className="w-4 h-4 text-amber-300 animate-pulse" />
          <ShieldAlert className="w-4 h-4" />
          <span>Application E-Secours</span>
          <ChevronUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
