import React, { useEffect, useState } from "react";
import { getCharthome, getSong } from "../api/musicApi";
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

const Chart = () => {
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState([]);
  const [dataSize, setDataSize] = useState(10);

  const currentAudio = useSelector(actionSelector);
  const currPlaying = currentAudio ? currentAudio.audiosReducer : null;

  const dispatch = useDispatch();

  useEffect(() => {
    const getChart = async () => {
      try {
        const response = await getCharthome();
        setChartData(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getChart();
  }, []);
console.log(currPlaying);
  const handlePlay = async (data) => {
    if (currPlaying && currPlaying.encodeId === data.encodeId)
      return dispatch(togglePlay(true));
    dispatch(setLoadingApi(true));
    dispatch(setCurrId(data.encodeId));
    dispatch(
      setPlayingList({
        type: "zing-chart",
        list: [...chartData.RTChart.items],
      })
    );
    const response = await getSong(data.encodeId);
    if (response.err !== 0) {
      return toast(response.msg, {
        type: "error",
        hideProgressBar: true,
      });
    }
    dispatch(
      setSongInfo({
        src: response.data,
        info:data
      })
    );
    dispatch(setLoadingApi(false));
    dispatch(togglePlay(true));

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
              <h3 className="title">#zingchart</h3>
              <Button>
                <i className="icon ic-play"></i>
              </Button>
            </div>
          </div>
          <div className="chart-line">
            <ChartLine
              chart={chartData.RTChart.chart}
              songs={chartData.RTChart.items}
            />
          </div>
          <div className="play-list-chart">
            {chartData.RTChart?.items?.slice(0, dataSize).map((item, i) => (
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
                      currPlaying.isLoading && item.encodeId === currPlaying.encodeId
                    }
                  />
                </div>
              </div>
            ))}
          </div>
          {dataSize < 100 ? (
            <div className="is-center">
              <Button className="show-all" onClick={() => setDataSize(100)}>
                Xem top 100
              </Button>
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default Chart;
