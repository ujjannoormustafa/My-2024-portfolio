import React, { useEffect } from 'react'
import './footer.css'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'
import name from "../../assests/name.png"
import AOS from "aos";
import 'aos/dist/aos.css';
const Footer = () => {

  useEffect(() => {
    AOS.init({

    });
  }, []);

  return (
    <>
      <footer className={""} >
        {/* <a href="/" ><span className={"text-xl text-white font-bold"}>Noor</span><span className={"text-2 text-xl px-2 font-bold text-garident"}>Mustafa</span></a> */}
        <img src={name} alt={"logo"} width={"90"} />
        {/*<ul className="permalinks">*/}
        {/*  <li><a href="#">Home</a></li>*/}
        {/*  <li><a href="#about">About</a></li>*/}
        {/*  <li><a href="#xpeirience">Experience</a></li>*/}
        {/*  <li><a href="#services">Services</a></li>*/}
        {/*  <li><a href="#portfolio">Portfolio</a></li>*/}
        {/*  <li><a href="#contact">Contact</a></li>*/}
        {/*</ul>*/}
        <div className="footer__copyright hidden md:inline lg:inline xl:inline">
          <p>&copy; Noor Mustafa Ujjan. All rights reserve 2023 </p>
        </div>
        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/noormustafadev007" target='_blank'><AiFillLinkedin /></a>
          <a href="https://www.instagram.com/noormustafadev007" target='_blank'><AiFillInstagram /></a>
          <a href="https://github.com/ujjannoormustafa" target='_blank'><BsGithub /> </a>
          <a href="https://www.youtube.com/channel/UCJkh39HeWvq8gRHf-EokMDQ" target="_blank"><AiFillYoutube /> </a>
        </div>


      </footer>
      <p className={" block md:hidden xl:hidden text-center lg:hidden"}>&copy; Noor Mustafa Ujjan. All rights reserve {new Date().getFullYear()} </p>
    </>
  )
}

export default Footer