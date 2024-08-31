import React from 'react';
import './Skill.css';
import MenuCard from './MenuCard';
import Navbar from './Navbar';
import MyServices  from'./MyServices'
import About from './About.js'


const Skills = () => {
    return (
        <div className="skills-section">
            <h2>
                <span className="white-text">My</span> 
                <span className="orange-text">Skills</span>
            </h2>
            <div className="skill-bar">
                <p>HTML - 5</p>
                <div className="progress-bar">
                    <div className="progress" style={{ width: '80%' }}></div>
                </div>
            </div>
            <div className="skill-bar">
                <p>CSS - 3</p>
                <div className="progress-bar">
                    <div className="progress" style={{ width: '75%' }}></div>
                </div>
            </div>
            <div className="skill-bar">
                <p>Bootstrap</p>
                <div className="progress-bar">
                    <div className="progress" style={{ width: '60%' }}></div>
                </div>
            </div>
            <div className="skill-bar">
                <p>JavaScript</p>
                <div className="progress-bar">
                    <div className="progress" style={{ width: '90%' }}></div>
                </div>
            </div>
            <div className="skill-bar">
                <p>Adobe Photoshop</p>
                <div className="progress-bar">
                    <div className="progress" style={{ width: '75%' }}></div>
                </div>
            </div>
            <div className="skill-bar">
                <p>Adobe Illustrator</p>
                <div className="progress-bar">
                    <div className="progress" style={{ width: '60%' }}></div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
