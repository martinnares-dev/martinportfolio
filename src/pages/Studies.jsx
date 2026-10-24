import { Link } from "react-router-dom";

const learning = [
  { name: "HTML", status: "Completed", note: "Structure of web pages." },
  { name: "CSS", status: "Completed", note: "Styling, layout, and responsive design." },
  { name: "JavaScript", status: "In Progress", note: "Website interactivity and logic." },
  { name: "React.js", status: "In Progress", note: "Creating components and multi-page apps using Vite." },
  { name: "TypeScript", status: "Next", note: "Type safety for better code." },
  { name: "Node.js", status: "Next", note: "Backend using JavaScript." },
  { name: "SQL / Database", status: "Next", note: "Data storage and retrieval." },
];

const roadmap = [
  "Frontend: HTML, CSS, JavaScript, React",
  "Backend: Node.js at APIs",
  "Database: SQL",
  "Deployment: Git, GitHub, Vercel",
  "Full-Stack Developer at Software Engineer",
];

const tools = ["VS Code", "Git", "GitHub", "Vercel", "Vite"];

function Studies() {
  return (
    <section className="studies">
      <h2>Studies</h2>

      <div className="about-card">
        <h3>What I'm Learning</h3>
        <ul className="study-list">
          {learning.map((item) => (
            <li key={item.name}>
              <div className="study-head">
                <span className="study-name">{item.name}</span>
                <span
                  className={`status status-${item.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {item.status}
                </span>
              </div>
              <p>{item.note}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="about-card">
        <h3>My Learning Roadmap</h3>
        <ol className="roadmap">
          {roadmap.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>

      <div className="about-card">
        <h3>Tools I Use</h3>
        <div className="skills">
          {tools.map((tool) => (
            <span key={tool} className="skill-tag">{tool}</span>
          ))}
        </div>
      </div>

      <Link to="/contact" className="btn btn-primary">Let's Connect</Link>
    </section>
  );
}

export default Studies;