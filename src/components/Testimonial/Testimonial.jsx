import React from 'react'
import "./testimonial.css"
import client from '../../assets/2.png'

import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: client,
    name: "Tina Snow",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, natus! Repudiandae possimus officiis atque ipsum eius ipsam, id est dolor, iste velit molestiae laudantium odio ab harum ut, excepturi temporibus!"
  },

  {
    avatar: client,
    name: "Tina Wale",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, natus! Repudiandae possimus officiis atque ipsum eius ipsam, id est dolor, iste velit molestiae laudantium odio ab harum ut, excepturi temporibus!"
  },

  {
    avatar: client,
    name: "Tina Kwame",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, natus! Repudiandae possimus officiis atque ipsum eius ipsam, id est dolor, iste velit molestiae laudantium odio ab harum ut, excepturi temporibus!"
  },

  {
    avatar: client,
    name: "Tina Sun",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, natus! Repudiandae possimus officiis atque ipsum eius ipsam, id est dolor, iste velit molestiae laudantium odio ab harum ut, excepturi temporibus!"
  }
]

const Testimonial = () => {
  return (
    <section id='testimonial'>

      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

        <Swiper className="container testimonials__container"
                  modules={[Pagination]}
                  pagination={true}
                  spaceBetween={40}
                  slidesPerView={1}>
          {
            data.map(({avatar, name, review}, index ) => {
              return(

                  <SwiperSlide key={index} className="testimonial">
                  <div className="client__avatar">
                    <img src={avatar} alt=""/>
                  </div>
                    <h5 className="client__name">{name}</h5>
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

export default Testimonial