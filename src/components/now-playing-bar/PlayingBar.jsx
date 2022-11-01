import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleRightBar } from "../../redux/actions/actions";
import rightBarReducer from "../../redux/reducers/rightBarReducer";
import { actionSelector } from "../../redux/selectors/selector";

import CenterControl from "./CenterControl";
import LeftControl from "./LeftControl";
import "./playing-bar.scss";
import RightBar from "./RightBar";
import RightControl from "./RightControl";
const PlayingBar = () => {
  const right = useSelector(actionSelector);
  const isOpen = right.rightBarReducer ? right.rightBarReducer.isOpen : false;
  const dispatch = useDispatch();
  const rbarRef = useRef(null);
  const [timeOpen, setTimeOpen] = useState(false);
  console.log(timeOpen);
  const toggleTabRight = () => {
    if (timeOpen) {
      rbarRef.current?.classList.remove("enter");
      rbarRef.current?.classList.add("exit");

      setTimeout(() => {
        setTimeOpen(false);
      }, 600);
    } else {
      setTimeout(() => {
        rbarRef.current?.classList?.remove("exit");
        rbarRef?.current?.classList?.add("enter");
      }, 200);
      setTimeOpen(true);
      //dispatch(toggleRightBar(!isOpen));
    }
    
  };

  return (
    <div className="now-playing-bar">
      {/* righttab */}
      {timeOpen ? (
        <div className="right-bar exit" ref={rbarRef}>
          <RightBar />
        </div>
      ) : null}

      <div className="player-controls clickable">
        <div className="level player-controls__container">
          <LeftControl />
          <CenterControl />
          <RightControl onClick={() => toggleTabRight()} isActive={timeOpen} />
        </div>
      </div>
    </div>
  );
};

export default PlayingBar;
