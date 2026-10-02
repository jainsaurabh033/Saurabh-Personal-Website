import { skillCategories } from "../data/portfolio";

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
