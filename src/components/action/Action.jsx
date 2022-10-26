import React from "react";
import Button from "../button/Button";
import "./action.scss";

const Action = ({ isOnlyShowPlay = true }) => {
  return (
    <div className="action-container">
      <div className="action">
        <Button className={isOnlyShowPlay ? "is-hidden" : "no-bg hide-on-mobile"}>
          <i className="icon ic-like"></i>
        </Button>
        <Button className="no-bg border-circle">
          <i className="icon action-play ic-svg-play-circle"></i>
        </Button>
        <Button className={isOnlyShowPlay ? "is-hidden" : "no-bg hide-on-mobile"}>
          <i className="icon ic-more"></i>
        </Button>
      </div>
    </div>
  );
};

export default Action;
