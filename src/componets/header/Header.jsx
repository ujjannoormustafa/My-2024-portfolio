import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/my-img.png'
import Me2 from '../../assests/bg.png'
import HeaderSocials from './HeaderSocials'
import ParticlesConfig from "../Config/ParticlesConfig";
import ParticlesBackground from "../ParticlesBackground";
import PraticlesBackground from "../ParticlesBackground";
const Header = () => {
  return (
    
    <header>
        <PraticlesBackground/>
      <div className="container flex md:justify-between md:items-center  header__container">
        <div className={"hero-left"}>
          <h5 className={"mt-14"}>HELLO THERE, WELCOME TO MY SITE</h5>
          <h1 className={"md:text-5xl py-2 text-light text-2  name"}>I'm Noor Mustafa</h1>
          <h2 className={"md:text-5xl f-end-d text-garident"}>Front-end Developer</h2>
          <p className={"tag-line text-2 py-2"}>Designing sleek webiste with React and Nextjs</p>
          <button className="custom-btn btn-14">Let's Talk</button>
          <button className="custom-btn  btn-15">Download CV</button>

          {/*<CTA />*/}
          <HeaderSocials />
        </div>
        <div className="card">
          <img src={Me2} alt="Pic" />
        </div>

        {/*<div className="card">*/}
        {/*  <img src={ME} alt="Pic" />*/}
        {/*</div>*/}
        {/*<div className="border-image-clip-path">*/}
        {/*  /!* Your content or image goes here *!/*/}
        {/*  <img*/}
        {/*      src={ME}*/}
        {/*      alt="Your Alt Text"*/}
        {/*      style={{ width: "100%", height: "100%", objectFit: "cover" }}*/}
        {/*  />*/}
        {/*</div>*/}

        {/*<a href="#contact" className='scroll__down'>Scroll Down</a>*/}
      {/*</div>*/}


        {/*<div className="area">*/}
        {/*    <ul className="circles">*/}
        {/*        <li>Hi</li>*/}
        {/*        <li>Hello</li>*/}
        {/*        <li></li>*/}
        {/*        <li></li>*/}
        {/*        <li></li>*/}
        {/*        <li></li>*/}
        {/*        <li></li>*/}
        {/*        <li></li>*/}
        {/*        <li></li>*/}
        {/*        <li></li>*/}
        {/*    </ul>*/}
        </div>
    </header>

  )
}

export default Header