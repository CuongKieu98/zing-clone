
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

export const setCurrId = (id) => {
  return {
    type: "ACTION_SET_CURRENTID",
    payload: id,
  };
};


export const setPlayingList = (list) => {
  return {
    type: "ACTION_SET_PLAYLIST",
    payload: list,
  };
};

export const setLoadingApi= (value) => {
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
//
export const setDataTheme = (id) => {
  return {
    type: "SET_THEME",
    payload: id,
  };
};