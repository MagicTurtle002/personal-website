export const ProjectCard = ({ project, onOpenModal }) => {
  const buttonLabel = project.buttonLabel ?? "View Project Details";
  const hasLiveSite = Boolean(project.demoLink);

  return (
    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/90 via-slate-50/80 to-white/90 backdrop-blur-xl border border-slate-200/50 hover:border-blue-400/50 transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-2 shadow-lg hover:shadow-xl">
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>

      <div className="relative z-10 h-56 sm:h-60 overflow-hidden rounded-t-3xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>

        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 text-xs font-bold bg-blue-500/90 text-white rounded-full">
            {project.year}
          </span>
        </div>
      </div>

      <div className="relative z-10 p-8">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 text-xs font-semibold bg-blue-500/10 text-blue-600 rounded-full border border-blue-500/20">
            {project.projectType}
          </span>
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
        </div>

        <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
          {project.purpose}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-slate-100/70 text-slate-600 rounded-lg border border-slate-200/50 hover:border-blue-400/50 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {hasLiveSite ? (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noreferrer"
            className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50 group inline-flex items-center justify-center"
          >
            <span className="flex items-center justify-center gap-2">
              {buttonLabel}
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
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
            </span>
          </a>
        ) : (
          <button
            type="button"
            onClick={() => onOpenModal(project.id)}
            className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50 group"
          >
            <span className="flex items-center justify-center gap-2">
              {buttonLabel}
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
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
            </span>
          </button>
        )}
      </div>
    </div>
  );
};
