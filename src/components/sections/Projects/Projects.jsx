import { useState, useMemo, lazy, Suspense } from "react";
import SectionHeader from "../../ui/SectionHeader";
import CategoryFilter from "../../ui/CateogryFilter";
import ProjectGrid from "./ProjectGrid";
import ProjectStats from "./ProjectStats";
import { projects } from "../../../utils/constant";

// Lazy load the modal
const ModalImpact = lazy(() => import("../../ui/Modal/ModalImpact"));

export default function Projects() {
    const [openProject, setOpenProject] = useState(null);
    const [showAllProjects, setShowAllProjects] = useState(false);
    const [filterCategory, setFilterCategory] = useState("All");

    const handleOpenModal = (project) => setOpenProject(project);
    const handleCloseModal = () => setOpenProject(null);

    const allCategories = ["All", ...new Set(projects.map((p) => p.projectType))];

    const filteredProjects =
        filterCategory === "All"
            ? projects
            : projects.filter((p) => p.projectType === filterCategory);

    const displayedProjects = showAllProjects
        ? filteredProjects
        : filteredProjects.slice(0, 2);

    const projectStats = {
        totalProjects: projects.length,
        technologies: [...new Set(projects.flatMap((p) => p.techStack))].length,
        completionRate: 100,
        clientSatisfaction: 98,
    };

    const selectedProject = useMemo(() => {
        return projects.find((p) => p.id === openProject);
    }, [openProject]);

    return (
        <div
            id="projects"
            className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
        >
            {/* Background blur and pulse effects – disable temporarily if performance is poor */}
            {/* <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div> */}

            <div className="relative z-10 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <SectionHeader
                        badgeText="My Portfolio"
                        title="Innovative Solutions &"
                        highlight="Creative Work"
                        description="Explore my collection of meticulously crafted projects that demonstrate cutting-edge technology, innovative problem-solving, and exceptional attention to detail."
                    />

                    <CategoryFilter
                        categories={allCategories}
                        activeCategory={filterCategory}
                        onCategorySelect={setFilterCategory}
                    />

                    <ProjectGrid
                        projects={displayedProjects}
                        onOpenModal={handleOpenModal}
                    />

                    {filteredProjects.length > 2 && (
                        <div className="flex justify-center mb-20">
                            <button
                                onClick={() => setShowAllProjects(!showAllProjects)}
                                className="px-8 py-4 bg-slate-800/50 backdrop-blur-md text-white rounded-2xl border border-slate-700/50 hover:border-violet-500/50 transition-all duration-300 transform hover:scale-105 group"
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
                            className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-2xl border border-slate-700 hover:border-violet-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20 group"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12..." />
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

            {/* Optimized Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in">
                    <div className="relative w-full max-w-4xl max-h-[90vh] overflow-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-slate-700/50 shadow-2xl scrollbar-hide">
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-6 right-6 w-10 h-10 bg-slate-800/50 hover:bg-red-500/20 border border-slate-700/50 hover:border-red-500/50 rounded-full flex items-center justify-center text-slate-400 hover:text-red-400 transition-all duration-300 z-10 group"
                        >
                            <svg
                                className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        <div className="relative z-10 p-8">
                            <div className="mb-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="px-4 py-2 text-sm font-semibold bg-violet-500/20 text-violet-300 rounded-full border border-violet-500/30">
                                        {selectedProject.projectType}
                                    </span>
                                    <span className="px-4 py-2 text-sm font-semibold bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30">
                                        {selectedProject.year}
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                                        <span className="text-sm text-slate-400">Live Project</span>
                                    </div>
                                </div>

                                <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 mb-4 leading-tight">
                                    {selectedProject.title}
                                </h3>

                                <p className="text-xl text-violet-300 font-semibold mb-4">
                                    {selectedProject.purpose}
                                </p>

                                <p className="text-lg text-slate-300 leading-relaxed">
                                    {selectedProject.fullDescription}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                                {/* Technical Features */}
                                <div className="p-6 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/50">
                                    <h4 className="text-xl font-bold text-white mb-6">Technical Features</h4>
                                    <ul className="space-y-3">
                                        {selectedProject.technicalFeatures?.map((feature, i) => (
                                            <li key={i} className="text-slate-300">{feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Stack */}
                                <div className="p-6 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/50">
                                    <h4 className="text-xl font-bold text-white mb-6">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {selectedProject.techStack?.map((tech, i) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-2 text-sm bg-slate-700/50 text-slate-300 rounded-xl border border-slate-600/50"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <Suspense fallback={<div className="text-center text-slate-300">Loading Impact...</div>}>
                                <ModalImpact impact={selectedProject.impact} darkMode={true} />
                            </Suspense>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                .animate-in {
                    animation: modalFadeIn 0.3s ease-out;
                }

                @keyframes modalFadeIn {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
            `}</style>
        </div>
    );
}