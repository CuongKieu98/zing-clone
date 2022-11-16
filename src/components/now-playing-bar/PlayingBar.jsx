import _ from "lodash";
import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { actionSelector } from "../../redux/selectors/selector";

import CenterControl from "./CenterControl";
import LeftControl from "./LeftControl";
import NowPlaying from "./NowPlaying";
import "./playing-bar.scss";
import RightBar from "./RightBar";
import RightControl from "./RightControl";
const PlayingBar = () => {
  const rbarRef = useRef(null);

  const playRef = useRef(null);

  const nowRef = useRef(null);

  const audioReducer = useSelector(actionSelector);

  const currAudio = audioReducer ? audioReducer.audiosReducer : null;

  const [rightBarOpen, setRightBarOpen] = useState(false);

  const [nowPlayingOpen, setNowPlayingOpen] = useState(false);

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

  const toggleNowPlaying = () => {
    if (nowPlayingOpen) {
      nowRef.current?.classList.remove("enter");

      nowRef.current?.classList.add("exit");

      setTimeout(() => {
        setNowPlayingOpen(false);
      }, 500);
    } else {
      setTimeout(() => {
        nowRef.current?.classList?.remove("exit");

        nowRef?.current?.classList?.add("enter");
      }, 200);

      setNowPlayingOpen(true);
    }
  };

  useEffect(() => {
    if (_.isEmpty(currAudio.encodeId)) {
      playRef.current.classList.add("is-none");
    } else {
      playRef.current.classList.add("is-data");
    }
  }, [currAudio.encodeId]);

  return (
    <div className="now-playing-bar">
      {/* righttab */}
      {rightBarOpen ? (
        <div className="right-bar exit" ref={rbarRef}>
          <RightBar currAudio={currAudio} />
        </div>
      ) : null}
      {nowPlayingOpen ? (
        <div className="now-play exit" ref={nowRef}>
          <NowPlaying currAudio={currAudio} onClick={() => toggleNowPlaying()} />
        </div>
      ) : null}

      <div className="player-controls clickable" ref={playRef} onClick={() => toggleNowPlaying()}>
        <div className="level player-controls__container">
          <LeftControl info={currAudio.songInfo} />
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
