import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const email = "your-email@example.com";

  async function copyEmail() {
    await navigator.clipboard.writeText(email);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <section className="contact" id="contact">
      <div className="section-container">
        <p className="section-label">CONTACT</p>
        <h2>Let's Connect</h2>

        <div className="contact-content">
          <div className="contact-info">
            <p>
              I'm always open to discussing software engineering, interesting
              projects, and new opportunities.
            </p>

            <div className="contact-links">
              <div className="email-contact">
                <a href={`mailto:${email}`}>{email}</a>

                <button type="button" onClick={copyEmail}>
                  {copied ? "Copied !" : "Copy"}
                </button>
              </div>
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/your-username"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Your name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="your@email.com" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={6}
                placeholder="Your message...."
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
