import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Media from "../media/Media";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";

import "swiper/css";
import Button from "../button/Button";

const NewReleaseSlider = (props) => {
  const { data } = props;
  return (
    <div className="new-release-slider">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          700: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1248: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // 1248: {
          //   slidesPerView: 3,
          //   spaceBetween: 20,
          // },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div className="new-release-item">
                <Media
                  item={item}
                  prefix={false}
                  releaseDate={true}
                  isContent={true}
                  rank={index + 1}
                  customImg={"is-120"}
                  isRight={false}
                  isInfoLeft={false}
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewReleaseSlider;
