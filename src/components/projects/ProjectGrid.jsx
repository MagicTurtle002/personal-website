import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";

/**
 * Grid container for project cards with animation
 * 
 * @param {Object} props
 * @param {Array} props.projects - Array of project data objects
 * @param {Function} props.onOpenModal - Function to open project details modal
 * @param {string|null} props.hoveredProject - ID of currently hovered project
 * @param {Function} props.setHoveredProject - Function to set currently hovered project
 * @param {boolean} props.darkMode - Whether dark mode is enabled
 * @returns {JSX.Element}
 */
const ProjectGrid = ({ projects, onOpenModal, hoveredProject, setHoveredProject, darkMode }) => (
  <motion.div 
    className="mt-12 grid gap-8 sm:mt-16 lg:grid-cols-2"
    variants={{
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2
        }
      }
    }}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    {projects.map((project) => (
      <ProjectCard
        key={project.id}
        project={project}
        onOpenModal={onOpenModal}
        hoveredProject={hoveredProject}
        setHoveredProject={setHoveredProject}
        darkMode={darkMode}
      />
    ))}
  </motion.div>
);

export default ProjectGrid;