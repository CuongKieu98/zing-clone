import React from "react";
import "./slide.scss";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "swiper/css";
import Image from "../image/Image";
const Slide = (props) => {
  const { items } = props;
  return (
    <div className="slide">
      <div className="slide-container">
        <Swiper
          modules={[Navigation]}
          grabCursor={true}
          spaceBetween={0}
          slidesPerView={1}
          navigation={true}
          loop={true}
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 3,
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
                <SlideItem item={item} className={isActive ? "active" : ""} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const SlideItem = (props) => {
  let navigate = useNavigate();
  const item = props.item;
  const image = item.banner;

  return (
    <div className="slide-item__content_banner">
      <Image src={image} />
    </div>
  );
};

export default Slide;
