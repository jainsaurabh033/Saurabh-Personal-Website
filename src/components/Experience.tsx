import { experiences } from "../data/portfolio";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="section-container">
        <p className="section-label">Experience</p>

        <h2>Work Experience</h2>
        <div className="experience-list">
          {experiences.map((experience) => (
            <article
              className="experience-card"
              key={`${experience.company}-${experience.role}`}
            >
              <p>{experience.period}</p>
              <h3>{experience.role}</h3>
              <h4>{experience.company}</h4>
              {experience.descriptions.map((description, index) => (
                <p key={`${experience.company}-${index}`}>{description}</p>
              ))}
              <div className="technology-list">
                {experience.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
