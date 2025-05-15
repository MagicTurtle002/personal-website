// src/hooks/useScrollSpy.js

import { useState, useEffect } from "react";

export default function useScrollSpy(sections) {
  const [currentSection, setCurrentSection] = useState(sections[0]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Check if page is scrolled to add shadow to navbar
      setIsScrolled(scrollY > 20);

      const sectionOffsets = sections.map((href) => {
        const el = document.querySelector(href);
        return {
          href,
          top: el ? el.offsetTop : 0,
        };
      });

      const current = sectionOffsets
        .reverse()
        .find((section) => scrollY >= section.top - 100);

      if (current) {
        setCurrentSection(current.href);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return { currentSection, isScrolled };
}