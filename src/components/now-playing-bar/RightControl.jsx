import React from "react";
import Button from "../button/Button";
import Slider from "@mui/material/Slider";

import { styled } from "@mui/material/styles";

const RightControl = (props) => {
  const { onClick ,isActive} = props;
  const SliderCustom = styled(Slider)({
    color: "var(--progressbar-active-bg)",
    height: 3,
    "&:hover": {
      height: 5,
      ".MuiSlider-thumb": {
        visibility: "visible",
      },
    },
    "& .MuiSlider-thumb": {
      height: 12,
      width: 12,
      visibility: "hidden",
      backgroundColor: "var(--progressbar-active-bg)",
      "&:before": {
        display: "none",
      },
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
    },
  });
  return (
    <div className="player-controls__right level-right">
      <div className="level-item is-narrow">
        <Button className="no-bg next">
          <i className="icon ic-karaoke"></i>
        </Button>
      </div>
      <div className="level-item is-narrow">
        <div className="player-volume">
          <Button className="no-bg next">
            <i className="icon ic-volume"></i>
          </Button>
          <div className="duration-vol">
            <SliderCustom
              size="small"
              defaultValue={50}
              sx={{ color: "var(--progressbar-active-bg)" }}
            />
          </div>
        </div>
      </div>
      <div className="level-item is-narrow">
        <span className="divide"></span>
      </div>
      <div className="level-item is-narrow">
        <Button className={"no-bg list-music"} onClick={onClick}>
          <div className={" button-zmd " + (isActive ? "is-active" : "")}>
            <i className="icon ic-list-music"></i>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default RightControl;
