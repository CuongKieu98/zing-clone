import _ from "lodash";
import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { activeNowPlaying, activeRightBar } from "../../redux/actions/actions";
import { actionSelector } from "../../redux/selectors/selector";

import CenterControl from "./CenterControl";
import LeftControl from "./LeftControl";
import NowPlaying from "./NowPlaying";
import "./playing-bar.scss";
import RightBar from "./RightBar";
import RightControl from "./RightControl";
const PlayingBar = () => {
  const dispatch = useDispatch();

  const rbarRef = useRef(null);

  const playRef = useRef(null);

  const nowRef = useRef(null);

  const audioReducer = useSelector(actionSelector);

  const currAudio = audioReducer ? audioReducer.audiosReducer : null;

  const toggleTabRight = (e) => {
    e.stopPropagation();
    if (currAudio.rightBarActive) {
      rbarRef.current?.classList.remove("enter");

      rbarRef.current?.classList.add("exit");

      setTimeout(() => {
        dispatch(activeRightBar(false));
      }, 500);
    } else {
      setTimeout(() => {
        rbarRef.current?.classList?.remove("exit");

        rbarRef?.current?.classList?.add("enter");
      }, 200);
      dispatch(activeRightBar(true));
    }
  };

  const toggleNowPlaying = () => {
    if (currAudio.nowPlayingActive) {
      nowRef.current?.classList.remove("enter");
      nowRef.current?.classList.add("exit");
      playRef.current?.classList.remove("bg");

      setTimeout(() => {
        dispatch(activeNowPlaying(false));
      }, 500);
    } else {
      setTimeout(() => {
        nowRef.current?.classList?.remove("exit");
        nowRef?.current?.classList?.add("enter");
        playRef.current?.classList.add("bg");
      }, 200);
      dispatch(activeNowPlaying(true));

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
      {currAudio.rightBarActive ? (
        <div className="right-bar exit" ref={rbarRef}>
          <RightBar currAudio={currAudio} />
        </div>
      ) : null}
      {currAudio.nowPlayingActive ? (
        <div className="now-play exit" ref={nowRef}>
          <NowPlaying
            currAudio={currAudio}
            onClick={() => toggleNowPlaying()}
          />
        </div>
      ) : null}

      <div
        className="player-controls clickable"
        ref={playRef}
      >
        <div className="level player-controls__container">
          <LeftControl info={currAudio.songInfo} onClick={() => toggleNowPlaying()}/>
          <CenterControl />
          <RightControl
            onClick={(e) => toggleTabRight(e)}
            isActive={currAudio.rightBarActive}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayingBar;
