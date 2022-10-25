import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import images from "../../assets/images";
import themes from "../../assets/theme";
import Action from "../action/Action";
import Button from "../button/Button";
import "./media.scss";

//icon
import MicRoundedIcon from "@mui/icons-material/MicRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

const Media = ({ customImg, isOnlyShowMore = true, item }) => {
  return (
    <div className="media">
      <MediaLeft sizeImg={customImg} item={item} />
      <MediaRight showMore={isOnlyShowMore} item={item} />
    </div>
  );
};

const MediaLeft = ({ sizeImg, item }) => {
  return (
    <div className="media-left">
      <div className="song-thumb">
        <figure className={sizeImg}>
          <LazyLoadImage
            effect="blur"
            height="100%"
            with="100%"
            src={item.thumbnail}
            alt=""
          />
        </figure>
        <div className="opacity"></div>
        <Action isOnlyShowPlay={true} />
      </div>
      <div className="info">
        <div className="title-wrapper">
          <span className="title">
            <span>{item.title}</span>
            {item.streamingStatus === 2 && <img src={images.vip} alt="" />}
          </span>
        </div>
        <h3 className="is-one-line subtitle">{item.artistsNames}</h3>
        <div className="time-release">
          <span>1 Ngày Trước</span>
        </div>
      </div>
    </div>
  );
};

const MediaRight = ({ showMore, item }) => {
  return (
    <div className="media-right">
      <div className="hover-items">
        <div className="level">
          <div className="level-item">
            <Button className={showMore ? "is-hidden-display" : ""}>
              <MicRoundedIcon
                sx={{ fontSize: 20, color: "var(--text-primary)" }}
              />
            </Button>
          </div>
          <div className="level-item">
            <Button className={showMore ? "is-hidden-display" : ""}>
              <FavoriteBorderRoundedIcon
                sx={{ fontSize: 20, color: "var(--text-primary)" }}
              />
            </Button>
          </div>
          <div className="level-item">
            <Button>
              <MoreHorizRoundedIcon
                sx={{ fontSize: 20, color: "var(--text-primary)" }}
              />
            </Button>
          </div>
        </div>
      </div>
      <div className="action-items"></div>
    </div>
  );
};

export default Media;
