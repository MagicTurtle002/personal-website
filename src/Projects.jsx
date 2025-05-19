import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./components/Modal.jsx";
import SectionHeader from "./components/ui/SectionHeader.jsx";
import ProjectGrid from "./components/projects/ProjectGrid.jsx";
import { projects } from "./utils/constant";

/**
 * Enhanced Projects page component with impressive features
 */
export default function Projects() {
  const [openProject, setOpenProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [filterCategory, setFilterCategory] = useState("All");
  const [animateCounter, setAnimateCounter] = useState(false);

  const darkMode =
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false;

  const handleOpenModal = (project) => setOpenProject(project);
  const handleCloseModal = () => setOpenProject(null);

  // Extract all unique categories from projects
  const allCategories = [
    "All",
    ...new Set(projects.map((project) => project.projectType)),
  ];

  // Filter projects by category and limit display
  const filteredProjects =
    filterCategory === "All"
      ? projects
      : projects.filter((project) => project.projectType === filterCategory);

  const displayedProjects = showAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, 2);

  // Stats for impact section
  const projectStats = {
    totalProjects: projects.length,
    technologies: [...new Set(projects.flatMap((p) => p.techStack))].length,
    completionRate: 100,
    clientSatisfaction: 98,
  };

  // Animate stats counter effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateCounter(true);
        }
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById("project-stats");
    if (statsSection) observer.observe(statsSection);

    return () => {
      if (statsSection) observer.unobserve(statsSection);
    };
  }, []);

  // Simple counter animation
  const Counter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!animateCounter) return;

      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);

        setCount(Math.floor(percentage * end));

        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, animateCounter]);

    return <span>{count}</span>;
  };

  return (
    <div id="projects" className={`py-24 sm:py-32`}>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <SectionHeader
          subtitle="My Portfolio"
          title="Innovative Solutions & Creative Work"
          description="Explore my collection of meticulously crafted projects that demonstrate my expertise, problem-solving skills, and attention to detail."
          darkMode={darkMode}
        />

        {/* Category filter tabs */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setFilterCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                filterCategory === category
                  ? darkMode
                    ? "bg-indigo-600 text-white"
                    : "bg-indigo-500 text-white"
                  : darkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="relative z-10">
          {" "}
          {/* Lower z-index (10) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filterCategory + (showAllProjects ? "-all" : "-limited")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectGrid
                projects={displayedProjects}
                onOpenModal={handleOpenModal}
                hoveredProject={hoveredProject}
                setHoveredProject={setHoveredProject}
                darkMode={darkMode}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Show more/less projects button */}
        {filteredProjects.length > 2 && (
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className={`px-6 py-3 rounded-lg flex items-center gap-2 ${
                darkMode
                  ? "bg-gray-800 text-white hover:bg-gray-700"
                  : "bg-white text-gray-900 hover:bg-gray-50"
              } shadow-md hover:shadow-lg transition-all duration-300`}
            >
              <span>
                {showAllProjects
                  ? "Show Less"
                  : `Show More (${filteredProjects.length - 2})`}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
                className={`transition-transform duration-300 ${
                  showAllProjects ? "rotate-180" : ""
                }`}
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </button>
          </motion.div>
        )}

        {/* Project Impact Stats */}
        <motion.div
          id="project-stats"
          className={`mt-20 p-8 rounded-2xl grid grid-cols-2 md:grid-cols-4 gap-6 ${
            darkMode
              ? "bg-gray-800/60 backdrop-blur-sm"
              : "bg-gray-50 shadow-md"
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center">
            <h3
              className={`text-4xl font-bold ${
                darkMode ? "text-indigo-400" : "text-indigo-600"
              }`}
            >
              <Counter end={projectStats.totalProjects} />+
            </h3>
            <p
              className={`mt-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              Projects Completed
            </p>
          </div>

          <div className="text-center">
            <h3
              className={`text-4xl font-bold ${
                darkMode ? "text-indigo-400" : "text-indigo-600"
              }`}
            >
              <Counter end={projectStats.technologies} />+
            </h3>
            <p
              className={`mt-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              Technologies Used
            </p>
          </div>

          <div className="text-center">
            <h3
              className={`text-4xl font-bold ${
                darkMode ? "text-indigo-400" : "text-indigo-600"
              }`}
            >
              <Counter end={projectStats.completionRate} />%
            </h3>
            <p
              className={`mt-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              On-Time Delivery
            </p>
          </div>

          <div className="text-center">
            <h3
              className={`text-4xl font-bold ${
                darkMode ? "text-indigo-400" : "text-indigo-600"
              }`}
            >
              <Counter end={projectStats.clientSatisfaction} />%
            </h3>
            <p
              className={`mt-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              Client Satisfaction
            </p>
          </div>
        </motion.div>

        {/* Client testimonials section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className={`text-2xl font-bold text-center mb-8 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Client Testimonials
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              className={`p-6 rounded-xl ${
                darkMode
                  ? "bg-gray-800/60 backdrop-blur-sm"
                  : "bg-white shadow-md"
              }`}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    darkMode ? "bg-indigo-600" : "bg-indigo-100"
                  }`}
                >
                  <span
                    className={`text-xl font-bold ${
                      darkMode ? "text-white" : "text-indigo-600"
                    }`}
                  >
                    PA
                  </span>
                </div>
                <div className="ml-4">
                  <h3
                    className={`font-medium ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Pet Adventure
                  </h3>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Veterinary Clinic
                  </p>
                </div>
              </div>
              <p
                className={`italic ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                "The Pawsitive system transformed our clinic operations. Record
                management is now seamless and our staff productivity has
                improved significantly."
              </p>
            </motion.div>

            <motion.div
              className={`p-6 rounded-xl ${
                darkMode
                  ? "bg-gray-800/60 backdrop-blur-sm"
                  : "bg-white shadow-md"
              }`}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    darkMode ? "bg-indigo-600" : "bg-indigo-100"
                  }`}
                >
                  <span
                    className={`text-xl font-bold ${
                      darkMode ? "text-white" : "text-indigo-600"
                    }`}
                  >
                    HS
                  </span>
                </div>
                <div className="ml-4">
                  <h3
                    className={`font-medium ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Highly Succeed Inc
                  </h3>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Web Development
                  </p>
                </div>
              </div>
              <p
                className={`italic ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                "Working with this developer was exceptional. The Unleash Web
                Portal exceeded our expectations and was delivered ahead of
                schedule."
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* GitHub link button */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <a
            href="https://github.com/MagicTurtle002"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-8 py-4 rounded-lg flex items-center gap-3 ${
              darkMode
                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                : "bg-indigo-500 text-white hover:bg-indigo-600"
            } shadow-md hover:shadow-lg transition-all duration-300`}
          >
            <span>Explore More Projects</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Modals */}
      {projects.map(
        (project) =>
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
              problemSolved={project.problemSolved}
              impact={project.impact}
              technicalFeatures={project.technicalFeatures}
            />
          )
      )}
    </div>
  );
}
