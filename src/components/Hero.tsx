import profileImage from "../assets/profile.png";
import { personalInfo } from "../data/portfolio";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p>Hi, I'm</p>
          <h1>{personalInfo.name}</h1>
          <h2>{personalInfo.title}</h2>
          <p>{personalInfo.description}</p>
        </div>

        <div className="hero-image">
          <img src={profileImage} alt={`${personalInfo.name} profile`} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
