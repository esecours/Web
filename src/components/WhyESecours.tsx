import React from 'react';
import { Zap, Heart, WifiOff, MapPin, Bot, ShieldCheck } from 'lucide-react';

export const WhyESecours: React.FC = () => {
  const pillars = [
    {
      title: 'Rapidité',
      desc: 'Accédez aux numéros d\'urgence et fiches vitales en moins de 3 secondes chrono.',
      icon: Zap,
      color: 'bg-red-500 text-white'
    },
    {
      title: 'Accessibilité',
      desc: 'Une interface claire et lisible conçue pour tous les profils d\'utilisateurs.',
      icon: Heart,
      color: 'bg-blue-600 text-white'
    },
    {
      title: 'Disponibilité',
      desc: 'Des ressources stratégiques accessibles 100% hors ligne sans connexion Internet.',
      icon: WifiOff,
      color: 'bg-amber-500 text-white'
    },
    {
      title: 'Localisation',
      desc: 'Identifiez rapidement les pharmacies de garde et hôpitaux disponibles à proximité.',
      icon: MapPin,
      color: 'bg-emerald-600 text-white'
    },
    {
      title: 'Assistance',
      desc: 'Un assistant virtuel IA disponible 24h/24 par texte et par voix.',
      icon: Bot,
      color: 'bg-purple-600 text-white'
    },
    {
      title: 'Prévention',
      desc: 'Apprenez les gestes de premiers secours avant même qu\'une urgence ne survienne.',
      icon: ShieldCheck,
      color: 'bg-cyan-600 text-white'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3.5 py-1 rounded-full border border-red-100">
            Piliers de Valeur
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pourquoi choisir E-Secours ?
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Une technologie pensée pour apporter sécurité, sérénité et réactivité au quotidien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow-xl transition-all duration-300 space-y-4"
              >
                <div className={`w-12 h-12 rounded-2xl ${p.color} flex items-center justify-center shadow-md`}>
                  <Icon className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">{p.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
