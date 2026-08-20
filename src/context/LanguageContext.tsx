import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>('tr');

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') as Language | null;
    if (savedLang && (savedLang === 'tr' || savedLang === 'en')) {
      setLangState(savedLang);
    } else {
      // Auto-detect based on browser locale / navigator
      const userLang = navigator.language || (navigator as any).userLanguage || '';
      if (userLang.toLowerCase().includes('tr')) {
        setLangState('tr');
      } else {
        setLangState('en');
      }

      // Optional fast IP check (non-blocking fallback)
      fetch('https://ipapi.co/json/')
        .then(res => res.json())
        .then(data => {
          if (!savedLang && data && data.country_code) {
            const isTurkey = data.country_code === 'TR';
            setLangState(isTurkey ? 'tr' : 'en');
          }
        })
        .catch(() => {
          // Fallback silently to browser language
        });
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('lang', newLang);
  };

  const toggleLang = () => {
    const nextLang = lang === 'tr' ? 'en' : 'tr';
    setLang(nextLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
