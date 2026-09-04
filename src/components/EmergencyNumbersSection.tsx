import React from 'react';
import { PhoneCall, Smartphone, ShieldCheck, Zap, Lock, Radio, HeartHandshake, PhoneForwarded, Download } from 'lucide-react';

export const EmergencyNumbersSection: React.FC = () => {
  return (
    <section id="numeros-urgence" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-100 px-3.5 py-1 rounded-full border border-red-200 inline-flex items-center space-x-1.5">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Répertoire Intégré dans L'Application Mobile</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Accès direct aux numéros d'urgence via l'Application Mobile
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Pour éviter les duplications et garantir un accès instantané en 1 seul clic même en cas de panne réseau, l'ensemble du répertoire officiel des secours au Bénin est centralisé au cœur de l'application mobile <strong className="text-slate-900">E-Secours</strong>.
          </p>
        </div>

        {/* Informational Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
              <PhoneCall className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-lg">Appels 1-Clic Immédiats</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Composition instantanée vers le SAMU (112/118), les Sapeurs-Pompiers (118), la Police Républicaine (117/166) et le CNHU sans saisir de numéro.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-lg">100% Fonctionnel Hors-Ligne</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Le répertoire téléphonique est pré-embarqué dans la mémoire de votre téléphone. Il reste entièrement accessible même sans données mobiles.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
              <Radio className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-lg">Géolocalisé par Commune</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              L'application adapte automatiquement les numéros d'intervention locale selon votre présence à Cotonou, Abomey-Calavi, Porto-Novo ou Parakou.
            </p>
          </div>
        </div>

        {/* SPECIAL NOTIFICATION BOX: App-exclusive Green Lines & CPS */}
        <div className="max-w-5xl mx-auto mb-12 bg-emerald-950 text-white rounded-3xl p-6 sm:p-8 border border-emerald-700/80 shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-emerald-800">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-2xl bg-emerald-600 text-white shadow-md">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-emerald-300 bg-emerald-900/90 px-3 py-0.5 rounded-full border border-emerald-700">
                  Information Version Application Mobile
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  Lignes Vertes du Ministère de la Santé & Centres Social-Santé
                </h3>
              </div>
            </div>
            <span className="text-xs font-bold text-emerald-200 bg-emerald-900/80 px-3.5 py-1.5 rounded-xl border border-emerald-700/80 shrink-0">
              Disponible sur l'App Mobile
            </span>
          </div>

          <p className="text-emerald-100 text-xs sm:text-sm leading-relaxed">
            Note d'information : La version application mobile d'E-Secours intègre également sur le volet santé les lignes officielles et répertoires d'assistance sociale du Ministère :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="p-4 rounded-2xl bg-emerald-900/60 border border-emerald-700/60 space-y-2">
              <div className="flex items-center space-x-2 text-emerald-300 font-bold text-sm">
                <PhoneForwarded className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Lignes Vertes du Ministère (Santé & VBG)</span>
              </div>
              <p className="text-emerald-200 text-xs leading-relaxed">
                Accès direct à la <strong>Ligne de dénonciation et d'assistance pour les Violences Basées sur le Genre (VBG)</strong> ainsi qu'aux lignes vertes d'écoute et de soutien psychologique du Ministère de la Santé.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-900/60 border border-emerald-700/60 space-y-2">
              <div className="flex items-center space-x-2 text-emerald-300 font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Centres de Promotion Sociale (CPS) du Bénin</span>
              </div>
              <p className="text-emerald-200 text-xs leading-relaxed">
                Répertoire géolocalisé et contacts directs des <strong>Centres de Promotion Sociale (CPS)</strong> répartis dans les 77 communes du Bénin pour la prise en charge sociale et l'accompagnement des victimes.
              </p>
            </div>
          </div>
        </div>

        {/* Notice Banner & Download CTA */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 text-red-400 font-bold text-xs uppercase tracking-wider">
              <Lock className="w-4 h-4" />
              <span>Répertoire Centralisé dans L'Application</span>
            </div>
            <h3 className="text-2xl font-black">Consultez et appelez directement depuis l'application</h3>
            <p className="text-slate-300 text-xs max-w-xl">
              Téléchargez l'application mobile officielle E-Secours sur votre smartphone pour conserver les numéros d'urgence et répertoires du Ministère toujours prêts et utilisables à tout moment.
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
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-sm shadow-lg shadow-red-600/30 transition-all shrink-0 flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Télécharger l'Application</span>
          </a>
        </div>

        {/* Verification notice */}
        <div className="mt-8 text-center text-xs text-slate-500 flex items-center justify-center space-x-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Informations officielles vérifiées auprès des autorités publiques de secours et du Ministère de la Santé du Bénin.</span>
        </div>
      </div>
    </section>
  );
};
