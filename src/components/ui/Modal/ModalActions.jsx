export default function ModalActions({ codeLink, darkMode }) {
  if (!codeLink) return null;

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <a
        href={codeLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`px-6 py-3 rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 ${
          darkMode
            ? "bg-gray-800 text-white hover:bg-gray-700"
            : "bg-gray-700 text-white hover:bg-gray-800"
        }`}
      >
        <span>View Source Code</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12..." />
        </svg>
      </a>
    </div>
  );
}
