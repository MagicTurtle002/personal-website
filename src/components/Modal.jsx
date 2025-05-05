import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  purpose,
  techStack = [],
  image,
  client,
  company,
  projectType,
  year,
  children,
}) {
  const modalRef = useRef(null);

  // Handle keyboard events and focus trapping
  useEffect(() => {
    if (!isOpen) return;

    // Lock body scroll
    document.body.style.overflow = "hidden";

    // Focus trap and keyboard handling
    const handleKeyDown = (e) => {
      // Close on ESC key
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Add event listener
    window.addEventListener("keydown", handleKeyDown);

    // Focus the modal when it opens
    if (modalRef.current) {
      modalRef.current.focus();
    }

    // Clean up
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl bg-black/50"
          onClick={onClose}
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-title"
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="relative max-w-4xl w-[90%] max-h-[90vh] overflow-hidden rounded-3xl bg-white p-8 shadow-xl backdrop-blur-3xl text-gray-800 flex flex-col"
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
          >
            {/* Close button with improved accessibility */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-800 hover:text-red-500 transition p-2 rounded-full bg-gray-100 hover:bg-gray-200 z-10"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              {/* Modal Title */}
              {title && (
                <h2 id="modal-title" className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
              )}

              {/* Tech Stack (Tags) */}
              {techStack.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-indigo-600 text-white text-sm font-semibold py-2 px-4 rounded-full shadow-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
              {/* Project Info (Client, Company, Project Type, Year) */}
              {(client || company || projectType || year) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {client && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-sm font-semibold text-gray-500">
                        Client
                      </h4>
                      <p className="text-base text-gray-700">{client}</p>
                    </div>
                  )}
                  {company && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-sm font-semibold text-gray-500">
                        Company
                      </h4>
                      <p className="text-base text-gray-700">{company}</p>
                    </div>
                  )}
                  {projectType && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-sm font-semibold text-gray-500">
                        Project Type
                      </h4>
                      <p className="text-base text-gray-700">{projectType}</p>
                    </div>
                  )}
                  {year && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-sm font-semibold text-gray-500">
                        Year
                      </h4>
                      <p className="text-base text-gray-700">{year}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Project Purpose */}
              {purpose && (
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
                    Project Purpose
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-600">
                    {purpose}
                  </p>
                </div>
              )}

              {/* Project Description */}
              {description && (
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
                    Description
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-600">
                    {description}
                  </p>
                </div>
              )}

              {/* Optional Image */}
              {image && (
                <div className="w-full mb-6">
                  <img
                    src={image}
                    alt={title ?? "Project Image"}
                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Additional Content */}
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}