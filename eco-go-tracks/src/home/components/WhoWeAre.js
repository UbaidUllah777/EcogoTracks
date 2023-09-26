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
            <h1 className="globalHeading1">
              Green Commuting for a Sustainable Tomorrow
            </h1>
            <p className="whoWeAreDesc">
              Embrace eco-friendly transportation options to reduce your carbon
              footprint. From{" "}
              <span className="secondary-color boldText">
                {" "}
                electric vehicles
              </span>{" "}
              to cycling initiatives, explore sustainable choices that
              positively impact our environment. Together, we can pave the way
              towards cleaner and greener cities.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div class="row">
            <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img
                src="home-gallery1.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="electric car recharging"
              />

              <img
                src="home-gallery2.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="mono electric tram on the tracks"
              />
            </div>

            <div class="col-lg-4 mb-4 mb-lg-0">
              <img
                src="home-gallery3.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="avoid plastic usage sign"
              />

              <img
                src="home-gallery4.jpg"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Kid using electric bike"
              />
            </div>

            <div class="col-lg-4 mb-4 mb-lg-0">
              <img
                src="home-gallery5.jpg"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="carbon emissions from a factory"
              />

              <img
                src="home-gallery6.jpg"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Yosemite National Park"
              />
            </div>
          </div>
        </div>
      </div>
      <HR />
      <div className="container center ">
        <div className="row">
          <div className="col-md-6">
            <h1 className="globalHeading2">
              Calculate Your Ecological Footprint
            </h1>
            <p>
              Curious about your lifestyle's impact? Calculate your Ecological
              Footprint© to gain insights into consumption patterns and their
              effect on the planet. Discover ways to reduce your footprint for a
              sustainable future
            </p>
            <Button
              to="/about-us"
              className="secondary-button"
              buttonText="Calculate Now"
            />
          </div>
          <div className="col-md-6">
            <h1 className="globalHeading2">
              Greening Our World: Embracing Nature's Bounty
            </h1>
            <p>
              Immerse yourself in the beauty of greenery and its benefits. From
              urban gardens to reforestation projects, discover how embracing
              nature enhances our lives and nurtures a healthier planet. Let's
              cultivate a world where green spaces flourish.
            </p>
            <Button
              to="/about-us"
              className="secondary-button"
              buttonText="Explore More"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhoWeAre;
