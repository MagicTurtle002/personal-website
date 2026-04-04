import { motion as Motion } from "framer-motion";

const introTexts = [
  "Hi, I'm Dan Vincent Teodoro, a web developer and digital content creator. I build responsive, user-friendly websites and applications that solve real problems and deliver seamless experiences.",
  "I specialize in front-end development with React and Vite, and use Tailwind CSS for modern, mobile-friendly designs. I also perform software testing to ensure reliability and usability.",
  "I am a graduate of the Polytechnic University of the Philippines, earning a degree in Information Technology with Latin honors (Cum Laude)."
];

const AboutIntro = ({ darkMode }) => {
  return (
    <Motion.div
      className="space-y-4"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.2 },
        },
      }}
      initial="hidden"
      animate="show"
    >
      {introTexts.map((text, index) => (
        <Motion.p
          key={index}
          className={`${darkMode ? "text-gray-300" : "text-gray-700"} leading-relaxed text-base`}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
        >
          {text}
        </Motion.p>
      ))}

      <Motion.div
        className={`p-4 rounded-lg ${darkMode ? "bg-gray-800 text-gray-300" : "bg-indigo-50 text-gray-700"}`}
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          show: { opacity: 1, scale: 1 },
        }}
        whileHover={{ scale: 1.02 }}
      >
        <p className="leading-relaxed">
          <span className="font-medium">Currently:</span> At PSBD, I develop and deploy responsive websites, perform software testing to ensure reliability, and design digital content that supports company initiatives, enhancing usability and engagement across platforms.
        </p>
      </Motion.div>
    </Motion.div>
  );
};

export default AboutIntro;