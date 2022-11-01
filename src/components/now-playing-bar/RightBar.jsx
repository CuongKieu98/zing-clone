import React from "react";
import NavTabs from "../nav-tabs/NavTabs";
import Button from "../button/Button";
import { useRef } from "react";

const RightBar = (props) => {

    



  return (
  
      <div className="right-bar__container">
        <div className="right-bar__header">
          <div className="level tab-bars">
            <div className="level-left">
              <div className="level-item is-active">
                <h6 className="tab-list-title">Danh sách phát</h6>
              </div>
              <div className="level-item">
                <h6 className="tab-list-title">Nghe gần đây</h6>
              </div>
            </div>
            <div className="level-right">
              <div className="level">
                <div className="level-item">
                  <span className="menu-tab">
                    <Button >
                      <i className="icon ic-more"></i>
                    </Button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-bar__scroll">
          <div className="content-wrapper">
            <div className="content-container">
                <div className="content-bar">
                    <div className="right-bar__list">
                        
                    </div>
                </div>
            </div>
            <div className="track-horizontal"></div>
            <div className="track-vertical"></div>
          </div>
        </div>
      </div>
 
  );
};

export default RightBar;
