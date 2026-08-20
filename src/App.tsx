import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutWorkflow } from './components/AboutWorkflow';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { ContactFooter } from './components/ContactFooter';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#FBF9F4] dark:bg-[#0B0C0E] text-slate-900 dark:text-[#E2E8F0] transition-colors duration-300 selection:bg-emerald-500/30 selection:text-emerald-800 dark:selection:text-emerald-300">
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
    </LanguageProvider>
  );
}

export default App;
