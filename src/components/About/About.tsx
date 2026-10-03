import { about, personalInfo } from "../../data/portfolio";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="section-container">
        <p className="section-label">About</p>
        <h2>About me</h2>

        <div className="about-content">
          <div className="about-text">
            <p>{about.description}</p>

            <p>{about.strengths}</p>

            <p>{about.interests}</p>
          </div>

          <div className="about-details">
            <div>
              <span>focus</span>
              <strong>{personalInfo.focus}</strong>
            </div>
            <div>
              <span>Experience</span>
              <strong>{personalInfo.experience}</strong>
            </div>
            <div>
              <span>Location</span>
              <strong>{personalInfo.location}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
