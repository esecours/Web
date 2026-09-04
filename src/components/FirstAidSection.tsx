import React from 'react';
import { Smartphone, Download, ShieldCheck, WifiOff, CheckCircle2, AlertTriangle, BookOpen, Scale, Building2, Sparkles } from 'lucide-react';
import { usePwa } from '../context/PwaContext';

export const FirstAidSection: React.FC = () => {
  const { downloadOrInstallPwa } = usePwa();
  return (
    <section id="premiers-secours" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100 inline-flex items-center space-x-1.5">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Guides & Conseils Dans L'Application</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Fiches de Premiers Secours 100% Hors-Ligne
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Pour garantir un affichage instantané et fluide sans dépendre d'une connexion Internet lors d'un accident ou d'un malaise, les fiches illustrées et les guides audio de premiers secours sont <strong className="text-slate-900">directement intégrés dans l'application mobile E-Secours</strong>.
          </p>
        </div>

        {/* Central Presentation Showcase */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-700 space-y-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/30">
              <BookOpen className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black">Accédez aux gestes qui sauvent sur votre téléphone</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Retrouvez dans l'application mobile les protocoles pas-à-pas pour les malaises, étouffements, brûlures, hémorragies, accidents de la route et morsures, avec guides vocaux et schémas d'action.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-700/80 text-xs">
            <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-1">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold mb-1">
                <WifiOff className="w-4 h-4" />
                <span>Disponible Hors-Ligne</span>
              </div>
              <p className="text-slate-400 text-[11px]">Fonctionne sans données mobiles et sans réseau Internet dans tout le Bénin.</p>
            </div>

            <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-1">
              <div className="flex items-center space-x-2 text-blue-400 font-bold mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Schémas & Audio</span>
              </div>
              <p className="text-slate-400 text-[11px]">Instructions guidées par la voix pour intervenir avec calme et précision.</p>
            </div>

            <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-1">
              <div className="flex items-center space-x-2 text-amber-400 font-bold mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Validé Médicalement</span>
              </div>
              <p className="text-slate-400 text-[11px]">Conforme aux protocoles de secourisme d'urgence en vigueur.</p>
            </div>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => downloadOrInstallPwa()}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-sm shadow-xl shadow-red-600/30 transition-all inline-flex items-center space-x-2 cursor-pointer active:scale-98"
            >
              <Download className="w-4 h-4" />
              <span>Consulter les Fiches dans l'Application</span>
            </button>
          </div>
        </div>

        {/* SPECIAL NOTIFICATION BOX: Section "Conseils" in Mobile Application */}
        <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-purple-500/30 shadow-2xl space-y-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-md">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-purple-300 bg-purple-950 px-3 py-0.5 rounded-full border border-purple-800">
                  Section "Conseils" sur l'Application Mobile
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  Cadre Légal SSR & Capitalisation des OSC de Jeunes
                </h3>
              </div>
            </div>
            <span className="text-xs font-bold text-purple-300 bg-purple-900/60 px-3.5 py-1.5 rounded-xl border border-purple-700/80 shrink-0">
              Disponible sur l'App Mobile
            </span>
          </div>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Note d'information : La section <strong>"Conseils"</strong> de la version application mobile d'E-Secours s'enrichit de deux volets d'information essentiels pour le public et les acteurs de santé au Bénin :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-800/90 border border-purple-500/20 space-y-2">
              <div className="flex items-center space-x-2 text-purple-300 font-bold text-sm">
                <Scale className="w-4.5 h-4.5 text-purple-400 shrink-0" />
                <span>Cadre Légal en Santé Sexuelle & Reproductive</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Informations et fiches pratiques sur le <strong>cadre légal et juridique en santé sexuelle et reproductive (SSR) au Bénin</strong> : droits des jeunes et des femmes, lois de protection et directives nationales.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/90 border border-purple-500/20 space-y-2">
              <div className="flex items-center space-x-2 text-indigo-300 font-bold text-sm">
                <Building2 className="w-4.5 h-4.5 text-indigo-400 shrink-0" />
                <span>Volet Ministère de la Santé & OSC de Jeunes</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Espace dédié à la <strong>capitalisation des actions des Organisations de la Société Civile (OSC) de jeunes</strong> et à l'identification des organisations de terrain pour appuyer les décisions du Ministère de la Santé.
              </p>
            </div>
          </div>

          <div className="pt-2 flex justify-center">
            <button
              onClick={() => downloadOrInstallPwa()}
              className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md transition-all inline-flex items-center space-x-2 cursor-pointer active:scale-98"
            >
              <Download className="w-4 h-4" />
              <span>Découvrir la Section Conseils sur l'Application</span>
            </button>
          </div>
        </div>

        {/* Disclaimer Footer Note */}
        <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-2xl text-amber-900 text-xs leading-relaxed max-w-4xl mx-auto flex items-start space-x-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p>
            <strong>Note d'information :</strong> Les gestes de premiers secours constituent une assistance temporaire et ne remplacent pas l'intervention des services d'urgence professionnels.
          </p>
        </div>
      </div>
    </section>
  );
};
