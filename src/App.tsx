import { useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutWorkflow } from './components/AboutWorkflow';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { ContactFooter } from './components/ContactFooter';

const MarqueeTitle = () => {
  const { lang } = useLanguage();

  useEffect(() => {
    const fullText = lang === 'tr' 
      ? 'Kadir Kuzucu — Front-End Developer & Yazılım Uzmanı • Web & Mobil Uygulama • '
      : 'Kadir Kuzucu — Front-End Developer & Software Engineer • Web & Mobile Apps • ';
    
    let currentText = fullText;

    const interval = setInterval(() => {
      currentText = currentText.substring(1) + currentText.substring(0, 1);
      document.title = currentText;
    }, 200);

    return () => clearInterval(interval);
  }, [lang]);

  return null;
};

function AppContent() {
  return (
    <div className="min-h-screen bg-[#FBF9F4] dark:bg-[#0B0C0E] text-slate-900 dark:text-[#E2E8F0] transition-colors duration-300 selection:bg-emerald-500/30 selection:text-emerald-800 dark:selection:text-emerald-300">
      <MarqueeTitle />
      
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <AboutWorkflow />
        <Projects />
        <TechStack />
        <Experience />
      </main>

      {/* Footer & Contact Section */}
      <ContactFooter />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
