import React from 'react';
import './AllPage.css'
import MenuCard from './MenuCard';
import About from './About';
import MyServices from './MyServices';
import Skill from './Skill';
import Portfolio from './Portfolio';
import Contact from './Contact';

const AllPage = () => {
    return (
        <div className="all-page">
            
            <MenuCard />
            <About />
            <MyServices />
            <Skill />
            <Portfolio />
            <Contact />
            {/* Add all the content you want to display */}
        </div>
    );
}

export default AllPage;
