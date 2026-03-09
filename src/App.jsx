import ThreeColumn from "./SkillsTools.jsx";
import ContactSection from "./Contact.jsx";
import HomePage from "./pages/Home.jsx";
import LiquidGlassNavbar from "./components/common/Header/Header.jsx";
import Projects from "./pages/Projects.jsx";

function App() {
  return (
    <main>
      <LiquidGlassNavbar />
      <HomePage />
      <Projects />
      <section id="skills">
        <ThreeColumn />
      </section>
      <ContactSection />
    </main>
  );
}

export default App;
