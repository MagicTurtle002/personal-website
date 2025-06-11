"use client";

import { useState, useEffect } from "react";
import {
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
import Modal from "./components/Modal.jsx";
import { motion } from "framer-motion";
import {
  socialLinks,
  skills,
  experienceItems,
  sections,
} from "./utils/constant.js";
import MobileMenu from "./components/layout/MobileMenu.jsx";
import {
  BackgroundBlurBottom,
  BackgroundBlurTop,
} from "./components/common/BackgrounBlur.jsx";
import ScrollIndicator from "./components/ui/ScrollIndicator.jsx";
import { AiBadge, AvailabilityBadge } from "./components/common/Badges.jsx";
import useScrollSpy from "./hooks/useScrollSpy.js";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openProject, setOpenProject] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const { currentSection, isScrolled } = useScrollSpy(sections);

  const handleOpenModal = (project) => setOpenProject(project);
  const handleCloseModal = () => setOpenProject(null);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (prefersDark) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const linkClass = (href) =>
    `relative text-sm font-semibold transition-colors duration-300 ${
      currentSection === href
        ? `${
            darkMode ? "text-indigo-400" : "text-indigo-600"
          } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full ${
            darkMode ? "after:bg-indigo-400" : "after:bg-indigo-600"
          }`
        : `${
            darkMode
              ? "text-gray-300 hover:text-indigo-400"
              : "text-gray-900 hover:text-indigo-600"
          }`
    }`;

  const containerClass = darkMode
    ? "bg-gray-900 text-white"
    : "bg-white text-gray-900";

  return (
    <div className={containerClass}>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 backdrop-blur-md ${
          isScrolled ? "bg-opacity-90 shadow-md" : "bg-transparent"
        } ${darkMode ? "bg-gray-900/80" : "bg-white/80"} ${
          openProject ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <nav
          className="flex items-center justify-between p-4 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center">
              {/* Replace with your actual logo/profile image */}
              <div
                className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  darkMode ? "bg-indigo-700" : "bg-indigo-600"
                } text-white`}
              >
                <GlobeAltIcon className="h-6 w-6" />
              </div>
              <span className="ml-2 font-bold tracking-tight">Dan Teodoro</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden p-2 text-gray-700 dark:text-gray-300"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <MobileMenu
              isOpen={isMenuOpen}
              onClose={() => setIsMenuOpen(false)}
              currentSection="#home" // or use state/props if you track current section dynamically
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex lg:gap-x-12">
            {sections.map((href) => {
              const name =
                href === "#home"
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
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Background Blur Elements - Dynamic based on theme */}
        <BackgroundBlurTop />

        {/* Main Hero Content */}
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=""
          >
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <AvailabilityBadge />
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1
              className={`text-5xl font-bold tracking-tight text-balance ${
                darkMode ? "text-white" : "text-gray-900"
              } sm:text-7xl`}
            >
              Dan Vincent Teodoro
            </h1>

            <motion.p
              className={`mt-6 text-lg font-medium text-pretty ${
                darkMode ? "text-gray-300" : "text-gray-500"
              } sm:text-xl/8`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Web developer crafting intelligent solutions with{" "}
              <span className="relative inline-block">
                <span
                  className={`${
                    darkMode ? "text-emerald-400" : "text-emerald-600"
                  }`}
                >
                  AI-enhanced
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400 to-indigo-500"></span>
              </span>{" "}
              code and design
            </motion.p>

            {/* AI Badge */}
            <motion.div
              className="mt-6 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <AiBadge />
            </motion.div>

            <motion.div
              className="mt-10 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                onClick={() => handleOpenModal("about")}
                className={`rounded-md ${
                  darkMode
                    ? "bg-indigo-500 hover:bg-indigo-400"
                    : "bg-indigo-600 hover:bg-indigo-500"
                } px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              >
                About Me <span aria-hidden="true">→</span>
              </a>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              className="mt-10 flex justify-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    darkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-500 hover:text-gray-900"
                  } transition-all duration-300 hover:scale-110`}
                >
                  <span className="sr-only">{link.name}</span>
                  <i className={`fab fa-${link.icon} text-2xl`}></i>
                </a>
              ))}
            </motion.div>

            <ScrollIndicator targetSection="#projects" />
          </motion.div>
        </div>

        <BackgroundBlurBottom />

        {/* Modal components */}
        {openProject === "about" && (
          <Modal
            isOpen={true}
            onClose={handleCloseModal}
            title="About Me"
            darkMode={darkMode}
          >
            <div className="space-y-6 z-[100]">
              {/* Profile Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                {/* Profile Image */}
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  {/* Replace with your actual photo URL */}
                  <img
                    src="/Teodoro_Profile.png"
                    alt="Your profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Profile Summary */}
                <div className="text-center sm:text-left">
                  <h3
                    className={`text-xl sm:text-2xl font-bold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Dan Vincent Teodoro
                  </h3>
                  <p
                    className={`text-sm sm:text-base font-medium ${
                      darkMode ? "text-indigo-400" : "text-indigo-600"
                    }`}
                  >
                    Web Developer | UI Designer
                  </p>
                  <div className="mt-2 flex justify-center sm:justify-start space-x-4">
                    {/* Add your social links here */}
                    <a
                      href="https://github.com/your-username"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        darkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-600 hover:text-black"
                      } transition-all duration-300`}
                    >
                      <i className="fab fa-github text-xl"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/dan-vincent-teodoro/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        darkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-600 hover:text-black"
                      } transition-all duration-300`}
                    >
                      <i className="fab fa-linkedin text-xl"></i>
                    </a>
                    <a
                      href="mailto:vincentgteodoro@gmail.com"
                      className={`${
                        darkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-600 hover:text-black"
                      } transition-all duration-300`}
                    >
                      <i className="fas fa-envelope text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Divider with gradient */}
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div
                    className={`w-full border-t ${
                      darkMode ? "border-gray-700" : "border-gray-200"
                    }`}
                  ></div>
                </div>
                <div className="relative flex justify-center">
                  <span
                    className={`px-2 ${
                      darkMode ? "bg-gray-900" : "bg-white"
                    } text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                  >
                    My Journey
                  </span>
                </div>
              </div>

              {/* Bio Section */}
              <div className="space-y-4">
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  } leading-relaxed`}
                >
                  Hi, I'm Dan Vincent Teodoro, a web developer passionate about
                  building intuitive and impactful digital solutions. I craft
                  user-friendly applications that deliver seamless experiences
                  and solve real-world problems.
                </p>

                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  } leading-relaxed`}
                >
                  My expertise lies in front-end development with React and
                  Vite, complemented by strong back-end skills with PHP. I
                  leverage Tailwind CSS to create responsive, modern designs
                  that look great on any device.
                </p>

                <div
                  className={`p-4 rounded-lg ${
                    darkMode ? "bg-gray-800" : "bg-indigo-50"
                  } ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  <p className="leading-relaxed">
                    <span className="font-medium">Currently:</span> Interning at
                    Highly Succeed Inc., where I'm part of the development team
                    working on the Unleash web portal, building features that
                    enhance user experience and streamline operations.
                  </p>
                </div>

                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  } leading-relaxed`}
                >
                  I'm a graduating student of the Polytechnic University of the
                  Philippines, pursuing a degree in Information Technology. I
                  continuously expand my skills through platforms like
                  FreeCodeCamp and Udemy, always staying current with industry
                  trends.
                </p>
              </div>

              {/* Experience and Education Tabs */}
              <div className="mt-8">
                <div className="border-b border-gray-200 dark:border-gray-700">
                  <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                    <button
                      className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                        darkMode
                          ? "border-indigo-400 text-indigo-400"
                          : "border-indigo-600 text-indigo-600"
                      }`}
                    >
                      Experience
                    </button>
                    <button
                      className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                        darkMode
                          ? "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      Education
                    </button>
                    <button
                      className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                        darkMode
                          ? "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      Skills
                    </button>
                  </nav>
                </div>

                {/* Experience Content */}
                <div className="py-6">
                  <ul className="space-y-6">
                    <li className="relative">
                      {/* Timeline dot */}
                      <div
                        className={`absolute left-0 top-1 h-4 w-4 rounded-full border-2 ${
                          darkMode
                            ? "border-indigo-400 bg-gray-900"
                            : "border-indigo-600 bg-white"
                        }`}
                      ></div>

                      {/* Content */}
                      <div className="ml-8">
                        <div
                          className={`flex flex-col sm:flex-row sm:items-center justify-between mb-1`}
                        >
                          <h4
                            className={`font-semibold ${
                              darkMode ? "text-gray-200" : "text-gray-900"
                            }`}
                          >
                            Intern - Highly Succeed Inc.
                          </h4>
                          <span
                            className={`text-sm ${
                              darkMode ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            2025
                          </span>
                        </div>
                        <p
                          className={`text-sm ${
                            darkMode ? "text-indigo-400" : "text-indigo-600"
                          } mb-2`}
                        >
                          Unleash Web Portal - User Management System
                        </p>
                        <ul
                          className={`list-disc pl-5 text-sm ${
                            darkMode ? "text-gray-300" : "text-gray-600"
                          } space-y-1`}
                        >
                          <li>
                            Developed responsive user interfaces with React and
                            Vite
                          </li>
                          <li>
                            Implemented user management system with role-based
                            permissions
                          </li>
                          <li>
                            Collaborated with backend team on API integration
                          </li>
                          <li>
                            Optimized application performance for better user
                            experience
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="relative">
                      {/* Timeline dot */}
                      <div
                        className={`absolute left-0 top-1 h-4 w-4 rounded-full border-2 ${
                          darkMode
                            ? "border-indigo-400 bg-gray-900"
                            : "border-indigo-600 bg-white"
                        }`}
                      ></div>

                      {/* Content */}
                      <div className="ml-8">
                        <div
                          className={`flex flex-col sm:flex-row sm:items-center justify-between mb-1`}
                        >
                          <h4
                            className={`font-semibold ${
                              darkMode ? "text-gray-200" : "text-gray-900"
                            }`}
                          >
                            Web Developer - Capstone Project
                          </h4>
                          <span
                            className={`text-sm ${
                              darkMode ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            2024
                          </span>
                        </div>
                        <p
                          className={`text-sm ${
                            darkMode ? "text-indigo-400" : "text-indigo-600"
                          } mb-2`}
                        >
                          Veterinary Record Management System
                        </p>
                        <ul
                          className={`list-disc pl-5 text-sm ${
                            darkMode ? "text-gray-300" : "text-gray-600"
                          } space-y-1`}
                        >
                          <li>Built backend systems using PHP and MySQL</li>
                          <li>
                            Designed database schema for veterinary records
                          </li>
                          <li>
                            Implemented user authentication and authorization
                          </li>
                          <li>
                            Created reports and analytics dashboard for data
                            visualization
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Skills Section */}
              <div>
                <h3
                  className={`text-lg font-medium ${
                    darkMode ? "text-white" : "text-gray-900"
                  } mb-4`}
                >
                  My Skills
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div
                    className={`p-4 rounded-lg ${
                      darkMode ? "bg-gray-800" : "bg-white"
                    } shadow-sm ${
                      darkMode ? "ring-1 ring-gray-700" : "ring-1 ring-gray-200"
                    }`}
                  >
                    <h4 className={`text-sm font-medium mb-2 `}>Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.frontend.map((skill) => (
                        <span
                          key={skill}
                          className={`px-2 py-1 rounded-md text-xs ${
                            darkMode
                              ? "bg-gray-700 text-gray-300"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`p-4 rounded-lg ${
                      darkMode ? "bg-gray-800" : "bg-white"
                    } shadow-sm ${
                      darkMode ? "ring-1 ring-gray-700" : "ring-1 ring-gray-200"
                    }`}
                  >
                    <h4
                      className={`text-sm font-medium mb-2 ${
                        darkMode ? "text-indigo-400" : "text-indigo-600"
                      }`}
                    >
                      Backend
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.backend.map((skill) => (
                        <span
                          key={skill}
                          className={`px-2 py-1 rounded-md text-xs ${
                            darkMode
                              ? "bg-gray-700 text-gray-300"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`p-4 rounded-lg ${
                      darkMode ? "bg-gray-800" : "bg-white"
                    } shadow-sm ${
                      darkMode ? "ring-1 ring-gray-700" : "ring-1 ring-gray-200"
                    }`}
                  >
                    <h4
                      className={`text-sm font-medium mb-2 ${
                        darkMode ? "text-indigo-400" : "text-indigo-600"
                      }`}
                    >
                      Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.tools.map((skill) => (
                        <span
                          key={skill}
                          className={`px-2 py-1 rounded-md text-xs ${
                            darkMode
                              ? "bg-gray-700 text-gray-300"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div
                className={`mt-8 p-6 rounded-lg text-center ${
                  darkMode
                    ? "bg-gradient-to-br from-indigo-900 to-purple-900"
                    : "bg-gradient-to-br from-indigo-50 to-purple-50"
                }`}
              >
                <h3
                  className={`text-lg font-medium mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Interested in working together?
                </h3>
                <p
                  className={`mb-4 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  I'm currently available for freelance projects and job
                  opportunities.
                </p>
                <a
                  href="#contact"
                  onClick={handleCloseModal}
                  className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                    darkMode
                      ? "bg-indigo-500 text-white hover:bg-indigo-400"
                      : "bg-indigo-600 text-white hover:bg-indigo-500"
                  } transition-all duration-300`}
                >
                  Contact Me
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
}
