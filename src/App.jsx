import { useState } from "react";
import NavBar from "./components/navbar.jsx";
import HeroSection from "./hero-section.jsx";
import ThreeColumn from "./three-column.jsx";
import AboutMe from "./About-Me.jsx";
import Projects from "./Projects.jsx";
import ExperienceAndEducation from "./Education.jsx";
import ContactSection from "./Contact.jsx";

function App() {
  const [count, setCount] = useState(0);

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
