import React from 'react'
import './about.css'
import {BsAwardFill} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolder} from 'react-icons/ai'
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="https://img.freepik.com/premium-psd/young-woman-looking-up_1187-21181.jpg?size=626&ext=jpg&ga=GA1.1.1681159899.1672509043&semt=robertav1_2_sidr" alt="ABout Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>

            <article className="about__card">
              <AiFillFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Sed distinctio enim sunt 
            laboriosam accusamus alias quis commodi repudiandae voluptas a cupiditate, incidunt quibusdam deleniti sint repellendus facilis? 
            Possimus, itaque animi.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
