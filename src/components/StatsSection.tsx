import React from 'react';

export const StatsSection: React.FC = () => {
  const stats = [
    { value: '24/7', label: 'Assistance virtuelle disponible', desc: 'Orientation continue jour & nuit' },
    { value: 'OFFLINE', label: 'Accès aux ressources essentielles', desc: 'Fonctionne sans réseau mobile' },
    { value: '1', label: 'Plateforme centralisée', desc: 'Numéros, guides, alerte, pharmacies' },
  ];

  return (
    <section className="py-16 bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-red-500/50">
          {stats.map((st, i) => (
            <div key={i} className="pt-6 md:pt-0 px-4 space-y-1">
              <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight block">
                {st.value}
              </span>
              <p className="font-extrabold text-base sm:text-lg">{st.label}</p>
              <p className="text-xs text-red-100 font-medium">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
