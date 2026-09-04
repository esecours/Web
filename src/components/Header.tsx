import React, { useState } from 'react';
import { Shield, PhoneCall, Menu, X, Download, AlertTriangle, ChevronRight } from 'lucide-react';
import { PageRoute } from '../types';
import { usePwa } from '../context/PwaContext';

interface HeaderProps {
  activePage: PageRoute;
  setActivePage: (page: PageRoute) => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { downloadOrInstallPwa } = usePwa();

  const navItems: { route: PageRoute; label: string }[] = [
    { route: 'accueil', label: 'Accueil' },
    { route: 'apropos', label: 'À propos' },
    { route: 'fonctionnalites', label: 'Fonctionnalités' },
    { route: 'premiers-secours', label: 'Premiers secours' },
    { route: 'centre-urgence', label: 'Centre d\'Urgence' },
    { route: 'faq', label: 'FAQ' },
    { route: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    setActivePage(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('accueil')}
          className="flex items-center space-x-3 group focus:outline-hidden text-left"
        >
          <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white shadow-md shadow-red-600/20 group-hover:scale-105 transition-transform">
            <Shield className="w-6 h-6 stroke-[2.2]" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white"></span>
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-extrabold text-2xl tracking-tight text-slate-900">E-SECOURS</span>
            </div>
            <p className="text-[11px] font-medium text-slate-500 -mt-1">Plateforme Mobile d'Urgence</p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = activePage === item.route;
            return (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
                  isActive
                    ? 'text-red-600 bg-red-50/80 font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={() => handleNavClick('centre-urgence')}
            className="flex items-center space-x-2 px-3.5 py-2.5 rounded-xl text-xs font-bold text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 transition-colors"
          >
            <AlertTriangle className="w-4 h-4 text-red-600" />
            <span>Centre d'Urgence</span>
          </button>

          <button
            onClick={() => downloadOrInstallPwa()}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-md shadow-red-600/20 hover:shadow-lg transition-all active:scale-98 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Télécharger l'application</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            onClick={() => handleNavClick('centre-urgence')}
            className="p-2 rounded-xl bg-red-50 text-red-600 border border-red-200"
            title="Urgence"
          >
            <AlertTriangle className="w-5 h-5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-hidden"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fade-in">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = activePage === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-red-50 text-red-600 font-bold border-l-4 border-red-600'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                downloadOrInstallPwa();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 px-4 rounded-xl font-bold text-white bg-gradient-to-r from-red-600 to-red-700 flex items-center justify-center space-x-2 shadow-md cursor-pointer"
            >
              <Download className="w-5 h-5" />
              <span>Télécharger E-Secours</span>
            </button>

            <button
              onClick={() => handleNavClick('centre-urgence')}
              className="w-full py-3 px-4 rounded-xl font-bold text-red-700 bg-red-50 border border-red-200 flex items-center justify-center space-x-2"
            >
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <span>Centre d'Urgence Mobile</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
