import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const Experience: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section id="experience" className="py-24 relative border-t border-[#E5E1D8] dark:border-[#1F222A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="px-2.5 py-1 text-xs font-mono-tech font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded">
            04 / {lang === 'tr' ? 'DENEYİM' : 'EXPERIENCE'}
          </span>
          <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight uppercase">
            {lang === 'tr' ? 'Kariyer & Deneyim' : 'Career & Experience'}
          </h2>
          <div className="h-px bg-[#E5E1D8] dark:bg-[#1F222A] flex-1 ml-2 hidden sm:block" />
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-6 before:w-px before:bg-[#E5E1D8] dark:before:bg-[#242730]">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-10 sm:pl-16 group"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute left-0 sm:left-2.5 top-1.5 w-7 h-7 rounded-full bg-white dark:bg-[#14161B] border-2 border-emerald-600 dark:border-emerald-400 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-sm">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#14161B]/80 border border-[#E5E1D8] dark:border-[#242730] hover:border-emerald-500/40 transition-all duration-300 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-editorial font-bold text-xl text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {exp.role[lang]}
                    </h3>
                    <span className="text-sm font-mono-tech text-emerald-700 dark:text-emerald-400 font-semibold">
                      @ {exp.company}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono-tech text-slate-600 dark:text-slate-400">
                    <span className="flex items-center gap-1 bg-slate-100 dark:bg-[#1B1E26] px-3 py-1 rounded-md border border-slate-200 dark:border-white/5">
                      <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 bg-slate-100 dark:bg-[#1B1E26] px-3 py-1 rounded-md border border-slate-200 dark:border-white/5">
                      <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {exp.description[lang]}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {exp.highlights[lang].map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-mono-tech text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E5E1D8] dark:border-[#242730]">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono-tech bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
