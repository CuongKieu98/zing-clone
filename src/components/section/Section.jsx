import React, { useState } from "react";
import "./section.scss";
import Button from "../button/Button";
import { SECTION_ID, SECTION_TYPE } from "../../consts/SECTION";
import NewRelease from "./NewRelease";
import PlayingSection from "./PlayingSection";
import MixSection from "./MixSection";
import WeekChartSection from "./WeekChartSection";
import ChartSection from "./ChartSection";
import NewReleaseSlider from "./NewReleaseSlider";
import Radio from "../radio/Radio";

const Section = ({ className, type, dataSection = [] }) => {
  const getData = dataSection && dataSection?.items;
  const dataChart = (type === SECTION_TYPE.RTChart && dataSection) ? dataSection?.chart : []
  return (
    <div className="section">
      <h3 className="section__title">{dataSection?.title}</h3>
      {type === SECTION_TYPE.newRelease ? (
        <NewRelease data={getData} />
      ) : type === SECTION_TYPE.playlist ? (
        <PlayingSection data={getData} />
      ) : type === SECTION_ID.hMix ? (
        <MixSection data={getData} />
      ) : type === SECTION_TYPE.weekChart ? (
        <WeekChartSection data={getData} />
      ) : type === SECTION_TYPE.RTChart ? (
        <ChartSection data={getData} chart={dataChart}/>
      ) : type === SECTION_TYPE.newReleaseChart ? (
        <NewReleaseSlider data={getData}/> 
      ) : <Radio data={getData}/>}

    </div>
  );
};

export default Section;
