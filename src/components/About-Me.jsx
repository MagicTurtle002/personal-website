// src/components/AboutMe.jsx
export default function AboutMe() {
    return (
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">My Journey</h2>
  
        <div className="relative border-l-4 border-indigo-600 pl-6 space-y-10">
          {/* Education */}
          <div>
            <div className="absolute -left-3.5 top-1 w-7 h-7 rounded-full bg-indigo-600 border-4 border-white"></div>
            <h3 className="text-xl font-semibold text-indigo-700">
              Bachelor of Science in Information Technology
            </h3>
            <p className="text-sm text-gray-500">Polytechnic University of the Philippines, 2020 - 2025</p>
            <p className="mt-2 text-gray-700">Focused on software development, systems analysis, and web technologies.</p>
          </div>
  
          {/* Internship */}
          <div>
            <div className="absolute -left-3.5 top-1 w-7 h-7 rounded-full bg-indigo-600 border-4 border-white"></div>
            <h3 className="text-xl font-semibold text-indigo-700">Intern, Web Developer</h3>
            <p className="text-sm text-gray-500">Unleash Web Portal · March 2025 – Present</p>
            <p className="mt-2 text-gray-700">Developed a user-management system using React, Vite, and Tailwind CSS.</p>
          </div>
  
          {/* Add more timeline items as needed */}
        </div>
      </section>
    );
  }
  