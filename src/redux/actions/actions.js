export const togglePlay = (isPlay) => {
  return {
    type: "ACTION_PLAY",
    payload: isPlay,
  };
};
export const toggleRightBar = (isOpen) => {
  return {
    type: "TOGGLE_RIGHTBAR",
    payload: isOpen,
  };
};
