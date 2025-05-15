// src/components/common/ScrollIndicator.jsx
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function ScrollIndicator({ targetSection = "#projects" }) {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 1,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.5,
      }}
    >
      <a
        href={targetSection}
        className="text-gray-600" // fixed: remove darkMode logic
        aria-label={`Scroll to ${targetSection.replace('#', '')}`}
      >
        <ArrowDownIcon className="h-6 w-6" />
      </a>
    </motion.div>
  );
}