import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Mail, Terminal, Phone } from 'lucide-react';

import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Radial Gradient Vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#FBF9F4]/70 to-[#FBF9F4] dark:via-[#0B0C0E]/70 dark:to-[#0B0C0E] pointer-events-none" />

      {/* Decorative Technical Corner Plus Marks */}
      <div className="absolute top-28 left-6 sm:left-12 text-slate-400 dark:text-[#2A2E37] font-mono-tech text-xs select-none">+</div>
      <div className="absolute top-28 right-6 sm:right-12 text-slate-400 dark:text-[#2A2E37] font-mono-tech text-xs select-none">+</div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Kicker Badge & Availability Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#14161B] border border-[#E5E1D8] dark:border-[#242730] text-slate-700 dark:text-slate-300 text-xs font-mono-tech shadow-sm">
            <Terminal className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>{personalInfo.kicker[lang]}</span>

          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-400 text-xs font-mono-tech font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 dark:bg-emerald-500"></span>
            </span>
            <span>{personalInfo.availability[lang]}</span>
          </div>
        </motion.div>

        {/* Main Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-editorial text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08] mb-6 max-w-4xl mx-auto"
        >
          {lang === 'tr' ? (
            <>
              Fikirlerinizi <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-blue-600 dark:from-emerald-400 dark:via-teal-300 dark:to-blue-500">yüksek performanslı</span> dijital deneyimlere dönüştürüyorum.
            </>
          ) : (
            <>
              Transforming ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-blue-600 dark:from-emerald-400 dark:via-teal-300 dark:to-blue-500">high-performance</span> digital experiences.
            </>
          )}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          "{personalInfo.subtitle[lang]}"
        </motion.p>

        {/* Action Buttons & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-mono-tech font-semibold text-white dark:text-black bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-400 dark:hover:bg-emerald-300 rounded-xl transition-all duration-200 shadow-md shadow-emerald-500/20 active:scale-95 group"
          >
            <span>{lang === 'tr' ? 'Çalışmalarımı İncele' : 'View Projects'}</span>
            <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-mono-tech font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-[#14161B] border border-[#E5E1D8] dark:border-[#272A30] hover:border-slate-400 dark:hover:border-slate-500 rounded-xl transition-all duration-200 active:scale-95 shadow-sm"
          >
            <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{personalInfo.email}</span>
          </a>

          <a
            href={`tel:${personalInfo.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-mono-tech font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-[#14161B] border border-[#E5E1D8] dark:border-[#272A30] hover:border-slate-400 dark:hover:border-slate-500 rounded-xl transition-all duration-200 active:scale-95 shadow-sm"
          >
            <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>{personalInfo.phone}</span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 text-slate-600 dark:text-slate-400"
        >
          <span className="text-xs font-mono-tech uppercase tracking-widest text-slate-400 dark:text-slate-500 mr-2">CONNECT //</span>
          
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-lg bg-white dark:bg-[#14161B]/60 border border-[#E5E1D8] dark:border-[#242730] text-slate-700 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-200 shadow-sm"
            aria-label="GitHub"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-lg bg-white dark:bg-[#14161B]/60 border border-[#E5E1D8] dark:border-[#242730] text-slate-700 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-200 shadow-sm"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.medium}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-lg bg-white dark:bg-[#14161B]/60 border border-[#E5E1D8] dark:border-[#242730] text-xs font-mono-tech font-bold text-slate-700 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-200 shadow-sm"
          >
            Medium
          </a>
        </motion.div>

      </div>
    </section>
  );
};
