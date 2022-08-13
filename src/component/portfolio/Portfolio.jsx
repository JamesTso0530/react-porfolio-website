import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio_EE4146.png'
import IMG2 from '../../assets/portfolio_EE4211.png'
import IMG3 from '../../assets/portfolio_FYP.png'
import IMG4 from '../../assets/portfolio_R2D1.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Integratino of IoT data system with BIM demonstration',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Integratino of IoT data system with BIM demonstration',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Integratino of IoT data system with BIM demonstration',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Integratino of IoT data system with BIM demonstration',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title,github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
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

export default Portfolio