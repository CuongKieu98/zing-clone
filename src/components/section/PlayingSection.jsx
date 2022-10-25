import React from 'react'
import { Link } from 'react-router-dom';
import Card from '../card/Card'

const PlayingSection = ({data}) => {
  return (
    <div className='section-playing'>
        <div className="section-playing__items">
            {data && data.map((item,i) =>(
                <Card key={i} image={item.thumbnailM || item.thumbnail} >
                    <h3 className='title'>
                        <Link to={item.link}>
                            {item.title}
                        </Link>
                    </h3>
                    <h4 className='subtitle'>
                        <span>{item.sortDescription}</span>
                    </h4>
                </Card>
            ))}
        </div>
    </div>
  )
}

export default PlayingSection