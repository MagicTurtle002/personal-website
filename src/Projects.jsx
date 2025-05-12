import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./components/Modal.jsx";
import SectionHeader from "./components/ui/SectionHeader.jsx";
import ProjectGrid from "./components/projects/ProjectGrid.jsx";

/**
 * Main Projects page component
 */
export default function Projects() {
  const [openProject, setOpenProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  
  const darkMode = typeof window !== 'undefined' ? 
    document.documentElement.classList.contains('dark') : false;

  const handleOpenModal = (project) => setOpenProject(project);
  const handleCloseModal = () => setOpenProject(null);
  
  // Project data - structured for easier management
  const projects = [
    {
      id: "pawsitive",
      title: "Pawsitive: Veterinary Record Management",
      shortDescription: "A comprehensive system for veterinary clinics to manage patient records and appointments",
      description: "Pawsitive is a veterinary record management system designed to streamline clinic operations. It helps veterinarians and staff manage patient records, appointments, and communication with pet owners.",
      image: "/pawsitive.png",
      techStack: ["HTML", "CSS", "PHP", "JavaScript"],
      client: "Pet Adventure Veterinary Clinic",
      company: "Pawsitive Team",
      projectType: "Record Management System",
      year: "2024",
      demoLink: "#",
      codeLink: "#",
      purpose: "Pawsitive is designed to streamline clinic operations, helping veterinarians and staff manage patient records, and appointments with pet owners. It aims to improve efficiency and reduce administrative burdens in veterinary clinics.",
      fullDescription: "Pawsitive helps manage patient records, appointments, and communication with pet owners. Built with pure HTML, CSS, and PHP, it ensures a smooth and responsive experience, with dynamic interactivity via JavaScript."
    },
    {
      id: "unleash",
      title: "Unleash Web Portal",
      shortDescription: "An intuitive platform for company order and store management",
      description: "Unleash Web Portal is an intuitive platform designed to streamline the management of company orders, stores, and user accounts.",
      image: "/unleash.png",
      techStack: ["React", "Tailwind CSS", "JavaScript", "Vite"],
      client: "Unleash Web Portal",
      company: "Highly Succeed Inc.",
      projectType: "Web Portal",
      year: "2025",
      demoLink: "#",
      codeLink: "#",
      purpose: "Unleash Web Portal is an intuitive platform built for managing company orders, stores, and user accounts in a streamlined way. It simplifies administrative tasks and enhances operational efficiency.",
      fullDescription: "This system was built with React and Vite, styled using Tailwind CSS, and leverages modern JavaScript to create a responsive, user-friendly experience."
    }
  ];

  return (
    <div id="projects" className={`py-24 sm:py-32`}>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <SectionHeader
          subtitle="My Projects"
          title="Things I've Built Recently"
          description="Here are some of the projects I've worked on. Each project represents a unique challenge and showcases different skills."
          darkMode={darkMode}
        />

        <ProjectGrid
          projects={projects}
          onOpenModal={handleOpenModal}
          hoveredProject={hoveredProject}
          setHoveredProject={setHoveredProject}
          darkMode={darkMode}
        />

        {/* Show more projects button */}
        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a
            href="https://github.com/MagicTurtle002"
            className={`px-6 py-3 rounded-lg flex items-center gap-2 ${
              darkMode 
                ? "bg-gray-800 text-white hover:bg-gray-700" 
                : "bg-white text-gray-900 hover:bg-gray-50"
            } shadow-md hover:shadow-lg transition-all duration-300`}
          >
            <span>View More on GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Modals */}
      {projects.map((project) => (
        openProject === project.id && (
          <Modal
            key={`modal-${project.id}`}
            isOpen={true}
            onClose={handleCloseModal}
            title={project.title}
            purpose={project.purpose}
            description={project.fullDescription}
            techStack={project.techStack}
            client={project.client}
            company={project.company}
            projectType={project.projectType}
            year={project.year}
            darkMode={darkMode}
          />
        )
      ))}
    </div>
  );
}