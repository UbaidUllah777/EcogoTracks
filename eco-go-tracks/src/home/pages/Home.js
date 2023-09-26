// Home.js
import React from "react";
import Banner from "../../shared/components/Banner/Banner";
import WhoWeAre from "../components/WhoWeAre";
import FeaturedBlogs from "../components/FeaturedBlogs";
import GlobalFacts from "../components/GlobalFacts";
import homeBannerImage from "../../images/HomeBanner.jpg";

const Home = () => {
  const pageInfo = "Home";
  const heading = "Your Journey to a Greener Future";
  const description =
    "Discover Sustainable Transportation Solutions and Reduce Your Carbon Footprint";

  return (
    <React.Fragment>
      <Banner
        pageInfo={pageInfo}
        heading={heading}
        description={description}
        backgroundImage={homeBannerImage} // Pass the background image URL
      />
      <WhoWeAre />
      <FeaturedBlogs />
      <GlobalFacts />
    </React.Fragment>
  );
};

export default Home;
