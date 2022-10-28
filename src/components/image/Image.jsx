import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PropTypes from "prop-types";

const Image = (props) => {
  const { src, className,width="100%",height="100%" } = props;
  const classCustom = className ? className : "";
  return (
    <figure className={classCustom}>
      <LazyLoadImage
        effect="blur"
        height={height}
        width={width}
        src={src}
        alt=""
      />
    </figure>
  );
};
Image.propTypes = {
    src: PropTypes.string.isRequired,
  };
export default Image;
