import React, { useEffect, useState } from "react";
import { getCharthome, getNewReleaseChart, getSong } from "../api/musicApi";
import Button from "../components/button/Button";
import ChartLine from "../components/chart-line/ChartLine";
import List from "../components/list/List";
import Media from "../components/media/Media";
import LIST_TYPE from "../consts/LIST_TYPE";
import "../scss/_chart.scss";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  setCurrId,
  setLoadingApi,
  setPlayingList,
  setSongInfo,
  togglePlay,
} from "../redux/actions/actions";
import { useSelector } from "react-redux";
import { actionSelector } from "../redux/selectors/selector";
import { getApiSong } from "../utils/actionUtils";

const NewReleasePage = () => {
  const [loading, setLoading] = useState(true);
  const [newReleaseData, setNewReleaseData] = useState([]);

  const currentAudio = useSelector(actionSelector);
  const currPlaying = currentAudio ? currentAudio.audiosReducer : null;

  const dispatch = useDispatch();

  useEffect(() => {
    const getNewRelease = async () => {
      try {
        const response = await getNewReleaseChart();
        setNewReleaseData(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getNewRelease();
  }, []);

  const handlePlay = async (data) => {
    if (currPlaying && currPlaying.encodeId === data.encodeId)
      return dispatch(togglePlay(true));
    dispatch(
      setPlayingList({
        type: "newReleaseChart",
        list: [...newReleaseData.items],
      })
    );
    getApiSong(data, dispatch);
  };

  const handlePause = () => {
    dispatch(togglePlay(false));
  };

  return (
    <>
      {!loading ? (
        <div className="chart-page container">
          <div className="chart-page__header">
            <div className="chart-title">
              <h3 className="title">Nhạc Mới</h3>
              <Button>
                <i className="icon ic-play"></i>
              </Button>
            </div>
          </div>
          <div className="play-list-chart">
            {newReleaseData.items?.map((item, i) => (
              <div className="chart-item" key={item.encodeId}>
                <div
                  className={
                    "list-item-chart " +
                    (item.encodeId === currPlaying.encodeId ? "active" : "")
                  }
                >
                  <Media
                    item={item}
                    prefix={true}
                    isInfoLeft={true}
                    isRight={true}
                    customImg={"is-40"}
                    rank={i + 1}
                    isOnlyShowMore={false}
                    contentType={LIST_TYPE.ALBUM}
                    onPlay={() => handlePlay(item)}
                    onPause={handlePause}
                    isPlaying={
                      currPlaying.isPlay &&
                      item.encodeId === currPlaying.encodeId
                    }
                    isLoading={
                      currPlaying.isLoading &&
                      item.encodeId === currPlaying.encodeId
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NewReleasePage;
