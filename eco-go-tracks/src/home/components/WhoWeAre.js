import React from "react";

import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <React.Fragment>
      <div className="container ">
        <div className="row ">
          <div className="col-12 center">
            <h1 className="globalHeading1">Measure what you treasure</h1>
            <p className="">
              Humans use as much ecological resources as if we lived on 1.75
              Earths <span className="secondary-color">Source</span>. The
              Ecological Footprint© is the only metric that compares the
              resource demand of individuals, governments, and businesses
              against Earth's capacity for biological regeneration.
            </p>
          </div>
        </div>
      </div>

      <div className="container center ">
        <div className="row">
          <div className="col-md-6">
            <h1 className="globalHeading2">What is your impact?</h1>
            <p>
              Calculate your EcologicalFootprint© and personalOvershoot Day.
            </p>
          </div>
          <div className="col-md-6">
            <h1 className="globalHeading2">Passionate about data?</h1>
            <p>
              Check out our Ecological Footprint© Explorer open data platform.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhoWeAre;
