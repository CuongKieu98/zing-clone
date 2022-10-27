import React, { useState, useEffect } from "react";
import { getHome } from "../api/musicApi";
import Section from "../components/section/Section";
import Slide from "../components/slide/Slide";
import { SECTION_ID, SECTION_TYPE } from "../consts/SECTION";
import Button from "../components/button/Button";

const Home = () => {
  const [dataHome, setDataHome] = useState([]);
  const [slideItem, setSlideItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const params = 1;
      try {
        const response = await getHome(params);
        setDataHome(response.data.items);
        setSlideItem(
          response.data.items.find((e) => e.sectionType === SECTION_TYPE.banner)
        );
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
        <div className="container">
          <Slide items={slideItem.items} />
          {/* new-release */}
          <Section
            type={SECTION_TYPE.newRelease}
            dataSection={dataHome.find(
              (e) => e.sectionType === SECTION_TYPE.newRelease
            )}
          />
          {/* hAutoTheme1 */}
          <Section
            type={SECTION_TYPE.playlist}
            dataSection={dataHome.find(
              (e) => e.sectionId === SECTION_ID.hAutoTheme1
            )}
          />
          <Section
            type={SECTION_ID.hMix}
            dataSection={dataHome.find((e) => e.sectionId === SECTION_ID.hMix)}
          />
          <Section
            type={SECTION_TYPE.playlist}
            dataSection={dataHome.find(
              (e) => e.sectionId === SECTION_ID.hAutoTheme2
            )}
          />
          {/* chart */}
          <Section
            type={SECTION_TYPE.RTChart}
            dataSection={dataHome.find(
              (e) => e.sectionType === SECTION_TYPE.RTChart
            )}
          />
          {/* banner */}
          <Section
            type={SECTION_TYPE.weekChart}
            dataSection={dataHome.find(
              (e) => e.sectionType === SECTION_TYPE.weekChart
            )}
          />

          {/* artists */}
          {/* top100 */}
          <Section
            type={SECTION_TYPE.playlist}
            dataSection={dataHome.find((e) => e.sectionId === SECTION_ID.h100)}
          />

          {/* new */}
          <Section
            type={SECTION_TYPE.newReleaseChart}
            dataSection={dataHome.find(
              (e) => e.sectionType === SECTION_TYPE.newReleaseChart
            )}
          />
          {/* slide */}

          {/* xone */}
          <Section
            type={SECTION_TYPE.playlist}
            dataSection={dataHome.find((e) => e.sectionId === SECTION_ID.hXone)}
          />
          {/* radio */}
          <Section
            type={SECTION_TYPE.livestream}
            dataSection={dataHome.find((e) => e.sectionId === SECTION_ID.hLiveRadio)}
          />
        </div>
      )}
    </>
  );
};

export default Home;
