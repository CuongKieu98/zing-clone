import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import Image from "../image/Image";

const LeftControl = () => {
  return (
    <div className="player-controls-left level-left">
      <div className="level-item is-narrow">
        <div className="media-item">
          <div className="media-item__left">
            <Link to="/">
              <div className="thumb-wrapper">
                <div className="thumb">
                  <Image className="img-control" src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/1/7/f/1/17f17c49523af7fd7827ce1e2981b412.jpg" />
                </div>
              </div>
            </Link>
          </div>
          <div className="media-item__center">
            <div className="is-mark level-left">
              <div className="song-info-wrap">
                <span className="song-title-item">
                  <Link to={"/"}>
                    <div className="title-wrapper">
                      <span className="item-title title">Cô Đơn sasas asa asas assd asdsa asdsad asas asa Trên Sofa</span>
                    </div>
                  </Link>
                </span>
              </div>
            </div>
            <h3 className="subtitle">Hồ Ngọc Hà</h3>
          </div>
          <div className="media-item__right">
            <div className="level">
              <div className="level-item">
                <Button className="no-bg">
                  <i className="icon ic-like"></i>
                </Button>
              </div>
              <div className="level-item">
                <Button className="no-bg">
                  <i className="icon ic-more"></i>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftControl;
