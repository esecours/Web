import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';

export const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'E-Secours est-il gratuit ?',
      a: 'Oui. E-Secours est une application totalement gratuite pour tous les citoyens. Toutes les fonctionnalités essentielles (numéros d\'urgence, fiches de premiers secours, fiche médicale, signal sonore, pharmacies de garde) sont accessibles sans abonnement.'
    },
    {
      q: 'E-Secours remplace-t-il les services de secours officiels ?',
      a: 'Non. E-Secours est un outil d\'assistance, d\'orientation et de prévention. Il permet d\'accéder plus rapidement aux numéros d\'urgence (SAMU 112, Pompiers 118, Police 117) et de connaître les premiers gestes à effectuer, mais il ne remplace pas l\'intervention des professionnels de santé.'
    },
    {
      q: 'L\'application fonctionne-t-elle sans connexion Internet ?',
      a: 'Oui. Les numéros d\'urgence, le guide de premiers secours, votre fiche médicale numérique et le signal sonore restent 100% fonctionnels en mode hors ligne sans carte SIM ni connexion Wi-Fi.'
    },
    {
      q: 'Quels numéros d\'urgence sont disponibles dans la plateforme ?',
      a: 'L\'application centralise tous les numéros officiels du Bénin : SAMU (112 / 118), Sapeurs-Pompiers (118), Police Républicaine (117 / 166), Protection Civile (166), CNHU-HKM Cotonou, Hôpital Ménontin, HOMEL et Centre Anti-Poison.'
    },
    {
      q: 'Comment sont protégées mes données personnelles et médicales ?',
      a: 'Vos données médicales (groupe sanguin, allergies, contact de confiance) sont enregistrées de manière chiffrée uniquement dans la mémoire locale de votre appareil. E-Secours respecte strictement les normes de protection des données (APDP Bénin).'
    },
    {
      q: 'Qui peut utiliser E-Secours ?',
      a: 'E-Secours est conçu pour tout le monde : étudiants, travailleurs, parents, conducteurs, voyageurs. Son interface simplifiée a été pensée pour être compréhensible par tous en situation de stress.'
    },
    {
      q: 'L\'application est-elle disponible uniquement au Bénin ?',
      a: 'Le lancement initial et les numéros vérifiés couvrent l\'ensemble du territoire national du Bénin (Cotonou, Abomey-Calavi, Porto-Novo, Parakou, Natitingou, etc.). Une extension progressive vers d\'autres pays de la CEDEAO est prévue.'
    }
  ];

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3.5 py-1 rounded-full border border-red-100">
            Foire Aux Questions
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Questions Fréquemment Posées
          </h1>
          <p className="text-slate-600 text-base">
            Trouvez les réponses aux questions les plus courantes sur la plateforme E-Secours.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left font-bold text-slate-900 text-base sm:text-lg bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-4 transition-colors"
                >
                  <span className="flex items-center space-x-3">
                    <HelpCircle className="w-5 h-5 text-red-600 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />}
                </button>

                {isOpen && (
                  <div className="p-5 bg-white border-t border-slate-100 text-slate-600 text-sm leading-relaxed animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="p-6 bg-slate-900 text-white rounded-3xl text-center space-y-3">
          <ShieldCheck className="w-8 h-8 text-red-500 mx-auto" />
          <h3 className="font-extrabold text-lg">Vous avez une autre question ?</h3>
          <p className="text-slate-300 text-xs max-w-md mx-auto">
            Notre équipe de support est disponible pour vous répondre et vous accompagner dans l'utilisation de l'application.
          </p>
        </div>
      </div>
    </div>
  );
};
