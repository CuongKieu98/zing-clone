import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PropTypes from "prop-types";

const Image = (props) => {
  const { src, className } = props;
  const classCustom = className ? className : "";
  return (
    <figure className={classCustom}>
      <LazyLoadImage
        effect="blur"
        height="100%"
        width="100%"
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
