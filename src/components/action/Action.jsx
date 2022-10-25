import React from "react";
import Button from "../button/Button";
import "./action.scss";

//icon
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

const Action = ({ isOnlyShowPlay = true }) => {
  return (
    <div className="action-container">
      <div className="action">
        <Button className={isOnlyShowPlay ? "is-hidden" : ""}>
          <FavoriteBorderRoundedIcon  sx={{ fontSize: 20, color: "var(--setting-icon-text)" }}/>
        </Button>
        <Button>
          <PlayArrowRoundedIcon sx={{ fontSize: 20, color: "var(--setting-icon-text)" }} />
        </Button>
        <Button className={isOnlyShowPlay ? "is-hidden" : ""}>
          <MoreHorizRoundedIcon sx={{ fontSize: 20, color: "var(--setting-icon-text)" }}/>
        </Button>
      </div>
    </div>
  );
};

export default Action;
