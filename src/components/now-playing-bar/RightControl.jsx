import React from "react";
import Button from "../button/Button";

const RightControl = () => {
  return (
    <div className="player-controls-right level-right">
      <div className="level-item is-narrow">
        <Button className="no-bg">
          <i className="icon ic-karaoke"></i>
        </Button>
      </div>
      <div className="level-item is-narrow">
        <div className="player-volume">
          <Button className="no-bg">
            <i className="icon ic-volume"></i>
          </Button>
        </div>
      </div>
      <div className="level-item is-narrow">
        <span className="divide"></span>
      </div>
      <div className="level-item is-narrow">
          <Button className="">
        <div className="button-zmd">
            <i className="icon ic-list-music"></i>
        </div>
          </Button>
      </div>
    </div>
  );
};

export default RightControl;
