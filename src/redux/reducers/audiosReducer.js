const initialState = {
  isPlay: false,
  isLoading: false,
  encodeId: "",
  songInfo: {
    src: {
      128: "",
      320: "VIP",
    },
    lyric: null,
    info: {
      thumbnailM: "",
      thumbnail: "",
      title: "",
      album: "",
    },
  },
  playingList: {
    type: "mymusic",
    list: [],
  },
  rightBarActive: false,
  nowPlayingActive: false,
};

const audiosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACTION_PLAY":
      return {
        ...state,
        isPlay: action.payload,
      };
    case "ACTION_SET_INFOSONG":
      return {
        ...state,
        songInfo: action.payload,
      };
    case "ACTION_SET_CURRENTID":
      return {
        ...state,
        encodeId: action.payload,
      };
    case "ACTION_SET_PLAYLIST":
      return {
        ...state,
        playingList: action.payload,
      };
    case "ACTION_SET_RIGHT_ACTIVE":
      return {
        ...state,
        rightBarActive: action.payload,
      };
    case "ACTION_SET_NOW_PLAYING_ACTIVE":
      return {
        ...state,
        nowPlayingActive: action.payload,
      };
    case "ACTION_SET_LOADINGAPI":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default audiosReducer;
