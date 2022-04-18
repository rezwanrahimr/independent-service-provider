import React from 'react';
import parsonal from '../../Images/parsonal.jpg'
import './About.css';

const About = () => {
    return (
        <div className='container'>
            <img className='parsonal-picture mt-5' src={parsonal} alt="" />
            <br />
            <h3 className='fw-bold mt-1'>Name: Rezwan Rahim (Rupak)</h3>
            <hr />
          
        </div>
    );
};

export default About;