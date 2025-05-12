import React from "react";

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children - The label for the button.
 * @param {Function} props.onClick
 * @param {boolean} props.fullWidth
 * @param {string} props.variant
 * @param {boolean} props.darkMode
 * @return {JSX.Element}
 */
const ActionButton = ({
  children,
  onClick,
  fullWidth = false,
  variant = "secondary",
  darkMode,
}) => {
  const baseClasses =
    "flex items-center justify-center gap-1 transition-colors";
  const widthClasses = fullWidth ? "w-full" : "";

  let variantClasses = "";
  if (variant === "primary") {
    variantClasses = darkMode
      ? "bg-indigo-600 text-white hover:bg-indigo-700"
      : "bg-indigo-600 text-white hover:bg-indigo-700";
  } else if (variant === "secondary") {
    variantClasses = darkMode
      ? "bg-gray-700 text-white hover:bg-gray-600"
      : "bg-gray-100 text-gray-800 hover:bg-gray-200";
  } else if (variant === "outline") {
    variantClasses = darkMode
      ? "bg-gray-800 text-white hover:bg-gray-700"
      : "bg-white text-gray-900 hover:bg-gray-50";
  } else if (variant === "badge") {
    variantClasses = darkMode
      ? "bg-indigo-900/50 text-indigo-300 hover:bg-indigo-800/50"
      : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100";
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${widthClasses} ${variantClasses} ${
        variant === "badge"
          ? "px-3 py-1 text-xs font-medium rounded-full"
          : "px-6 py-3 rounded-lg"
      }`}
    >
      {children}
    </button>
  );
};

export default ActionButton;
