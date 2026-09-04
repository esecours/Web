import React, { useState } from 'react';
import { Download, Smartphone, QrCode, ShieldCheck, WifiOff, CheckCircle2, ArrowRight } from 'lucide-react';
import { PwaInstallBanner } from '../components/PwaInstallBanner';
import { PageRoute } from '../types';
import { ASSETS } from '../assets/images';
import { usePwa } from '../context/PwaContext';

interface DownloadPageProps {
  setActivePage: (page: PageRoute) => void;
}

export const DownloadPage: React.FC<DownloadPageProps> = ({ setActivePage }) => {
  const { downloadOrInstallPwa } = usePwa();
  const [downloading, setDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const handleSimulateDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadComplete(true);
    }, 1500);
  };

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3.5 py-1 rounded-full border border-red-100">
            Téléchargement Gratuit
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Emportez E-Secours partout avec vous
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Téléchargez l'application officielle Android ou installez la PWA instantanée utilisable en mode 100% hors-ligne au Bénin.
          </p>
        </div>

        {/* Download Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Android APK */}
          <div className="bg-slate-50 border-2 border-red-600/30 rounded-3xl p-8 space-y-6 flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="absolute top-4 right-4 bg-red-600 text-white font-bold text-[10px] uppercase px-3 py-1 rounded-full tracking-wider">
              Recommandé Bénin
            </div>
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-md shadow-red-600/30">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Application Android (APK)</h3>
              <p className="text-slate-600 text-sm">
                Fichier d'installation directe APK optimisé pour les réseaux 2G/3G/4G du Bénin (MTN, Moov, Celtiis).
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Taille très réduite : seulement 12.4 Mo</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Mise en cache hors-ligne complète</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Compatible Android 5.0+</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <button
                onClick={() => downloadOrInstallPwa()}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-sm shadow-lg shadow-red-600/20 hover:from-red-700 hover:to-red-800 transition-all flex items-center justify-center space-x-2 cursor-pointer active:scale-98"
              >
                <Download className="w-5 h-5" />
                <span>Télécharger l'application E-Secours</span>
              </button>
            </div>
          </div>

          {/* Card 2: PWA Web App */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6 flex flex-col justify-between hover:shadow-md transition-all">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-md">
                <WifiOff className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Web App (PWA) Directe</h3>
              <p className="text-slate-600 text-sm">
                Ajoutez l'application sur votre écran d'accueil directement depuis votre navigateur Chrome, Safari ou Edge.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zéro espace mémoire requis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Fonctionne sur iOS (iPhone) & Android</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Lancement instantané</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <button
                onClick={() => downloadOrInstallPwa()}
                className="w-full py-4 rounded-2xl bg-slate-900 text-white font-bold text-sm shadow-md hover:bg-slate-800 transition-all flex items-center justify-center space-x-2 cursor-pointer active:scale-98"
              >
                <span>Installer la PWA Immédiatement</span>
                <ArrowRight className="w-4 h-4 text-red-400" />
              </button>
            </div>
          </div>

          {/* Card 3: QR Code & Mobile Sync */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6 flex flex-col justify-between hover:shadow-md transition-all">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                <QrCode className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Scanner le QR Code</h3>
              <p className="text-slate-600 text-sm">
                Pointez la caméra de votre smartphone sur le code ci-dessous pour ouvrir directement E-Secours sur votre téléphone.
              </p>
              <div className="p-4 bg-white rounded-2xl border border-slate-200 w-36 h-36 mx-auto flex items-center justify-center shadow-inner">
                <QrCode className="w-28 h-28 text-slate-800" />
              </div>
            </div>

            <div className="text-center text-xs text-slate-500 font-medium">
              esecours.contactesecours.workers.dev
            </div>
          </div>
        </div>

        {/* PWA Direct Installation Module */}
        <PwaInstallBanner />

        {/* Installation Instructions */}
        <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Guide d'Installation Rapide sur Smartphone</h2>
            <p className="text-slate-300 text-sm">
              Suivez ces étapes simples pour enregistrer l'application en mode permanent hors-ligne.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700 space-y-3">
              <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-black text-sm">1</div>
              <h4 className="font-bold text-white text-base">Ouvrez e-secours.bj</h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                Naviguez sur le site depuis le navigateur de votre smartphone (Google Chrome ou Safari).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700 space-y-3">
              <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-black text-sm">2</div>
              <h4 className="font-bold text-white text-base">Ajoutez à l'écran d'accueil</h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                Appuyez sur le menu (3 points ou bouton de partage) et sélectionnez « Ajouter à l'écran d'accueil ».
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700 space-y-3">
              <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-black text-sm">3</div>
              <h4 className="font-bold text-white text-base">Prêt pour les Urgences</h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                L'icône E-Secours apparaît sur votre téléphone. L'application s'ouvre désormais même sans Internet !
              </p>
            </div>
          </div>
        </div>

        {/* App Showcase Image */}
        <div className="text-center space-y-4">
          <div className="max-w-2xl mx-auto rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
            <img
              src={ASSETS.firstAid}
              alt="E-Secours Interface Mobile"
              className="w-full h-64 object-cover"
            />
          </div>
          <p className="text-xs text-slate-500 font-medium">
            Interface légère optimisée pour tous les modèles de smartphones au Bénin
          </p>
        </div>
      </div>
    </div>
  );
};
