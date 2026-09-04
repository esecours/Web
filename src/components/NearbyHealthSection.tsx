import React from 'react';
import { MapPin, Smartphone, Download, Compass, ShieldCheck, Stethoscope, Hospital } from 'lucide-react';
import { usePwa } from '../context/PwaContext';

export const NearbyHealthSection: React.FC = () => {
  const { downloadOrInstallPwa } = usePwa();
  return (
    <section id="sante-proximite" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-200 inline-flex items-center space-x-1.5">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Fonctionnalité Embarquée Dans L'Application</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pharmacies de Garde & Carte Interactive des Hôpitaux du Bénin
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Pour une géolocalisation GPS fluide en temps réel et un guidage d'itinéraire précis, l'annuaire interactif des centres de santé est <strong className="text-slate-900">intégré au sein de l'application mobile E-Secours</strong>.
          </p>
        </div>

        {/* Informational Presentation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-lg">Pharmacies de Garde 24/7</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Mise à jour en temps réel de la liste des officines ouvertes de nuit et les week-ends à Cotonou, Porto-Novo, Parakou et Calavi.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              <Hospital className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-lg">Hôpitaux & Maternités</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Coordonnées directes et services de garde du CNHU, HIA, CHUD, hôpitaux de zone et centres pédiatriques du Bénin.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-lg">Itinéraire GPS & Distance</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Calcul automatique de la distance exacte et guidage cartographique vers l'établissement de santé le plus proche.
            </p>
          </div>
        </div>

        {/* Notice Banner & Download CTA */}
        <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-3xl p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Carte GPS Disponible dans l'App Mobile</span>
            </div>
            <h3 className="text-2xl font-black">Localisez les centres de santé en 1 clic</h3>
            <p className="text-slate-300 text-xs max-w-xl">
              Téléchargez l'application mobile E-Secours pour ouvrir la carte interactive et retrouver immédiatement les officines de garde sur votre téléphone.
            </p>
          </div>

          <button
            onClick={() => downloadOrInstallPwa()}
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-sm shadow-lg shadow-red-600/30 transition-all shrink-0 flex items-center space-x-2 cursor-pointer active:scale-98"
          >
            <Download className="w-4 h-4" />
            <span>Ouvrir dans l'Application</span>
          </button>
        </div>
      </div>
    </section>
  );
};
