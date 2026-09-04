import React from 'react';
import { ShieldAlert, Smartphone, Download, PhoneCall, Volume2, MapPin, CheckCircle2, Lock } from 'lucide-react';

export const EmergencyCenterPage: React.FC = () => {
  return (
    <div className="py-16 bg-slate-950 text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="bg-red-950/90 border-2 border-red-600 rounded-3xl p-8 text-center space-y-4 shadow-2xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-red-600 text-white text-xs font-black uppercase rounded-full tracking-wider">
            <Smartphone className="w-4 h-4" />
            <span>Centre d'Urgence Intégré au Smartphone</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Centre d'Urgence Mobile E-Secours
          </h1>

          <p className="text-red-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Pour assurer des appels d'urgence instantanés sans latence et un fonctionnement 100% hors-ligne en situation de détresse au Bénin, toutes les commandes d'urgence sont <strong className="text-white">centralisées dans l'application mobile E-Secours</strong>.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-900 rounded-3xl border border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center font-bold shadow-lg">
              <PhoneCall className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Appels Directs 1-Clic</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Composition immédiate vers le SAMU (112/118), les Sapeurs-Pompiers (118) et la Police Républicaine (117) depuis l'écran principal de votre téléphone.
            </p>
          </div>

          <div className="p-6 bg-slate-900 rounded-3xl border border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center font-bold shadow-lg">
              <Volume2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Déclencheur Sirène SOS</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Activation d'un signal d'alarme sonore de détresse à volume maximal pour attirer les secours à proximité immédiate.
            </p>
          </div>

          <div className="p-6 bg-slate-900 rounded-3xl border border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-lg">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Partage GPS Automatique</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Génération des coordonnées géographiques précises pour envoi instantané par SMS / WhatsApp aux services d'assistance.
            </p>
          </div>

          <div className="p-6 bg-slate-900 rounded-3xl border border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center font-bold shadow-lg">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Fiche Médicale sur Écran de Verrouillage</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Affichage sécurisé du groupe sanguin, des allergies et du contact à prévenir directement sur votre mobile.
            </p>
          </div>
        </div>

        {/* Download Call-To-Action Box */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-8 sm:p-10 text-center space-y-6 shadow-2xl border border-red-500/30">
          <div className="max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black">Installez l'Application Mobile E-Secours</h2>
            <p className="text-red-100 text-xs sm:text-sm">
              Conservez le Centre d'Urgence à portée de main sur l'écran d'accueil de votre téléphone. Gratuit, léger (12.4 Mo) et 100% hors-ligne.
            </p>
          </div>

          <a
            href="/#telecharger"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('telecharger');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else window.location.hash = '#telecharger';
            }}
            className="px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 font-extrabold text-sm rounded-2xl shadow-xl transition-all inline-flex items-center space-x-2.5"
          >
            <Download className="w-5 h-5 text-red-600" />
            <span>Télécharger l'Application Maintenant</span>
          </a>
        </div>
      </div>
    </div>
  );
};
