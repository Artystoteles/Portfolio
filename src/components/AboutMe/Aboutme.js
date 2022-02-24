import "./Aboutme.css";
import { SH, HT, CS, JS, RC, TS, AN, S2, S3, S4 } from "../index.js";

const AboutMe = () => {
  const skills = [
    {
      id: 1,
      photo: [HT, CS],
      stars: S4,
    },
    {
      id: 2,
      photo: [JS],
      stars: S3,
    },
    {
      id: 3,
      photo: [RC],
      stars: S3,
    },
    {
      id: 4,
      photo: [TS],
      stars: S3,
    },
    {
      id: 5,
      photo: [AN],
      stars: S2,
    },
  ];
  return (
    <div className="aboutme">
      <h1>About Me</h1>
      <div className="aboutme-container">
        <div className="about-left">
          <h1>I'm a frontend developer from Cracow, Poland</h1>
          <p>
            I enjoy taking complex problems and turning them into beautiful
            layouts. I'm intrested in logical part of websites. I'm the most
            confident in working with react but willing to develop my skills in
            other technologies. I finished some courses and many interesting
            projects you can see on my
            <a href="https://github.com/Artystoteles" target="_blank">
              <strong> github </strong>
            </a>
            .
          </p>
        </div>
        <div className="about-right">
          {skills.map((skill) => (
            <div key={skill.id} className="single-skill ">
              {skill.photo.map((photo) => (
                <div className="skill-logo">
                  <img src={photo} alt="tech photo" />
                </div>
              ))}
              <div className="skill-rate">
                <img src={skill.stars} alt="skill rate" />
              </div>
            </div>
          ))}
          <div className="skill-svg-container">
            <img src={SH} alt="standing man" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
