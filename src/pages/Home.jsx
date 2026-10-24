import { Link } from "react-router-dom";
import profilePic from "../assets/profile.jpg";

const skills = ["HTML", "CSS", "JavaScript", "React", "Vite", "Git"];

function Home() {
  return (
    <section className="hero">
      <img src={profilePic} alt="Martin" className="hero-photo" />

      <p className="hero-greeting">Hi, I am</p>
      <h2 className="hero-name">Martin Lino Llantos Nares</h2>
      <p className="hero-role">College of Computer Studies</p>
      <p className="hero-text">
        Aspiring Software Engineer.
        I am studying web development and software development.
        I am passionate about coding, programming, electronics, networking, animation and graphics design.
      </p>

      <div className="hero-buttons">
        <Link to="/about" className="btn btn-primary">About Me</Link>
        <Link to="/contact" className="btn btn-outline">Contact Me</Link>
      </div>

      <div className="skills">
        {skills.map((skill) => (
          <span key={skill} className="skill-tag">{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Home;