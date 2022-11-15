import React from "react";
import { useDispatch } from "react-redux";
import { setPlayingList } from "../../redux/actions/actions";
import { getApiSong } from "../../utils/actionUtils";
import Media from "../media/Media";
import "./list.scss";

const List = ({ customImg, isOnlyShowMore, item, releaseDate, list }) => {
  const dispatch = useDispatch();

  const handlePlay = () => {
    dispatch(
      setPlayingList({
        type: "new release",
        list: [...list],
      })
    );
    getApiSong(item, dispatch);
  };

  return (
    <div className="list">
      <div
        className={
          "list-item media-item " + (item.streamingStatus === 2 && "is-vip")
        }
      >
        <Media
          customImg={customImg}
          isOnlyShowMore={isOnlyShowMore}
          item={item}
          releaseDate={releaseDate}
          onPlay={(e) => handlePlay()}
        />
      </div>
    </div>
  );
};

export default List;
