import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaFacebookSquare} from 'react-icons/fa'
import {AiFillYoutube} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Noor Mustafa</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#xpeirience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    <div className="footer__socials">
      <a href="https://www.linkedin.com/in/noor-mustafa-ujjan" target='_blank'><AiFillLinkedin /></a>
      <a href="https://www.instagram.com/ujjannoormustafa7" target='_blank'><AiFillInstagram  /></a>
      <a href="https://web.facebook.com/ujjannoor.mustafa" target='_blank'><FaFacebookSquare /> </a>
      <a href="https://www.youtube.com/channel/UCJkh39HeWvq8gRHf-EokMDQ" target="_blank"><AiFillYoutube /> </a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Noor Mustafa Ujjan. All rights reserve</small>
    </div>
    </footer>
  )
}

export default Footer