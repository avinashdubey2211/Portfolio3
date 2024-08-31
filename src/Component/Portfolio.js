// import React from 'react';
// import './Portfolio.css';
// import MenuCard from './MenuCard';
// import Navbar from './Navbar';
// import MyServices  from'./MyServices'
// import About from './About'
// import Skill from './Skill';

// const Portfolio = () => {
//     return (
//         <div className="portfolio-section">
//             <h2>Portfolio</h2>
//             <div className="portfolio-grid">
//                 <div className="portfolio-item">
//                     <img src="Portfolio image1.jpg " alt="Portfolio 1" />
//                     <div className="overlay">
//                         <p>Web Design</p>
//                     </div>
//                 </div>
//                 <div className="portfolio-item">
//                     <img src="portfolio-image2.jpg" alt="Portfolio 2" />
//                     <div className="overlay">
//                         <p>Web Design</p>
//                     </div>
//                 </div>
//                 <div className="portfolio-item">
//                     <img src="portfolio-image3.jpg" alt="Portfolio 3" />
//                     <div className="overlay">
//                         <p>Web Design</p>
//                     </div>
//                 </div>
//                 <div className="portfolio-item">
//                     <img src="portfolio-image4.jpg" alt="Portfolio 4" />
//                     <div className="overlay">
//                         <p>Web Design</p>
//                     </div>
//                 </div>
//                 <div className="portfolio-item">
//                     <img src="portfolio-image5.jpg" alt="Portfolio 5" />
//                     <div className="overlay">
//                         <p>Web Design</p>
//                     </div>
//                 </div>
//                 <div className="portfolio-item">
//                     <img src="portfolio-image6.jpg" alt="Portfolio 6" />
//                     <div className="overlay">
//                         <p>Web Design</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Portfolio;

import React from 'react';
import './Portfolio.css';
import MenuCard from './MenuCard';
import Navbar from './Navbar';
import MyServices  from'./MyServices'
import About from './About.js'
import Skill from './Skill';
import img1 from './images/img1.avif';
import img2 from './images/img2.avif';
import img3 from './images/img3.avif';
import img5 from './images/img5.avif';
import img6 from './images/img6.avif';
import img7 from './images/img7.webp';
import img8 from './images/img8.webp';
import img9 from './images/img9.jpg';

const Portfolio = () => {
    return (
        <div className="portfolio-section">
             <h2>Portfolio</h2>
            <div className="portfolio-grid">
                <div className="portfolio-item">
                    <img src={img1} alt="Portfolio 1" />
                </div>
                <div className="portfolio-item">
                    <img src={img2} alt="Portfolio 2" />
                </div>
                <div className="portfolio-item">
                    <img src={img3} alt="Portfolio 3" />
                </div>
                <div className="portfolio-item">
                    <img src={img5} alt="Portfolio 5" />
                </div>
                <div className="portfolio-item">
                    <img src={img6} alt="Portfolio 6" />
                </div>
                <div className="portfolio-item">
                    <img src={img7} alt="Portfolio 7" />
                </div>
                <div className="portfolio-item">
                    <img src={img8} alt="Portfolio 8" />
                </div>
                <div className="portfolio-item">
                    <img src={img9} alt="Portfolio 9" />
                </div>
            </div>
        </div>
    );
}

export default Portfolio;

