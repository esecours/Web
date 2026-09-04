import React from 'react';
import { ASSETS } from '../assets/images';

export const AfricanImpactSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-red-400 bg-red-950 px-3.5 py-1 rounded-full border border-red-800">
              Impact & Ancrage Local
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Une technologie pensée pour nos réalités.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              E-Secours est pensé pour répondre aux réalités des populations africaines : connectivité parfois limitée, accès variable aux services d'urgence, besoin d'informations rapides et nécessité de disposer d'outils simples et accessibles.
            </p>

            <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/80 space-y-2">
              <p className="font-bold text-red-400 text-sm">Déploiement Initial : République du Bénin</p>
              <p className="text-xs text-slate-300">
                Couverture prioritaire des communes de Cotonou, Abomey-Calavi, Porto-Novo, Parakou et Bohicon avant extension régionale en Afrique de l'Ouest.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl bg-slate-950 aspect-4/3 relative">
              <img
                src={ASSETS.team}
                alt="Personnel soignant et secouristes d'Afrique de l'Ouest"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold">
                <p className="text-red-400 uppercase font-extrabold text-[10px]">E-Secours HealthTech Africa</p>
                <p className="text-sm font-bold">Un projet conçu par et pour les citoyens ouest-africains.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
