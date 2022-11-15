import { getSong } from "../api/musicApi";
import {
  setCurrId,
  setLoadingApi,
  setSongInfo,
  togglePlay,
} from "../redux/actions/actions";
import { toast } from "react-toastify";

export const getApiSong = async (data, dispatch) => {
  dispatch(setCurrId(data.encodeId));
  dispatch(setLoadingApi(true));
  const res = await getSong(data.encodeId);
  if (res.err !== 0) {
    dispatch(setLoadingApi(false));
    return toast(res.msg, {
      type: "error",
      hideProgressBar: true,
    });
  }
  dispatch(
    setSongInfo({
      src: res.data,
      info: data,
    })
  );
  dispatch(setLoadingApi(false));
  dispatch(togglePlay(true));
};
