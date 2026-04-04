export default function ModalHeader({
  title,
  techStack = [],
  demoLink,
  codeLink,
  darkMode,
}) {
  const hasDemoLink = Boolean(demoLink && demoLink !== "#");
  const hasCodeLink = Boolean(codeLink && codeLink !== "#");

  return (
    <div className="mb-6 pr-14">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        {title && (
          <h2
            id="modal-title"
            className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            {title}
          </h2>
        )}

        {(hasDemoLink || hasCodeLink) && (
          <div className="flex flex-wrap items-center gap-3 sm:justify-end">
            {hasDemoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold shadow-md transition-all duration-300 hover:shadow-lg ${
                  darkMode
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                <span>View Live Demo</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            )}

            {hasCodeLink && (
              <a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold shadow-md transition-all duration-300 hover:shadow-lg ${
                  darkMode
                    ? "bg-gray-800 text-white hover:bg-gray-700"
                    : "bg-gray-700 text-white hover:bg-gray-800"
                }`}
              >
                <span>View Source Code</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12..." />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>

      {techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className={`text-sm font-semibold py-2 px-4 rounded-full shadow-md ${
                darkMode ? "bg-indigo-700 text-white" : "bg-indigo-600 text-white"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
