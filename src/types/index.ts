export interface Skill {
  name: string;
  level?: number; // optional for generic skills
}

export interface Project {
  title: string;
  description: string;
  image?: string;
  techStack: string[];
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  university: string;
  years: string;
  cgpa?: string;
  details?: string;
}

export interface Contact {
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  contact: Contact;
  summary: string;
  technicalSkills: {
    languages: string[];
    frontend: string[];
    backend: string[];
    databases: string[];
    networking: string[];
    tools: string[];
    core: string[];
  };
  projects: Project[];
  experience: Experience[];
  education: Education[];
  interests: string[];
}
