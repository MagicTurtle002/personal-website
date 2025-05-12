import { span } from "framer-motion/client";
import React from "react";

/**
 * @param {Object} props
 * @param {string} props.tech
 * @param {boolean} props.darkMode
 * @return {JSX.Element}
 */

const TechBadge = ({ tech, darkMode }) => {
  <span
    className={`px-2 py-1 text-xs font-medium rounded-full ${
      darkMode ? "bg-gray-700/70 text-gray-300" : "bg-gray-100 text-gray-800"
    }`}
  >
    {tech}
  </span>;
};

export default TechBadge;
