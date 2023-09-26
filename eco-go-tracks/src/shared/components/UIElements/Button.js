import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./Button.css";

const Button = ({ to, className, buttonText }) => {
  return (
    <Link to={to} className={className}>
      {buttonText}
    </Link>
  );
};

Button.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
};

export default Button;
