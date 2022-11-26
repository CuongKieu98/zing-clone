import React, { useEffect, useRef } from "react";
import Blur from "react-blur";


import Button from "../button/Button";
import Image from "../image/Image";

const NowPlaying = ({currAudio,onClick}) => {

  const imgRef = useRef(null);

  useEffect(() =>{
    if(currAudio.isPlay){
      imgRef?.current?.classList?.add("playing");
    }else{
      imgRef?.current?.classList?.remove("playing");

    }

  },[currAudio.isPlay])


  return (
    <>
      <div className="now-background">
        <div className="video-blur-img">
          <Blur img={currAudio.songInfo.info.thumbnailM || ""} blurRadius={50} ></Blur>
        </div>
        {/* <div className="overlay"></div> */}
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
              <div className="fs-item">
                <div className="item-wrapper">
                  <div className="card-content">
                    <Image src={currAudio.songInfo.info.thumbnailM || currAudio.songInfo.info.thumbnail} className="img-now" refI={imgRef}/>     
                  </div>
  
                </div>
              </div>
        </div>
        <div className="now-bottom">
            
        </div>
      </div>
    </>
  );
};

export default NowPlaying;
