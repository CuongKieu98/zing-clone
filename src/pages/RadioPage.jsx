import React, { useState, useEffect } from "react";
import { getRadio } from "../api/musicApi";
import Radio from "../components/radio/Radio";
import SectionRadio from "../components/radio/SectionRadio";
import SlideRadio from "../components/radio/SlideRadio";
import { SECTION_ID, SECTION_TYPE } from "../consts/SECTION";
import "../scss/_radio.scss";

const RadioPage = () => {
  const [radioData, setRadioData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const params = 1;
      try {
        const response = await getRadio(params);
        setRadioData(response.data.items);
        console.log(response.data.items.find((e) => e.sectionId === SECTION_ID.radHot));
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <>
      {loading ? null : (
        <div className="radio-section-page" >
        <div className="container radio-page">
          <Radio data={radioData.find((e) => e.sectionId === SECTION_ID.radHot).items} />
        </div>
        {/* khám phá */}
        <SectionRadio data={radioData.find((e) => e.sectionId === SECTION_ID.radPromoteProgram)} />
        {/* Radio_Banner */}
        <SlideRadio  data={radioData.find((e) => e.sectionType === SECTION_TYPE.RadioBanner)}/>
        {/* Category */}
        <SectionRadio data={radioData.find((e) => e.sectionId === SECTION_ID.radPromoteCategory)} className="category" />

        {/* replay */}
        <SectionRadio data={radioData.find((e) => e.sectionId === SECTION_ID.radReplay)} />
        {/* new */}
        <SectionRadio data={radioData.find((e) => e.sectionId === SECTION_ID.radLastestProgram)} />
        
        </div>
      )}
    </>
  );
};

export default RadioPage;
