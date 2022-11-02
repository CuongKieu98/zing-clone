import React from "react";
import { Link } from "react-router-dom";
import LIST_TYPE from "../../consts/LIST_TYPE";
import Button from "../button/Button";
import ChartLine from "../chart-line/ChartLine";
import Media from "../media/Media";

const ChartSection = ({ data ,chart}) => {
  return (
    <div className="container chart-section">
      <div className="bg-blur"></div>
      <div className="bg-alpha"></div>
      <div className="chart-section__header">
        <Link to={"/zing-chart"}>#zingchart</Link>
        <Button>
          <i className="icon ic-play"></i>
        </Button>
      </div>
      <div className="columns">
        <div className="column">
          <div className="column-list">
            {data &&
              data.slice(0, 3).map((item, i) => (
                <div className="chart-song-item" key={i}>
                  <div className="list-item">
                    <Media
                      isOnlyShowMore={false}
                      item={item}
                      releaseDate={false}
                      rank={i + 1}
                      prefix={true}
                      type={LIST_TYPE.rank}
                      
                    />
                  </div>
                </div>
              ))}
          </div>
          <div className="is-center">
           <Link to={"/zing-chart"} className="show-more">
            Xem thêm
           </Link>
          </div>
        </div>
        <div className="column right-chart">
          <div className="chart-container">
            
            <ChartLine chart={chart} songs={data}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartSection;
