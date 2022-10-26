import React from "react";
import Action from "../action/Action";

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
        <figure>        
          <img src={image} alt="" />
        </figure>
        <div className="opacity"></div>
        {showAction && <Action isOnlyShowPlay={isOnlyShowPlay} />}
      </div>
      <div className="card__content">{children}</div>
    </div>
  );
};

export default Card;
