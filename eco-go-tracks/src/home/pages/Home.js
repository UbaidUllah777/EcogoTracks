import React from "react";
import Banner from "../../shared/components/Banner/Banner";

import WhoWeAre from "../components/WhoWeAre";
import FeaturedBlogs from "../components/FeaturedBlogs";

const Home = () => {
  const pageInfo = "Home"; // Page information for Home page
  const heading = "Your Journey to a Greener Future"; // Heading for the banner
  const description =
    "Discover Sustainable Transportation Solutions and Reduce Your Carbon Footprint"; // Description for the banner

  return (
    <React.Fragment>
      <Banner pageInfo={pageInfo} heading={heading} description={description} />
      <WhoWeAre />
      <FeaturedBlogs />
    </React.Fragment>
  );
};

export default Home;
