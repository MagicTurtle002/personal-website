// components/ui/DarkModeToggle.jsx
import { useEffect, useState } from "react";

export default function DarkModeToggle({ className = "" }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`z-50 p-2 rounded-full bg-slate-800/70 text-white hover:bg-violet-500 transition ${className}`}
      aria-label="Toggle Dark Mode"
    >
      {isDark ? "🌞" : "🌙"}
    </button>
  );
}