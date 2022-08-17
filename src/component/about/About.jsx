import React from 'react'
import './about.css'
import about1 from '../../assets/about1.jpeg'
import about2 from '../../assets/about2.png'
import about3 from '../../assets/about3.png'
import ME from '../../assets/about3.png'
import {GiRobotGrab} from 'react-icons/gi'
import {RiTeamLine} from 'react-icons/ri'
import {BiBookBookmark} from 'react-icons/bi'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards ,Autoplay} from "swiper";



const About = () => {



  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              {/* <img src={ME} alt="My robot" /> */}
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[Autoplay,EffectCards]}
                className="mySwiper"
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
              >
                <SwiperSlide><img src={about3} alt="My robot" /></SwiperSlide>
                <SwiperSlide><img src={about2} alt="My robot" /></SwiperSlide>
                <SwiperSlide><img src={about1} alt="My robot" /></SwiperSlide>
              </Swiper>

            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <BiBookBookmark className='about__icon'/>
                <h5>Academic Classification</h5>
                <small>First Class Honours</small>
              </article>

              <article className='about__card'>
                <GiRobotGrab className='about__icon'/>
                <h5>Cource Project</h5>
                <small>Project on Mechine Learning, Cloud, IoT, Robotic</small>
              </article>

              <article className='about__card'>
                <RiTeamLine className='about__icon'/>
                <h5>Leadership</h5>
                <small>Leading about 30+ people in robocon team</small>
              </article>
            </div>
            <div className="about__content-intro">
              {/* <p>
                Graduating first class honours in Information Engineering, an independent 
                and self-motivated continuous learning graduate looking for an entry-level 
                position where I can utilize the extensive knowledge I have gained during 
                my course. 
              </p>
              <p>
                While I lead the Robocon team as team head in 2022, I gain rich teamwork 
                and leading experience.
              </p>
              <p>
                My experience with Forida has also enabled me to be proficient 
                in different programming, where I worked with IoT system, cloud deploying 
                and website designing. 
              </p> */}
              <p>
                While I lead the Robocon team as team head in 2022, I gain rich teamwork 
                and leading experience. In the team, I lead 30+ people to follow the game 
                rule and timeline to design and build the robots. Besides the leader work, 
                I am the main designer of one robot in 2021 and 2022.
              </p>
              <p>
                I have also worked in Forida limited as a summer intern. My FYP is the 
                industrial project of Forida limited. It is about integrating an IoT system 
                with BIM on a webpage demonstration. My experience with Forida has also 
                enabled me to be proficient in different programming, where I worked with 
                IoT systems, cloud deploying, and website designing.
              </p>
              <p>
                As a fresh graduate of City University, I am really to work for the company 
                and use my experience to contribute the team.
              </p>
            </div>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>

          </div>
        </div>
    </section>
  )
}

export default About