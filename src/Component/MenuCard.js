// import React from "react";
// // import "./style.css";
// import "./MenuCard.css";
// import Navbar from "./Navbar";
// import img11 from "./images/img11.jpg";

// const MenuCard = () => {
//   return (
//     <>
//       <div className="App">
//         <Navbar />
//         <div className="intro-section">
//           <p>Hi, it's me</p>
//           <h1>MR AVINASH DUBEY</h1>
//           <h2>
//             <span className="white-text">And I'm</span>
//             <span className="brown-text"> Frontend Developer</span>
//           </h2>
//           {/* <img src={img11} alt="Profile" className="profile-image" /> */}
//           <p className="caption">
//             <span className="white-text">
//               This is a two-line caption that can describe something important
//               about the work or vision. It provides context or a brief
//               introduction.
//             </span>
//           </p>
               
//           <div class="social-icons">
//             <i class="fa-brands fa-facebook"></i>
//             <i class="fa-brands fa-linkedin"></i>
//             <i class="fa-brands fa-github"></i>
//             <i class="fa-brands fa-instagram"></i>
//           </div>

//           <button className="download-cv">Download CV</button>
          
//         </div>
//         <div className="image-content">
//             <img src={img11} alt="Profile" className="profile-image" />
//           </div>
//           {/* <img src={img11} alt="Profile" className="profile-image" /> */}
//       </div>
//     </>
//   );
// };

// export default MenuCard;

import React from "react";
import "./MenuCard.css";
import Navbar from "./Navbar";
import img11 from "./images/img11.jpg";

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
              This is a two-line caption that can 
              describe <br></br>
              something important
              about the work or vision. <br></br>
              It provides context or a brief introduction.
            </span>
          </p>
          <div className="social-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
          <button className="download-cv">Download CV</button>
          <div className="image-content">
          <img src={img11} alt="Profile" className="profile-image" />
        </div>
        </div>
        {/* <div className="image-content">
          <img src={img11} alt="Profile" className="profile-image" />
        </div> */}
      </div>
    </>
  );
};

export default MenuCard;
