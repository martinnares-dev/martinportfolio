import { Link } from "react-router-dom";

const personalInfo = [
  { label: "Name", value: "Martin Lino Llantos Nares" },
  { label: "Birthdate", value: "October 11, 2005" },
  { label: "Address", value: "Sunrise Village, Anislag, Daraga, Albay" },
];

const education = [
  { level: "Elementary", school: "AES Anislag Elementary School" },
  { level: "High School", school: "ANHS Anislag National High School" },
  {
    level: "College",
    school: "SLTCFI Southern Luzon Technological College Foundation Inc.",
  },
  { level: "Department", school: "CCS College of Computer Studies" },
];

const courses = [
  "DCPST Diploma in Computer Programming & Software Technology (3-year diploma program)",
  "Bachelor of Science in Computer Science (will be continued in the 4th year)",
];

const skills = [
  "Networking",
  "Electronics",
  "Accounting",
  "Graphics Design",
  "Animation",
  "Web Development",
  "Software Development",
];

const certificates = [
  "Computer Systems Servicing NC II",
  "Electronic Products Assembly and Servicing NC II",
  "Bookkeeping NC III",
  "Visual Graphics Design NC III (Soon)",
  "Web Development NC III (soon)"
];

function About() {
  return (
    <section className="about">
      <h2>About Me</h2>

      <div className="about-card">
        <h3>Hi, I'm Martin!</h3>
        <p>
          My name is Martin Lino Llantos Nares. I'm from Daraga, Albay.
          Currently studying at SLTCFI Southern Luzon Technological College
          Foundation Inc., taking a Diploma in Computer Programming & Software
          Technology, and continuing to 4th year for a Bachelor of Science in
          Computer Science. I love studying technology.
        </p>
        <p>
          I am studying Web Development and Software Development. My goal is to
          become a Full-Stack Developer and Software Engineer in the future.
        </p>
      </div>

      <div className="about-card">
        <h3>Personal Information</h3>
        <ul className="info-list">
          {personalInfo.map((item) => (
            <li key={item.label}>
              <span className="info-label">{item.label}</span>
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="about-card">
        <h3>Education</h3>
        <ul className="info-list">
          {education.map((item) => (
            <li key={item.level}>
              <span className="info-label">{item.level}</span>
              <span>{item.school}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="about-card">
        <h3>Courses</h3>
        <ul className="plain-list">
          {courses.map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
      </div>

      <div className="about-card">
        <h3>Skills & Hobbies</h3>
        <div className="skills">
          {skills.map((skill) => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>

      <div className="about-card">
        <h3>National Certificates</h3>
        <ul className="plain-list">
          {certificates.map((cert) => (
            <li key={cert}>{cert}</li>
          ))}
        </ul>
      </div>

      <Link to="/contact" className="btn btn-primary">Let's Connect</Link>
    </section>
  );
}

export default About;