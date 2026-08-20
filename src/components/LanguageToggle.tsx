import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageToggle: React.FC = () => {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      aria-label="Toggle language"
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-[#E5E1D8] dark:border-[#272A30] bg-white/90 dark:bg-[#14161B]/80 backdrop-blur-md text-slate-700 dark:text-slate-300 hover:border-emerald-500 transition-all duration-200 cursor-pointer shadow-sm text-xs font-mono-tech font-bold"
    >
      <Globe className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
      <span className={lang === 'tr' ? 'text-emerald-600 dark:text-emerald-400 font-extrabold' : 'text-slate-400'}>TR</span>
      <span className="text-slate-300 dark:text-slate-600">|</span>
      <span className={lang === 'en' ? 'text-emerald-600 dark:text-emerald-400 font-extrabold' : 'text-slate-400'}>EN</span>
    </button>
  );
};
