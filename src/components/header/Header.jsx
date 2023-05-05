import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/picmee.jpg'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Lanisha Koirala</h1>
        <h5 className="textlight">React Developer </h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
        <img src="https://img.freepik.com/premium-psd/young-woman-looking-up_1187-21181.jpg?size=626&ext=jpg&ga=GA1.1.1681159899.1672509043&semt=robertav1_2_sidr" alt="me"  className="pic"/>
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
