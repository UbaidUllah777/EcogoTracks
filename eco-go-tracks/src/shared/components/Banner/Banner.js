import React from "react";
import PropTypes from "prop-types";
import "./Banner.css";

const Banner = ({ pageInfo, heading, description }) => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>{heading}</h1>
        <p>{description}</p>
        <a href="#explore" className="explore-button">
          Explore Now
        </a>
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
