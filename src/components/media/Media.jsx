import React, { useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import images from "../../assets/images";
import themes from "../../assets/theme";
import Action from "../action/Action";
import Button from "../button/Button";
import "./media.scss";
import "moment/locale/vi";
//icon
import MicRoundedIcon from "@mui/icons-material/MicRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import moment from "moment";
import LIST_TYPE from "../../consts/LIST_TYPE";
import Image from "../image/Image";

const Media = ({
  customImg,
  isOnlyShowMore = true,
  item,
  releaseDate = false,
  prefix = false,
  rank,
  type,
  isContent = false,
  isRight = true,
  isInfoLeft = true,
}) => {
  return (
    <div className="media">
      <MediaLeft
        sizeImg={customImg}
        item={item}
        releaseDate={releaseDate}
        prefix={prefix}
        rank={rank}
        type={type}
        isInfoLeft={isInfoLeft}
      />
      {isContent ? (
        <MediaContent item={item} rank={rank} releaseDate={releaseDate} />
      ) : null}
      {isRight ? <MediaRight showMore={isOnlyShowMore} item={item} /> : null}
    </div>
  );
};

const MediaLeft = ({
  sizeImg,
  item,
  releaseDate,
  prefix,
  rank,
  type,
  isInfoLeft,
}) => {
  return (
    <div className="media-left">
      {prefix && <SongPrefix rank={rank} audio={item} type={type} />}
      <div className="song-thumb">
        <Image className={sizeImg} src={item.thumbnailM || item.thumbnail} />
        <div className="opacity"></div>
        <Action isOnlyShowPlay={true} isBorder={false}/>
      </div>
      {isInfoLeft ? (
        <div className="info">
          <div className="title-wrapper">
            <span className="title">
              <span>{item.title}</span>
              {item.streamingStatus === 2 && <img src={images.vip} alt="" />}
            </span>
          </div>
          <h3 className="is-one-line subtitle">{item.artistsNames}</h3>
          {releaseDate && (
            <div className="time-release">
              <span>{moment.unix(item.releaseDate).fromNow()}</span>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

const MediaContent = ({ item, rank, releaseDate }) => {
  return (
    <div className="media-content">
      <div>
        <div className="title-wrapper-content">
          <span className="item-title title">{item.title}</span>
        </div>
        <h3 className="subtitle">
          <span>{item.artistsNames}</span>
        </h3>
      </div>
      <div>
        <span className="order">#{rank}</span>
        {releaseDate && (
          <span className="release-date">
            {moment.unix(item.releaseDate).format("DD.MM.YYYY")}
          </span>
        )}
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

const SongPrefix = ({ type, rank, audio }) => {
  const numRef = useRef(null);
  useEffect(() => {
    if (rank && (rank === 1 || rank === 2 || rank === 3)) {
      numRef?.current?.classList.add(`top-${rank}`);
    }
  }, []);
  // const SortIcon = () => {
  //   if (audio && audio.rakingStatus > 0) {
  //     return <ArrowDropUpIcon sx={{ color: "#1dc186" }} />;
  //   } else if (audio && audio.rakingStatus < 0) {
  //     return <ArrowDropDownIcon sx={{ color: "#e35050" }} />;
  //   } else {
  //     return <RemoveIcon />;
  //   }
  // };

  return (
    <div className="song-prefix">
      {type === LIST_TYPE.lstsong ? (
        <i className="icon ic-song"></i>
      ) : (
        <>
          <span className="number" ref={numRef}>
            {rank}
          </span>
          {/* <div className="sort">
            <SortIcon />
            {audio.rakingStatus !== 0 && (
              <div className="sort-num">
                {audio.rakingStatus > 0
                  ? audio.rakingStatus
                  : audio.rakingStatus * -1}
              </div>
            )}
          </div> */}
        </>
      )}
    </div>
  );
};

export default Media;
