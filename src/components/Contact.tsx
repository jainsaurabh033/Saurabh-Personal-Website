import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const email = "saurabhjain04g@gmail.com";

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    setStatus("submitting");

    try {
      console.log(formData);

      // Real email service will be connected here later.

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

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

              <a
                href="https://github.com/jainsaurabh033"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/saurabh-jain-b7647a221/?isSelfProfile=true"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="form-success">Message sent successfully!</p>
            )}

            {status === "error" && (
              <p className="form-error">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
