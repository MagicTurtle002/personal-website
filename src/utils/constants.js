import pm1 from "../assets/pub-mats/pm-1.png";
import pm2 from "../assets/pub-mats/pm-2.png";
import pm3 from "../assets/pub-mats/pm-3.png";
import pm4 from "../assets/pub-mats/pm-4.png";
import pm5 from "../assets/pub-mats/pm-5.png";
import pm6 from "../assets/pub-mats/pm-6.png";
import pm7 from "../assets/pub-mats/pm-7.png";
import pm8 from "../assets/pub-mats/pm-8.png";
import brochurePdf from "../assets/brochure/ennoble.pdf";
import canvaLogo from "../assets/logos/canva.svg";
import gitLogo from "../assets/logos/git.svg";
import githubLogo from "../assets/logos/github.svg";
import htmlLogo from "../assets/logos/html.svg";
import mailchimpLogo from "../assets/logos/mailchimp.svg";
import tailwindcssLogo from "../assets/logos/tailwindcss.svg";
import chatgptLogo from "../assets/logos/chatgpt.svg";
import geminiLogo from "../assets/logos/gemini.svg";

export const navItems = [
  { name: "Home", href: "#home", id: "home" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Publications", href: "#publications", id: "publications" },
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

const psbdImage = "/psbd.png";

export const projects = [
  {
    id: "privacy-security-by-design",
    title: "Privacy and Security by Design",
    shortDescription:
      "A professional website focused on privacy-first and security-by-default digital practices.",
    description:
      "Privacy and Security by Design is a modern business website that highlights services, core principles, and resources for building safer digital experiences.",
    image: psbdImage,
    techStack: ["React", "Vite", "Tailwind CSS", "JavaScript", "Responsive UI"],
    projectType: "Business Website",
    year: "2026",
    demoLink: "https://www.privacyandsecuritybydesign.com",
    buttonLabel: "Visit Live Site",
    purpose:
      "This project was built to establish a clear online presence, communicate privacy and security expertise, and make it easy for visitors to understand and trust the brand.",
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
    projectType: "E-commerce Solution",
    year: "2025",
    purpose:
      "Unleash Web Portal is an intuitive platform built for managing company orders, stores, and user accounts in a streamlined way. It simplifies administrative tasks and enhances operational efficiency.",
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
    projectType: "Healthcare System",
    year: "2024",
    purpose:
      "Pawsitive is designed to streamline clinic operations, helping veterinarians and staff manage patient records, and appointments with pet owners.",
  },
];

export const publicationMaterials = [
  {
    id: "brochure-brand-overview",
    title: "Brochure",
    format: "Brochure",
    year: "2026",
    description:
      "A clean brochure layout that introduces the brand, its core message, and key services in a visually polished format.",
    audience: "Potential clients and business visitors",
    tools: ["Canva"],
    accent: "from-slate-900 via-blue-900 to-indigo-900",
    focus: "Introduces the brand in a concise, visual-first format.",
    deliverables: ["Cover layout", "Service highlights", "Brand summary panels"],
    slides: [
      {
        image: brochurePdf,
        alt: "Ennoble brochure PDF",
      },
    ],
    summary:
      "Best for first impressions when you need a simple, professional brochure that communicates quickly.",
  },
  {
    id: "social-media-content-set",
    title: "Publication Materials for Social Media",
    format: "Social Media",
    year: "2024",
    description:
      "A larger set of social media graphics created in Canva for posts, announcements, and branded content across platforms.",
    audience: "Social media followers and online communities",
    tools: ["Canva"],
    accent: "from-rose-900 via-fuchsia-800 to-slate-900",
    focus: "A consistent visual system for a larger volume of social graphics.",
    deliverables: ["Post templates", "Announcement graphics", "Campaign visuals", "Content variations"],
    slides: [
      {
        image: pm1,
        alt: "Publication materials for social media preview 1",
      },
      {
        image: pm2,
        alt: "Publication materials for social media preview 2",
      },
      {
        image: pm3,
        alt: "Publication materials for social media preview 3",
      },
      {
        image: pm4,
        alt: "Publication materials for social media preview 4",
      },
      {
        image: pm5,
        alt: "Publication materials for social media preview 5",
      },
      {
        image: pm6,
        alt: "Publication materials for social media preview 6",
      },
      {
        image: pm7,
        alt: "Publication materials for social media preview 7",
      },
      {
        image: pm8,
        alt: "Publication materials for social media preview 8",
      },
    ],
    summary:
      "Best shown as a grouped collection to highlight consistency, volume, and campaign range.",
  },
];

export const skillsTools = [
  {
    id: 1,
    title: "Canva",
    href: "#",
    description: "Design and publication work created in Canva.",
    stack: ["Canva"],
    category: { title: "Design", href: "#" },
    author: {
      name: "Canva",
      role: "Design Tool",
      href: "#",
      imageUrl: canvaLogo,
    },
  },
  {
    id: 2,
    title: "Mailchimp",
    href: "#",
    description: "Email and campaign workflows managed in Mailchimp.",
    stack: ["Mailchimp"],
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Mailchimp",
      role: "Marketing Tool",
      href: "#",
      imageUrl: mailchimpLogo,
    },
  },
  {
    id: 3,
    title: "ChatGPT",
    href: "#",
    description: "AI-assisted writing, planning, and development support.",
    stack: ["ChatGPT"],
    category: { title: "AI", href: "#" },
    author: {
      name: "ChatGPT",
      role: "AI Tool",
      href: "#",
      imageUrl: chatgptLogo,
    },
  },
  {
    id: 4,
    title: "Gemini",
    href: "#",
    description: "AI-assisted research, ideation, and workflow support.",
    stack: ["Gemini"],
    category: { title: "AI", href: "#" },
    author: {
      name: "Gemini",
      role: "AI Tool",
      href: "#",
      imageUrl: geminiLogo,
    },
  },
  {
    id: 5,
    title: "GitHub",
    href: "#",
    description: "Version control, collaboration, and source hosting in GitHub.",
    stack: ["GitHub"],
    category: { title: "Development", href: "#" },
    author: {
      name: "GitHub",
      role: "Code Hosting",
      href: "#",
      imageUrl: githubLogo,
    },
  },
  {
    id: 6,
    title: "HTML",
    href: "#",
    description: "Semantic structure and content foundation for the web.",
    stack: ["HTML5"],
    category: { title: "Frontend", href: "#" },
    author: {
      name: "HTML",
      role: "Markup Language",
      href: "#",
      imageUrl: htmlLogo,
    },
  },
  {
    id: 7,
    title: "Tailwind CSS",
    href: "#",
    description: "Utility-first styling for responsive interfaces.",
    stack: ["Tailwind CSS"],
    category: { title: "Frontend", href: "#" },
    author: {
      name: "Tailwind CSS",
      role: "Styling Framework",
      href: "#",
      imageUrl: tailwindcssLogo,
    },
  },
  {
    id: 8,
    title: "Git",
    href: "#",
    description: "Source control and change tracking for projects.",
    stack: ["Git"],
    category: { title: "Development", href: "#" },
    author: {
      name: "Git",
      role: "Version Control",
      href: "#",
      imageUrl: gitLogo,
    },
  },
];
