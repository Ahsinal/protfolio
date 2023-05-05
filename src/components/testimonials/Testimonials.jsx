import React from 'react'
import './testimonials.css'
import pic1 from '../../assets/Avt1.jpg'
import pic2 from '../../assets/avt2.jpg'

// Import Swiper JS
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
const data = [
  {
    avatar: pic1,
    name: 'Ernest Achiever',
    review: 'I had a wonderful experience and I would highly recommend this business to others.'
  },
  {
    avatar: pic2,
    name: 'Anushka Sharma',
    review: 'The staff was incredibly welcoming and helpful. I would definitely come back!'
  },
  {
    avatar: pic1,
    name: 'Zoya Khan',
    review: 'I had a wonderful experience and I would highly recommend this business to others.'
  },
  {
    avatar: pic2,
    name: 'Anu Poudel',
    review: 'I had a wonderful experience and I would highly recommend this business to others.'
  }
]
const Testimonials = () => {
  return (
    <section id="testimonial">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client_avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className="client_name">{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
