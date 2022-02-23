import "./Projects.css";
import Singleproject from "./Singleproject.js";
import { AH, HT, CS, JS, RC, TS, AN, S2, S3, S4, GH } from "../index.js";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Shopping Cart",
      description:
        "It's Shopping cart app uses fakestore API made with react and typescript",
      technology: [RC, TS],
      tech_photo: RC,
      url: "https://github.com/Artystoteles/Shopping-Cart-React-TS",
    },
    ,
    {
      id: 2,
      name: "Team generator",
      description:
        "Have you ever had a problem with fair distribution of teams? This Angular app will help you",
      technology: [AN, TS],
      tech_photo: AN,
      url: "https://github.com/Artystoteles/Angular-TeamRandomiser",
    },
    {
      id: 3,
      name: "Quiz App",
      description:
        "Do you want to check your knowledge? Click on the button and try this app",
      technology: [JS, HT, CS],
      tech_photo: JS,
      url: "https://github.com/Artystoteles/QuizApp-JS",
    },
  ];
  return (
    <div className="projects">
      <h1> Projects</h1>
      <div className="projects-container">
        {projects.map((item) => (
          <Singleproject key={item.id} project={item} />
        ))}
      </div>
      <button className="other-btn">
        OTHER{" "}
        <span>
          {" "}
          <img src={GH} />
        </span>
      </button>
    </div>
  );
};

export default Projects;
