import React from 'react';
import "./header.css";
import CTA from './CTA';
import ME from '../../assets/meN.png';
import HeaderSocials from './HeaderSocials';

function Header() {
  return (
   <header>
    <div className='container header_container'>

        <h5>Hello I'm</h5>
        <h1>Pradumn Garg</h1>
        <h5 className='text-light'>Software Developer</h5>
        <CTA/>

        <div className='me'>
          <img src={ME} alt="me"/>
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>

        <HeaderSocials/>

    </div>

   </header>
  )
}

export default Header