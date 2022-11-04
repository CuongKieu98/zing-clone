import React, { useEffect, useRef } from "react";
import images from "../../assets/images";

import Action from "../action/Action";
import Button from "../button/Button";
import "./media.scss";
import "moment/locale/vi";
//icon

import moment from "moment";
import LIST_TYPE from "../../consts/LIST_TYPE";
import Image from "../image/Image";
import stringUtils from "../../utils/stringUtils";

const Media = ({
  customImg,
  isOnlyShowMore = true,
  item,
  releaseDate = false,
  prefix = false,
  rank,
  type,
  isRight = true,
  isInfoLeft = true,
  contentType,
  onPlay,
  onPause,
  isPlaying,
  className,
  isLoading = false
}) => {
  return (
    <div className={"media " +  className}>
      <MediaLeft
        sizeImg={customImg}
        item={item}
        releaseDate={releaseDate}
        prefix={prefix}
        rank={rank}
        type={type}
        isInfoLeft={isInfoLeft}
        onPlay={onPlay}
        onPause={onPause}
        isPlaying={isPlaying}
        isLoading={isLoading}
      />
      {contentType ? (
        <MediaContent
          item={item}
          rank={rank}
          releaseDate={releaseDate}
          type={contentType}
        />
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
  onPlay,
  onPause,
  isPlaying,
  isLoading,
}) => {
  return (
    <div className="media-left">
      {prefix && <SongPrefix rank={rank} audio={item} type={type} />}
      <div className="song-thumb">
        <Image className={sizeImg} src={item.thumbnailM || item.thumbnail} />
        <div className="opacity"></div>

        <div className="action-container">
          <div className="action">
            {isLoading ? (
              <img src={images.spiner} alt="" />

            ) : (isPlaying ? (
              <Button className={"no-bg"} onClick={onPause}>
                <i className={"icon action-play ic-gif-playing-white"}></i>
              </Button>
            ) : (
              <Button className={"no-bg"} onClick={onPlay}>
                <i className={"icon action-play ic-play"}></i>
              </Button>
            ))}
          </div>
        </div>
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

const MediaContent = ({ item, rank, releaseDate, type }) => {
  return (
    <div className="media-content">
      {type === LIST_TYPE.ALBUM ? (
        <div className="album-info">
          <span>{item.album.title}</span>
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

const MediaRight = ({ showMore, item }) => {
  return (
    <div className="media-right">
      <div className="hover-items">
        <div className="level">
          <div className="level-item">
            <Button
              className={showMore ? "is-hidden-display" : "hide-on-mobile"}
            >
              <i className="icon ic-karaoke"></i>
            </Button>
          </div>
          <div className="level-item">
            <Button
              className={showMore ? "is-hidden-display" : "hide-on-mobile"}
            >
              <i className="icon ic-like"></i>
            </Button>
          </div>
          <div className="level-item">
            <Button>
              <i className="icon ic-more"></i>
            </Button>
          </div>
        </div>
      </div>
      <div className="action-items">
        <div className="level">
          <div className="level-item duration">
            {stringUtils.formatDuration(item.duration)}
          </div>
        </div>
      </div>
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

  const SortIcon = () => {
    if (audio && audio.rakingStatus > 0) {
      return <i className="icon green is-18x18 is-center ic-up"></i>;
    } else if (audio && audio.rakingStatus < 0) {
      return <i className="icon red is-18x18 is-center ic-down"></i>;
    } else {
      return <i className="icon is-18x18 is-center grey ic-balance"></i>;
    }
  };

  return (
    <div className="song-prefix">
      {type === LIST_TYPE.lstsong ? (
        <i className="icon ic-song"></i>
      ) : (
        <>
          <span className="number is-center" ref={numRef}>
            {rank}
          </span>

          <div className="sort">
            <SortIcon />
            {audio.rakingStatus !== 0 ? (
              <div className="sort-num">
                {audio.rakingStatus > 0
                  ? audio.rakingStatus
                  : audio.rakingStatus * -1}
              </div>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
};

export default Media;
