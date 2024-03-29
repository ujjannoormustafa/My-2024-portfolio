import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
const HeaderSocials = () => {

  return (
    <div className="header__socials text-garident">
        <a href="https://www.linkedin.com/in/noor-mustafa-ujjan" target="_blank" ><BsLinkedin/></a>
        <a href="https://www.instagram.com/ujjannoormustafa7" target="_blank"><BsInstagram/></a>
        <a href="https://github.com/ujjannoormustafa" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials