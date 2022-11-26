import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import Image from "../image/Image";

const LeftControl = (props) => {
  const { info } = props;

  return (
    <div className="player-controls-left level-left">
      <div className="level-item is-narrow w100">
        <div className="media-item">
          <div className="media-item__left">
            <div className="thumb-wrapper">
              <div className="thumb">
                <Image
                  className="img-control"
                  src={info.info.thumbnailM || info.info.thumbnail}
                />
              </div>
            </div>
          </div>
          <div className="media-item__center">
            <div className="is-mark level-left">
              <div className="song-info-wrap">
                <span className="song-title-item">
                  <div className="title-wrapper">
                    <span className="item-title title">{info.info.title}</span>
                  </div>
                </span>
              </div>
            </div>
            <h3 className="subtitle">{info.info.artistsNames}</h3>
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
