import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";

import "./radio.scss";
import Card from "../card/Card";

const SlideRadio = ({ data }) => {
  return (
    <div className="slide-radio">
      <div className="container">
        <h3 className="title">{data.title}</h3>
        <Swiper
          modules={[Autoplay]}
          grabCursor={true}
          spaceBetween={20}
          slidesPerView={1}
          className="card-radio"
          breakpoints={{
            700: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1248: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {data?.items.map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div className="radio-slide-item">
                  <Card showAction={false} image={item.thumbnail} />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SlideRadio;
