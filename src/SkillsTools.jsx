import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./components/ui/SectionHeader";
import SkillCard from "./components/ui/SkillCard";

// Using the same skills data structure from your ThreeColumn component
const skills = [
  {
    id: 1,
    title: "Frontend Development",
    href: "#",
    description:
      "Experienced with React, Tailwind CSS, HTML5, CSS3, JavaScript, and Vite. I build clean, responsive, and interactive user interfaces.",
    category: { title: "Frontend", href: "#" },
    author: {
      name: "React & Tailwind",
      role: "UI/UX Tools",
      href: "#",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/919/919851.png", // React logo
    },
  },
  {
    id: 2,
    title: "Backend Development",
    href: "#",
    description:
      "Skilled in PHP and MySQL. I build secure and scalable APIs, work with databases, and manage server-side logic.",
    category: { title: "Backend", href: "#" },
    author: {
      name: "PHP & MySQL",
      role: "Server-side Tools",
      href: "#",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/919/919830.png", // PHP logo
    },
  },
  {
    id: 3,
    title: "Tools & Platforms",
    href: "#",
    description:
      "Comfortable using Git, GitHub, Figma, Postman, VS Code, and cloud platforms like Hostinger for deploying projects.",
    category: { title: "Tools", href: "#" },
    author: {
      name: "Git & Figma",
      role: "Developer Tools",
      href: "#",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png", // GitHub logo
    },
  },
];

/**
 * SkillsGrid component that displays skills with animation
 *
 * @param {Object} props
 * @param {boolean} props.darkMode - Whether dark mode is enabled
 * @returns {JSX.Element}
 */
const SkillsGrid = ({ darkMode = false }) => {
  return (
    <div className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background gradient element */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            transform: "scaleX(-1)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeader
            subtitle="My Skills"
            title="Skills and Tools"
            description="A glimpse into the technologies I use to craft efficient and beautiful digital experiences."
            darkMode={darkMode}
          />
        </div>

        <motion.div
          className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} darkMode={darkMode} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsGrid;
