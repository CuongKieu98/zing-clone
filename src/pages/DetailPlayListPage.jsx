import React from "react";
import banners from "../assets/fake-data/slide";
import "../scss/_profile.scss";

const DetailPlayListPage = () => {
  return (
    <div className="row-container-section">
      <div className="col-12">
        <div className="row explore__slide--container">
          <div className="explore__slide-move">
            <div className="col-6 explore__slide-item">
              <div className="row__item-display">
                <div
                  className="explore__slide-img row__item-img img-rec"
                  style={{
                    background: `url(${banners.banner1}) center center / cover no-repeat`,
                  }}
                ></div>
              </div>
            </div>
            <div className="col-6 explore__slide-item">
              <div className="row__item-display">
                <div
                  className="explore__slide-img row__item-img img-rec"
                  style={{
                    background: `url(${banners.banner2}) center center / cover no-repeat`,
                  }}
                ></div>
              </div>
            </div>
            <div className="col-6 explore__slide-item">
              <div className="row__item-display">
                <div
                  className="explore__slide-img row__item-img img-rec"
                  style={{
                    background: `url(${banners.banner3}) center center / cover no-repeat`,
                  }}
                ></div>
              </div>
            </div>
            <div className="col-6 explore__slide-item">
              <div className="row__item-display">
                <div
                  className="explore__slide-img row__item-img img-rec"
                  style={{
                    background: `url(${banners.banner4}) center center / cover no-repeat`,
                  }}
                ></div>
              </div>
            </div>
            <div className="col-6 explore__slide-item">
              <div className="row__item-display">
                <div
                  className="explore__slide-img row__item-img img-rec"
                  style={{
                    background: `url(${banners.banner5}) center center / cover no-repeat`,
                  }}
                ></div>
              </div>
            </div>
            <div className="col-6 explore__slide-item">
              <div className="row__item-display">
                <div
                  className="explore__slide-img row__item-img img-rec"
                  style={{
                    background: `url(${banners.banner6}) center center / cover no-repeat`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPlayListPage;
