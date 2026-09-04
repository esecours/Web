import React, { useState } from 'react';
import { Wifi, WifiOff, CheckCircle2, ShieldCheck, Download, Smartphone } from 'lucide-react';

export const OfflineModeSection: React.FC = () => {
  const [isSimulatedOffline, setIsSimulatedOffline] = useState(true);

  const offlineFeatures = [
    'Numéros d\'urgence officiels du Bénin (112, 118, 117)',
    'Bibliothèque complète de conseils de premiers secours',
    'Ma Fiche d\'Urgence médicale numérique (Blood ID)',
    'Signal sonore puissant & alarme d\'urgence',
    'Historique local sécurisé sur le téléphone'
  ];

  return (
    <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold">
              <WifiOff className="w-4 h-4 text-emerald-400" />
              <span>Autonomie Réseau 100%</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Même sans Internet, E-Secours reste utile.
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              En Afrique de l'Ouest, la connectivité peut parfois être instable. E-Secours intègre une architecture offline-first qui garantit l'accès aux fonctionnalités vitales à tout moment.
            </p>

            <div className="space-y-2.5 pt-2">
              {offlineFeatures.map((feat, i) => (
                <div key={i} className="flex items-center space-x-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 text-xs text-slate-300">
              💡 <strong>Pas de connexion ?</strong> Les informations essentielles restent directement accessibles dans la mémoire locale de votre smartphone.
            </div>
          </div>

          {/* Right Interactive Simulator Card */}
          <div className="lg:col-span-5 bg-slate-800/90 rounded-3xl p-6 border border-slate-700 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-700">
              <div className="flex items-center space-x-2">
                <Smartphone className="w-5 h-5 text-emerald-400" />
                <span className="font-bold text-sm text-white">Simulateur Mode Hors Ligne</span>
              </div>

              {/* Toggle switch */}
              <button
                onClick={() => setIsSimulatedOffline(!isSimulatedOffline)}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all flex items-center space-x-1.5 ${
                  isSimulatedOffline
                    ? 'bg-amber-500 text-slate-950'
                    : 'bg-emerald-600 text-white'
                }`}
              >
                {isSimulatedOffline ? <WifiOff className="w-4 h-4" /> : <Wifi className="w-4 h-4" />}
                <span>{isSimulatedOffline ? 'MODE HORS LIGNE (OFFLINE)' : 'EN LIGNE (ONLINE)'}</span>
              </button>
            </div>

            {/* Offline Card Status Display */}
            <div className={`p-5 rounded-2xl border transition-all ${
              isSimulatedOffline
                ? 'bg-slate-950 border-amber-500/40 text-amber-300'
                : 'bg-slate-950 border-emerald-500/40 text-emerald-300'
            }`}>
              <div className="flex items-center space-x-3 mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white ${
                  isSimulatedOffline ? 'bg-amber-600' : 'bg-emerald-600'
                }`}>
                  {isSimulatedOffline ? <WifiOff className="w-5 h-5" /> : <Wifi className="w-5 h-5" />}
                </div>
                <div>
                  <p className="font-extrabold text-sm text-white">
                    {isSimulatedOffline ? 'MODE HORS LIGNE BÉNIN' : 'CONNEXION RÉSSEAU 4G/5G'}
                  </p>
                  <p className="text-xs text-slate-400">
                    {isSimulatedOffline ? 'Réseau cellulaire coupé' : 'Internet disponible'}
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs border-t border-slate-800 pt-3 text-slate-300">
                <p>• Numéros d'urgence : <span className="font-bold text-emerald-400">DISPONIBLES</span></p>
                <p>• Fiches premiers secours : <span className="font-bold text-emerald-400">EN CACHE LOCAL</span></p>
                <p>• Signal sonore alarme : <span className="font-bold text-emerald-400">DISPONIBLE</span></p>
                <p>• Carte d'urgence : <span className="font-bold text-emerald-400">ACCESSIBLE</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
