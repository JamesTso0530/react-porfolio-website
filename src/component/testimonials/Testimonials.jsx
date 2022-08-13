import React from 'react'
import './testimonials.css'
import IMG1 from '../../assets/me1.png'


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    image: IMG1,
    name: 'Tso Tso',
    review: 'I love the fact that you actually talk while you code, unlike some videos doing speed runs with crazy music in the background. Thank you so much!'
  },
  {
    image: IMG1,
    name: 'Tso Tso',
    review: 'I love the fact that you actually talk while you code, unlike some videos doing speed runs with crazy music in the background. Thank you so much!'
  },
  {
    image: IMG1,
    name: 'Tso Tsz',
    review: 'I love the fact that you actually talk while you code, unlike some videos doing speed runs with crazy music in the background. Thank you so much!'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >

        {
          data.map(({image, name,review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={image} alt="ME" />
                </div>
                <h5 className='client__name'>{name}</h5>
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