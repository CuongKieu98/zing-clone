import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

const Button = (props) => {
  const { className, onClick, children, style ,disabled = false} = props;
  return (
    <button
      className={"btn " + className}
      onClick={onClick ? onClick : null}
      tabIndex={0}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  onClick: PropTypes.func,
};
export default Button;
