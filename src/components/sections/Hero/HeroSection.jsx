import { motion as Motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import HeroHeading from "./HeroHeading";
import HeroDescription from "./HeroDescription";
import AvailabilityBlock from "../../ui/Badge/AvailabilityBlock";
import FloatingParticles from "../../ui/FloatingParticles";
import LiquidGlassButton from "../../ui/Button/Button";
import Modal from "../../ui/Modal/Modal";
import AboutPage from "../../../pages/AboutPage";

export default function HeroSection() {
  const [darkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const heroRef = useRef(null);
  const textRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: heroRef });
  const isInView = useInView(heroRef, { once: true });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const handleAboutContactClick = () => {
    setShowModal(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section id="home" className="min-h-screen">
        <div className="relative isolate px-6 pt-14 lg:px-8" ref={heroRef}>
          <FloatingParticles darkMode={darkMode} />
          <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56 relative">
            <Motion.div
              className="text-center relative z-10"
              style={{ y: textY }}
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <AvailabilityBlock />
              <HeroHeading darkMode={darkMode} textRef={textRef} />
              <HeroDescription darkMode={darkMode} />
              <div className="mt-8 flex justify-center">
                <Motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <LiquidGlassButton
                    variant="primary"
                    size="md"
                    onClick={() => setShowModal(true)}
                  >
                    About Me
                  </LiquidGlassButton>
                </Motion.div>
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title="About Me"
          darkMode={darkMode}
        >
          <AboutPage
            darkMode={darkMode}
            onContactClick={handleAboutContactClick}
          />
        </Modal>
      )}
    </>
  );
}
