import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Code2, Smartphone, Share2, TrendingUp, Palette } from 'lucide-react';
import { stats, services } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
  Layout: Layout,
  Code2: Code2,
  Smartphone: Smartphone,
  Share2: Share2,
  TrendingUp: TrendingUp,
  Palette: Palette
};

export const AboutWorkflow: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section id="services" className="py-24 relative border-t border-[#E5E1D8] dark:border-[#1F222A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="px-2.5 py-1 text-xs font-mono-tech font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded">
            01 / {lang === 'tr' ? 'HİZMETLERİM' : 'SERVICES'}
          </span>
          <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight uppercase">
            {lang === 'tr' ? 'Ben Ne Yapıyorum' : 'What I Do'}
          </h2>
          <div className="h-px bg-[#E5E1D8] dark:bg-[#1F222A] flex-1 ml-2 hidden sm:block" />
        </div>

        {/* Intro Subtitle */}
        <div className="mb-12 max-w-3xl">
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            "{lang === 'tr' 
              ? 'İhtiyaçlarınızı anlamaktan, bir plan tasarlamaya ve nihai ürünü teslim etmeye kadar her şeyi yapıyorum.'
              : 'From understanding your needs to designing a strategy and delivering the final product, I manage the full lifecycle.'}"
          </p>
        </div>

        {/* Services Grid (6 Core Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, idx) => {
            const IconComponent = iconMap[service.iconName as keyof typeof iconMap] || Code2;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#14161B]/70 border border-[#E5E1D8] dark:border-[#242730] hover:border-emerald-500/40 transition-all duration-300 group shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:text-black transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono-tech text-slate-400 dark:text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {service.title[lang]}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.description[lang]}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Statistics Receipts Strip */}
        <div className="relative p-8 rounded-2xl bg-white dark:bg-[#14161B] border border-[#E5E1D8] dark:border-[#242730] shadow-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <span className="font-editorial font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-1">
                  {stat.value}
                </span>
                <span className="text-xs font-mono-tech font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-0.5">
                  {stat.label[lang]}
                </span>
                <span className="text-[11px] font-mono-tech text-slate-500 dark:text-slate-400">
                  {stat.detail[lang]}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
