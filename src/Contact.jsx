"use client";
import { useState } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  Clock,
  MapPin,
  CheckCircle,
  ExternalLinkIcon,
} from "lucide-react";

export default function ContactSection() {
  const [contactMethod, setContactMethod] = useState("email");
  const [isHovered, setIsHovered] = useState({
    email: false,
    phone: false,
    linkedin: false,
    github: false,
  });

  const handleHover = (key, value) => {
    setIsHovered((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section
      id="contact"
      className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8 overflow-hidden"
    >
      {/* Background gradient element */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Let's Connect
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            If you're interested in working together or just want to say hi,
            feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
          {/* Contact information card */}
          <div className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/10 p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Contact Information
              </h3>
              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                Available for work
              </span>
            </div>

            {/* Contact method tabs */}
            <div className="flex border-b border-gray-200 mb-6">
              <button
                onClick={() => setContactMethod("email")}
                className={`flex items-center px-4 py-2 border-b-2 text-sm font-medium ${
                  contactMethod === "email"
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <Mail className="mr-2 h-5 w-5" />
                Email
              </button>
              <button
                onClick={() => setContactMethod("phone")}
                className={`flex items-center px-4 py-2 border-b-2 text-sm font-medium ${
                  contactMethod === "phone"
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <Phone className="mr-2 h-5 w-5" />
                Phone
              </button>
              <button
                onClick={() => setContactMethod("social")}
                className={`flex items-center px-4 py-2 border-b-2 text-sm font-medium ${
                  contactMethod === "social"
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Social
              </button>
            </div>

            {/* Email content */}
            <div className={contactMethod === "email" ? "block" : "hidden"}>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <Mail className="mx-auto h-12 w-12 text-indigo-600 mb-4" />
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  Email Me
                </h4>
                <p className="text-gray-600 mb-4">
                  I typically respond within 24 hours
                </p>
                <a
                  href="mailto:vincentgteodoro@gmail.com"
                  className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
                  onMouseEnter={() => handleHover("email", true)}
                  onMouseLeave={() => handleHover("email", false)}
                >
                  vincentgteodoro@gmail.com
                  {isHovered.email && (
                    <ExternalLinkIcon className="ml-2 h-4 w-4" />
                  )}
                </a>
              </div>
            </div>

            {/* Phone content */}
            <div className={contactMethod === "phone" ? "block" : "hidden"}>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <Phone className="mx-auto h-12 w-12 text-indigo-600 mb-4" />
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  Call Me
                </h4>
                <p className="text-gray-600 mb-4">
                  Available during business hours
                </p>
                <a
                  href="tel:+639164180808"
                  className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
                  onMouseEnter={() => handleHover("phone", true)}
                  onMouseLeave={() => handleHover("phone", false)}
                >
                  +639164180808
                  {isHovered.phone && (
                    <ExternalLinkIcon className="ml-2 h-4 w-4" />
                  )}
                </a>
              </div>
            </div>

            {/* Social content */}
            <div className={contactMethod === "social" ? "block" : "hidden"}>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <Linkedin className="mx-auto h-8 w-8 text-indigo-600 mb-3" />
                    <h4 className="text-sm font-medium text-gray-900 mb-2">
                      LinkedIn
                    </h4>
                    <a
                      href="https://www.linkedin.com/in/dan-vincent-teodoro/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-indigo-600 hover:text-indigo-800 transition-colors flex items-center justify-center"
                      onMouseEnter={() => handleHover("linkedin", true)}
                      onMouseLeave={() => handleHover("linkedin", false)}
                    >
                      Connect on LinkedIn
                      {isHovered.linkedin && (
                        <ExternalLinkIcon className="ml-1 h-3 w-3" />
                      )}
                    </a>
                  </div>

                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <Github className="mx-auto h-8 w-8 text-indigo-600 mb-3" />
                    <h4 className="text-sm font-medium text-gray-900 mb-2">
                      GitHub
                    </h4>
                    <a
                      href="https://github.com/MagicTurtle002"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-indigo-600 hover:text-indigo-800 transition-colors flex items-center justify-center"
                      onMouseEnter={() => handleHover("github", true)}
                      onMouseLeave={() => handleHover("github", false)}
                    >
                      View Projects
                      {isHovered.github && (
                        <ExternalLinkIcon className="ml-1 h-3 w-3" />
                      )}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-medium text-gray-900 mb-3">
                Location
              </h4>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-indigo-600 mr-2" />
                <span className="text-gray-700">Manila, Philippines</span>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="/resume.pdf"
                target="_blank"
                className="inline-flex w-full items-center justify-center rounded-md bg-gray-50 px-3 py-2 text-sm font-semibold text-indigo-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100 transition-colors"
              >
                Download Resume <ExternalLinkIcon className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Contact message card */}
          <div className="rounded-2xl bg-gray-50 p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">
                  Send Me a Message
                </h3>
                <p className="text-sm text-gray-600">
                  I'll get back to you as soon as possible.
                </p>
              </div>

              {/* Animated message UI */}
              <div className="bg-white rounded-xl p-6 shadow-sm space-y-6 min-h-[300px]">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center">
                      <span className="text-white font-medium text-sm">DV</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      Dan Vincent Teodoro
                    </p>
                    <p className="text-sm text-gray-500">
                      Thanks for visiting my portfolio! How can I help you
                      today?
                    </p>
                  </div>
                  <div className="flex-shrink-0 self-center">
                    <p className="text-xs text-gray-500">Just now</p>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <CheckCircle className="mx-auto h-12 w-12 text-indigo-600 mb-4" />
                  <h4 className="text-lg font-medium text-gray-900">
                    Ready to Connect
                  </h4>
                  <p className="text-sm text-gray-600 mt-2 mb-6">
                    Use any of the contact methods to get in touch with me
                    directly
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <a
                      href="mailto:vincentgteodoro@gmail.com"
                      className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Email Me
                    </a>
                    <a
                      href="https://www.linkedin.com/in/dan-vincent-teodoro/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-indigo-600 shadow-sm ring-1 ring-inset ring-indigo-200 hover:bg-indigo-50 transition-colors"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Testimonial/availability */}
              <div className="rounded-lg bg-indigo-50 p-4 border border-indigo-100">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Clock className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-indigo-800">
                      Available for new opportunities
                    </h4>
                    <p className="mt-1 text-xs text-indigo-700">
                      I'm currently open to freelance projects, full-time
                      positions, and collaborations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
