import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio_EE4146.png'
import IMG2 from '../../assets/portfolio_EE4211.png'
import IMG3 from '../../assets/portfolio_FYP.png'
import IMG4 from '../../assets/portfolio_R2.png'
import IMG5 from '../../assets/portfolio_port.png'

const data = [
  {
    id: 1,
    image: IMG3,
    title: 'Integratino of IoT data system with BIM demonstration',
    github: 'https://github.com/JamesTso0530/forge-dataviz-iot-reference-app',
    btn: 'Github',
    demo: 'https://youtu.be/yhCa4eabdxU',
    show: true
  },
  {
    id: 2,
    image: IMG4,
    title: '2022 Robocon Robot 1 Design',
    github: 'https://a360.co/3zWdlR5',
    btn: 'Fusion360',
    demo: 'https://youtu.be/vGqmIZ7-GRM',
    show: true
  },
  {
    id: 4,
    image: IMG5,
    title: 'Personal React Portfolio Website',
    github: 'https://github.com/JamesTso0530/react-portfolio-website',
    btn: 'Github',
    demo: 'http://jamestso.com/react-portfolio',
    show: true
  },
  {
    id: 3,
    image: IMG2,
    title: 'Binary image segmentation of bird',
    github: 'https://github.com/JamesTso0530/Binary-Image-segmentation-of-bird',
    btn: 'Github',
    demo: '',
    show: false
  },
  // {
  //   id: 4,
  //   image: IMG1,
  //   title: 'Integratino of IoT data system with BIM demonstration',
  //   github: 'https://github.com',
  //   btn: 'Github',
  //   demo: 'https://github.com',
  //   show: false
  // },
  
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title,github, btn,show, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>{btn}</a>
                  <a href={demo} className={`btn-hide ${show && 'btn btn-primary'}`} target='_blank'>Demo</a>
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