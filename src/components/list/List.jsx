import React from 'react'
import Media from '../media/Media'
import "./list.scss"

const List = ({customImg,isOnlyShowMore ,item}) => {

  return (
    <div className='list'>
        <div className="list-item media-item">
                <Media customImg={customImg} isOnlyShowMore={isOnlyShowMore} item={item}/>
        </div>
    </div>
  )
}

export default List