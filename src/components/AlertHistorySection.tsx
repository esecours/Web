import React from 'react';
import { Clock, Smartphone, Download, CheckCircle2, ShieldCheck, Lock } from 'lucide-react';

export const AlertHistorySection: React.FC = () => {
  const sampleLogs = [
    {
      title: "Appel d'Urgence SAMU (112)",
      details: "Déclenché depuis Cotonou Haie Vive • Position GPS transmise",
      timestamp: "Aujourd'hui à 14:22",
      type: "Appel Récents"
    },
    {
      title: "Signal Sonore d'Alerte SOS",
      details: "Alarme stridente exécutée pendant 45 secondes",
      timestamp: "Hier à 19:05",
      type: "Alarme SOS"
    },
    {
      title: "Consultation Guide Réanimation",
      details: "Fiche 'Arrêt Cardiaque & Massage' consultée hors-ligne",
      timestamp: "12 Mai à 09:15",
      type: "Guide Consulté"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-700 bg-slate-200 px-3.5 py-1 rounded-full border border-slate-300 inline-flex items-center space-x-1.5">
            <Smartphone className="w-3.5 h-3.5 text-slate-700" />
            <span>Journal de Sécurité Dans L'Application Mobile</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Historique Chiffré des Activités d'Urgence
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Conservez la traçabilité de vos appels de secours, alertes déclenchées et fiches consultées <strong className="text-slate-900">dans le journal sécurisé de votre application mobile</strong>.
          </p>
        </div>

        {/* Dashboard Feed Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-4">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-red-600" />
              <h3 className="font-extrabold text-slate-900 text-base">Aperçu du Journal Mobile E-Secours</h3>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-lg flex items-center space-x-1">
              <Lock className="w-3 h-3 text-emerald-700" />
              <span>Chiffrement Local</span>
            </span>
          </div>

          <div className="space-y-3">
            {sampleLogs.map((log, idx) => (
              <div
                key={idx}
                className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-start justify-between gap-4"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">{log.title}</h4>
                    <p className="text-xs text-slate-600 mt-0.5">{log.details}</p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-[11px] font-semibold text-slate-500 block">{log.timestamp}</span>
                  <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md mt-1 border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Enregistré dans l'App</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 text-center">
            <a
              href="/#telecharger"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('telecharger');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else window.location.hash = '#telecharger';
              }}
              className="text-xs font-bold text-red-600 hover:text-red-700 inline-flex items-center space-x-1"
            >
              <span>Accéder à votre journal complet dans l'application</span>
              <Download className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
