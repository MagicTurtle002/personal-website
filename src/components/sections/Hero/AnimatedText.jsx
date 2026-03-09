import { motion as Motion } from "framer-motion";

const AnimatedText = ({ text, className, delay = 0 }) => {
  const letters = text.split("");

  return (
    <Motion.span className={className}>
      {letters.map((letter, index) => (
        <Motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.05,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </Motion.span>
      ))}
    </Motion.span>
  );
};

export default AnimatedText;