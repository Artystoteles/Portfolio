import "./App.css";
// import DV from "../../components/SVGs/DV.svg";
import DV from "./components/SVGs/DV.svg";

import Home from "./components/Home/Home";
import Aboutme from "./components/AboutMe/Aboutme";
import Projects from "./components/Projects/Projects";
import Contactme from "./components/ContactMe/Contactme";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img src={DV} alt="logo" className="logo" />
        <div className="home-navlinks">
          <a href="#home">
            <button>
              <span className="home-navlinks-home">Home</span>
            </button>
          </a>
          <a href="#about">
            <button>
              <span className="home-navlinks-about">About</span>
            </button>
          </a>
          <a href="#projects">
            <button>
              <span className="home-navlinks-projects">Projects</span>
            </button>
          </a>
          <a href="#contact">
            <button>
              <span className="home-navlinks-contact">Contact</span>
            </button>
          </a>
        </div>
      </nav>
      <section id="home" className="home-section single-section">
        <Home />
      </section>
      <section id="about" className="aboutme-section single-section">
        <Aboutme />
      </section>
      <section id="projects" className="project-section single-section">
        <Projects />
      </section>
      <section id="contact" className="contactme-section single-section">
        <Contactme />
      </section>
    </div>
  );
}

export default App;
