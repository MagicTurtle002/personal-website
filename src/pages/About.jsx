import AboutModalContent from "../components/sections/About/About";

const AboutModalPage = ({ darkMode = false, onContactClick }) => {
  return <AboutModalContent darkMode={darkMode} onContactClick={onContactClick} />;
};

export default AboutModalPage;
