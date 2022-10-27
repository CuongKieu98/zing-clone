import React from 'react'
import "./slide-section.scss"

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";

import "swiper/css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from 'react-router-dom';

const SlideSection = (props) => {
    const {items,children} = props
  return (
    <div className='slide-carousel-wrapper'>
        <div className="slide-carousel">
        <Swiper
        modules={[ Navigation]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={3}
        navigation={true}
        loop={true}
        breakpoints={{
          600: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 0,
          },
        }}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
      >
        {items?.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
                {children}
            //   <SlideItem item={item} className={isActive ? "active" : ""} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
    </div>
  )
}



export default SlideSection