const initialState = {
  isPlay: false,
  isLoading: false,
  songInfo: {
    encodeId: "Z6WZD78I",
    src: {
      128: "https://vnso-zn-16-tf-mp3-s1-m-zmp3.zmdcdn.me/2fdc3ed43594dcca8585/9134641035892817207?authen=exp=1667543875~acl=/2fdc3ed43594dcca8585/*~hmac=bf11fa1373e8b62e70d649a21645c479",
      320: "VIP",
    },
    lyric: null,
    thumbnailM: "",
    thumbnail: "",
    title: "",
  },
  playingList: {
    type: "mymusic",
    list: [],
  },
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
    case "ACTION_SET_PLAYLIST":
      return {
        ...state,
        playingList: action.payload,
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
