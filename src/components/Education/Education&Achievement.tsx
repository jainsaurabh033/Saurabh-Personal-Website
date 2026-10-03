import { education, achievements } from "../../data/portfolio";
import "./Education.css";

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="section-container">
        <p className="section-label">Education</p>

        <h2>Education & Achievements</h2>

        <div className="education-content">
          <div className="education-list">
            {education.map((item) => (
              <article
                className="education-card"
                key={`${item.degree} - ${item.institution}`}
              >
                <p>{item.period}</p>
                <h3>{item.degree}</h3>
                <h4>{item.institution}</h4>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className="achievements">
            <h3>Achievements</h3>
            <ul>
              {achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
