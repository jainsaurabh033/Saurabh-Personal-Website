type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: "Amazon",
    role: "Programmer Analyst",
    period: "2022 - Present",
    location: "India",
    description:
      "Working on software systems and applications involving backend services, data processing, and cloud technologies.",
    technologies: ["Java", "Spring Boot", "AWS", "SQL"],
  },
  {
    company: "TCS",
    role: "Assistant System Engineer",
    period: "2020 - 2022",
    location: "India",
    description:
      "Developed and maintained enterprise software applications and contributed to application development and support.",
    technologies: ["React", "Svelte", "HTML", "CSS"],
  },
];

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
              <p>{experience.description}</p>

              <div className="technolgy-list">
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
