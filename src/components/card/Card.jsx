import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Action from "../action/Action";
import Image from "../image/Image";

import "./card.scss";

const Card = ({
  image,
  className,
  customClass,
  onClick,
  children,
  isOnlyShowPlay,
  showAction = true,
}) => {
  return (
    <div className="card">
      <div
        className={"card__images " + className}
        onClick={onClick ? onClick : null}
      >
        <Image src={image} />
        <div className="opacity"></div>
        {showAction && <Action isOnlyShowPlay={isOnlyShowPlay} />}
      </div>
      <div className="card__content">{children}</div>
    </div>
  );
};

export default Card;
