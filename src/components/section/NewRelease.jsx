import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPlayingList } from "../../redux/actions/actions";
import { getApiSong } from "../../utils/actionUtils";
import Button from "../button/Button";
import List from "../list/List";
import "./section.scss";

const NewRelease = ({ data }) => {

  const dispatch = useDispatch();
  const [tabActive, setTabActive] = useState(1);

  const handleChangeTab = (val) => {
    if (val === tabActive) return;
    setTabActive(val);
  };



  return (
    <>
      <div className="new-release">
        <Button
          className={tabActive === 1 ? "active" : ""}
          onClick={(e) => handleChangeTab(1)}
        >
          Việt Nam
        </Button>
        <Button
          className={tabActive === 2 ? "active" : ""}
          onClick={() => handleChangeTab(2)}
        >
          Quốc Tế
        </Button>
      </div>
      {tabActive === 1 ? (
        <div className="columns border-tb">
          {data.vPop
            ? data.vPop?.slice(0, 12).map((item, i) => (
                <div className="column-response" key={i}>
                  <List
                    customImg="is-60"
                    isOnlyShowMore={true}
                    item={item}
                    releaseDate={true}
                    list={data.vPop}
                  />
                </div>
              ))
            : null}
        </div>
      ) : (
        <div className="columns">
          {data.others
            ? data.others?.slice(0, 12).map((item, i) => (
                <div className="column-response" key={i}>
                  <List
                    customImg="is-60"
                    isOnlyShowMore={true}
                    item={item}
                    list={data.others}
                    releaseDate={true}
                  />
                </div>
              ))
            : null}
        </div>
      )}
    </>
  );
};

export default NewRelease;
