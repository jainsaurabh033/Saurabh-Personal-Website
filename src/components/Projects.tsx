import React from "react";
import ProjectCard from "./ProjectCard";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built to showcase my experience, skills, and projects.",
    technologies: ["React", "TypeScript", "Vite", "CSS"],
    githubUrl: "https://github.com/your-username/portfolio",
  },
  {
    title: "Project Management System",
    description:
      "A web application for managing projects, tasks, and team activities.",
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL"],
    githubUrl: "https://github.com/your-username/project-management",
  },
  {
    title: "cloud Application",
    description:
      "A cloud-based application demonstrating backend services and cloud infrastructure.",
    technologies: ["Java", "Spring Boot", "AWS", "SQL"],
    githubUrl: "https://github.com/your-username/cloud-application",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="section-container">
        <p className="section-label">PROJECTS</p>
        <h2>Projects</h2>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
