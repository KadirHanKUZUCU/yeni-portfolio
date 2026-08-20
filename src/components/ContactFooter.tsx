import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send, Clock, Phone } from 'lucide-react';

import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { useLanguage } from '../context/LanguageContext';

export const ContactFooter: React.FC = () => {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // Live Local Time ticker
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString(lang === 'tr' ? 'tr-TR' : 'en-US', {
        timeZone: 'Europe/Istanbul',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [lang]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <footer id="contact" className="relative pt-24 pb-12 border-t border-[#E5E1D8] dark:border-[#1F222A] bg-[#FBF9F4] dark:bg-[#0B0C0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="px-2.5 py-1 text-xs font-mono-tech font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded">
            05 / {lang === 'tr' ? 'İLETİŞİM' : 'CONTACT'}
          </span>
          <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight uppercase">
            {lang === 'tr' ? 'İletişime Geçin' : 'Initiate Contact'}
          </h2>
          <div className="h-px bg-[#E5E1D8] dark:bg-[#1F222A] flex-1 ml-2 hidden sm:block" />
        </div>

        {/* Big Editorial CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-editorial text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6"
              >
                {lang === 'tr' ? (
                  <>
                    BİRLİKTE YENİ BİR <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">PROJE İNŞA EDELİM.</span>
                  </>
                ) : (
                  <>
                    LET'S BUILD SOMETHING <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">TOGETHER.</span>
                  </>
                )}
              </motion.h3>

              <p className="text-base text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
                {lang === 'tr' 
                  ? 'Yeni bir web projesi, tasarım ihtiyacı veya teklif için doğrudan e-posta gönderebilir veya telefon ile ulaşabilirsiniz.'
                  : 'Have a new web project, UI/UX inquiry, or partnership opportunity? Drop a message or contact directly.'}
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 max-w-lg mb-8">
              {/* Email Box */}
              <div className="p-4 rounded-xl bg-white dark:bg-[#14161B] border border-[#E5E1D8] dark:border-[#242730] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-tech uppercase tracking-wider text-slate-400 dark:text-slate-500 block">E-POSTA</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-sm font-mono-tech font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-mono-tech font-semibold bg-slate-100 dark:bg-[#1F222A] hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-black text-slate-800 dark:text-slate-200 rounded-lg transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>{lang === 'tr' ? 'Kopyalandı!' : 'Copied!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>{lang === 'tr' ? 'Kopyala' : 'Copy'}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Box */}
              <div className="p-4 rounded-xl bg-white dark:bg-[#14161B] border border-[#E5E1D8] dark:border-[#242730] flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-tech uppercase tracking-wider text-slate-400 dark:text-slate-500 block">TELEFON</span>
                    <a href={`tel:${personalInfo.phone}`} className="text-sm font-mono-tech font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono-tech font-semibold bg-slate-100 dark:bg-[#1F222A] text-slate-800 dark:text-slate-200 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
                >
                  <span>{lang === 'tr' ? 'Ara' : 'Call'}</span>
                </a>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 mb-6">
              <a
                href={personalInfo.medium}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-lg bg-white dark:bg-[#14161B] border border-[#E5E1D8] dark:border-[#242730] text-xs font-mono-tech font-bold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shadow-sm"
              >
                Medium
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white dark:bg-[#14161B] border border-[#E5E1D8] dark:border-[#242730] text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shadow-sm"
                title="Git-Hub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white dark:bg-[#14161B] border border-[#E5E1D8] dark:border-[#242730] text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shadow-sm"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#14161B]/90 border border-[#E5E1D8] dark:border-[#242730] shadow-md">
              <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-6 uppercase">
                {lang === 'tr' ? 'Hızlı Mesaj Gönder' : 'Send Quick Message'}
              </h4>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                  <Check className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <h5 className="font-display font-bold text-slate-900 dark:text-white">
                    {lang === 'tr' ? 'Mesajınız İletildi' : 'Message Dispatched'}
                  </h5>
                  <p className="text-xs font-mono-tech text-slate-600 dark:text-slate-400">
                    {lang === 'tr' ? 'En kısa sürede dönüş yapacağım.' : 'Thanks for reaching out! I will get back to you shortly.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono-tech text-slate-500 dark:text-slate-400 mb-1.5 uppercase">
                      {lang === 'tr' ? 'ADINIZ SOYADINIZ' : 'YOUR NAME'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Ahmet Yılmaz"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#1B1E26] border border-slate-300 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tech text-slate-500 dark:text-slate-400 mb-1.5 uppercase">
                      {lang === 'tr' ? 'E-POSTA ADRESİNİZ' : 'YOUR EMAIL'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="ahmet@sirket.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#1B1E26] border border-slate-300 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tech text-slate-500 dark:text-slate-400 mb-1.5 uppercase">
                      {lang === 'tr' ? 'MESAJINIZ' : 'MESSAGE'}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder={lang === 'tr' ? 'Projeniz veya talebiniz hakkında bilgi verin...' : 'Tell me about your project or inquiry...'}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#1B1E26] border border-slate-300 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 text-xs font-mono-tech font-bold text-white dark:text-black bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-400 dark:hover:bg-emerald-300 rounded-lg transition-colors shadow-md cursor-pointer"
                  >
                    <span>{lang === 'tr' ? 'Mesaj Gönder' : 'Send Message'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Minimalist Footer Strip */}
        <div className="pt-8 border-t border-[#E5E1D8] dark:border-[#1F222A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-slate-500">
          
          <div className="flex items-center gap-2">
            <span>Copyright © {new Date().getFullYear()} Kadir KUZUCU | Tüm Hakları Saklıdır</span>
          </div>

          {/* Live Clock */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 bg-white dark:bg-[#14161B] px-3 py-1 rounded-md border border-[#E5E1D8] dark:border-[#242730] text-emerald-700 dark:text-emerald-400 shadow-sm">
              <Clock className="w-3.5 h-3.5 animate-pulse" />
              <span>{currentTime || '15:37:38 PM'}</span>
            </div>
          </div>


        </div>

      </div>
    </footer>
  );
};
