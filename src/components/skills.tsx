type SkillCategory = {
  name: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Backend",
    skills: ["Java", "Spring Boot", "REST APIs", "Microservices"],
  },
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    name: "Cloud & Devops",
    skills: ["AWS", "Docker", "Git", "CI/CD"],
  },
  {
    name: "Database",
    skills: ["SQL", "PostgreSQL", "MYSQL"],
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="section-container">
        <p className="section-label">SKILLS</p>
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-category" key={category.name}>
              <h3>{category.name}</h3>
              <div className="skill-list">
                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
