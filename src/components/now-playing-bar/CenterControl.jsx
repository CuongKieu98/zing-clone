import React, { useState, useRef, useEffect } from "react";

import Button from "../button/Button";

import Slider from "@mui/material/Slider";

import { styled } from "@mui/material/styles";

import audios from "../../assets/fake-data/audio";

import stringUtils from "../../utils/stringUtils";

import { useMemo } from "react";

import { toast } from "react-toastify";

import { useSelector, useDispatch } from "react-redux";

import { actionSelector } from "../../redux/selectors/selector";

import {
  setCurrId,
  setSongInfo,
  togglePlay,
} from "../../redux/actions/actions";
import { getSong } from "../../api/musicApi";

const CenterControl = () => {
  const dispatch = useDispatch();

  const audioRef = useRef(null);

  const reducerAudio = useSelector(actionSelector);

  const currPlaying = reducerAudio ? reducerAudio.audiosReducer : null;

  // const [isPlay, setPlay] = useState(currPlaying.isPlay);

  const [currentTime, setCurrentTime] = useState(0);

  const [duration, setDuration] = useState(0);

  const [seekValue, setSeekValue] = useState(0);

  const [loop, setLoop] = useState(false);

  const SliderCustom = useMemo(
    () =>
      styled(Slider)({
        color: "var(--progressbar-active-bg)",
        height: 4,
        "&:hover": {
          height: 5,
          ".MuiSlider-thumb": {
            visibility: "visible",
          },
        },
        "& .MuiSlider-thumb": {
          height: 12,
          width: 12,
          visibility: "hidden",
          backgroundColor: "var(--progressbar-active-bg)",
          "&:before": {
            display: "none",
          },
          "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
            boxShadow: "inherit",
          },
        },
      }),
    []
  );

  const handlePlay = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    dispatch(togglePlay(true));
    audioRef.current.play();
  };

  const handlePause = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    dispatch(togglePlay(false));
    audioRef.current.pause();
  };

  const handleNext = async (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    const Idx = currPlaying.playingList.list.findIndex(
      (i) => i.encodeId === currPlaying.encodeId
    );
    dispatch(setCurrId(currPlaying.playingList.list[Idx + 1].encodeId));
    const response = await getSong(
      currPlaying.playingList.list[Idx + 1].encodeId
    );
    dispatch(
      setSongInfo({
        src: response.data,
      })
    );
  };

  const handleLoop = (e) => {
    e.stopPropagation();
    setLoop(!loop);
  };

  const handleEnded = () => {
    if (!currPlaying.isPlay) return;
    dispatch(togglePlay(false));

    // setPlay(false);
  };

  const onPlaying = () => {
    setCurrentTime(audioRef.current.currentTime);
    setSeekValue(
      (audioRef.current.currentTime /
        stringUtils.checkNaN(audioRef.current.duration)) *
        100
    );
  };

  const handleLoadMetadata = () => {
    setDuration(audioRef.current.duration);
    if (currPlaying.isPlay) audioRef.current.play();
  };

  const handleChangeTimeSlider = (e, time) => {
    audioRef.current.currentTime = (time * audioRef.current.duration) / 100;
  };

  // useEffect(() => {
  //   setPlay(currPlaying.isPlay)
  // },[currPlaying.isPlay])

  useEffect(() => {
    if (currPlaying.isPlay) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [currPlaying.isPlay]);

  return (
    <div className="player-controls__player-bar level-center">
      <div className="level-item">
        <div className="actions">
          <Button className="no-bg">
            <i className="icon ic-shuffle"></i>
          </Button>
          <Button className="no-bg">
            <i className="icon ic-pre"></i>
          </Button>
          {currPlaying.isPlay ? (
            <Button className="no-bg btn-play" onClick={(e) => handlePause(e)}>
              <i className="icon ic-pause-circle-outline"></i>
            </Button>
          ) : (
            <Button className="no-bg btn-play" onClick={(e) => handlePlay(e)}>
              <i className="icon ic-play-circle-outline"></i>
            </Button>
          )}

          <Button className="no-bg" onClick={(e) => handleNext(e)}>
            <i className="icon ic-next"></i>
          </Button>
          {loop ? (
            <Button className="no-bg is-active" onClick={(e) => handleLoop(e)}>
              <i className="icon ic-repeat-one"></i>
            </Button>
          ) : (
            <Button className="no-bg" onClick={(e) => handleLoop(e)}>
              <i className="icon ic-repeat"></i>
            </Button>
          )}
        </div>
      </div>

      <div className="level-item mar-b-6">
        <span className="time-left">
          {stringUtils.formatDuration(currentTime)}
        </span>
        <div className="duration-bar">
          <SliderCustom
            size="small"
            sx={{ color: "var(--progressbar-active-bg)" }}
            value={seekValue || 0}
            onChange={handleChangeTimeSlider}
            aria-label="time-indicator"
          />
        </div>
        <span className="time-right">
          {stringUtils.formatDuration(duration)}
        </span>
      </div>
      <audio
        src={currPlaying.songInfo.src[128] || currPlaying.songInfo.src[320]}
        ref={audioRef}
        autoPlay={currPlaying.isPlay}
        loop={loop}
        hidden
        onLoadedMetadata={handleLoadMetadata}
        onTimeUpdate={onPlaying}
        onEnded={handleEnded}
      />
    </div>
  );
};

export default CenterControl;
