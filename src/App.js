// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Component/Navbar';
// import AllPage from './Component/AllPage';
// import MenuCard from './Component/MenuCard';
// import About from './Component/About';
// import MyServices from './Component/MyServices';
// import Skill from './Component/Skill';
// import Portfolio from './Component/Portfolio';
// import Contact from './Component/Contact';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<MenuCard />} />
//         <Route path="/all" element={<AllPage />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<MyServices />} />
//         <Route path="/skills" element={<Skill />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import AllPage from './Component/AllPage';
import MenuCard from './Component/MenuCard';
import About from './Component/About';
import MyServices from './Component/MyServices';
import Skill from './Component/Skill';
import Portfolio from './Component/Portfolio';
import Contact from './Component/Contact';

const App = () => {
  return (
    <Router>
      <Navbar /> 
      <Routes>
     
        <Route path="/" element={<MenuCard />}This should only appear once />
        <Route path="/all" element={<AllPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<MyServices />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

