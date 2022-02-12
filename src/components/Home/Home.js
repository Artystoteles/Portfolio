import "./Home.css";

import HH from "../../components/SVGs/home-homie.svg";
import CV from "../../components/CV/en-DanielVisentini.pdf";
const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-left">
          <h1>
            Hi, I'm <span> Daniel</span>
          </h1>

          <p>FRONTEND DEVELOPER</p>

          <div className="home-container-btns">
            <a href={CV} download="DanielVisentiniCV">
              <button className="resume-btn ">Resume</button>
            </a>
            <a
              href="https://github.com/Artystoteles"
              rel="noreferrer"
              target="_blank"
            >
              <button className="github-btn "></button>
            </a>
            <a
              href="https://www.linkedin.com/in/danielvisentini/"
              rel="noreferrer"
              target="_blank"
            >
              <button className="linkedin-btn "></button>
            </a>
          </div>
        </div>
        <div className="home-right">
          <div className="home-svg-container">
            <img className="home-svg" alt="coding man" src={HH} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
