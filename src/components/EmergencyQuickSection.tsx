import React from 'react';
import { PhoneCall, BookOpen, Volume2, UserCheck, Stethoscope, Bot, ArrowRight, Smartphone } from 'lucide-react';
import { PageRoute } from '../types';

interface EmergencyQuickSectionProps {
  setActivePage: (page: PageRoute) => void;
  onTriggerSiren?: () => void;
}

export const EmergencyQuickSection: React.FC<EmergencyQuickSectionProps> = ({ setActivePage }) => {
  const cards = [
    {
      id: 'numeros',
      title: 'Numéros d\'urgence (112, 118, 117)',
      desc: 'Répertoire complet des secours (SAMU, Pompiers, Police), Lignes Vertes du Ministère (dénonciation VBG) et contacts des Centres de Promotion Sociale (CPS) dans l\'app mobile.',
      icon: PhoneCall,
      color: 'bg-red-500 text-white',
      badge: 'Dans l\'App Mobile',
      action: () => setActivePage('telecharger')
    },
    {
      id: 'secours',
      title: 'Guides & Conseils (SSR, Légal, Secours)',
      desc: 'Fiches de secours, conseils sur le cadre légal SSR au Bénin et volet Ministère pour la capitalisation des actions des OSC de jeunes dans l\'application mobile.',
      icon: BookOpen,
      color: 'bg-blue-600 text-white',
      badge: 'App Mobile',
      action: () => setActivePage('premiers-secours')
    },
    {
      id: 'siren',
      title: 'Signal d\'alerte SOS',
      desc: 'Alarme stridente haute fréquence et signal visuel de détresse déclenchable instantanément depuis le smartphone.',
      icon: Volume2,
      color: 'bg-amber-500 text-white',
      badge: 'Alarme Smartphone',
      action: () => setActivePage('telecharger')
    },
    {
      id: 'fiche',
      title: 'Fiche d\'urgence numérique',
      desc: 'Stockage sécurisé de votre groupe sanguin, allergies et contacts d\'urgence directement sur l\'écran de verrouillage mobile.',
      icon: UserCheck,
      color: 'bg-emerald-600 text-white',
      badge: 'ID Médical Mobile',
      action: () => setActivePage('fonctionnalites')
    },
    {
      id: 'sante',
      title: 'Pharmacies & Services de santé',
      desc: 'Localisation GPS des pharmacies de garde, centres de santé et hôpitaux à proximité dans les villes du Bénin.',
      icon: Stethoscope,
      color: 'bg-cyan-600 text-white',
      badge: 'GPS Bénin',
      action: () => setActivePage('fonctionnalites')
    },
    {
      id: 'assistant',
      title: 'Assistant vocal & textuel',
      desc: 'Assistant IA interactif 24/7 intégré dans l\'application mobile pour vous guider en toute sérénité.',
      icon: Bot,
      color: 'bg-purple-600 text-white',
      badge: 'IA Embarquée',
      action: () => setActivePage('fonctionnalites')
    }
  ];

  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3.5 py-1 rounded-full border border-red-100 flex items-center justify-center w-fit mx-auto space-x-1.5">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Fonctionnalités Embarquées Dans L'Application</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Toutes les fonctionnalités d'urgence réunies dans votre téléphone.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Pour des raisons d'efficacité et d'accès hors-ligne instantané, ces services sont directement intégrés dans l'application mobile E-Secours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                onClick={card.action}
                className="group relative bg-slate-50/70 hover:bg-white p-6 rounded-3xl border border-slate-200/80 hover:border-slate-300 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${card.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 bg-white text-slate-700 rounded-lg border border-slate-200 shadow-2xs">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                <div className="flex items-center font-bold text-xs text-red-600 group-hover:text-red-700 pt-3 border-t border-slate-200/60">
                  <span>Voir dans l'application mobile</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
