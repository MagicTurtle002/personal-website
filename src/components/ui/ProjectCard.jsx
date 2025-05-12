import React from "react";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import TechBadge from "../ui/TechBadge";
import ActionButton from "../ui/ActionButton";

/**
 * Card component for displaying project information
 * 
 * @param {Object} props
 * @param {Object} props.project - Project data object
 * @param {Function} props.onOpenModal - Function to open project details modal
 * @param {string|null} props.hoveredProject - ID of currently hovered project
 * @param {Function} props.setHoveredProject - Function to set currently hovered project
 * @param {boolean} props.darkMode - Whether dark mode is enabled
 * @returns {JSX.Element}
 */
const ProjectCard = ({ project, onOpenModal, hoveredProject, setHoveredProject, darkMode }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }}
    className={`group relative rounded-2xl overflow-hidden ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg hover:shadow-xl transition-all duration-300`}
    onMouseEnter={() => setHoveredProject(project.id)}
    onMouseLeave={() => setHoveredProject(null)}
  >
    <div className="relative overflow-hidden h-64">
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      {/* Overlay that appears on hover */}
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-300 ${
          hoveredProject === project.id ? "opacity-100" : "opacity-0"
        } flex items-end justify-between p-6`}
      >
        <div>
          <h3 className="text-xl font-bold text-white">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-gray-200">
            {project.shortDescription}
          </p>
        </div>
        
        {/*<div className="flex gap-2">
          <a 
            href={project.demoLink} 
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
            title="Live Demo"
          >
            <EyeIcon className="h-5 w-5" />
          </a>
          <a 
            href={project.codeLink} 
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
            title="View Code"
          >
            <CodeBracketIcon className="h-5 w-5" />
          </a>
        </div>*/}
      </div>
    </div>
    
    <div className={`p-6 ${darkMode ? "border-t border-gray-700" : ""}`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
            {project.title}
          </h3>
          <p className={`mt-1 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            {project.company} · {project.year}
          </p>
        </div>
        <ActionButton 
          onClick={() => onOpenModal(project.id)} 
          variant="badge" 
          darkMode={darkMode}
        >
          View Details
        </ActionButton>
      </div>
      
      <p className={`mt-3 text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
        {project.description}
      </p>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <TechBadge key={tech} tech={tech} darkMode={darkMode} />
        ))}
      </div>
      
      <div className="mt-5">
        <ActionButton
          onClick={() => onOpenModal(project.id)}
          fullWidth={true}
          variant="secondary"
          darkMode={darkMode}
        >
          <span>Learn more</span>
          <ArrowTopRightOnSquareIcon className="h-4 w-4" />
        </ActionButton>
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;