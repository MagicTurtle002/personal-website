import { useState } from "react";
import NavBar from "./components/navbar.jsx";
import HeroSection from "./HeroSection.jsx";
import ThreeColumn from "./SkillsTools.jsx";
import Projects from "./Projects.jsx";
import ExperienceAndEducation from "./Education.jsx";
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
