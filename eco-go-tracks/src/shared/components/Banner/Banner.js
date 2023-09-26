import React from "react";
import PropTypes from "prop-types";
import Button from "../UIElements/Button";
import "./Banner.css";

const Banner = ({ pageInfo, heading, description }) => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>{heading}</h1>
        <p>{description}</p>
        <Button
          to="/about-us"
          className="primary-button "
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
};

export default Banner;
