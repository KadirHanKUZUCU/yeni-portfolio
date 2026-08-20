import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { lang } = useLanguage();

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Dialog Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-white dark:bg-[#14161B] border border-[#E5E1D8] dark:border-[#272A30] rounded-2xl shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Header Image */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-black">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#14161B] via-transparent to-black/40" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-white backdrop-blur-md transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Category & Year Badges */}
            <div className="absolute bottom-4 left-6 flex items-center gap-2">
              <span className="px-3 py-1 rounded-md text-xs font-mono-tech font-bold bg-emerald-600 dark:bg-emerald-500 text-white dark:text-black">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-mono-tech bg-black/60 backdrop-blur-md text-slate-200 border border-white/10">
                {project.year}
              </span>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="font-editorial font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {project.fullDesc[lang]}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h4 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                {lang === 'tr' ? 'ÖNE ÇIKAN ÖZELLİKLER & MİMARİ' : 'KEY HIGHLIGHTS & ARCHITECTURE'}
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.highlights[lang].map((h, i) => (
                  <li key={i} className="p-3 rounded-lg bg-slate-100 dark:bg-[#1B1E26] text-xs font-mono-tech text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/5">
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                {lang === 'tr' ? 'KULLANILAN TEKNOLOJİLER' : 'TECH STACK USED'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-md text-xs font-mono-tech bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-[#E5E1D8] dark:border-[#272A30] flex flex-wrap items-center justify-between gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono-tech font-semibold text-white dark:text-black bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-400 dark:hover:bg-emerald-300 rounded-lg transition-colors"
              >
                <span>{lang === 'tr' ? 'Siteyi İncele ↗' : 'Visit Live Site ↗'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onClose}
                className="text-xs font-mono-tech text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
              >
                [ {lang === 'tr' ? 'Kapat' : 'Close'} ]
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
