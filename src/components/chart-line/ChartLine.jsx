import React, { useEffect, useState } from "react";
import "./chart-line.scss";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartLine = ({ chart }) => {
  const isNull = chart !== undefined;
  const labels = chart !== undefined ? chart?.times.map((a) => a.hour) : [];
  //const itemChart = chart !== undefined ? chart?.items[0].map((a) => a.counter) : [];
  console.log(isNull && Object.values(chart?.items)[0]);
  const options = {
    interaction: {
      mode: "index",
      intersect: false,
      axis:"x"
    },
    stacked: false,
    plugins: {
      legend: {
        display: false,
      },

    },
    scales: {
      y: {
        display: false,
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: isNull && Object.values(chart?.items)[0].map((c) => c.counter),
        borderColor: " rgb(74, 144, 226)",
        backgroundColor: " rgb(74, 144, 226)",
        yAxisID: "y",
        tension: 0.5,
        pointRadius: 0,
        borderWidth: 1.5,
        intersect: true,
        hoverBorderWidth: 5,
      },
      {
        label: "Dataset 2",
        data: isNull && Object.values(chart?.items)[1].map((c) => c.counter),
        borderColor: "rgb(39, 189, 156)",
        backgroundColor: "rgb(39, 189, 156)",
        yAxisID: "y",
        pointRadius: 0,
        tension: 0.5,
        borderWidth: 1.5,
      },
      {
        label: "Dataset 3",
        data: isNull && Object.values(chart?.items)[2].map((c) => c.counter),
        borderColor: "rgb(227, 80, 80)",
        backgroundColor: "rgb(227, 80, 80)",
        yAxisID: "y",
        tension: 0.5,
        pointRadius: 0,
        borderWidth: 1.5,
      },
    ],
  };
  return (
    <div className="chart-container">
      <Line options={options} data={data} />
    </div>
  );
};

export default ChartLine;
