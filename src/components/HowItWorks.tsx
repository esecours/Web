import React from 'react';
import { UserCheck, Smartphone, PhoneCall, HeartPulse, CheckCircle2 } from 'lucide-react';
import { ASSETS } from '../assets/images';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Préparez-vous',
      desc: 'Complétez votre fiche personnelle d\'urgence (groupe sanguin, allergies, contact de confiance).',
      icon: UserCheck,
      color: 'bg-blue-600'
    },
    {
      step: '02',
      title: 'En cas de besoin',
      desc: 'Ouvrez E-Secours en 1 seconde. L\'interface ultra-rapide fonctionne même sans connexion Internet.',
      icon: Smartphone,
      color: 'bg-amber-500'
    },
    {
      step: '03',
      title: 'Alertez',
      desc: 'Utilisez le bouton d\'appel direct (SAMU 112, Pompiers 118, Police 117) ou déclenchez le signal sonore.',
      icon: PhoneCall,
      color: 'bg-red-600'
    },
    {
      step: '04',
      title: 'Agissez',
      desc: 'Consultez les étapes de premiers secours guidées pas à pas en attendant l\'arrivée des secours.',
      icon: HeartPulse,
      color: 'bg-emerald-600'
    }
  ];

  return (
    <section id="comment-ca-marche" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-red-400 bg-red-950/80 px-3.5 py-1 rounded-full border border-red-800">
            Parcours Utilisateur
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comment fonctionne E-Secours ?
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Un processus en 4 étapes simples conçu pour garantir votre sécurité à tout moment au Bénin.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-3xl border border-slate-700/70 hover:border-slate-600 transition-all duration-200 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-slate-500 group-hover:text-red-400 transition-colors font-mono">
                      {s.step}
                    </span>
                    <div className={`w-10 h-10 rounded-xl ${s.color} flex items-center justify-center text-white shadow-md`}>
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{s.desc}</p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-700/50 flex items-center text-xs font-semibold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 mr-1.5" />
                  <span>Étape optimisée</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* West-African User Journey Visual Banner */}
        <div className="mt-16 bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-700">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-red-400 text-xs font-bold uppercase tracking-wider">
              <span>Pensé pour le Bénin & l'Afrique de l'Ouest</span>
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              Une chaîne de secours réactive et connectée
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              En cas d'incident à Cotonou, Porto-Novo ou Parakou, E-Secours accélère le lien entre le citoyen en besoin d'assistance,
              ses proches prévenus et les services d'urgence officiels (SAMU 112, Pompiers 118, Hôpitaux).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
