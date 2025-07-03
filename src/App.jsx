import { useState } from "react";
import ThreeColumn from "./SkillsTools.jsx";
import ContactSection from "./Contact.jsx";
import HomePage from "./pages/Home.jsx";
import LiquidGlassNavbar from "./components/common/Header/Header.jsx";
import Project from "./pages/Projects.jsx";

function App() {

  return (
    <>
      <LiquidGlassNavbar />
      <HomePage />
      <Project />
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
