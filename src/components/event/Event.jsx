import React from "react";
import Button from "../button/Button";
import Image from "../image/Image";
import "./event.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useNavigate } from "react-router-dom";
import { Navigation, Autoplay } from "swiper";
import "swiper/css/navigation";
const Event = (props) => {
  const { data } = props;
  return (
    <div className="event">
      <Swiper
        modules={[Navigation, Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        slidesPerGroup={1}
        breakpoints={{
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1248: {
            slidesPerView: 3,
            spaceBetween: 20,
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
              <div className="event-item">
                <div>
                  <div className="event-img">
                    <Image src={item.coverH || item.coverHM} />
                    <div className="event-opacity"></div>
                    <div className="event-content">
                      <span className="tag">{item.label}</span>
                      <h3 className="event-title">{item.title}</h3>
                      <h3 className="event-subtitle">{item.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="event-follow">
                  <div className="left-follow">
                    <div className="left-follow__item">
                      <div className="event-followers">
                        <h3 className="title">Lượt quan tâm</h3>
                        <div className="avatars">
                          {item.followers.slice(0, 6).map((avatar, i) => (
                            <div className="avatars-item" key={i}>
                              <Image src={avatar.avatar} />
                            </div>
                          ))}
                          <div className="text-item">+ {item.totalFollow}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="right-follow">
                    <Button className="event-follow-btn">
                      {item.subscribeText}
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Event;
