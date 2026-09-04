import React from 'react';
import { X, ShieldCheck, FileText, Lock, Building } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'data' | 'mentions' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] flex flex-col border border-slate-100 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-3">
            {type === 'privacy' && <Lock className="w-5 h-5 text-red-500" />}
            {type === 'terms' && <FileText className="w-5 h-5 text-blue-500" />}
            {type === 'data' && <ShieldCheck className="w-5 h-5 text-emerald-500" />}
            {type === 'mentions' && <Building className="w-5 h-5 text-amber-500" />}
            <h3 className="font-bold text-lg">
              {type === 'privacy' && 'Politique de Confidentialité'}
              {type === 'terms' && 'Conditions Générales d\'Utilisation'}
              {type === 'data' && 'Protection des Données (APDP Bénin)'}
              {type === 'mentions' && 'Mentions Légales — E-Secours'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-slate-700 text-sm leading-relaxed">
          {type === 'privacy' && (
            <>
              <p className="font-semibold text-slate-900">Engagement pour la protection de la vie privée à E-Secours Bénin</p>
              <p>
                La confidentialité de vos données médicales et personnelles est la priorité absolue d’E-Secours.
                Toutes les informations enregistrées dans l’application (Fiche d’Urgence, antécédents, contacts) restent stockées
                de manière sécurisée et chiffrée sur votre appareil local.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">1. Données collectées</h4>
              <p>
                En mode vitrine ou démonstration, aucune donnée personnelle sensible n’est transmise à nos serveurs sans votre consentement explicite.
                Votre géolocalisation est utilisée uniquement au niveau du navigateur/téléphone pour calculer la distance vers les hôpitaux ou pharmacies de garde environnantes.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">2. Usage des informations en cas d’urgence</h4>
              <p>
                Votre Fiche d’Urgence est conçue pour être partagée à votre initiative (via QR code ou écran dédié) avec les secours professionnels (SAMU, Pompiers) lors d’une intervention.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p className="font-semibold text-slate-900">Avertissement et Responsabilités</p>
              <p>
                E-Secours est une plateforme mobile d’assistance, d’orientation et de prévention. Elle ne constitue pas un établissement de santé et ne délivre pas de diagnostic médical ou d’ordonnance.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">1. Rôle d’assistance et non de substitution</h4>
              <p>
                Les conseils de premiers secours fournis sont purement pédagogiques et indicatifs. En cas de détresse vitale grave, vous devez prioritairement contacter directement les services d’urgence compétents au Bénin (SAMU 112/118, Pompiers 118, Police Secours 117).
              </p>
            </>
          )}

          {type === 'data' && (
            <>
              <p className="font-semibold text-slate-900">Conformité Loi N° 2017-20 / APDP Bénin</p>
              <p>
                Conformément au cadre juridique de la République du Bénin réagissant la protection des données à caractère personnel (APDP),
                vous disposez d’un droit permanent d’accès, de rectification, de suppression et d’opposition à l’égard de vos données.
              </p>
              <p className="p-3 bg-emerald-50 text-emerald-900 rounded-lg border border-emerald-200">
                🔒 Vos informations médicales sensibles restent sous votre contrôle exclusif et bénéficient d'un stockage chiffré sur l'appareil.
              </p>
            </>
          )}

          {type === 'mentions' && (
            <>
              <p className="font-semibold text-slate-900">Éditeur du site officiel E-Secours</p>
              <p><strong>Plateforme :</strong> E-Secours Bénin</p>
              <p><strong>Siège Social :</strong> Quartier Haie Vive, Avenue de la Marina, Cotonou, République du Bénin</p>
              <p><strong>Email Officiel :</strong> contactesecours@gmail.com</p>
              <p><strong>Directeur de Publication :</strong> Équipe E-Secours HealthTech Africa</p>
              <p><strong>Hébergement :</strong> Infrastructure Cloud Run Sécurisée</p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
