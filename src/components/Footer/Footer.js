import React from 'react';
import './Footer.css';


// This is Footer Section.
const Footer = () => {
    return (
        <div className='footer'>
            <ul>
                <li><a href="">HOME</a></li>
                <li><a href="">BLOG</a></li>
                <li><a href="">ABOUT</a></li>
                <li><a href="">CONTACT</a></li>
                <li><a href="">PRIVACY POLICY</a></li>
            </ul>
            <p className='call'>Call: +090266343444
                +544370345543
            </p>
            <p className='email'>Email: Dr.AntoniaNovello@gmail.com
            </p>
            <p className='copyright text-white'>Dr. Antonia Novello @ 2022</p>
        </div>
    );
};

export default Footer;