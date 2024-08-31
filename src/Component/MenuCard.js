import React from 'react'
// import "./style.css";
import "./MenuCard.css"
import Navbar from './Navbar';


const MenuCard = () => {
  return (
    <>
     <div className="App">
            <Navbar />
            <div className="intro-section">
                <p>Hi, it's me</p>
                <h1>MR AVINASH DUBEY</h1>
                <h2>
                    <span className="white-text">And I'm</span>  
                    <span className="brown-text"> Frontend Developer</span>
                </h2>
                <p className="caption">
  <span className="white-text">
    This is a two-line caption that can describe something important about the work or vision. 
    It provides context or a brief introduction.
  </span> 
  
</p>

                <div class="social-icons">
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-linkedin"></i>
    <i class="fa-brands fa-github"></i>
    <i class="fa-brands fa-instagram"></i>
</div>
    
<button className="download-cv">Download CV</button>
                
            </div>
        </div>
     </>
  )
}

export default MenuCard