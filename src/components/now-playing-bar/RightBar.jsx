import React from "react";
import Button from "../button/Button";
import { useRef } from "react";
import Media from "../media/Media";
import { useDispatch } from "react-redux";
import {
  setCurrId,
  setLoadingApi,
  setPlayingList,
  setSongInfo,
  togglePlay,
} from "../../redux/actions/actions";
import { getSong } from "../../api/musicApi";
import { toast } from "react-toastify";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { actionSelector } from "../../redux/selectors/selector";
import { useLayoutEffect } from "react";

const RightBar = (props) => {
  const { currAudio } = props;

  // const playlist = currAudio.playingList;

  const [listdata, setListdata] = useState(currAudio.playingList);


  const dispatch = useDispatch();

  const handlePause = () => {
    dispatch(togglePlay(false));
  };

  const handlePlay = async (id, i) => {
    if (currAudio && currAudio.encodeId === id)
      return dispatch(togglePlay(true));
    dispatch(setCurrId(id));
    dispatch(setLoadingApi(true));
    const response = await getSong(id);
    if (response.err !== 0) {
      return toast(response.msg, {
        type: "error",
        hideProgressBar: true,
      });
    }
    dispatch(
      setSongInfo({
        src: response.data,
      })
    );
    dispatch(setLoadingApi(false));
    dispatch(togglePlay(true));
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const dataR = [...listdata.list]
    const { source, destination } = result;
    const [remove] = dataR.splice(source.index, 1);
    const newData = dataR.splice(destination.index, 0, remove);
    dispatch(setPlayingList({
      type:listdata.type,
      list:dataR
    }))
  };

  useLayoutEffect(() => {
    console.log(currAudio.playingList.list.findIndex((i) => i.encodeId === currAudio.encodeId));
    setListdata(currAudio.playingList);
  }, [currAudio.playingList]);

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
                <DragDropContext onDragEnd={onDragEnd}>
                  <Droppable droppableId="1">
                    {(provided) => (
                      <div {...provided.draggableProps} ref={provided.innerRef}>
                        {listdata &&
                          listdata.list.map((item, i) => (
                            <Draggable
                              key={item.encodeId}
                              draggableId={item.encodeId}
                              index={i}
                            >
                              {(provided, snapshot) => (
                                <>
                                  <div
                                    className={
                                      "list-item " +
                                      (item.encodeId === currAudio.encodeId
                                        ? "is-active"
                                        : "")
                                    }
                                    key={item.encodeId}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    <Media
                                      item={item}
                                      isOnlyShowMore={true}
                                      customImg="is-40"
                                      onPlay={() =>
                                        handlePlay(item.encodeId, i)
                                      }
                                      onPause={handlePause}
                                      isPlaying={
                                        currAudio.isPlay &&
                                        item.encodeId === currAudio.encodeId
                                      }
                                      isLoading={
                                        currAudio.isLoading &&
                                        item.encodeId === currAudio.encodeId
                                      }
                                      className={
                                        item.encodeId === currAudio.encodeId
                                          ? "is-active"
                                          : ""
                                      }
                                    />
                                    {item.encodeId === currAudio.encodeId ? (
                                      <div className="next-songs">
                                        <h3 className="title is-6">
                                          Tiếp theo
                                        </h3>

                                        <h3 className="subtitle">
                                          <span>Từ playlist</span>
                                          <Link to={"/"}>#zingchart</Link>
                                        </h3>
                                      </div>
                                    ) : null}
                                  </div>
                                </>
                              )}
                            </Draggable>
                          ))}
                        {provided.placeholder}
                      </div>
                    )}

                    {/* dnd */}
                  </Droppable>
                </DragDropContext>
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
