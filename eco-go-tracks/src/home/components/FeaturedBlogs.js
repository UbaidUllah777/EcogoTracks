import React, { Fragment } from "react";

import Button from "../../shared/components/UIElements/Button";

import "./FeaturedBlogs.css";

const FeaturedBlogs = () => {
  return (
    <Fragment>
      <div className="container-fluid featuredblog">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="sub-heading">Featured Blogs</h2>
              <h1 className="main-heading">
                {" "}
                Cycling Towards Sustainability: Pedal-Powered Adventures
              </h1>
              <p>
                Embark on a journey through the world of cycling and its
                profound impact on sustainability. From reducing carbon
                emissions to promoting a healthier lifestyle, discover the many
                benefits of choosing a bicycle as a mode of transportation and
                leisure. Join us as we explore scenic routes, cycling safety
                tips, and the joys of embracing a sustainable mode of travel
                that also keeps you fit and connected to nature.
              </p>
              <Button
                to="/about-us"
                className="primary-button"
                buttonText="View Full Blog"
              />
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

export default FeaturedBlogs;
