export const navItems = [
  { name: "Home", href: "#home", id: "home" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Services", href: "#services", id: "services" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Contact", href: "#contact", id: "contact" }
];

// Social media links
export const socialLinks = [
  { name: "GitHub", url: "https://github.com/your-username", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/your-username",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/your-username",
    icon: "twitter",
  },
];

export const skills = {
  frontend: ["React", "Vite", "JavaScript", "HTML5", "CSS3", "Tailwind"],
  backend: ["PHP", "MySQL", "REST API", "Laravel"],
  tools: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Codex", "ChatGPT", "Netlify", "Hostinger"],
};

// Experience items
export const experienceItems = [
  {
    title: "Intern - Highly Succeed Inc.",
    period: "2025",
    project: "Unleash Web Portal - User Management System",
    responsibilities: [
      "Developed responsive user interfaces with React and Vite",
      "Implemented user management system with role-based permissions",
      "Collaborated with backend team on API integration",
      "Optimized application performance for better user experience",
    ],
  },
  {
    title: "Web Developer - Capstone Project",
    period: "2024",
    project: "Veterinary Record Management System",
    responsibilities: [
      "Built backend systems using PHP and MySQL",
      "Designed database schema for veterinary records",
      "Implemented user authentication and authorization",
      "Created reports and analytics dashboard for data visualization",
    ],
  },
];

export const projects = [
  {
    id: "privacy-security-by-design",
    title: "Privacy and Security by Design",
    shortDescription:
      "A professional website focused on privacy-first and security-by-default digital practices.",
    description:
      "Privacy and Security by Design is a modern business website that highlights services, core principles, and resources for building safer digital experiences.",
    image: "/psbd.png",
    techStack: ["React", "Vite", "Tailwind CSS", "JavaScript", "Responsive UI"],
    client: "Privacy and Security by Design",
    company: "Privacy and Security by Design",
    projectType: "Business Website",
    year: "2026",
    demoLink: "https://www.privacyandsecuritybydesign.com",
    codeLink: "",
    purpose:
      "This project was built to establish a clear online presence, communicate privacy and security expertise, and make it easy for visitors to understand and trust the brand.",
    fullDescription:
      "Built as a polished, responsive marketing site, this project emphasizes clarity, trust, and performance. It presents key offerings and thought leadership while keeping the user journey simple and accessible across devices.",

    problemSolved:
      "The organization needed a credible and easy-to-navigate web presence to clearly communicate services and convert visitors into qualified inquiries.",
    impact:
      "Delivered a launch-ready website that strengthened brand credibility and improved how quickly visitors can discover key information and contact options.",
  },
  {
    id: "pawsitive",
    title: "Pawsitive: Veterinary Record Management",
    shortDescription:
      "A comprehensive system for veterinary clinics to manage patient records and appointments",
    description:
      "Pawsitive is a veterinary record management system designed to streamline clinic operations. It helps veterinarians and staff manage patient records, appointments, and communication with pet owners.",
    image: "/pawsitive.png",
    techStack: ["HTML", "CSS", "PHP", "JavaScript", "MySQL", "AJAX"],
    client: "Pet Adventure Veterinary Clinic",
    company: "Pawsitive Team",
    projectType: "Healthcare System",
    year: "2024",
    demoLink: "#",
    codeLink: "#",
    purpose:
      "Pawsitive is designed to streamline clinic operations, helping veterinarians and staff manage patient records, and appointments with pet owners. It aims to improve efficiency and reduce administrative burdens in veterinary clinics.",
    fullDescription:
      "Pawsitive helps manage patient records, appointments, and communication with pet owners. Built with pure HTML, CSS, and PHP, it ensures a smooth and responsive experience, with dynamic interactivity via JavaScript.",

    problemSolved: "The clinic was struggling with paper-based record keeping that led to 30% of staff time spent on administrative tasks.",
    impact: "Reduced record retrieval time by 87% and administrative overhead by 42%, allowing staff to focus more on pet care.",
  },
  {
    id: "unleash",
    title: "Unleash Web Portal",
    shortDescription:
      "An intuitive platform for company order and store management",
    description:
      "Unleash Web Portal is an intuitive platform designed to streamline the management of company orders, stores, and user accounts.",
    image: "/unleash.png",
    techStack: ["React", "Tailwind CSS", "JavaScript", "Vite", "Node.js"],
    client: "Unleash Web Portal",
    company: "Highly Succeed Inc.",
    projectType: "E-commerce Solution",
    year: "2025",
    demoLink: "#",
    codeLink: "#",
    purpose:
      "Unleash Web Portal is an intuitive platform built for managing company orders, stores, and user accounts in a streamlined way. It simplifies administrative tasks and enhances operational efficiency.",
    fullDescription:
      "This system was built with React and Vite, styled using Tailwind CSS, and leverages modern JavaScript to create a responsive, user-friendly experience.",

    problemSolved: "The client needed to consolidate three separate management systems into one cohesive platform to eliminate data silos.",
    impact: "Increased order processing speed by 63% and reduced training time for new employees from two weeks to just three days.",
  },

];

export const skillsTools = [
  {
    id: 1,
    title: "Frontend Development",
    href: "#",
    description:
      "Experienced with React, Tailwind CSS, HTML5, CSS3, JavaScript, and Vite. I build clean, responsive, and interactive user interfaces.",
    stack: ["React", "Tailwind CSS", "JavaScript", "Vite", "Responsive UI"],
    category: { title: "Frontend", href: "#" },
    author: {
      name: "React & Tailwind",
      role: "UI/UX Tools",
      href: "#",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/919/919851.png", // React logo
    },
  },
  {
    id: 2,
    title: "Backend Development",
    href: "#",
    description:
      "Skilled in PHP and MySQL. I build secure and scalable APIs, work with databases, and manage server-side logic.",
    stack: ["PHP", "MySQL", "REST API", "Authentication", "Data Modeling"],
    category: { title: "Backend", href: "#" },
    author: {
      name: "PHP & MySQL",
      role: "Server-side Tools",
      href: "#",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/919/919830.png", // PHP logo
    },
  },
  {
    id: 3,
    title: "Tools & Platforms",
    href: "#",
    description:
      "Comfortable using Git, GitHub, Figma, Postman, VS Code, Codex, ChatGPT, and deployment platforms like Netlify and Hostinger.",
    stack: ["Git", "GitHub", "Figma", "Postman", "VS Code", "Codex", "ChatGPT", "Netlify", "Hostinger"],
    category: { title: "Tools", href: "#" },
    author: {
      name: "Dev Tools & Platforms",
      role: "Developer Tools",
      href: "#",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png", // GitHub logo
    },
  },
];
