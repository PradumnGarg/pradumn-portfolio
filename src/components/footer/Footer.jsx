import React from 'react';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa';

import './footer.css';


function Footer() {
  return (
    <footer>
        <a href="#" className='footer_logo'>Pradumn Garg</a>

        <ul className='permanlinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#expereince">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>

        </ul>

        <div className='footer_socials'>
            <a href="https://www.linkedin.com/in/pradumn-garg-0894b81b4/"><FaLinkedin/></a>
            <a href="https://www.instagram.com/pgarg4050/"><FiInstagram/></a>
            <a href="https://twitter.com/Paddy57687398"><IoLogoTwitter/></a>

        </div>

        <div className='footer_copyright'>

            <small>&copy; Pradumn Garg.All rights reserved.</small>

        </div>

    </footer>
  )
}

export default Footer