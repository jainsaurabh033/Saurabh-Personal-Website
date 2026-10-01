import React from "react";

type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  description: string;
};

const education: EducationItem[] = [
  {
    degree: "Bachelor of Technology",
    institution: "Your University",
    period: "2026-2020",
    description:
      "Studied computer science and software engineering fundamentals.",
  },
];

const achievements = [
  "Achievements or certification goes here",
  "Another achievement goes here",
  "Another certification or recognition",
];

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
