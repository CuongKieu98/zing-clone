import React from "react";
import Button from "../button/Button";
import "./action.scss";

const Action = ({ isOnlyShowPlay = true, isBorder = true }) => {
  return (
    <div className="action-container">
      <div className="action">
        <Button
          className={isOnlyShowPlay ? "is-hidden" : "no-bg hover hide-on-mobile"}
        >
          <i className="icon ic-like"></i>
        </Button>
        <Button className={"no-bg " + (isBorder ? "border-circle" : "")}>
          <i className={"icon action-play " + (isBorder ? "ic-svg-play-circle" :"ic-play")}></i>
        </Button>
        <Button
          className={isOnlyShowPlay ? "is-hidden" : "no-bg hover hide-on-mobile"}
        >
          <i className="icon ic-more"></i>
        </Button>
      </div>
    </div>
  );
};

export default Action;
