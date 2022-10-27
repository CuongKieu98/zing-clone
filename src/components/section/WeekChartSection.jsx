import React from "react";
import Card from "../card/Card";


const WeekChartSection = ({ data }) => {
  return (
    <div className="container week-chart-section">
      <div className="columns">
        {data &&
          data.map((item, i) => (
            <div className="column" key={i}>
              <Card image={item.cover} showAction={false} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default WeekChartSection;
