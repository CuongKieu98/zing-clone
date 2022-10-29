import React from "react";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import Image from "../image/Image";
import "./radio.scss";

const SectionRadio = ({ data,className }) => {
  const customClass = className ? className :""
  return (
    <div className={"section-radio"}>
      <div className="container">
        {data.subTitle ? (
          <div className="media-header">
            <div className="header-left">
              <Link to={data.subTitle.link}>
                <div className="card-img">
                  <Image src={data.subTitle.thumbnail} className="is-50x50" />
                </div>
              </Link>
            </div>
            <div className="header-content">
              <h3 className="subtitle">{data.subTitle.name}</h3>
              <h3 className="title">
                <Link to={data.subTitle.link}>{data.title}</Link>
              </h3>
            </div>
          </div>
        ) : (
          <h3 className="section-title title">{data.title}</h3>
        )}

        <div className={"section-list " + customClass}>
          <div className="section-list__items">
            {data.items.map((item, i) => (
              <Card
                image={item.thumbnailM || item.thumbnail}
                showAction={false}
                key={i}
              >
                <h3 className="title">{item.title}</h3>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionRadio;
