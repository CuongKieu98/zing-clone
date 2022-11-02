
//audio
export const togglePlay = (isPlay) => {
  return {
    type: "ACTION_PLAY",
    payload: isPlay,
  };
};

export const setSongInfo = (info) => {
  return {
    type: "ACTION_SET_INFOSONG",
    payload: info,
  };
};

export const setPlayingList = (list) => {
  return {
    type: "ACTION_SET_PLAYLIST",
    payload: list,
  };
};

export const setLoading= (value) => {
  return {
    type: "ACTION_SET_LOADINGAPI",
    payload: value,
  };
};


//
export const toggleRightBar = (isOpen) => {
  return {
    type: "TOGGLE_RIGHTBAR",
    payload: isOpen,
  };
};
