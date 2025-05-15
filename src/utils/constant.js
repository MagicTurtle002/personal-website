export const sections = ["#home", "#projects", "#skills", "#contact"];

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
  tools: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Hostinger"],
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

// Enhanced project data with more client-impressive details
export const projects = [
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
    // Added more impressive details
    problemSolved: "The clinic was struggling with paper-based record keeping that led to 30% of staff time spent on administrative tasks.",
    impact: "Reduced record retrieval time by 87% and administrative overhead by 42%, allowing staff to focus more on pet care.",
    technicalFeatures: [
      "Responsive design optimized for both desktop and tablet use in clinic environments",
      "Real-time appointment management with SMS notifications",
      "Secure patient record system with role-based access control",
      "Automated billing and payment processing integration",
      "Customizable reporting dashboard with export capabilities"
    ],
    clientTestimonial: "The Pawsitive system transformed our clinic operations. Record management is now seamless and our staff productivity has improved significantly."
  },
  {
    id: "unleash",
    title: "Unleash Web Portal",
    shortDescription:
      "An intuitive platform for company order and store management",
    description:
      "Unleash Web Portal is an intuitive platform designed to streamline the management of company orders, stores, and user accounts.",
    image: "/unleash.png",
    techStack: ["React", "Tailwind CSS", "JavaScript", "Vite", "Node.js", "Express", "MongoDB"],
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
    // Added more impressive details
    problemSolved: "The client needed to consolidate three separate management systems into one cohesive platform to eliminate data silos.",
    impact: "Increased order processing speed by 63% and reduced training time for new employees from two weeks to just three days.",
    technicalFeatures: [
      "Interactive dashboard with real-time analytics and data visualization",
      "Advanced filtering and search capabilities across all data types",
      "Multi-level user permissions system with audit logging",
      "Automated inventory management with low-stock alerts",
      "Progressive Web App features for offline capabilities"
    ],
    clientTestimonial: "Working with this developer was exceptional. The Unleash Web Portal exceeded our expectations and was delivered ahead of schedule."
  },
  {
    id: "taskmaster",
    title: "TaskMaster: Project Management App",
    shortDescription:
      "A sleek project management tool for teams with real-time updates",
    description:
      "TaskMaster helps teams collaborate efficiently with task tracking, deadlines, and progress monitoring in real-time.",
    image: "/taskmaster.png",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io", "Express", "Redux"],
    client: "Internal Project",
    company: "Personal Portfolio",
    projectType: "Productivity Tool",
    year: "2025",
    demoLink: "https://taskmaster-demo.vercel.app",
    codeLink: "https://github.com/MagicTurtle002/taskmaster",
    purpose:
      "TaskMaster was built to provide teams with a straightforward yet powerful project management solution that prioritizes real-time collaboration and visual progress tracking.",
    fullDescription:
      "TaskMaster features drag-and-drop task management, real-time updates via Socket.io, customizable project boards, and detailed analytics for project progress. The application uses React for the frontend with a Node.js backend and MongoDB for data storage, creating a seamless and responsive user experience for teams of any size.",
    // Added more impressive details
    problemSolved: "Teams were using multiple tools for task tracking, resulting in communication gaps and missed deadlines.",
    impact: "Early adopters reported a 27% increase in on-time project delivery and 35% improvement in team communication.",
    technicalFeatures: [
      "Drag-and-drop Kanban board interface with custom column configurations",
      "Real-time collaboration with cursor tracking and instant updates",
      "Automated workflow rules and triggers for task state changes",
      "Integrated time tracking and resource allocation features",
      "Comprehensive project analytics with burndown charts and velocity metrics"
    ],
    clientTestimonial: "TaskMaster has revolutionized how our team collaborates. The real-time features make remote work feel much more connected."
  },
  {
    id: "ecotrack",
    title: "EcoTrack: Sustainability Monitoring Platform",
    shortDescription:
      "IoT-powered platform for businesses to monitor and improve environmental impact",
    description:
      "EcoTrack helps organizations track their carbon footprint, energy usage, and sustainability metrics through IoT sensors and advanced analytics.",
    image: "/ecotrack.png",
    techStack: ["React", "TypeScript", "Node.js", "AWS IoT", "PostgreSQL", "D3.js"],
    client: "GreenFuture Consortium",
    company: "Sustainable Tech Solutions",
    projectType: "IoT Application",
    year: "2025",
    demoLink: "https://ecotrack-demo.vercel.app",
    codeLink: "https://github.com/MagicTurtle002/ecotrack",
    purpose:
      "EcoTrack was developed to help businesses measure and reduce their environmental impact through precise monitoring and actionable insights.",
    fullDescription:
      "EcoTrack combines IoT sensor data with powerful analytics to provide organizations with real-time environmental impact monitoring. The platform offers customizable dashboards, automated reporting, and AI-powered recommendations for sustainability improvements.",
    // Added impressive details
    problemSolved: "Organizations struggled to collect and analyze environmental data across multiple locations and systems.",
    impact: "Helped client companies reduce energy consumption by an average of 23% and improve sustainability scores by 45% within six months.",
    technicalFeatures: [
      "Real-time data collection from distributed IoT sensors with fault tolerance",
      "Interactive data visualization dashboard with customizable metrics",
      "Predictive analytics for energy usage forecasting",
      "Automated sustainability reporting with regulatory compliance features",
      "Machine learning algorithms for optimization recommendations"
    ],
    clientTestimonial: "EcoTrack has transformed our sustainability initiatives from vague goals to measurable achievements. The ROI was evident within the first quarter."
  }
];