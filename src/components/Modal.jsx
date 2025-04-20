import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  purpose,
  techStack,
  image,
  children,
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount or modal close
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl bg-black/50"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="relative max-w-4xl w-[90%] rounded-3xl bg-white p-8 shadow-lg backdrop-blur-3xl text-gray-800"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-800 text-3xl hover:text-red-500 transition"
            >
              &times;
            </button>

            {/* Modal Title */}
            {title && (
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
            )}

            {/* Tech Stack (Tags) */}
            {techStack?.length > 0 && (
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
                />
              </div>
            )}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
