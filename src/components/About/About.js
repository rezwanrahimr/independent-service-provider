import React from 'react';
import parsonal from '../../Images/parsonal.jpg'
import './About.css';


// This is About Section.

const About = () => {
    return (
        <div className='container'>
            <img className='parsonal-picture mt-5' src={parsonal} alt="" />
            <br />
            <h3 className='fw-bold mt-1'>Name: Rezwan Rahim (Rupak)</h3>
            <hr />
            <div className='mt-5'>
                <h5>
                    I am Rezwan Rahim Rupak. I am a student. I am studying to write in computer science and I hope I will be a good programmer one day. I am currently learning JavaScript. And I hope that I can reach my goal one day or another, inshallah, if I can keep up the continuity of my work with the present report.
                    For the next three to four months I want to continue the dedication I am currently working on so that I can reach my goals and for the next 1 year I want to see myself as a good programmer. Inshallah
                </h5>
            </div>

        </div>
    );
};

export default About;