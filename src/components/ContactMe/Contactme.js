import "./Contactme.css";
import { MH } from "../index.js";
const ContactMe = () => {
  return (
    <div className="contactme">
      <h1>Contact me</h1>
      <div className="contact-container">
        <div className="contact-left">
          <img src={MH} />
        </div>
        <div className="contact-right">
          <input
            type="text"
            placeholder="example@gmail.com"
            className="contact-input mail"
          ></input>
          <input
            type="text"
            placeholder="Subject"
            className="contact-input subject"
          ></input>
          <input
            type="text"
            placeholder="Something nice..."
            className="contact-input content"
          ></input>
          <button>SEND</button>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
