import React from 'react'
import footerImgs from '../../assets/footer'
import Image from '../image/Image'
import "./footer.scss"

const partner = [
    {
        id:1,
        img:footerImgs.partner1,
    },
    {
        id:2,
        img:footerImgs.partner2,
    },
    {
        id:3,
        img:footerImgs.partner3,
    },
    {
        id:4,
        img:footerImgs.partner4,
    },
    {
        id:5,
        img:footerImgs.partner5,
    },
    {
        id:6,
        img:footerImgs.partner6,
    },
    {
        id:7,
        img:footerImgs.partner7,
    },
    {
        id:8,
        img:footerImgs.partner8,
    },

]

const Footer = () => {
  return (
    <div className='footer'>
        <h3 className="title">
            Đối tác âm nhạc
        </h3>
        <div className="columns">
                {partner.map((item,i) =>(
                    <div className="column mar-b-30" key={i}>
                        <div className="partner-item">
                            <div className="content">
                                <Image src={item.img} height="auto"/>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    </div>
  )
}

export default Footer