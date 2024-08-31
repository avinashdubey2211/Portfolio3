import React from 'react';
import './Contact.css';
import MenuCard from './MenuCard';
import Navbar from './Navbar';
import MyServices  from'./MyServices'
import About from './About.js'
import Skill from './Skill'


const ContactSection = () => {
  return (
    <div className="contact-section">
      <h2>Contact</h2>
      <div className="contact-content">
        <div className="contact-info">
          <p><i className="fas fa-phone"></i> +91 7317018945</p>
          <p><i className="fas fa-phone"></i> +8801057-043643</p>
          <p><i className="fas fa-envelope"></i> avinashdubey2211@gmail.com</p>
          <p><i className="fas fa-map-marker-alt"></i> Lucknow (Utter Pradesh)</p>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Phone Number" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;
