import React, { useState } from 'react';
import { Smartphone, Download, ExternalLink, CheckCircle2, ShieldCheck, WifiOff, Globe, Share2, Sparkles, Copy, Check, Info } from 'lucide-react';
import { usePwa } from '../context/PwaContext';

export const PwaInstallBanner: React.FC = () => {
  const { downloadOrInstallPwa, isInstallable, pwaUrl } = usePwa();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'android' | 'ios' | 'desktop'>('android');

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(pwaUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="pwa-installation" className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 text-white relative overflow-hidden border-y border-slate-700">
      {/* Decorative glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-800 text-red-300 text-xs font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            <span>Progressive Web App (PWA) Cloudflare Workers</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Installez E-Secours PWA sans passer par un store
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Accédez instantanément à l'application web progressive hébergée en haute disponibilité sur la plateforme.
          </p>
        </div>

        {/* PWA Main Hero Box */}
        <div className="bg-slate-800/90 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-slate-700 shadow-2xl max-w-4xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-700/80">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-red-600 to-rose-600 flex items-center justify-center text-white shadow-lg shadow-red-600/30 shrink-0">
                <Globe className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <h3 className="text-2xl font-black">PWA E-Secours BJ</h3>
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-md uppercase">
                    100% En Ligne & Hors-Ligne
                  </span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm font-mono break-all text-red-300">
                  {pwaUrl}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              {/* Main Action Button */}
              <button
                onClick={() => downloadOrInstallPwa()}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-sm shadow-xl shadow-red-600/30 transition-all flex items-center justify-center space-x-2 shrink-0 active:scale-98 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{isInstallable ? "Installer la PWA (1-Clic)" : "Ouvrir & Installer la PWA"}</span>
              </button>

              <button
                onClick={handleCopyUrl}
                className="w-full sm:w-auto px-4 py-3.5 rounded-2xl bg-slate-700/80 hover:bg-slate-700 text-slate-200 border border-slate-600 text-xs font-bold transition-all flex items-center justify-center space-x-2 shrink-0"
                title="Copier l'URL PWA"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Copié !" : "Copier le Lien"}</span>
              </button>
            </div>
          </div>

          {/* Key PWA Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-700/80 space-y-1.5">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold">
                <WifiOff className="w-4 h-4" />
                <span>Mise en Cache Off-line</span>
              </div>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                Grâce au Service Worker, les conseils de secours et fiches restent accessibles même sans connexion.
              </p>
            </div>

            <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-700/80 space-y-1.5">
              <div className="flex items-center space-x-2 text-blue-400 font-bold">
                <Smartphone className="w-4 h-4" />
                <span>Écran d'Accueil</span>
              </div>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                S'installe directement comme une application native avec son icône sur votre téléphone.
              </p>
            </div>

            <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-700/80 space-y-1.5">
              <div className="flex items-center space-x-2 text-purple-400 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Mises à jour Auto</span>
              </div>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                Hébergé sur Cloudflare Workers pour un chargement rapide en moins de 100ms.
              </p>
            </div>
          </div>

          {/* Installation Instructions by Platform */}
          <div className="pt-4 border-t border-slate-700/80 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-extrabold text-slate-200 flex items-center space-x-2">
                <Info className="w-4 h-4 text-red-400" />
                <span>Guide d'installation PWA selon votre appareil</span>
              </h4>

              {/* Tabs */}
              <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-700 text-xs font-bold">
                <button
                  onClick={() => setActiveTab('android')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'android' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  Android
                </button>
                <button
                  onClick={() => setActiveTab('ios')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'ios' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  iPhone (iOS)
                </button>
                <button
                  onClick={() => setActiveTab('desktop')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'desktop' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  Ordinateur
                </button>
              </div>
            </div>

            {/* Tab content */}
            <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-700 text-xs text-slate-300 space-y-2">
              {activeTab === 'android' && (
                <ol className="list-decimal list-inside space-y-2 leading-relaxed">
                  <li>Ouvrez le lien <strong className="text-white font-mono">{pwaUrl}</strong> dans votre navigateur Chrome sur Android.</li>
                  <li>Cliquez sur le menu en haut à droite (<strong className="text-white">⋮ 3 petits points</strong>).</li>
                  <li>Sélectionnez <strong className="text-white">« Ajouter à l'écran d'accueil »</strong> ou <strong className="text-white">« Installer l'application »</strong>.</li>
                  <li>L'icône E-Secours s'ajoute immédiatement à vos applications.</li>
                </ol>
              )}

              {activeTab === 'ios' && (
                <ol className="list-decimal list-inside space-y-2 leading-relaxed">
                  <li>Ouvrez <strong className="text-white font-mono">{pwaUrl}</strong> dans Safari sur votre iPhone.</li>
                  <li>Appuyez sur le bouton de <strong className="text-white">Partage <Share2 className="w-3.5 h-3.5 inline text-blue-400" /></strong> en bas au centre de l'écran.</li>
                  <li>Défilez vers le bas et appuyez sur <strong className="text-white">« Sur l'écran d'accueil »</strong>.</li>
                  <li>Validez en cliquant sur <strong className="text-white">« Ajouter »</strong> en haut à droite.</li>
                </ol>
              )}

              {activeTab === 'desktop' && (
                <ol className="list-decimal list-inside space-y-2 leading-relaxed">
                  <li>Ouvrez <strong className="text-white font-mono">{pwaUrl}</strong> dans Google Chrome ou Microsoft Edge.</li>
                  <li>Cliquez sur l'icône d'installation <strong className="text-white">⊕</strong> située à droite de la barre d'adresse.</li>
                  <li>Confirmez l'installation pour créer un raccourci autonome sur votre bureau.</li>
                </ol>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
