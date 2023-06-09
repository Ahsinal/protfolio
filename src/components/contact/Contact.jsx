import React from 'react'
import './contact.css'
import{AiOutlineMail} from 'react-icons/ai'
import{BsWhatsapp} from 'react-icons/bs'
import{FaFacebookMessenger} from 'react-icons/fa'

import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ljmi0cg', 'template_qmedgjt', form.current, 'PDmlk7geb3Vl1vgzW')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Xyz@gmail.com</h5>
            <a href="mailto:Xyz@gmail.com" target='_blank'>Send a Mail</a>
          </article>

          <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Xyz</h5>
            <a href="https://m.me/profile" target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+2345678123</h5>
            <a href="https://api.whatsapp/" target='_blank'>Send a Message</a>
          </article>
        </div>
        {/*End of contact options */}
        <form ref={form}  onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required/>
          <button type='submit' className=" btn btn-primary"> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
