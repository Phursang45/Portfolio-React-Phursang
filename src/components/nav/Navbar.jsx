import React from 'react'
import './navbar.css';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageAltCheck} from 'react-icons/bi'
import { useState } from 'react';


const Navbar = () => {
  const [activeNav, setActiveNav]= useState();

  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav=== '#'? 'active': ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav=== '#about'? 'active': ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav=== '#experience'? 'active': ''}><BiBookAlt/></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav=== '#services'? 'active': ''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav=== '#contact'? 'active': ''}><BiMessageAltCheck/></a>
    </nav>
  )
}

export default Navbar
