import { useState } from "react";
import ThreeColumn from "./SkillsTools.jsx";
import ContactSection from "./Contact.jsx";
import HomePage from "./pages/Home.jsx";
import LiquidGlassNavbar from "./components/common/Header/Header.jsx";
import Project from "./pages/Projects.jsx";
import UnderConstructionSection from "./components/ui/UnderConstruction.jsx";

function App() {

  return (
    <>
      <LiquidGlassNavbar />
      <HomePage />
      <section id="project">
        <UnderConstructionSection sectionName="Projects" />
      </section>
      <section id="skills">
        <ThreeColumn />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}

export default App;
