import React from "react";
import NavTabs from "../nav-tabs/NavTabs";
import Button from "../button/Button";
import { useRef } from "react";
import Media from "../media/Media";
import { useDispatch } from "react-redux";
import { setPlayingList, setSongInfo, togglePlay } from "../../redux/actions/actions";
import { getSong } from "../../api/musicApi";
import { toast } from "react-toastify";

const RightBar = (props) => {
  const { currAudio } = props;

  const playlist = currAudio.playingList

  const dispatch = useDispatch();

  const handlePause = () => {
    dispatch(togglePlay(false));
  };

  const handlePlay = async (id) => {
    if (currAudio && currAudio.songInfo.encodeId === id)
      return dispatch(togglePlay(true));
    const response = await getSong(id);
    if (response.err !== 0) {
      return toast(response.msg, {
        type: "error",
        hideProgressBar: true,
      });
    }
    dispatch(
      setSongInfo({
        encodeId: id,
        src: response.data,
      })
    );
    dispatch(togglePlay(true));
  };


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
                  <Button>
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
                {/* dnd */}
                {playlist &&
                  playlist.list.map((item, i) => (
                    <div className={"list-item " + (item.encodeId === currAudio.songInfo.encodeId ? "is-active" : "")} key={item.encodeId}>
                      <Media
                        item={item}
                        isOnlyShowMore={true}
                        customImg="is-40"
                        onPlay={() => handlePlay(item.encodeId)}
                        onPause={handlePause}
                        isPlaying={
                          currAudio.isPlay &&
                          item.encodeId === currAudio.songInfo.encodeId
                        }
                        className={item.encodeId === currAudio.songInfo.encodeId ? "is-active" : ""}
                      />
                    </div>
                  ))}
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
