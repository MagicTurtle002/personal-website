import { useState, useMemo } from "react";
import SectionHeader from "../../ui/SectionHeader";
import CategoryFilter from "../../ui/CategoryFilter";
import ProjectGrid from "./ProjectGrid";
import ProjectStats from "./ProjectStats";
import Modal from "../../ui/Modal/Modal";
import { projects } from "../../../utils/constant";

export default function Projects() {
  const [openProject, setOpenProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [filterCategory, setFilterCategory] = useState("All");

  const handleOpenModal = (projectId) => setOpenProject(projectId);
  const handleCloseModal = () => setOpenProject(null);

  const allCategories = useMemo(
    () => ["All", ...new Set(projects.map((p) => p.projectType))],
    []
  );

  const filteredProjects = useMemo(
    () =>
      filterCategory === "All"
        ? projects
        : projects.filter((p) => p.projectType === filterCategory),
    [filterCategory]
  );

    const displayedProjects = showAllProjects
        ? filteredProjects
        : filteredProjects.slice(0, 2);

    const projectStats = {
        totalProjects: projects.length,
        technologies: [...new Set(projects.flatMap((p) => p.techStack))].length,
        completionRate: 100,
        clientSatisfaction: 98,
    };

  const selectedProject = useMemo(
    () => projects.find((p) => p.id === openProject),
    [openProject]
  );

    return (
        <section
            id="projects"
            className="min-h-screen bg-white relative overflow-hidden -mt-8 sm:-mt-12"
        >
            {/* Background blur and pulse effects – light mode version */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="relative z-10 py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-12">
                        <SectionHeader
                            subtitle="My Portfolio"
                            title="Innovative Solutions &"
                            highlight="Creative Work"
                            description="Explore my collection of meticulously crafted projects that demonstrate cutting-edge technology, innovative problem-solving, and exceptional attention to detail."
                        />
                    </div>

                    <div className="mb-16">
                        <CategoryFilter
                            categories={allCategories}
                            activeCategory={filterCategory}
                            onCategorySelect={setFilterCategory}
                        />
                    </div>

                    <div className="mb-16">
                        <ProjectGrid projects={displayedProjects} onOpenModal={handleOpenModal} />
                    </div>

                    {filteredProjects.length > 2 && (
                        <div className="flex justify-center mb-12">
                            <button
                                onClick={() => setShowAllProjects(!showAllProjects)}
                                className="px-8 py-4 bg-white/70 backdrop-blur-md text-slate-800 rounded-2xl border border-slate-200 hover:border-blue-400/50 hover:bg-white/90 transition-all duration-300 transform hover:scale-105 group shadow-lg hover:shadow-xl"
                            >
                                <span className="flex items-center gap-3">
                                    {showAllProjects
                                        ? "Show Less"
                                        : `Show More (${filteredProjects.length - 2})`}
                                    <svg
                                        className={`w-5 h-5 transition-transform duration-300 ${showAllProjects ? "rotate-180" : ""}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    )}

                    <ProjectStats
                        stats={[
                            { label: "Projects Completed", value: projectStats.totalProjects, suffix: "+" },
                            { label: "Technologies Mastered", value: projectStats.technologies, suffix: "+" },
                            { label: "On-Time Delivery", value: projectStats.completionRate, suffix: "%" },
                            { label: "Client Satisfaction", value: projectStats.clientSatisfaction, suffix: "%" }
                        ]}
                    />

                    <div className="text-center">
                        <a
                            href="https://github.com/MagicTurtle002"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-white to-slate-50 text-slate-800 rounded-2xl border border-slate-200 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 group"
                            aria-label="Explore more projects on GitHub"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58 0-.28-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.54-1.39-1.33-1.76-1.33-1.76-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.8 1.29 3.49.99.1-.78.42-1.29.76-1.59-2.66-.3-5.47-1.34-5.47-5.94 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.53.12-3.2 0 0 1.01-.32 3.3 1.24.96-.27 1.98-.41 3-.41s2.04.14 3 .4c2.3-1.55 3.3-1.23 3.3-1.23.66 1.67.25 2.9.12 3.2.78.85 1.24 1.93 1.24 3.25 0 4.62-2.81 5.63-5.49 5.93.43.37.82 1.1.82 2.22 0 1.61-.01 2.91-.01 3.31 0 .32.22.69.83.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12Z" />
                            </svg>
                            <span className="text-xl font-semibold">Explore More Projects</span>
                            <svg
                                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {selectedProject && (
                <Modal
                    isOpen={!!selectedProject}
                    onClose={handleCloseModal}
                    title={selectedProject.title}
                    description={selectedProject.fullDescription}
                    purpose={selectedProject.purpose}
                    image={selectedProject.image}
                    client={selectedProject.client}
                    company={selectedProject.company}
                    projectType={selectedProject.projectType}
                    year={selectedProject.year}
                    problemSolved={selectedProject.problemSolved}
                    impact={selectedProject.impact}
                    technicalFeatures={selectedProject.technicalFeatures}
                    clientTestimonial={selectedProject.clientTestimonial}
                    demoLink={selectedProject.demoLink}
                    codeLink={selectedProject.codeLink}
                    darkMode={false}
                />
            )}
        </section>
    );
}
