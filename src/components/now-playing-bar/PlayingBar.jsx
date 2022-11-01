import React from "react";

import CenterControl from "./CenterControl";
import LeftControl from "./LeftControl";
import "./playing-bar.scss";
import RightControl from "./RightControl";

const PlayingBar = () => {
  return (
    <div className="now-playing-bar">
        {/* righttab */}
      <div className="player-controls clickable">
        <div className="level player-controls__container">
            <LeftControl />
            <CenterControl />
            <RightControl />
        </div>
      </div>
    </div>
  );
};


export default PlayingBar;
