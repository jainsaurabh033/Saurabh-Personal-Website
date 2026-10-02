import type { ProjectCardProps } from "../data/portfolio";

const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="technology-list">
        {technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <a href={githubUrl} target="_blank" rel="noreferrer">
        View on GitHub →
      </a>
    </article>
  );
};

export default ProjectCard;
