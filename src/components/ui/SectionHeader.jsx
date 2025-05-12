import React from 'react';
import { motion } from 'framer-motion';

/**
 * @param {Object} props
 * @param {string} props.title - The title of the section.
 * @param {string} props.subtitle - The subtitle of the section.
 * @param {string} props.description - The description of the section.
 * @param {boolean} props.darkMode - Whether to use dark mode styling.
 * @return {JSX.Element}
 */
const SectionHeader = ({ title, subtitle, description, darkMode = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className={`text-center text-base font-semibold ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}>
      {subtitle}
    </h2>
    <p className={`mx-auto mt-2 max-w-lg text-center text-4xl font-bold tracking-tight ${darkMode ? "text-white" : "text-gray-900"} sm:text-5xl`}>
      {title}
    </p>
    <p className={`mx-auto mt-6 max-w-2xl text-center text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
      {description}
    </p>
  </motion.div>
);

export default SectionHeader;