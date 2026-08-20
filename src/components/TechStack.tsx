import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Cpu, Flame, Palette, TrendingUp } from 'lucide-react';
import { techStack } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
  Layout: Layout,
  Server: Server,
  Database: Database,
  Cpu: Cpu,
  Palette: Palette,
  TrendingUp: TrendingUp
};

export const TechStack: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section id="stack" className="py-24 relative border-t border-[#E5E1D8] dark:border-[#1F222A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="px-2.5 py-1 text-xs font-mono-tech font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded">
            03 / {lang === 'tr' ? 'YETENEKLER' : 'STACK'}
          </span>
          <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight uppercase">
            {lang === 'tr' ? 'Teknik Yetenekler & Araçlar' : 'Technical Toolkit & Competencies'}
          </h2>
          <div className="h-px bg-[#E5E1D8] dark:bg-[#1F222A] flex-1 ml-2 hidden sm:block" />
        </div>

        {/* Stack Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((group, idx) => {
            const IconComponent = iconMap[group.iconName as keyof typeof iconMap] || Cpu;

            return (
              <motion.div
                key={group.category[lang]}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-[#14161B]/80 border border-[#E5E1D8] dark:border-[#242730] hover:border-emerald-500/40 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E5E1D8] dark:border-[#242730]">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                        {group.category[lang]}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono-tech text-slate-400 dark:text-slate-500">
                      [{group.items.length}]
                    </span>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2.5">
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-[#1B1E26]/60 hover:bg-slate-100 dark:hover:bg-[#21242E] transition-colors border border-slate-200 dark:border-white/5"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono-tech font-medium text-slate-800 dark:text-slate-200">
                            {item.name}
                          </span>
                          {item.hot && (
                            <span className="inline-flex items-center text-[10px] text-amber-500 dark:text-amber-400" title="Primary Focus">
                              <Flame className="w-3 h-3 fill-amber-400/20" />
                            </span>
                          )}
                        </div>
                        <span className={`text-[10px] font-mono-tech px-2 py-0.5 rounded font-semibold ${
                          item.level === 'Expert' 
                            ? 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-400 border border-emerald-500/30'
                            : item.level === 'Advanced'
                            ? 'bg-blue-500/15 text-blue-800 dark:text-blue-400 border border-blue-500/30'
                            : 'bg-slate-200 dark:bg-slate-700/30 text-slate-700 dark:text-slate-400'
                        }`}>
                          {item.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
