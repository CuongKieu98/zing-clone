import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import images from "../../assets/images";
import Action from "../action/Action";
import Button from "../button/Button";
import "./radio.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useNavigate } from "react-router-dom";
import { Navigation, Autoplay } from "swiper";
import "swiper/css/navigation";
import Image from "../image/Image";
const BorderIcon = (props) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    className={props.className}
  >
    <circle
      className="svg-circle-bg"
      stroke="rgba(255, 255, 255, 0.2)"
      cx="50"
      cy="50"
      r="48.75"
      strokeWidth="2.5"
      fill="none"
    ></circle>
    <circle
      className="svg-circle"
      stroke="#ff4b4a"
      cx="50"
      cy="50"
      r="48.75"
      strokeWidth="2.5"
      strokeDasharray="306.3052837250048"
      strokeDashoffset={props.dash}
      style={{ transition: " stroke-dashoffset 850ms ease-in-out 0s" }}
      fill="none"
    ></circle>
  </svg>
);

const Radio = (props) => {
  const { data } = props;
  return (
    <div className="radio">
      <Swiper
        modules={[Navigation, Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={3}
        navigation={true}
        slidesPerGroup={3}
        breakpoints={{
          600: {
            slidesPerView: 5,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 5,
          },
        }}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div className="radio-card livestream-item">
                <div className="top-content">
                  <BorderIcon />
                  <div className="card-image-radio">
                    <Image
                      className="cover"
                      src={item.thumbnail || item.thumbnailM}
                    />
                  </div>
                  <div className="opacity"></div>
                  <Image className="host" src={item.host.thumbnail} />
                  <div className="radio-action">
                    <Action isOnlyShowPlay={true} />
                  </div>
                  <Image className="label" src={images.live} />
                </div>
                <div className="bot-content">
                  <h3 className="title">{item.host.name || item.title}</h3>
                  <h3 className="subtitle">{item.activeUsers} đang nghe</h3>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Radio;
