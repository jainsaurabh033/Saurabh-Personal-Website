import { useState } from "react";
import { personalInfo } from "../data/portfolio";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const email = "saurabhjain04g@gmail.com";

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
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>

              <a href={personalInfo.github} target="_blank" rel="noreferrer">
                GitHub
              </a>

              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>

              <a href={personalInfo.leetcode} target="_blank" rel="noreferrer">
                Leetcode
              </a>
              <a href={personalInfo.resume} target="_blank" rel="noreferrer">
                Resume
              </a>
              <a href={personalInfo.medium} target="_blank" rel="noreferrer">
                Medium
              </a>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Your message..."
                required
              />
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
