import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Card from "../card/Card";

const MixSection = ({ data }) => {
  console.log(data);
  return (
    <div className="section-mix">
      <div className="section-mix__items">
        {data &&
          data.map((item, i) => (
            <Card key={i} image={item.thumbnailM || item.thumbnail} isOnlyShowPlay={true}>
              <div className="mix-content">
                <h3 className="title">
                  <span>{item.artistsNames}</span>
                </h3>
                <div className="thumb">
                  {item.song?.items.slice(0, 3).map((songItem, i) => (
                    <div className="thumb-item" key={i}>
                      <figure>
                        <LazyLoadImage
                          effect="blur"
                          height="100%"
                          with="100%"
                          src={songItem.thumbnail || songItem.thumbnailM}
                          alt=""
                        />
                      </figure>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default MixSection;
