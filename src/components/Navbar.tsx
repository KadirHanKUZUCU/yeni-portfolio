import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Terminal, Phone, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const { lang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: lang === 'tr' ? 'Hizmetler' : 'Services', href: '#services' },
    { name: lang === 'tr' ? 'Projeler' : 'Projects', href: '#projects' },
    { name: lang === 'tr' ? 'Yetenekler' : 'Stack', href: '#stack' },
    { name: lang === 'tr' ? 'Deneyim' : 'Experience', href: '#experience' },
    { name: lang === 'tr' ? 'İletişim' : 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-[#FBF9F4]/90 dark:bg-[#0B0C0E]/85 backdrop-blur-xl border-b border-[#E5E1D8] dark:border-[#1F222A] shadow-md shadow-black/5' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a 
            href="#" 
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:text-black transition-all duration-300">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {personalInfo.name}
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-mono-tech font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 rounded">
                  {personalInfo.version}
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/90 dark:bg-[#14161B]/80 border border-[#E5E1D8] dark:border-[#242730] px-4 py-1.5 rounded-full backdrop-blur-md shadow-sm">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3.5 py-1.5 text-xs font-mono-tech text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#1F222A] rounded-full transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            <LanguageToggle />
            <ThemeToggle />
            
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono-tech font-semibold text-white dark:text-black bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-400 dark:hover:bg-emerald-300 rounded-lg transition-all duration-200 shadow-sm cursor-pointer active:scale-95"
            >
              <span>{lang === 'tr' ? 'İletişime Geç' : 'Get in Touch'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white dark:bg-[#14161B] border border-[#E5E1D8] dark:border-[#272A30] text-slate-800 dark:text-slate-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-[#E5E1D8] dark:border-[#242730] bg-[#FBF9F4]/95 dark:bg-[#0B0C0E]/95 backdrop-blur-2xl"
          >
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm font-mono-tech text-slate-800 dark:text-slate-200 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}

              <div className="pt-3 border-t border-[#E5E1D8] dark:border-[#242730] space-y-2">
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-2 text-xs font-mono-tech text-slate-600 dark:text-slate-400"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{personalInfo.phone}</span>
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 text-xs font-mono-tech text-slate-600 dark:text-slate-400"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{personalInfo.email}</span>
                </a>
                
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-mono-tech font-semibold text-white dark:text-black bg-emerald-600 dark:bg-emerald-400 rounded-lg shadow-md"
                >
                  <span>{lang === 'tr' ? 'İletişime Geç' : 'Get in Touch'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
