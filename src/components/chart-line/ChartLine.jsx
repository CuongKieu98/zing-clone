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

const ChartLine = ({ chart, songs }) => {
  const isNull = chart !== undefined;
  const labels =
    chart !== undefined ? chart?.times.map((a) => a.hour + ":00") : [];
  console.log(chart);
  const options = {
    interaction: {
      mode: "nearest",
      intersect: false,
      axis: "x",
    },
    pointDotStrokeWidth: 10,
    datasetStrokeWidth: 10,
    tooltipFillColor: "rgb(0,0,0)",
    tooltips: {
      enabled: true,
      mode: "x-axis",
      intersect: false,
      padding: 2,
      caretPadding: 4,
      usePointStyle: true,
   },
    animations: {
      radius: {
         duration: 500,
         easing: "linear",
         loop: (context) => context.active,
      },
   },
    maintainAspectRatio: false,
    responsive: true,
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
      x: {
        ticks: {
          color: "hsla(0,0%,100%,.5)", // not 'fontColor:' anymore
          //fontSize: 14,
          font: {
            style: "normal",
          },
          callback: function (val, index) {
            return index % 2 === 0 ? this.getLabelForValue(val) : "";
          },
          maxRotation: 0,
          minRotation: 0,
          drawBorder: false,
          textStrokeColor: "#fff",
          alignToPixels: true,

        },
        grid: {
          borderDash: [],
          color: "transparent",
        },
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: songs.slice(0, 1).map((n) => n.title),
        data: isNull && Object.values(chart?.items)[0].map((c) => c.counter),
        borderColor: " rgb(74, 144, 226)",
        backgroundColor: " rgb(74, 144, 226)",
        yAxisID: "y",
        tension: 0.5,
        pointRadius: 0,
        oder: 3,
        hoverRadius: 12,

        intersect: true,
        hoverBorderWidth: 5,
        pointHoverBackgroundColor: "rgb(74, 144, 226)",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 3,
        pointHoverRadius: 5.5,
        borderWidth: 2,
        pointBorderWidth: 3,
      },
      {
        label: songs.slice(1, 2).map((n) => n.title),
        data: isNull && Object.values(chart?.items)[1].map((c) => c.counter),
        borderColor: "rgb(39, 189, 156)",
        backgroundColor: "rgb(39, 189, 156)",
        yAxisID: "y",
        pointRadius: 0,
        tension: 0.5,
        borderWidth: 1.5,
        hoverBorderWidth: 5,
        pointHoverBackgroundColor: "rgb(39, 189, 156)",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 3,
        pointHoverRadius: 5.5,
        hoverRadius: 12,
        oder: 3,
      },
      {
        label: songs.slice(2, 3).map((n) => n.title),
        data: isNull && Object.values(chart?.items)[2].map((c) => c.counter),
        borderColor: "rgb(227, 80, 80)",
        backgroundColor: "rgb(227, 80, 80)",
        yAxisID: "y",
        tension: 0.5,
        pointRadius: 0,
        borderWidth: 1.5,
        hoverBorderWidth: 5,
        pointHoverBackgroundColor: "rgb(227, 80, 80)",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 3,
        pointHoverRadius: 5.5,
        hoverRadius: 12,
        oder: 3,
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
