import React, { createContext, useContext, useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

interface PwaContextType {
  pwaUrl: string;
  isInstallable: boolean;
  isInstalled: boolean;
  downloadOrInstallPwa: () => Promise<void>;
}

const PWA_URL = "https://esecours.contactesecours.workers.dev/";

const PwaContext = createContext<PwaContextType>({
  pwaUrl: PWA_URL,
  isInstallable: false,
  isInstalled: false,
  downloadOrInstallPwa: async () => {},
});

export const PwaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const downloadOrInstallPwa = async () => {
    // Trigger prompt if available in browser
    if (deferredPrompt) {
      try {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choice) => {
          if (choice.outcome === 'accepted') {
            setIsInstalled(true);
          }
          setDeferredPrompt(null);
        }).catch((e) => {
          console.log('User choice error:', e);
        });
      } catch (err) {
        console.error('Error triggering PWA install prompt:', err);
      }
    }
    // Directly redirect and open the official PWA platform URL
    window.open(PWA_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <PwaContext.Provider
      value={{
        pwaUrl: PWA_URL,
        isInstallable: !!deferredPrompt,
        isInstalled,
        downloadOrInstallPwa,
      }}
    >
      {children}
    </PwaContext.Provider>
  );
};

export const usePwa = () => useContext(PwaContext);
