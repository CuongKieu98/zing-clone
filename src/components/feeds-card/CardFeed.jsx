import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import Image from "../image/Image";

import "./card-feed.scss";


const CardFeed = ({ content }) => {

  return (
    <div className="card-feed">
      <div className="card-feed__header">
        <div className="card-info">
          <div className="info-left">
            <Link to={""}>
              <div className="card-info__image">
                <Image src={content.publisher.thumbnail} className="is-40" />
              </div>
            </Link>
          </div>
          <div className="info-content">
            <h3 className="title mar-b-0">
              <Link to={""}>{content.publisher.name}</Link>
              <Button>
                <i className="icon ic-addfriend"></i>
              </Button>
            </h3>
            <h3 className="subtitle">27 tháng 10 lúc 08:38</h3>
          </div>
        </div>
        <div className="content-header is-5-line">{content.description}</div>
        {/* <span className="show-more">Xem thêm</span> */}
      </div>
      {content.type !== 7 ? (
        <div className="container mar-b-15 card-feed__content">
          <MediaNewFeed content={content}/>
        </div>
      ) : null}

      <div className="card-feed__footer">
        <div className="card-feed__footer__actions">
          <div className="like-action mar-r-30">
            <Button className="no-bg">
              <i className="icon ic-like"></i>
            <span>{content.like}</span>
            </Button>
          </div>
          <div className="comment-action">
            <Button className="no-bg">
              <i className="icon ic-comment"></i>
            <span>{content.commend}</span>
            </Button>
          </div>
        </div>
      </div>

    </div>
  );
};

const MediaNewFeed = (props) => {
  const { content,onClick } = props;
  return (
    <>
      {content.type === 3 ? (
        <div className="album-container">
          <div
            style={{
              background: `url(${content.content?.photos[0]?.url}) center top / cover no-repeat`,
            }}
            onClick={onClick}
          ></div>
        </div>
      ) : content.type === 2 ? (
        <div className="album-container">
          <div
            style={{
              background: `url(${content.content.thumbnail}) center top / cover no-repeat`,
            }}
            onClick={onClick}
          ></div>
        </div>
      ) : content.type === 6 ? (
        <div className="album-container-media">
          <div className="media-new-feed">
            <div
              className="blur-img"
              style={{
                background: `url(${
                  content.content?.photos
                    ? content.content?.photos[0]?.url
                    : content.content.thumbnail
                }) center top / cover no-repeat`,
              }}
            ></div>
            <div className="song-thumb">
              <Image
                src={content.content.thumbnailM || content.content.thumbnail}
              />
            </div>
            <div className="song-content">
              <h3 className="title">{content.content.title}</h3>
              <h3 className="subtitle">{content.content.artistsNames}</h3>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CardFeed;
