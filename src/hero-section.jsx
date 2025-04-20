"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Modal from "./components/Modal.jsx";

// This is the list of section IDs you'll track (in order)
const sections = ["#home", "#projects", "#skills", "#contact"];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("#home");

  const [openProject, setOpenProject] = useState(null);

  const handleOpenModal = (project) => setOpenProject(project);
  const handleCloseModal = () => setOpenProject(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const sectionOffsets = sections.map((href) => {
        const el = document.querySelector(href);
        return {
          href,
          top: el ? el.offsetTop : 0,
        };
      });

      const current = sectionOffsets
        .reverse()
        .find((section) => scrollY >= section.top - 100);

      if (current) {
        setCurrentSection(current.href);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (href) =>
    `relative text-sm font-semibold transition-colors duration-300 ${
      currentSection === href
        ? "text-indigo-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-indigo-600"
        : "text-gray-900 hover:text-indigo-600"
    }`;

  return (
    <div className="bg-white">
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-transparent backdrop-blur-md transition-opacity duration-300 ${
          openProject === "unleash" || openProject === "about"
            ? "opacity-0 pointer-events-none"
            : "opacity-100"
        }`}
      >
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Dan Teodoro</span>
              <img className="h-8 w-auto" src="" alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="size-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex lg:gap-x-12">
            {sections.map((href) => {
              const name =
                href === "#"
                  ? "Home"
                  : href
                      .replace("#", "")
                      .replace(/^\w/, (c) => c.toUpperCase());
              return (
                <a key={href} href={href} className={linkClass(href)}>
                  {name}
                </a>
              );
            })}
          </nav>
        </nav>

        {/* Mobile Menu */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Dan Teodoro</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="size-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {sections.map((href) => {
                    const name =
                      href === "#"
                        ? "Home"
                        : href
                            .replace("#", "")
                            .replace(/^\w/, (c) => c.toUpperCase());
                    return (
                      <a
                        key={href}
                        href={href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold ${
                          currentSection === href
                            ? "bg-indigo-50 text-indigo-600"
                            : "text-gray-900 hover:bg-gray-50"
                        }`}
                      >
                        {name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Hero Content */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Background Blur Elements */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        {/* Main Hero Text */}
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div onClick={() => handleOpenModal("unleash")} className="">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Latest Project.{" "}
                <a href="#" className="font-semibold text-indigo-600">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              Dan Vincent Teodoro
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Web developer and passionate about creating impactful solutions
              through clean and efficient code. Always eager to learn and
              improve.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#projects"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View my work
              </a>
              <a
                onClick={() => handleOpenModal("about")}
                className="text-sm font-semibold text-gray-900 cursor-pointer"
              >
                About Me <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Second Background Blur */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
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
        {openProject === "about" && (
          <Modal isOpen={true} onClose={handleCloseModal} title="About Me">
            <p>
              Hi, I’m Dan Vincent Teodoro, a web developer passionate about
              building intuitive and impactful digital solutions. I specialize
              in creating user-friendly applications that deliver seamless
              experiences. I specialize in front-end development with React and Vite, and I’m
              proficient in building scalable back-end applications using PHP.
              I’m also experienced in using Tailwind CSS to create responsive
              designs.
            </p>
            <br />
            <p>
              Currently, I’m interning at Highly Succeed Inc., where I’ve been part of the
              development team working on the Unleash web portal. 
            </p>
          <br />
            <p>
              I’m a graduating student of the Polytechnic University of the Philippines,
              where I am studying a degree in Information Technology. I’m constantly
              learning and upgrading my skills through courses on platforms like
              FreeCodeCamp and Udemy.
            </p>

            <div className="mt-6 space-y-6">
              <h3 className="text-lg font-semibold text-indigo-600">
                Education
              </h3>
              <ul className="border-l-2 border-indigo-600 pl-4 space-y-4">
                <li>
                  <div className="text-sm text-gray-700">
                    📍 Polytechnic University of the Philippines
                  </div>
                  <div className="text-sm text-gray-500">
                    Bachelor of Science in Information Technology - 2021 to
                    Present
                  </div>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-indigo-600">
                Work Experience/ Capstone Project
              </h3>
              <ul className="border-l-2 border-indigo-600 pl-4 space-y-4">
                <li>
                  <div className="text-sm text-gray-700">
                    📍 Intern - Unleash Web Portal
                  </div>
                  <div className="text-sm text-gray-500">
                    Developed the user-management system using React and Vite
                    (2025)
                  </div>
                </li>
                <li>
                  <div className="text-sm text-gray-700">
                    📍 Web Developer - Backend Development (Capstone Project)
                  </div>
                  <div className="text-sm text-gray-500">
                    Developed a veterinary record management system using pure
                    HTML, CSS, and PHP (2024)
                  </div>
                </li>
              </ul>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
}
