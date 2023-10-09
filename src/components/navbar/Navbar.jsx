import React from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';
import { useState } from 'react';
import './navbar.css';

function Navbar() {

 const [activeNav,setactive]=useState('#');

  return (
    <nav>
        <a href="#" onClick={()=>setactive('#')} className={activeNav==='#'?'active':''}><AiOutlineHome/></a>
        <a href="#about"  onClick={()=>setactive('#about')} className={activeNav==='#about'?'active':''}><AiOutlineUser/></a>
        <a href="#experience"  onClick={()=>setactive('#experience')} className={activeNav==='#expereince'?'active':''}><BiBook/></a>
        <a href="#portfolio"  onClick={()=>setactive('#portfolio')} className={activeNav==='#portfolio'?'active':''}><RiServiceLine/></a>
        <a href="#contact"  onClick={()=>setactive('#contact')} className={activeNav==='#contact'?'active':''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Navbar;