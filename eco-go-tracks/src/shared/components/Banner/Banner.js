// Banner.js
import React from "react";
import PropTypes from "prop-types";
import Button from "../UIElements/Button";
import "./Banner.css";

const Banner = ({ pageInfo, heading, description, backgroundImage }) => {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className="banner" style={bannerStyle}>
      <div className="banner-content">
        <h1>{heading}</h1>
        <p>{description}</p>
        <Button
          to="/about-us"
          className="primary-button"
          buttonText="Explore Now"
        />
        <div className="page-info">{pageInfo}</div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  pageInfo: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired, // New prop for background image URL
};

export default Banner;
