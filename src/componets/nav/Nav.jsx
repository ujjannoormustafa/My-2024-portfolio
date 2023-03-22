import React from "react";
import "./nav.css";

import { AiOutlineHome } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
import {MdOutlineInsights} from "react-icons/md"
import { RiServiceLine } from "react-icons/ri";
import { AiOutlineContacts } from "react-icons/ai";

import { useState } from "react";
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#"  onClick={() => setActiveNav('#')} className ={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className ={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUserAdd />
      </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className ={activeNav === '#experience' ? 'active' : ''}>
        <MdOutlineInsights />
      </a>
      <a href="#services" onClick={() => setActiveNav('#services')} className ={activeNav === '#services' ? 'active' : ''} >
        <RiServiceLine />
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className ={activeNav === '#contact' ? 'active' : ''}>
        <AiOutlineContacts />
      </a> 
    </nav>
  );
};

export default Nav;
