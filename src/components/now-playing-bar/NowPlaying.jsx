import React from "react";
import Blur from "react-blur";

import themes from "../../assets/theme";
import Button from "../button/Button";

const NowPlaying = ({currAudio,onClick}) => {
  return (
    <>
      <div className="now-background">
        <div className="video-blur-img">
          <Blur img={themes.eiffelBg} blurRadius={5} enableStyles></Blur>
        </div>
        <div className="overlay"></div>
      </div>
      <div className="now-content">
        <div className="now-header">
            <div className="left">
                <Button className="" onClick={onClick}>
                    <i className="icon ic-go-down"></i>
                </Button>
            </div>
            <ul className="tabs">
                <li className="tabs-item is-active">Đang phát</li>
                <li className="tabs-item">Lời bài hát</li>
            </ul>
            <div className="right">
                <Button className="">
                    <i className="icon ic-settings"></i>
                </Button>
            </div>
        </div>
        <div className="now-body">

        </div>
        <div className="now-bottom">
            
        </div>
      </div>
    </>
  );
};

export default NowPlaying;
