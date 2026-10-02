import profileImage from "../assets/profile.png";
import type { HeroProps } from "../data/portfolio";

const Hero = ({ name, title, description }: HeroProps) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p>Hi, I'm</p>
          <h1>{name}</h1>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="hero-image">
          <img src={profileImage} alt={`${name} profile`} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
