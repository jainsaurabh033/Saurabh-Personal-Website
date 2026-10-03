import ProjectCard from "./ProjectCard";
import { projects } from "../../data/portfolio";
import "./Project.css";

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
