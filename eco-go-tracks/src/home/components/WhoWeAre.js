import React from "react";

import Button from "../../shared/components/UIElements/Button";
import HR from "../../shared/components/HR/HR";

import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <React.Fragment>
      <div className="container ">
        <div className="row ">
          <div className="col-12 center">
            <h1 className="globalHeading1">Measure what you treasure</h1>
            <p className="whoWeAreDesc">
              Humans use as much ecological resources as if we lived on 1.75
              Earths <span className="secondary-color">Source</span>. The
              Ecological Footprint© is the only metric that compares the
              resource demand of individuals, governments, and businesses
              against Earth's capacity for biological regeneration.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <img className="home-page-image" src="" />
            <img className="home-page-image" src="" />
            <img className="home-page-image" src="" />
          </div>
        </div>
      </div>
      <HR />
      <div className="container center ">
        <div className="row">
          <div className="col-md-6">
            <h1 className="globalHeading2">What is your impact?</h1>
            <p>
              Calculate your EcologicalFootprint© and personalOvershoot Day.
            </p>
            <Button
              to="/about-us"
              className="secondary-button"
              buttonText="Calculate Now"
            />
          </div>
          <div className="col-md-6">
            <h1 className="globalHeading2">Passionate about data?</h1>
            <p>
              Check out our Ecological Footprint© Explorer open data platform.
            </p>
            <Button
              to="/about-us"
              className="secondary-button"
              buttonText="View More"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhoWeAre;
