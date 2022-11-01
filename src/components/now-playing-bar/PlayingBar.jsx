import React, { useState } from "react";

import CenterControl from "./CenterControl";
import LeftControl from "./LeftControl";
import "./playing-bar.scss";
import RightBar from "./RightBar";
import RightControl from "./RightControl";
const PlayingBar = () => {
  const [openRightBar, setOpenRightBar] = useState(false);


  const toggleTabRight = () => {
    setOpenRightBar(!openRightBar);
  };


  return (
    <div className="now-playing-bar">
      {/* righttab */}
      <RightBar />
      <div className="player-controls clickable">
        <div className="level player-controls__container">
          <LeftControl />
          <CenterControl />
          <RightControl onClick={() => toggleTabRight()} />
        </div>
      </div>
    </div>
  );
};

export default PlayingBar;
