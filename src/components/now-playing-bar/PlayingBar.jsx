import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { actionSelector } from "../../redux/selectors/selector";

import CenterControl from "./CenterControl";
import LeftControl from "./LeftControl";
import "./playing-bar.scss";
import RightBar from "./RightBar";
import RightControl from "./RightControl";
const PlayingBar = () => {
  const rbarRef = useRef(null);

  const audioReducer = useSelector(actionSelector);

  const currAudio = audioReducer ? audioReducer.audiosReducer : null;

  const [rightBarOpen, setRightBarOpen] = useState(false);

  const toggleTabRight = () => {
    if (rightBarOpen) {
      rbarRef.current?.classList.remove("enter");

      rbarRef.current?.classList.add("exit");

      setTimeout(() => {
        setRightBarOpen(false);
      }, 600);
    } else {
      setTimeout(() => {
        rbarRef.current?.classList?.remove("exit");

        rbarRef?.current?.classList?.add("enter");
      }, 200);

      setRightBarOpen(true);
    }
  };

  return (
    <div className="now-playing-bar">
      {/* righttab */}
      {rightBarOpen ? (
        <div className="right-bar exit" ref={rbarRef}>
          <RightBar currAudio={currAudio}/>
        </div>
      ) : null}

      <div className="player-controls clickable">
        <div className="level player-controls__container">
          <LeftControl info={currAudio.songInfo}/>
          <CenterControl />
          <RightControl
            onClick={() => toggleTabRight()}
            isActive={rightBarOpen}

          />
        </div>
      </div>
    </div>
  );
};

export default PlayingBar;
