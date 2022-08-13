import React from 'react'
import './about.css'
import ME from '../../assets/R2.png'
import {GiRobotGrab} from 'react-icons/gi'
import {RiTeamLine} from 'react-icons/ri'
import {BiBookBookmark} from 'react-icons/bi'


const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="My robot" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <GiRobotGrab className='about__icon'/>
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>

              <article className='about__card'>
                <BiBookBookmark className='about__icon'/>
                <h5>Cource Project</h5>
                <small>Project on Mechine Learning, Cloud, IoT</small>
              </article>

              <article className='about__card'>
                <RiTeamLine className='about__icon'/>
                <h5>Leadership</h5>
                <small>Leading about 40+ people team</small>
              </article>
            </div>

            <p>
              Graduating first class honours in Information Engineering, an independent 
              and self-motivated continuous learning graduate looking for an entry-level 
              position where I can utilize the extensive knowledge I have gained during 
              my course. My experience with Forida has also enabled me to be proficient 
              in different programming, where I worked with IoT system, cloud deploying 
              and website designing. 
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>

          </div>
        </div>
    </section>
  )
}

export default About