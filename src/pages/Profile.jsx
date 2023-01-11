import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import banners from "../assets/fake-data/slide";
import "../scss/_profile.scss";

const Profile = () => {
  const slideRef1 = useRef(null);
  const slideRef2 = useRef(null);
  const slideRef3 = useRef(null);
  const slideRef4 = useRef(null);
  const [imgIndex, setImgIndex] = useState(2);

  useEffect(() => {
    function slideShow() {
      slideRef4.current.classList.replace("fourth", "third");
      slideRef3.current.classList.replace("third", "second");
      slideRef2.current.classList.replace("second", "first");
      slideRef1.current.classList.replace("first", "fourth");
      setImgIndex(imgIndex + 1);
      if (imgIndex >= 5) {
        //imgIndex: 0-7, slideImgs.length: 8
        setImgIndex(0);
      }
      setTimeout(slideShow, 5000);
    }
    slideShow();
  }, []);

  function slideShow() {
    slideRef4.current.classList.replace("fourth", "third");
    slideRef3.current.classList.replace("third", "second");
    slideRef2.current.classList.replace("second", "first");
    slideRef1.current.classList.replace("first", "fourth");
    setImgIndex(prev => prev+ 1);
    if (imgIndex >= 7) {
      //imgIndex: 0-7, slideImgs.length: 8
      setImgIndex(0);
    }
   
  }

  return (
    <div className="row-container-section">
      <div className="col-12">
        <div className="explore__slide--container">
          <div className="explore__slide-move">
            <div className="slide__move-btn-prev" onClick={() =>slideShow()}>
              A
            </div>
            <div className="slide__move-btn-next" onClick={() =>slideShow()}>
              B
            </div>
          </div>
          <div className="col-6 explore__slide-item first" ref={slideRef1}>
            <div className="row__item-display">
              <div
                className="explore__slide-img row__item-img img-rec"
                style={{
                  background: `url(${banners.banner1}) no-repeat center center / cover `,
                }}
              ></div>
            </div>
          </div>
          <div className="col-6 explore__slide-item second" ref={slideRef2}>
            <div className="row__item-display">
              <div
                className="explore__slide-img row__item-img img-rec"
                style={{
                  background: `url(${banners.banner2}) no-repeat center center / cover`,
                }}
              ></div>
            </div>
          </div>
          <div className="col-6 explore__slide-item third" ref={slideRef3}>
            <div className="row__item-display">
              <div
                className="explore__slide-img row__item-img img-rec"
                style={{
                  background: `url(${banners.banner3}) no-repeat center center / cover `,
                }}
              ></div>
            </div>
          </div>
          <div className="col-6 explore__slide-item fourth" ref={slideRef4}>
            <div className="row__item-display">
              <div
                className="explore__slide-img row__item-img img-rec"
                style={{
                  background: `url(${banners.banner4}) no-repeat center center / cover `,
                }}
              ></div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Profile;
