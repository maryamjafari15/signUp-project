import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css"; 
import Nav from "../Home/Nav";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dve9juf", 
        "template_gxjj1ju", 
        form.current,
        "-jrCaWjbgxySTZj-H"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("An error occurred. Please try again.");
        }
      );

    e.target.reset(); 
  };

  return (
    <div className="container3">
      <Nav/>
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="input-box2">
          <label>Name:</label>
          <input type="text" name="user_name" required />
        </div>
        <div className="input-box2">
          <label>Email:</label>
          <input type="email" name="user_email" required />
        </div>
        <div className="input-box2">
          <label>Message:</label>
          <textarea name="message" rows="4" required />
        </div>
        <button type="submit" className="button1">Send</button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
