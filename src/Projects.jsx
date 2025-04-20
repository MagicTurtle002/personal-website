import { useState } from "react";
import Modal from "./components/Modal.jsx";

export default function Projects() {
  const [openProject, setOpenProject] = useState(null);

  const handleOpenModal = (project) => setOpenProject(project);
  const handleCloseModal = () => setOpenProject(null);
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base font-semibold text-indigo-600">
          My Projects
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Things I’ve built recently
        </p>
        <div className="mt-10 grid gap-6 sm:mt-16 lg:grid-cols-2">
          {/* Project 1 */}
          <div className="relative bg-white rounded-2xl shadow-md overflow-hidden">
            <div
              onClick={() => handleOpenModal("pawsitive")}
              className="cursor-pointer relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src="/pawsitive.png"
                alt="Project 1"
                className="h-full w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Pawsitive: A veterinary record management system
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Pawsitive is a veterinary record management system designed to
                  streamline clinic operations. It helps veterinarians and staff
                  manage patient records, appointments, and communication with
                  pet owners. Built with pure HTML, CSS, and PHP, this
                  application ensures a smooth and responsive experience.
                  JavaScript is utilized for dynamic interactivity, making it
                  easy for users to navigate and update information.
                </p>
              </div>
            </div>
          </div>

          <div
            onClick={() => handleOpenModal("unleash")}
            className="cursor-pointer relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            {/* Project 2 */}
            <img
              src="/unleash.png"
              alt="Project 2"
              className="h-87 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Unleash Web Portal
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Unleash Web Portal is an intuitive platform designed to
                streamline the management of company orders, stores, and user
                accounts. The portal allows for efficient order tracking, user
                management, and store operations. Developed with React and Vite
                on the front end, this system provides a seamless and responsive
                user experience.
              </p>
            </div>
          </div>
        </div>
        {openProject === "pawsitive" && (
          <Modal
            isOpen={true}
            onClose={handleCloseModal}
            title="Pawsitive: A veterinary record management system"
            purpose="Pawsitive is designed to streamline clinic operations, helping veterinarians and staff manage patient records, and appointments with pet owners. It aims to improve efficiency and reduce administrative burdens in veterinary clinics."
            description="Pawsitive is a veterinary record management system designed to streamline clinic operations. It helps veterinarians and staff manage patient records, appointments, and communication with pet owners. Built with HTML, CSS, and PHP, and enhanced with JavaScript for interactivity."
            techStack={["HTML", "CSS", "PHP", "JavaScript", "MySQL"]}
          />
        )}

        {openProject === "unleash" && (
          <Modal
            isOpen={true}
            onClose={handleCloseModal}
            title="Unleash Web Portal"
            purpose="Unleash Web Portal is an intuitive platform built for managing company orders, stores, and user accounts in a streamlined way. It simplifies administrative tasks and enhances operational efficiency."
            description="This system was built with React and Vite, styled using Tailwind CSS, and leverages modern JavaScript to create a responsive, user-friendly experience."
            techStack={["React", "Tailwind CSS", "JavaScript", "Vite"]}
          />
        )}
      </div>
    </div>
  );
}
