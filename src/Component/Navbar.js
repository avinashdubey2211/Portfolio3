// import React,{useState} from 'react';
// import './Navbar.css';
// import { Link } from 'react-router-dom';
// // import "./style.css";
// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleNavbar = () => {
//         setIsOpen(!isOpen);
//     };
//     return (
//         <nav className="navbar">
//             {/* <div className="nav-links"> */}
//             <div className="nav-links" style={{ display: isOpen ? 'flex' : 'none' }}>
//                 {/* <a href="#home">Home</a>
//                 <a href="#about">About Me</a>
//                 <a href="#services">Services</a>
//                 <a href="#skills">Skills</a>
//                 <a href="#portfolio">Portfolio</a>
//                 <a href="#contact">Contact</a> */}
                
//                  <Link to="/">Home</Link>
//         <Link to="/about">About Me</Link>
//         <Link to="/services">Services</Link>
//         <Link to="/skills">Skills</Link>
//         <Link to="/portfolio">Portfolio</Link>
//         <Link to="/contact">Contact</Link>
               
//             </div>
            
//             <div className="hire-me">
//                 <button className='mobile-menu'>Hire Me</button>
//                  {/* <button onClick={toggleNavbar}>Hire Me</button> 
//                  */}
//                 <button className="mobile-menu-button" onClick={toggleNavbar}>
//                     <span className="menu-icon">&#9776;</span> {/* Hamburger menu icon */}
                    
//                 </button>
//             </div>
//         </nav>
        
//     );
// }

// export default Navbar;
// import React, { useState } from 'react';
// import './Navbar.css';
// import { Link, useNavigate } from 'react-router-dom';
// import Logo1 from './images/logo1.avif';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const navigate = useNavigate();

//     const toggleNavbar = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleAllButtonClick = () => {
//         // Navigate to the "All" page or handle full page logic
//         navigate('/all'); // Change '/all' to the route you want
//     };

//     return (
//         <nav className="navbar">
//              {/* <div className="Logo">
//                     <img src={Logo1} alt="Navbar" />
//                 </div> */}

//             <div className="nav-links" style={{ display: isOpen ? 'flex' : 'none' }}>
           
//                 <button onClick={handleAllButtonClick} className="all-button">All</button>
                
//                 <Link to="/">Home</Link>
//                 <Link to="/about">About Me</Link>
//                 <Link to="/services">Services</Link>
//                 <Link to="/skills">Skills</Link>
//                 <Link to="/portfolio">Portfolio</Link>
//                 <Link to="/contact">Contact</Link>
//             </div>
            
//             <div className="hire-me">
//                 <button className='mobile-menu'>Hire Me</button>
//                 <button className="mobile-menu-button" onClick={toggleNavbar}>
//                     <span className="menu-icon">&#9776;</span> {/* Hamburger menu icon */}
//                 </button>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;
import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo1 from './images/logo1.avif';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleAllButtonClick = () => {
        navigate('/all'); // Adjust to your desired route
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="logo-container">
                    <img src={Logo1} alt="Navbar Logo" className="navbar-logo" />
                </div>
                {/* <Link to="/" className="nav-link-home">Home</Link> */}
            </div>

            <div className="nav-links" style={{ display: isOpen ? 'flex' : 'none' }}>
                <button onClick={handleAllButtonClick} className="all-button">All</button>
                <Link to="/" className="nav-link-home">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/services">Services</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </div>
            
            <div className="hire-me">
                <button className='mobile-menu'>Hire Me</button>
                <button className="mobile-menu-button" onClick={toggleNavbar}>
                    <span className="menu-icon">&#9776;</span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
