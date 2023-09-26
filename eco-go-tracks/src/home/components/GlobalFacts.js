import React, { Fragment } from "react";

import "./GlobalFacts.css";

const GlobalFacts = () => {
  return (
    <Fragment>
      <div className="container-fluid featuredblog">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="sub-heading">Global Stats</h2>
              <h1 className="main-heading">
                {" "}
                Current Scenario of Carbon Footprints
              </h1>
              <p>
                This year, Earth Overshoot Day falls on August 2nd. That’s the
                consequence of humanity demanding 70% more than Earth’s
                ecosystems are able to regenerate. Food makes up a large part of
                our Ecological Footprint – feeding humanity currently takes just
                about 50% of Earth’s biocapacity. Food is essential. With a
                growing human population, and increasing...
              </p>
            </div>
            <div className="col-md-4">
              <img
                className="blog-image"
                src="home-blog-image.jpg"
                alt="blog-image"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default GlobalFacts;
