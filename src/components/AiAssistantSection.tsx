import React from 'react';
import { Bot, Smartphone, Download, Sparkles, Mic, Volume2, ShieldCheck, MessageSquare } from 'lucide-react';

export const AiAssistantSection: React.FC = () => {
  return (
    <section id="assistant-ia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-600 bg-purple-50 px-3.5 py-1 rounded-full border border-purple-100 inline-flex items-center space-x-1.5">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Fonctionnalité Embarquée Dans L'Application</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Assistant Virtuel IA Vocale & Textuelle (Gemini)
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Pour vous assister 24h/24 sans dépendre de navigateurs web, l'Assistant IA E-Secours est <strong className="text-slate-900">intégré au cœur de l'application mobile E-Secours</strong> avec support de la synthèse vocale en français.
          </p>
        </div>

        {/* Feature Presentation Card */}
        <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl space-y-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-purple-600 to-red-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-purple-600/30">
              <Bot className="w-10 h-10" />
            </div>

            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center space-x-2 text-purple-400 font-bold text-xs uppercase tracking-wider bg-purple-950/80 px-3 py-1 rounded-full border border-purple-800">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Guidage IA En Français</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black">Orientation Médicale & Assistance 24/7</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Posez vos questions par la voix ou par écrit dans l'application mobile. L'assistant vous aide à identifier les réflexes de secourisme adaptés et vous oriente vers les structures de santé de garde proches au Bénin.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs">
            <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/80 space-y-1">
              <div className="flex items-center space-x-2 text-purple-400 font-bold mb-1">
                <Mic className="w-4 h-4" />
                <span>Dictée Vocale</span>
              </div>
              <p className="text-slate-400 text-[11px]">Parlez naturellement à votre téléphone sans devoir saisir au clavier en situation de stress.</p>
            </div>

            <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/80 space-y-1">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold mb-1">
                <Volume2 className="w-4 h-4" />
                <span>Réponses Audio</span>
              </div>
              <p className="text-slate-400 text-[11px]">Écoutez les instructions étape par étape dictées à voix haute par l'application mobile.</p>
            </div>

            <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/80 space-y-1">
              <div className="flex items-center space-x-2 text-blue-400 font-bold mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Base Locale Bénin</span>
              </div>
              <p className="text-slate-400 text-[11px]">Intègre les contacts du SAMU, des Pompiers et des hôpitaux locaux (CNHU, CHD, etc.).</p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="/#telecharger"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('telecharger');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else window.location.hash = '#telecharger';
              }}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-red-600 to-red-700 hover:from-purple-700 hover:to-red-800 text-white font-bold text-sm shadow-xl shadow-purple-600/25 transition-all inline-flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Tester l'Assistant dans l'Application Mobile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
