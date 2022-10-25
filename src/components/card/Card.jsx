import React from "react";

import "./card.scss";

const Card = ({ image, className, customClass, onClick, children }) => {
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
        <div className="card__actions"></div>
      </div>
      <div className="card__content">{children}</div>
    </div>
  );
};

export default Card;
