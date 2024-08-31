import React from 'react';


// import "./style.css"
import "./About.css"
import MenuCard from './MenuCard';
import Navbar from './Navbar';
import About from './About.js';
import img10 from './images/img10.jpg';




const AboutMe = () => {
 

  return (
    <div className="about-section">
      {/* <h1 className="about-title">About Me</h1> */}
      <h1 className="about-title">
  About <span className="orange-text">Me</span>
</h1>
      <div className="about-content">
        <div className="about-photo">
          {/* <img src={require('./imges/01img')}  /> */}
       
                    <img src={img10} alt="about" />
               
        </div>
        <div className="about-intro">
          <h2>Frontend Developer</h2>
          <p>
            This is a four-line introduction about yourself that gives the reader an overview of who you are, 
            your experience, and what you do. It should be concise yet informative, giving enough context to engage the reader.
          </p>
          <p style={{ marginTop: "15px" }}>
            This is a two-line continuation of your introduction that might add more personal details or discuss your goals and aspirations.
          </p>
          <button className="read-more-button">Read more</button>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
