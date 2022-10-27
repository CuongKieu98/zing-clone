import React from 'react'
import Media from '../media/Media'
import "./list.scss"

const List = ({customImg,isOnlyShowMore ,item,releaseDate}) => {

  return (
    <div className='list'>
        <div className={"list-item media-item " + (item.streamingStatus === 2 && "is-vip")}>
                <Media customImg={customImg} isOnlyShowMore={isOnlyShowMore} item={item} releaseDate={releaseDate} />
        </div>
    </div>
  )
}

export default List