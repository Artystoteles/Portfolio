import "./Aboutme.css";
import { AH, SH, HC, JS, RC, TS, AN, S2, S3, S4 } from "../index.js";

const AboutMe = () => {
  const skills = [
    {
      id: 1,
      photo: HC,
      stars: S4,
    },
    {
      id: 2,
      photo: JS,
      stars: S3,
    },
    {
      id: 3,
      photo: RC,
      stars: S3,
    },
    {
      id: 4,
      photo: TS,
      stars: S3,
    },
    {
      id: 5,
      photo: AN,
      stars: S2,
    },
  ];
  return (
    <div className="aboutme">
      <h1>About Me</h1>
      <div className="aboutme-container">
        <div className="about-left">
          <div className="about-svg-container">
            <img className="about-svg" src={AH} alt="guy with laptop" />
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book.It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
        <div className="about-right">
          {skills.map((skill) => (
            <div key={skill.id} className="single-skill ">
              <div className="skill-logo">
                <img src={skill.photo} />
              </div>
              <div className="skill-rate">
                <img src={skill.stars} />
              </div>
            </div>
          ))}
          <div className="skill-svg-container">
            <img src={SH} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
