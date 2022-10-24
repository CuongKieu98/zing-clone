import React from "react";

import "./card.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = ({
  image,
  className,
  customClass,
  content,
  onClick,
  children,
}) => {
  return (
    <div className="card">
      <div
        className={"card__images " + className}
        onClick={onClick ? onClick : null}
      >
        <figure>
          <LazyLoadImage
            effect="blur"
            height="100%"
            with="100%"
            src={image}
            alt=""
          />
        </figure>
        <div className="opacity"></div>
        <div className="card__actions"></div>
      </div>
      {content && (
        <div className="card__content">
          <div className="title">{content}</div>
        </div>
      )}
    </div>
  );
};

export default Card;
