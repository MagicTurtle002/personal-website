import React from "react";
import { motion } from "framer-motion";

/**
 * Skill card component with animation
 *
 * @param {Object} props
 * @param {Object} props.skill - Skill data object
 * @param {boolean} props.darkMode - Whether dark mode is enabled
 * @returns {JSX.Element}
 */
const SkillCard = ({ skill, darkMode = false }) => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.2)",
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className={`group relative isolate flex flex-col justify-between overflow-hidden rounded-2xl ${
        darkMode
          ? "bg-gray-800 ring-1 ring-white/10"
          : "bg-white ring-1 ring-gray-900/10 shadow-lg"
      } px-8 pb-8 pt-16`}
    >
      <div>
        <div className="flex items-center gap-x-4 text-xs">
          <a
            href={skill.category.href}
            className="relative z-10 rounded-full bg-indigo-600 px-3 py-1.5 font-medium text-white hover:bg-indigo-500"
          >
            {skill.category.title}
          </a>
        </div>
        <div className="group relative">
          <h3
            className={`mt-4 text-xl font-semibold leading-6 ${
              darkMode
                ? "text-white group-hover:text-indigo-400"
                : "text-gray-900 group-hover:text-indigo-600"
            }`}
          >
            <a href={skill.href}>
              <span className="absolute inset-0" />
              {skill.title}
            </a>
          </h3>
          <p
            className={`mt-4 text-sm leading-6 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {skill.description}
          </p>
        </div>
      </div>

      <div className="relative mt-8 flex items-center gap-x-4">
        <img
          src={skill.author.imageUrl}
          alt=""
          className="h-10 w-10 rounded-full bg-gray-100"
        />
        <div className="text-sm leading-6">
          <p
            className={`font-semibold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            <a href={skill.author.href}>
              <span className="absolute inset-0" />
              {skill.author.name}
            </a>
          </p>
          <p className={darkMode ? "text-gray-400" : "text-gray-500"}>
            {skill.author.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
