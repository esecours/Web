import React from 'react';
import { ShieldCheck, Lock, QrCode, Smartphone, Download, CheckCircle2 } from 'lucide-react';

export const EmergencyCardSection: React.FC = () => {
  return (
    <section id="fiche-urgence" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-800 inline-flex items-center space-x-1.5">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Fonctionnalité Embarquée Dans L'Application</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Fiche Médicale d'Urgence & Widget Écran de Verrouillage
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Pour protéger vos données personnelles tout en restant accessible aux secouristes en cas d'inconscience, votre Fiche d'Urgence médicale est <strong className="text-white">configurable et stockée exclusivement sur votre smartphone via l'application mobile E-Secours</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
          {/* Left: Presentation Box */}
          <div className="lg:col-span-7 bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl space-y-6">
            <div className="flex items-center space-x-3 pb-4 border-b border-slate-700">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-md">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-white">Vos données vitales sécurisées dans votre téléphone</h3>
                <p className="text-xs text-slate-400">Stockage 100% local sous votre contrôle strict</p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start space-x-3 p-3.5 bg-slate-900/60 rounded-2xl border border-slate-700/60">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Groupe Sanguin & Allergies</strong>
                  <p className="text-slate-400 text-xs">Accès immédiat par les médecins du SAMU et des urgences pour éviter tout choc transfusionnel ou allergique.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 bg-slate-900/60 rounded-2xl border border-slate-700/60">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Contacts de Confiance (ICE)</strong>
                  <p className="text-slate-400 text-xs">Prevenez vos proches en 1 seul clic dès la prise en charge par les sapeurs-pompiers.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 bg-slate-900/60 rounded-2xl border border-slate-700/60">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Affichage Hors-Ligne & Lock-Screen</strong>
                  <p className="text-slate-400 text-xs">Affiche la carte d'urgence numérique sur l'écran de verrouillage de votre mobile sans devoir déverrouiller le téléphone.</p>
                </div>
              </div>
            </div>

            {/* Privacy Note */}
            <div className="p-4 bg-slate-900/90 border border-slate-700 rounded-2xl text-xs text-slate-400 leading-relaxed flex items-start space-x-2.5">
              <Lock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">Confidentialité & APDP :</strong> Vos données médicales ne sont jamais hébergées sur un serveur web public. Configurez votre profil en toute sérénité dans l'application mobile E-Secours.
              </span>
            </div>

            <div className="pt-2">
              <a
                href="/#telecharger"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('telecharger');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else window.location.hash = '#telecharger';
                }}
                className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-2xl text-sm transition-all shadow-lg shadow-red-600/30 flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Créer ma Fiche Médicale dans l'Application</span>
              </a>
            </div>
          </div>

          {/* Right: Digital Identity Card Mockup Phone Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-xs bg-slate-950 rounded-[3rem] p-4 border-4 border-slate-700 shadow-2xl relative">
              {/* Notch */}
              <div className="w-24 h-4 bg-slate-800 rounded-b-xl mx-auto mb-3"></div>

              {/* Digital Pass Card */}
              <div className="bg-gradient-to-br from-red-600 to-red-800 text-white rounded-2xl p-4 shadow-xl space-y-4 border border-red-500/30">
                <div className="flex items-center justify-between border-b border-white/20 pb-2">
                  <div className="flex items-center space-x-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="font-black text-xs uppercase tracking-wider">E-SECOURS ID</span>
                  </div>
                  <span className="text-[9px] font-bold bg-white/20 px-2 py-0.5 rounded-md">BÉNIN</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-red-200 uppercase">Titulaire</p>
                    <p className="font-extrabold text-sm">BIO KORA Akim</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white text-red-700 font-black text-sm flex items-center justify-center shadow-md">
                    O+
                  </div>
                </div>

                <div className="bg-slate-900/90 text-slate-100 rounded-xl p-3 text-[10px] space-y-1">
                  <p><strong className="text-red-400">Allergie :</strong> Pénicilline</p>
                  <p><strong className="text-emerald-400">Contact :</strong> +229 97 00 00 00</p>
                </div>

                {/* Simulated QR Code */}
                <div className="bg-white p-2.5 rounded-xl flex items-center justify-between">
                  <QrCode className="w-12 h-12 text-slate-900" />
                  <div className="text-right text-[9px] text-slate-700 font-mono">
                    <p className="font-bold text-slate-900">SCAN MEDICAL</p>
                    <p>SAMU BJ #8841</p>
                  </div>
                </div>
              </div>

              <p className="text-center text-[10px] text-slate-400 mt-3 font-mono">Aperçu Widget Écran Mobile</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
