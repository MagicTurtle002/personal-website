import { motion } from "framer-motion";

const CallToAction = ({ darkMode }) => {
  const bgClass = darkMode
    ? "bg-gradient-to-br from-indigo-900 to-purple-900"
    : "bg-gradient-to-br from-indigo-50 to-purple-50";

  const textClass = darkMode ? "text-white" : "text-gray-900";
  const subtextClass = darkMode ? "text-gray-300" : "text-gray-600";
  const buttonClass = darkMode
    ? "bg-indigo-500 text-white hover:bg-indigo-400"
    : "bg-indigo-600 text-white hover:bg-indigo-500";

  return (
    <motion.section
      className={`p-8 rounded-lg text-center relative overflow-hidden ${bgClass}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, ${
            darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"
          } 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      <h3 className={`text-xl font-bold mb-3 relative z-10 ${textClass}`}>
        Interested in working together?
      </h3>

      <p className={`mb-6 text-base relative z-10 ${subtextClass}`}>
        I'm currently available for freelance projects and job opportunities.
      </p>

      <motion.a
        href="#contact"
        className={`inline-flex items-center px-8 py-3 rounded-lg text-base font-medium ${buttonClass} transition-all duration-300 shadow-lg hover:shadow-xl relative z-10`}
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{ scale: 0.95 }}
      >
        Contact Me
        <motion.svg
          className="ml-2 h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </motion.svg>
      </motion.a>
    </motion.section>
  );
};

export default CallToAction;