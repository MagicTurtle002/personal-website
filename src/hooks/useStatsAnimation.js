import { useEffect, useState } from "react";

export const useStatsAnimation = () => {
  const [animateCounter, setAnimateCounter] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setAnimateCounter(true);
      return undefined;
    }

    const statsSection = document.getElementById("project-stats");
    if (!statsSection) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateCounter(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(statsSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return animateCounter;
};
