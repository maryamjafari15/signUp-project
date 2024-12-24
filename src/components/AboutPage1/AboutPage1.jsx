import React from "react";
import mephoto from "../../assets/mephoto.jpg";
import Nav from "../Home/Nav";
import "./AboutPage1.css";

const AboutPage1 = () => {
  return (
    <>
    <Nav />
    <div className='container2'> 
    <div className="imgContainer2">
      <img src={mephoto} alt='' className='imgAbout' />
      </div>
      <div className="content2">
        <h1>About me</h1>
        <p>
          👋 Hi there! I’m a junior developer who enjoys combining creativity
          and logical thinking. This interest led me to pursue Front-End
          Development. ✨ I’m eager to learn and grow my skills in this exciting
          field. 🌱 My aim is to contribute to the web by crafting seamless and
          engaging user experiences. 💻 I’m always open to exploring new
          technologies and collaborating on innovative projects. 🚀 Excited to
          grow and connect with you on this journey!
        </p>
      </div>
    </div>
    </>
  );
};

export default AboutPage1;
