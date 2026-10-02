const About = () => {
  return (
    <section className="about" id="about">
      <div className="section-container">
        <p className="section-label">About</p>
        <h2>About me</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              I am a Software Engineer focused on building reliable, scalable,
              and maintainable software applications.
            </p>

            <p>
              I enjoy solving engineering problems across frontend, backend, and
              cloud.
            </p>
          </div>

          <div className="about-details">
            <div>
              <span>focus</span>
              <strong>Software Engineering</strong>
            </div>
            <div>
              <span>Experience</span>
              <strong>Frontend Development / Backend Development</strong>
            </div>
            <div>
              <span>Location</span>
              <strong>Nagpur, India</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
