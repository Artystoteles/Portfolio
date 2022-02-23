import "./Contactme.css";
import emailjs from "@emailjs/browser";
import { MH } from "../index.js";
const ContactMe = () => {
  function handleEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_oc07lzs",
        "template_4sq9ekl",
        e.target,
        "user_rWWK8H9AmBdtlmfeni20i"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="contactme">
      <h1>Contact me</h1>
      <div className="contact-container">
        <div className="contact-left">
          <img src={MH} />
        </div>
        <div className="contact-right">
          <form onSubmit={handleEmail}>
            <input
              name="email"
              type="text"
              placeholder="example@gmail.com"
              className="contact-input mail"
            ></input>
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className="contact-input subject"
            ></input>
            <textarea
              name="message"
              type="text"
              placeholder="Something nice..."
              className="contact-input content"
            ></textarea>
            <input type="submit" value="SEND" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
