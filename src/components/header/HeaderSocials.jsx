import React from 'react';
import { BsLinkedin } from 'react-icons/bs'; 
import {FaGithub} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';



function HeaderSocials() {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/pradumn-garg-0894b81b4/" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/PradumnGarg" target='_blank'><FaGithub/></a>
      <a href="https://twitter.com/Paddy57687398" target='_blank'><FaTwitter/></a>

    </div>
  )
}

export default HeaderSocials