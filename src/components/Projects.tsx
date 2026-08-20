import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { useLanguage } from '../context/LanguageContext';

export const Projects: React.FC = () => {
  const { lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Corporate',
    'Web Dev',
    'E-Commerce'
  ] as const;

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative border-t border-[#E5E1D8] dark:border-[#1F222A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-xs font-mono-tech font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded">
              02 / {lang === 'tr' ? 'PROJELER' : 'PROJECTS'}
            </span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight uppercase">
              {lang === 'tr' ? 'Bazı Çalışmalarım' : 'Featured Work'}
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white dark:bg-[#14161B] p-1 rounded-xl border border-[#E5E1D8] dark:border-[#242730] shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono-tech rounded-lg transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 dark:bg-emerald-400 text-white dark:text-black font-semibold shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat === 'All' ? (lang === 'tr' ? 'Tümü' : 'All') : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col justify-between rounded-2xl bg-white dark:bg-[#14161B]/80 border border-[#E5E1D8] dark:border-[#242730] hover:border-emerald-500/50 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md"
              >
                {/* Visual Mockup Container */}
                <div className="relative h-52 w-full overflow-hidden bg-black/40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 text-[11px] font-mono-tech font-bold bg-black/75 backdrop-blur-md text-emerald-400 border border-emerald-500/30 rounded-md">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 text-[11px] font-mono-tech bg-black/75 backdrop-blur-md text-slate-300 border border-white/10 rounded-md">
                      {project.year}
                    </span>
                  </div>

                  {/* Hover Quick Action Drawer Button */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 dark:bg-emerald-400 text-white dark:text-black text-xs font-mono-tech font-bold shadow-lg hover:bg-emerald-600 dark:hover:bg-emerald-300 transition-colors cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      <span>{lang === 'tr' ? 'Detayları İncele' : 'Inspect Details'}</span>
                    </button>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-editorial font-bold text-xl text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                      {project.shortDesc[lang]}
                    </p>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded text-[11px] font-mono-tech bg-slate-100 dark:bg-[#1F222A] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Footer Links */}
                    <div className="pt-4 border-t border-[#E5E1D8] dark:border-[#242730] flex items-center justify-between">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="text-xs font-mono-tech text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer font-semibold"
                      >
                        <span>{lang === 'tr' ? 'Detay' : 'Details'}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono-tech font-bold text-emerald-600 dark:text-emerald-400 hover:underline transition-colors"
                      >
                        <span>{lang === 'tr' ? 'Siteyi İncele' : 'Visit Live'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Inspection */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
};
