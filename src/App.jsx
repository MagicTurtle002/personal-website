import { useEffect, useState } from "react";
import SkillsToolsSection from "./components/sections/Skills/SkillsToolsSection.jsx";
import ContactSection from "./components/sections/Contact/ContactSection.jsx";
import HomePage from "./pages/HomePage.jsx";
import LiquidGlassNavbar from "./components/common/Header/Header.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import SpinningTextLoader from "./components/ui/SpinningTextLoader.jsx";
import PublicationsSection from "./components/sections/Publications/PublicationsSection.jsx";
import ServicesSection from "./components/sections/Services/ServicesSection.jsx";
import ChatbotWidget from "./components/ui/ChatbotWidget.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <main className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="mx-auto w-fit">
            <SpinningTextLoader />
          </div>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-500">
            Loading Portfolio
          </p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <LiquidGlassNavbar />
      <HomePage />
      <ProjectsPage />
      <PublicationsSection />
      <ServicesSection />
      <section id="skills">
        <SkillsToolsSection />
      </section>
      <ContactSection />
      <ChatbotWidget />
    </main>
  );
}

export default App;
