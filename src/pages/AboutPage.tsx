import React from 'react';
import { ShieldCheck, Heart, Eye, Target, Users, Lock, Compass, Sparkles } from 'lucide-react';
import { ASSETS } from '../assets/images';

export const AboutPage: React.FC = () => {
  const values = [
    { title: 'Sécurité', desc: 'Priorité absolue donnée à l\'intégrité physique et la protection de l\'utilisateur.', icon: ShieldCheck, color: 'text-red-600 bg-red-100' },
    { title: 'Accessibilité', desc: 'Interfaces universelles faciles à appréhender même en situation de stress.', icon: Heart, color: 'text-blue-600 bg-blue-100' },
    { title: 'Innovation', desc: 'IA générative et mode offline au service de la santé publique africaine.', icon: Sparkles, color: 'text-purple-600 bg-purple-100' },
    { title: 'Solidarité', desc: 'Renforcement du réseau de soutien citoyen et des secours d\'urgence.', icon: Users, color: 'text-emerald-600 bg-emerald-100' },
    { title: 'Responsabilité', desc: 'Orientation rigoureuse en parfaite complémentarité avec les autorités.', icon: Compass, color: 'text-amber-600 bg-amber-100' },
    { title: 'Confidentialité', desc: 'Stockage local chiffré et respect strict de la vie privée (APDP Bénin).', icon: Lock, color: 'text-cyan-600 bg-cyan-100' },
  ];

  return (
    <div className="py-16 bg-white space-y-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3.5 py-1 rounded-full border border-red-100">
          À Propos de E-Secours
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          La technologie au service de l'assistance et de la vie.
        </h1>
        <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
          E-Secours est une initiative HealthTech & Emergency Tech conçue pour transformer la gestion des urgences au Bénin et en Afrique de l'Ouest.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-4 border border-slate-800 shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center text-white">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-extrabold text-white">Notre Mission</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Centraliser, simplifier et accélérer l'accès aux numéros d'urgence, conseils de premiers secours, fiches médicales et services de santé pour chaque citoyen, quel que soit son niveau de connectivité.
          </p>
        </div>

        <div className="bg-gradient-to-br from-red-600 to-red-800 text-white p-8 rounded-3xl space-y-4 shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
            <Eye className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-extrabold text-white">Notre Vision</h2>
          <p className="text-red-100 text-sm leading-relaxed">
            Créer une Afrique de l'Ouest où chaque citoyen, face à une situation de détresse ou de danger, dispose instantanément des outils et de l'orientation nécessaires pour réagir avec calme et sauver des vies.
          </p>
        </div>
      </div>

      {/* Values Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-3xl font-extrabold text-slate-900">Nos Valeurs Fondatrices</h2>
          <p className="text-slate-600 text-sm">Les principes qui guident la conception et l'évolution d'E-Secours.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <div className={`w-10 h-10 rounded-xl ${v.color} flex items-center justify-center font-bold`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* African HealthTech Team Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-red-400">Notre Approche</span>
          <h2 className="text-3xl font-extrabold">Technologie + Prévention + Orientation</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            E-Secours réunit des ingénieurs logiciels, des professionnels de santé béninois et des spécialistes des urgences pour développer des solutions robustes adaptées au terrain africain.
          </p>
        </div>

        <div className="lg:col-span-6 rounded-2xl overflow-hidden aspect-16/9 bg-slate-950">
          <img
            src={ASSETS.team}
            alt="Équipe HealthTech Africaine"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
