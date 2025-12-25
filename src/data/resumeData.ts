import { ResumeData } from "../types";

export const resumeData: ResumeData = {
  name: "Farhan Riaz",
  title: "Full Stack & Flutter Developer",
  location: "Lahore, Pakistan",
  contact: {
    phone: "+92 309 5657677",
    email: "subssems336@gmail.com",
    linkedin: "https://linkedin.com/in/farhan-riaz-5224b0277",
    github: "https://github.com/farmer-boy",
    instagram: "https://www.instagram.com/farhan_khan336/?__pwa=1"
  },
  summary: "Full Stack and Flutter Developer with experience building responsive web and mobile applications using React.js, Node.js, Flutter, SQL, Firebase, and Cisco Packet Tracer for networking simulations. Skilled in RESTful API development, database design, and creating scalable solutions with optimized performance and usability.",
  technicalSkills: {
    languages: ["JavaScript", "Dart", "C++", "SQL", "Python"],
    frontend: ["React.js", "Flutter", "HTML5", "CSS3", "Tailwind CSS", "ShadCN UI"],
    backend: ["Node.js", "REST APIs", "Firebase", "Strapi CMS"],
    databases: ["MySQL", "PostgreSQL", "Firebase Firestore"],
    networking: ["Cisco Packet Tracer", "Network Simulation", "Configuration"],
    tools: ["Git", "GitHub", "VS Code", "Postman"],
    core: ["Full Stack Development", "API Integration", "Authentication", "State Management", "CRUD", "OOP", "DSA"]
  },
  projects: [
    {
      title: "Spray Center Website",
      description: "Responsive full stack web application for a service business using React.js, Tailwind CSS, Node.js, and SQL.",
      techStack: ["React.js", "Node.js", "SQL", "Tailwind CSS"],
    },
    {
      title: "Kids Learning App",
      description: "Interactive multi-screen mobile app with lessons, quizzes, and animations using Flutter and Firebase.",
      techStack: ["Flutter", "Firebase", "REST APIs"],
    },
    {
      title: "University Management System",
      description: "Console-based student and course management system with C++ and SQL using data structures like linked lists and trees.",
      techStack: ["C++", "SQL", "Data Structures"],
    },
    {
      title: "ATM Simulation System",
      description: "ATM simulation in C++ with account management, PIN validation, transactions, and OOP concepts.",
      techStack: ["C++", "OOP", "Encapsulation", "Inheritance"],
    },
    {
      title: "Networking Simulation Projects",
      description: "Network topologies and configurations using Cisco Packet Tracer, testing routing, switching, and IP scenarios.",
      techStack: ["Cisco Packet Tracer", "Networking", "Simulation"],
    }
  ],
  experience: [
    {
      role: "Full Stack Developer",
      company: "Freelance / Personal Projects",
      duration: "2023 - Present",
      responsibilities: [
        "Developed responsive web and mobile applications using React.js and Flutter.",
        "Implemented RESTful APIs and database management with SQL and Firebase.",
        "Configured network topologies and simulations using Cisco Packet Tracer.",
        "Optimized code for scalability, performance, and usability."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Software Engineering",
      university: "Superior University – Gold Campus, Lahore",
      years: "2023 – 2027",
      cgpa: "3.34 / 4.00"
    }
  ],
  interests: ["Flutter Mobile Development", "Full Stack Web Development", "API Design", "UI/UX Optimization", "Networking", "Data Structures & Problem Solving"]
};
