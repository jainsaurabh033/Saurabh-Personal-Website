export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  descriptions: string[];
  technologies: string[];
};

export const experiences: ExperienceItem[] = [
  {
    company: "Amazon",
    role: "Programmer Analyst",
    period: "2024 - 2025",
    location: "India",
    descriptions: [
      "Integrated a library across payments APIs (POST, UPDATE, DELETE), preventing unauthorized production database modifications and improving system safety.",
      "Implemented AWS CloudWatch alarms to monitor CPU utilization and JVM memory across multiple services.",
      "Acted as on-call engineer for production systems, diagnosing and resolving cross-service issues, and collaborating with upstream and downstream teams to maintain system reliability",
      "Automated invoice validation workflows for UAT by designing end-to-end test scenarios and building a reusable dataset covering the complete invoice lifecycle.",
      "Updated service documentation and peak-readiness requirements to ensure system preparedness for high-traffic scenarios.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "OOPS",
      "Design Patterns",
      "AWS Services",
      "Intellij Writing",
    ],
  },
  {
    company: "TCS",
    role: "Assistant System Engineer",
    period: "2022 - 2024",
    location: "India",
    descriptions: [
      "Developed multiple web application frontend from scratch including Digital Product Passport, Dashboard, Product showcase application and multiple pages.",
      "Followed frontend best practices by implementing code splitting, lazy loading, reusable components, skeleton loading, responsive design.",
      "Built reusable UI Components in Sveltekit, understood and integrated IKEA design System to maintain consistency across application.",
      "Collaborated with UI/UX designers, business analysts, and backend engineers to develop and deliver the application’s frontend.",
    ],
    technologies: [
      "React",
      "Svelte",
      "JavaScipt",
      "HTML",
      "CSS",
      "TailwindCSS",
    ],
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  description: string;
};

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Engineering",
    institution: "Priyadarshini JL College of Engineering",
    period: "2019-2022",
    description:
      "Studied computer science and software engineering fundamentals.",
  },
];

export const achievements = [
  "Solved 2,000+ Data Structures and Algorithms (DSA) problems across LeetCode, Codeforces, CodeChef, and GeeksforGeeks, maintaining consistent problem-solving practice for over 1 year.",
  "Received Applause for Team Award for timely delivery of project tasks and also recieved team appreciation.",
];

export type HeroProps = {
  name: string;
  title: string;
  description: string;
};

export type NavbarProps = {
  darkMode: boolean;
  onToggleTheme: () => void;
};

export type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built to showcase my experience, skills, and projects.",
    technologies: ["React", "TypeScript", "Vite", "HTML", "CSS"],
    githubUrl: "https://github.com/jainsaurabh033/Saurabh-Personal-Website",
  },
  {
    title: "DesiQnA - Question/Answer platform",
    description:
      "DesiQnA is a platform where anyone can ask the question and someone with knowledge of that field give the answer to that question",
    technologies: [
      "JavaScript",
      "React",
      "MongoDB",
      "Firebase-auth",
      "Nodejs",
      "React-quill",
      "Expressjs",
    ],
    githubUrl: "https://github.com/jainsaurabh033/DesiQnA",
  },
  {
    title: "Low-Level-Design",
    description:
      "A collection of Low Level Design (LLD) concepts, design patterns, object-oriented design principles and machine coding problems implemented in Java.",
    technologies: ["Java", "OOPS", "Design Pattern"],
    githubUrl: "https://github.com/jainsaurabh033/Low-Level-Design",
  },
];

export type SkillCategory = {
  name: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Java", "C++", "JavaScript"],
  },
  {
    name: "Backend",
    skills: [
      "SpringBoot",
      "Spring Data JPA",
      "Spring Security",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    name: "Cloud & Devops",
    skills: ["AWS", "Docker", "Git", "CI/CD"],
  },
  {
    name: "Database",
    skills: ["PostgreSQL", "MYSQL"],
  },
  {
    name: "Testing",
    skills: ["Junit", "Mockito"],
  },
  {
    name: "Tools",
    skills: ["Maven", "Git", "GitHub", "Postman", "IntelliJ IDEA"],
  },
  {
    name: "Design",
    skills: [
      "LLD(Basics)",
      "HLD(Basics)",
      "Design Patterns",
      "SOLID",
      "API Design",
    ],
  },
];
