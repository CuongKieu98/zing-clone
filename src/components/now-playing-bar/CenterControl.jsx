import React from "react";
import Button from "../button/Button";
import Slider from "@mui/material/Slider";


const CenterControl = () => {


  return (
    <div className="player-controls__player-bar level-center">
      <div className="level-item">
        <div className="actions">
          <Button className="no-bg">
            <i className="icon ic-shuffle"></i>
          </Button>
          <Button className="no-bg">
            <i className="icon ic-pre"></i>
          </Button>
          <Button className="no-bg btn-play">
            <i className="icon ic-play-circle-outline"></i>
          </Button>
          <Button className="no-bg">
            <i className="icon ic-next"></i>
          </Button>
          <Button className="no-bg">
            <i className="icon ic-repeat"></i>
          </Button>
        </div>
      </div>

      <div className="level-item mar-b-5">
        <span className="time-left">00:00</span>
        <div className="duration-bar">
          <Slider
            size="small"
            defaultValue={0}
            sx={{color:"var(--progressbar-active-bg)"}}
          />
        </div>
        <span className="time-right">01:28</span>
      </div>
    </div>
  );
};

export default CenterControl;
