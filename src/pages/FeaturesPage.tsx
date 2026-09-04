import React, { useState } from 'react';
import { PhoneCall, BookOpen, Volume2, UserCheck, MapPin, Bot, WifiOff, Clock, Share2, CheckCircle2, Download, ArrowRight, Scale, Building2 } from 'lucide-react';
import { EmergencyNumbersSection } from '../components/EmergencyNumbersSection';
import { FirstAidSection } from '../components/FirstAidSection';
import { EmergencyCardSection } from '../components/EmergencyCardSection';
import { SirenSection } from '../components/SirenSection';
import { NearbyHealthSection } from '../components/NearbyHealthSection';
import { AiAssistantSection } from '../components/AiAssistantSection';
import { OfflineModeSection } from '../components/OfflineModeSection';
import { AlertHistorySection } from '../components/AlertHistorySection';
import { PwaInstallBanner } from '../components/PwaInstallBanner';
import { PageRoute } from '../types';
import { usePwa } from '../context/PwaContext';

interface FeaturesPageProps {
  setActivePage: (page: PageRoute) => void;
}

export const FeaturesPage: React.FC<FeaturesPageProps> = ({ setActivePage }) => {
  const [selectedFeature, setSelectedFeature] = useState<number>(0);
  const { downloadOrInstallPwa } = usePwa();

  const features = [
    {
      id: 'num',
      title: "Répertoire des Numéros d'Urgence",
      desc: "Centralise tous les contacts publics essentiels du Bénin (SAMU 112, Pompiers 118, Police 117, CNHU, Anti-Poison) avec déclenchement d'appel direct.",
      icon: PhoneCall,
      color: 'bg-red-600',
      badge: 'Appel 1-Clic',
      targetId: 'numeros-urgence',
      details: [
        "Accès instantané sans recherche dans l'annuaire",
        'Lignes Vertes du Ministère (dénonciation VBG) & Centres de Promotion Sociale (CPS) du Bénin intégrés sur l\'App',
        'Fonctionne avec toutes les puces (MTN, Moov, Celtiis)'
      ]
    },
    {
      id: 'sec',
      title: 'Guide Pédagogique Premiers Secours',
      desc: 'Guides illustrés décrivant pas à pas les gestes qui sauvent (PLS, saignements, brûlures, réanimation, morsures).',
      icon: BookOpen,
      color: 'bg-blue-600',
      badge: 'Fiches Illustrées',
      targetId: 'premiers-secours',
      details: ['Section À FAIRE / À ÉVITER bien distinctes', 'Alertes sur quand appeler les secours professionnels', 'Recherche rapide par mot-clé']
    },
    {
      id: 'cns',
      title: 'Section Conseils & Cadre Légal SSR',
      desc: "Inclus dans l'application mobile : Cadre légal en Santé Sexuelle et Reproductive au Bénin & espace Ministère pour la capitalisation des actions des OSC de jeunes.",
      icon: Scale,
      color: 'bg-purple-600',
      badge: 'App Mobile Exclusive',
      targetId: 'premiers-secours',
      details: [
        'Cadre légal et droits en Santé Sexuelle et Reproductive (SSR) au Bénin',
        'Capitalisation des actions des Organisations de la Société Civile (OSC) de jeunes',
        'Outil de cartographie et d\'identification des organisations pour le Ministère de la Santé'
      ]
    },
    {
      id: 'sir',
      title: "Dispositif d'Alerte Sonore (Sirène SOS)",
      desc: "Émet une alarme stridente à volume maximal pour attirer l'attention des passants et dissuader en cas de danger.",
      icon: Volume2,
      color: 'bg-amber-500',
      badge: 'Alarme Pénétrante',
      targetId: 'signal-sonore',
      details: ['Fréquence modulée haute sensibilité', "Utilisable en cas d'agression ou d'immobilisation", "Bouton d'arrêt d'urgence immédiat"]
    },
    {
      id: 'fic',
      title: "Fiche d'Urgence Médicale (Blood ID)",
      desc: 'Formulaire chiffré stockant groupe sanguin, allergies, traitements vitaux et personne à contacter.',
      icon: UserCheck,
      color: 'bg-emerald-600',
      badge: 'Données Chiffrées',
      targetId: 'fiche-urgence',
      details: ["Accessible depuis l'écran de déverrouillage", '100% stocké localement sur votre téléphone', 'Export sous forme de pass de sécurité']
    },
    {
      id: 'map',
      title: 'Carte & Géolocalisation des Santé',
      desc: 'Localise les pharmacies de garde, hôpitaux et centres de santé disponibles autour de vous au Bénin.',
      icon: MapPin,
      color: 'bg-cyan-600',
      badge: 'Bénin GPS',
      targetId: 'sante-proximite',
      details: ['Filtrage par pharmacies de garde 24h/24', "Lien direct d'itinéraire et contact téléphonique", 'Données actualisées pour Cotonou et régions']
    },
    {
      id: 'ast',
      title: 'Assistant Virtuel Vocal & Texte IA',
      desc: "Propose un dialogue fluide avec l'IA Gemini pour orienter et répondre aux questions de santé courantes.",
      icon: Bot,
      color: 'bg-purple-600',
      badge: 'IA Gemini 24/7',
      targetId: 'assistant-ia',
      details: ['Synthétiseur vocal français (Text-to-Speech)', 'Reconnaissance vocale par micro', 'Disclaimers de sécurité médicale']
    },
    {
      id: 'off',
      title: 'Mode Offline (Hors Ligne)',
      desc: "Garantit que 80% des ressources de l'application restent consultables sans réseau Internet.",
      icon: WifiOff,
      color: 'bg-slate-800',
      badge: 'Zéro Réseau Requis',
      targetId: 'offline-mode',
      details: ['Cache local automatique des guides', 'Consommation de batterie optimisée', 'Idéal pour zones à faible couverture']
    },
    {
      id: 'his',
      title: 'Historique des Alertes & Journal',
      desc: "Journal d'activité retraçant les appels émis, déclenchements de la sirène et fiches partagées.",
      icon: Clock,
      color: 'bg-indigo-600',
      badge: 'Logs Sécurisés',
      targetId: 'historique-alertes',
      details: ['Horodatage précis des événements', 'Sauvegarde sécurisée sur le téléphone', 'Utile pour le suivi médical post-urgence']
    }
  ];

  const current = features[selectedFeature];
  const IconComponent = current.icon;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Top Banner */}
      <section className="pt-16 pb-12 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Title */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-100 px-3.5 py-1 rounded-full border border-red-200">
              Suite Complète de Sécurité
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Toutes les Fonctionnalités de E-Secours
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Découvrez en détail l'ensemble des modules pré-embarqués dans l'application mobile pour vous assister rapidement en toute circonstance.
            </p>
          </div>

          {/* Interactive Feature Browser */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Feature List Column */}
            <div className="lg:col-span-5 space-y-2 max-h-[540px] overflow-y-auto pr-2">
              {features.map((feat, idx) => {
                const Icon = feat.icon;
                const isSelected = selectedFeature === idx;
                return (
                  <button
                    key={feat.id}
                    onClick={() => setSelectedFeature(idx)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-[1.02]'
                        : 'bg-white text-slate-800 hover:bg-slate-100 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-9 h-9 rounded-xl ${feat.color} text-white flex items-center justify-center shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-extrabold text-sm">{feat.title}</p>
                        <p className={`text-[11px] ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                          {feat.badge}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Detailed Preview Card */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-6">
              <div className="flex items-center space-x-4 pb-4 border-b border-slate-100">
                <div className={`w-14 h-14 rounded-2xl ${current.color} text-white flex items-center justify-center shadow-lg`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">{current.badge}</span>
                  <h2 className="text-2xl font-extrabold text-slate-900">{current.title}</h2>
                </div>
              </div>

              <p className="text-slate-600 text-base leading-relaxed">{current.desc}</p>

              <div className="space-y-3 pt-2">
                <h3 className="font-extrabold text-slate-900 text-sm">Avantages clés :</h3>
                {current.details.map((d, i) => (
                  <div key={i} className="flex items-start space-x-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => scrollToSection(current.targetId)}
                  className="text-xs font-bold text-slate-700 hover:text-red-600 flex items-center space-x-1"
                >
                  <span>En savoir plus sur ce module</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => downloadOrInstallPwa()}
                  className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-xs shadow-md transition-all flex items-center space-x-1.5 cursor-pointer active:scale-98"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Obtenir dans l'Application</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED PRESENTATION SECTIONS MOVED FROM HOME */}
      <EmergencyNumbersSection />
      <FirstAidSection />
      <EmergencyCardSection />
      <SirenSection />
      <NearbyHealthSection />
      <AiAssistantSection />
      <OfflineModeSection />
      <AlertHistorySection />
      <PwaInstallBanner />

      {/* FINAL DOWNLOAD CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-red-400 bg-red-950 px-3.5 py-1 rounded-full border border-red-800">
            Application Mobile E-Secours
          </span>
          <h2 className="text-3xl sm:text-4xl font-black">
            Toutes ces fonctionnalités sont à portée de main
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Installez l'application mobile officielle pour sécuriser votre quotidien et celui de vos proches au Bénin.
          </p>
          <div className="pt-4">
            <button
              onClick={() => downloadOrInstallPwa()}
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-base rounded-2xl shadow-xl shadow-red-600/30 transition-all inline-flex items-center space-x-2 cursor-pointer active:scale-98"
            >
              <Download className="w-5 h-5" />
              <span>Télécharger E-Secours Gratuitement</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
