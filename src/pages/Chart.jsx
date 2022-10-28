import React, { useEffect, useState } from "react";
import { getCharthome } from "../api/musicApi";
import Button from "../components/button/Button";
import ChartLine from "../components/chart-line/ChartLine";
import List from "../components/list/List";
import Media from "../components/media/Media";
import LIST_TYPE from "../consts/LIST_TYPE";
import "../scss/_chart.scss";

const Chart = () => {
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState([]);
  const [dataSize,setDataSize] = useState(10);

  useEffect(() => {
    const getChart = async () => {
      try {
        const response = await getCharthome();
        setChartData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getChart();
  }, []);

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
            {chartData.RTChart.items.slice(0, dataSize).map((item, i) => (
              <div className="chart-item" key={i}>
                <div className="list-item-chart">
                  <Media
                    item={item}
                    prefix={true}
                    isInfoLeft={true}
                    isRight={true}
                    customImg={"is-40"}
                    rank={i + 1}
                    isOnlyShowMore={false}
                    contentType={LIST_TYPE.ALBUM}
                  />
                </div>
              </div>
            ))}
          </div>
          {dataSize < 100 ? (
            <div className="is-center">
              <Button className="show-all" onClick={() => setDataSize(100)}>Xem top 100</Button>
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default Chart;
