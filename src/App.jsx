import { useState } from "react";
import HeroSection from "./HeroSection.jsx";
import ThreeColumn from "./SkillsTools.jsx";
import Projects from "./Projects.jsx";
import ContactSection from "./Contact.jsx";

function App() {

  return (
    <>
      <section id="home">
        <HeroSection />
      </section>
      <section id="projects">
        <Projects />
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
