import "./HomePage.css";

import Nav from "./Nav";

const HomePage = () => {
  return (
    <div className='container1'>   
      <div className='content1'>
        <div className='mainsection'>
        <Nav />
          <h1>Hello there! </h1>
          <p>
            I’m a junior front-end developer, and I created this website as a
            hands-on project to explore features like user sign-up and more. 🌟
            I’d love for you to take a look at my code and share your
            feedback—it would mean a lot! 🚀
          </p>
        </div>
      </div>
      <div className='background1'></div>
    </div>
  );
};

export default HomePage;
