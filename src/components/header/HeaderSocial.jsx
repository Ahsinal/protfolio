import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub,FaFacebook} from 'react-icons/fa'
const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com" target='_blank'><FaGithub/></a>
      <a href="https://facebook.com" target='_blank'><FaFacebook/></a>
    </div>
  )
}

export default HeaderSocial
