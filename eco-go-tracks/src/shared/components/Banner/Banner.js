import React from "react";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Banner.css";

const Banner = ({ pageInfo, heading, description }) => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>{heading}</h1>
        <p>{description}</p>
        <Link to="/about-us" className="explore-button">
          Explore Now
        </Link>
        <div className="page-info">{pageInfo}</div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  pageInfo: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Banner;
