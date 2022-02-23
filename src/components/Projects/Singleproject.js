import "./Singleproject.css";
import { GH } from "../index.js";

const Singleproject = (project) => {
  return (
    <div key={project.project.id} className="singleproject">
      <div className="tech-logo-container">
        <img src={project.project.tech_photo} />
      </div>
      <div className="proj-container">
        <h2 className="proj-title">{project.project.name}</h2>
        <p className="proj-desc">{project.project.description}</p>
        <p>
          {" "}
          <strong>Technology </strong>:{" "}
        </p>
        <div className="tech-n-btn">
          <div className="tech-container">
            {project.project.technology.map((tech) => (
              <span>
                <img src={tech} />
              </span>
            ))}
          </div>
          <a href={project.project.url} target="_blank">
            <button className="proj-btn">
              <span>
                <img src={GH} /> GitHub
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Singleproject;
