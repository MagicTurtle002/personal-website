import { motion as Motion } from "framer-motion";

const ExperienceSection = ({ darkMode }) => {
  const experiences = [
    {
      "title": "Project Management Assistant | Web Developer & Digital Content Creator - Privacy and Security by Design, Inc.",
      "date": "2026",
      "subtitle": "Building modern websites and digital content while ensuring usability and reliability",
      "tasks": [
        "Developed responsive user interfaces using React and Vite",
        "Implemented contact forms and deployment workflows for company websites",
        "Performed software testing to ensure reliable, user-friendly applications",
        "Created social media materials to support marketing campaigns and engagement",
        "Optimized website performance and mobile responsiveness for better user experience"
      ]
    },
    {
      title: "Intern - Highly Succeed Inc.",
      date: "2025",
      subtitle: "Unleash Web Portal - User Management System",
      tasks: [
        "Developed responsive user interfaces with React and Vite",
        "Implemented user management system with role-based permissions",
        "Collaborated with backend team on API integration",
        "Optimized application performance for better user experience"
      ]
    },
    {
      title: "Web Developer - Capstone Project",
      date: "2024",
      subtitle: "Veterinary Record Management System",
      tasks: [
        "Built backend systems using PHP and MySQL",
        "Designed database schema for veterinary records",
        "Implemented user authentication and authorization",
        "Created reports and analytics dashboard for data visualization"
      ]
    }
  ];

  return (
    <Motion.div
      className="py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div className={`absolute left-2 top-0 bottom-0 w-0.5 ${darkMode ? "bg-gray-700" : "bg-gray-200"}`} />

        <ul className="space-y-8">
          {experiences.map((experience, index) => (
            <Motion.li key={index} className="relative pl-10">
              <div className={`absolute left-0 top-1 h-4 w-4 rounded-full border-2 ${darkMode ? "border-indigo-400 bg-gray-900" : "border-indigo-600 bg-white"}`} />
              <div>
                <h4 className={`font-semibold text-lg ${darkMode ? "text-gray-200" : "text-gray-900"}`}>
                  {experience.title}
                </h4>
                <span className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                  {experience.date}
                </span>
                <p className={`text-sm font-medium ${darkMode ? "text-indigo-400" : "text-indigo-600"} mb-3`}>
                  {experience.subtitle}
                </p>
                <ul className={`list-disc pl-5 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} space-y-1`}>
                  {experience.tasks.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </div>
            </Motion.li>
          ))}
        </ul>
      </div>
    </Motion.div>
  );
};

export default ExperienceSection;