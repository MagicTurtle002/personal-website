// src/components/common/Badges.jsx

import { SparklesIcon, CodeBracketIcon } from "@heroicons/react/24/solid";

export const AvailabilityBadge = () => {
  return (
    <div
      className={`relative rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-green-900/10 hover:ring-green-900/20 cursor-pointer transition-all duration-300 hover:scale-105`}
    >
      <span className="flex items-center gap-1">
        <SparklesIcon className="h-3.5 w-3.5 text-emerald-500" />
        AVAILABLE FOR WORK
      </span>
    </div>
  );
};

export const AiBadge = () => {
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 cursor-pointer transition-all duration-300 hover:scale-105`}
    >
      <CodeBracketIcon className="h-4 w-4 text-indigo-500" />
      <span>Human creativity</span>
      <span>+</span>
      <SparklesIcon className="h-4 w-4 text-emerald-500" />
      <span>AI amplification</span>
    </div>
  );
};