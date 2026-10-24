import { useState } from "react";
import { FaEnvelope, FaFacebook, FaGithub, FaTiktok, FaInstagram } from "react-icons/fa";

const EMAIL = "martinnares2027@gmail.com";

const contacts = [
  { label: "Email", icon: <FaEnvelope />, value: EMAIL, href: `mailto:${EMAIL}` },
  { label: "Facebook", icon: <FaFacebook />, value: "facebook.com/martin lino llantos nares", href: "https://www.facebook.com/profile.php?id=61592316135584" },
  { label: "GitHub", icon: <FaGithub />, value: "github.com/martinnares-dev", href: "https://github.com/martinnares-dev" },
  { label: "TikTok", icon: <FaTiktok />, value: "@martinlinollantosnares", href: "https://www.tiktok.com/@martinlinollantosnares" },
  { label: "Instagram", icon: <FaInstagram />, value: "@martinlinollantosnares", href: "https://www.instagram.com/martinlinollantosnares/" },
];

function Contact() {
  const [form, setForm] = useState({ name: "", subject: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `Message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n- ${form.name}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p className="contact-intro">
        Do you have a question, or just want to get to know me? Just message me!
      </p>

      <div className="contact-grid">
        <div className="about-card">
          <h3>Get in Touch</h3>
          <ul className="contact-links">
            {contacts.map((item) => (
              <li key={item.label}>
                <span className="info-label">
                  {item.icon} {item.label}
                </span>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="about-card">
          <h3>Send a Message</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Subject
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
