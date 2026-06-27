import { motion as Motion } from "framer-motion";
import SectionHeader from "../../ui/SectionHeader";
import { skillsTools as skills } from "../../../utils/constants";

/**
 * SkillsGrid component that displays skills with animation
 *
 * @param {Object} props
 * @param {boolean} props.darkMode - Whether dark mode is enabled
 * @returns {JSX.Element}
 */
const SkillsToolsSection = ({ darkMode = false }) => {
  const logoItems = skills.map((skill) => ({
    id: skill.id,
    label: skill.author?.name ?? skill.title,
    imageUrl: skill.author?.imageUrl,
  }));

  return (
    <div className="relative overflow-hidden py-20 sm:py-24">
      {/* Background gradient element */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            transform: "scaleX(-1)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeader
            subtitle="My Skills"
            title="Skills and Tools"
            description="A responsive logo grid that keeps every skill visible on one page while preserving each brand's original color."
            darkMode={darkMode}
          />
        </div>

        <Motion.div
          className="mx-auto mt-12 max-w-7xl rounded-[2.5rem] border border-slate-200/80 bg-white/85 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-sm dark:border-white/10 dark:bg-slate-950/60 sm:p-6 lg:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
            {logoItems.map((item) => (
              <div
                key={item.id}
                className="flex min-h-32 items-center justify-center rounded-[1.5rem] bg-slate-50/90 px-5 py-7 shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(15,23,42,0.1)] dark:bg-white/5"
              >
                <img
                  src={item.imageUrl}
                  alt={item.label}
                  className="h-16 w-full object-contain sm:h-18"
                  loading="lazy"
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </Motion.div>
      </div>
    </div>
  );
};

export default SkillsToolsSection;
