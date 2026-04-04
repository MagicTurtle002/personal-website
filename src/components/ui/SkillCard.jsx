import { motion as Motion } from "framer-motion";

/**
 * Skill card component with animation
 *
 * @param {Object} props
 * @param {Object} props.skill - Skill data object
 * @param {boolean} props.darkMode - Whether dark mode is enabled
 * @returns {JSX.Element}
 */
const SkillCard = ({ skill, darkMode = false }) => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.2)",
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <Motion.div
      variants={cardVariants}
      whileHover="hover"
      className={`group relative isolate flex h-full flex-col justify-between overflow-hidden rounded-2xl ${
        darkMode
          ? "bg-gray-800 ring-1 ring-white/10"
          : "bg-white/90 ring-1 ring-gray-900/10 shadow-lg"
      } px-6 pb-6 pt-6`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div>
        <div className="relative">
          <h3
            className={`mt-4 text-xl font-semibold leading-6 ${
              darkMode
                ? "text-white group-hover:text-indigo-400"
                : "text-gray-900 group-hover:text-indigo-600"
            }`}
          >
            {skill.title}
          </h3>
          <p
            className={`mt-4 text-sm leading-6 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {skill.description}
          </p>

          {skill.stack?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {skill.stack.map((item) => (
                <span
                  key={item}
                  className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                    darkMode
                      ? "bg-gray-700 text-gray-200"
                      : "bg-indigo-50 text-indigo-700"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="relative mt-8 flex items-center gap-x-4">
        <img
          src={skill.author.imageUrl}
          alt={skill.author.name}
          className="h-10 w-10 rounded-full bg-gray-100"
        />
        <div className="text-sm leading-6">
          <p
            className={`font-semibold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {skill.author.name}
          </p>
          <p className={darkMode ? "text-gray-400" : "text-gray-500"}>
            {skill.author.role}
          </p>
        </div>
      </div>
    </Motion.div>
  );
};

export default SkillCard;
