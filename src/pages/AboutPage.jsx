import AboutModalContent from "../components/sections/About/AboutModalContent";

const AboutPage = ({ darkMode = false, onContactClick }) => {
  return <AboutModalContent darkMode={darkMode} onContactClick={onContactClick} />;
};

export default AboutPage;
