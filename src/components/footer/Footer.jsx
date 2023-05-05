import React from 'react'
import './footer.css'
import{BsFacebook} from 'react-icons/bs'
import{BsInstagram} from 'react-icons/bs'
import{AiFillTwitterCircle} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer className='footer'>
      <a href="#" className='footer__logo'>EGATIR</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#protfolio">Protfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com" target='_blank'><BsFacebook/></a>
        <a href="https://instagram.com" target='_blank'><BsInstagram/></a>
        <a href="https://twitter.com" target='_blank'><AiFillTwitterCircle/></a>
      </div>

      <div className="footer__copyright">
        <small>
          @ EGATOR. All rights are reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer
