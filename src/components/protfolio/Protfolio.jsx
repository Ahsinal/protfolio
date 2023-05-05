import React from 'react'
import './protfolio.css'
import IMG1 from '../../assets/protfolioimg1.jpg'
import IMG2 from '../../assets/protfolioimg2.jpg'
import IMG3 from '../../assets/protfolioimg3.jpg'
import IMG4 from '../../assets/protfolioimg4.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Hotel Reservation App',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Hotel Reservation App',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Hotel Reservation App',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Hotel Reservation App',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 5,
    image: IMG1,
    title: 'Hotel Reservation App',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 6,
    image: IMG4,
    title: 'Hotel Reservation App',
    github: 'https://github.com',
    demo: 'https://github.com'
  }
]
const Protfolio = () => {
  return (
    <section id="protfolio">
      <h5>My Recent Work</h5>
      <h2>Protfolio</h2>
      <div className="container protfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="protfolio__item">
                <div className="protfolio__item-image">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className="protfolio__item-cta">
                  <a href={github}className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Protfolio
