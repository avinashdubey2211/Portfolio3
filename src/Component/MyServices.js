import React from 'react';
// import "./style.css";
import "./MyServices.css";
import MenuCard from './MenuCard';
import Navbar from './Navbar';


const MyServices = () => {
  return (
    <div className="services-section">
      <h1 className="services-title">
        My <span className="orange-text">Services</span>
      </h1>
      <div className="services-boxes">
        <div className="service-box">
          <i className="fas fa-desktop service-icon"></i>
          <h3>Web Development</h3>
          <p>
            I specialize in creating modern, responsive websites that are 
            tailored to your needs. My web development services include 
            front-end and back-end development, ensuring a seamless experience 
            for your users.
          </p>
        </div>
        <div className="service-box">
          <i className="fas fa-mobile-alt service-icon"></i>
          <h3>App Development</h3>
          <p>
            My app development services are focused on building scalable, 
            user-friendly mobile applications. I work with the latest 
            technologies to ensure your app is fast, reliable, and meets 
            your business goals.
          </p>
        </div>
        <div className="service-box">
          <i className="fas fa-bullhorn service-icon"></i>
          <h3>Digital Marketing</h3>
          <p>
            I offer digital marketing solutions that help your business grow 
            online.  my services are 
            designed to increase your visibility and engagement with your 
            target audience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyServices;
