import "./Contactme.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { MH } from "../index.js";
const ContactMe = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  function handleEmail(e, value) {
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
    setEmail("");
    setSubject("");
    setContent("");
    alert("Thanks for your email");
  }
  return (
    <div className="contactme">
      <h1>Contact me</h1>
      <div className="contact-container">
        <div className="contact-left">
          <img src={MH} alt="man with letter" />
        </div>
        <div className="contact-right">
          <form onSubmit={handleEmail}>
            <input
              name="email"
              type="text"
              placeholder="example@gmail.com"
              className="contact-input mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className="contact-input subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            ></input>
            <textarea
              name="message"
              type="text"
              placeholder="Something nice..."
              className="contact-input content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <input type="submit" value="SEND" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
