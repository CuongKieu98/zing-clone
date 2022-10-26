import React, { useState } from "react";
import "./section.scss";
import Button from "../button/Button";
import { SECTION_ID, SECTION_TYPE } from "../../consts/SECTION";
import NewRelease from "./NewRelease";
import PlayingSection from "./PlayingSection";
import MixSection from "./MixSection";
import WeekChartSection from "./WeekChartSection";

const Section = ({ className, type, dataSection = [] }) => {
  const getData = dataSection && dataSection?.items;

  return (
    <div className="section">
      <h3 className="section__title">{dataSection?.title}</h3>
      {type === SECTION_TYPE.newRelease ? (
        <NewRelease data={getData} />
      ) : type === SECTION_TYPE.playlist ? (
        <PlayingSection data={getData} />
      ) : type === SECTION_ID.hMix ? (
        <MixSection data={getData} />
      ) : (
        <WeekChartSection data={getData} />
      )}
    </div>
  );
};

export default Section;
