// importing libraries
import React from "react";

//importing local files and components
import Banner from "../../shared/components/Banner/Banner";
import WhoWeAre from "../components/WhoWeAre";
import FeaturedBlogs from "../components/FeaturedBlogs";
import GlobalFacts from "../components/GlobalFacts";
import homeBannerImage from "../../images/HomeBanner.jpg";
import Calculator from "../../shared/components/Calculator/Calculator";
import CalculationOptions from "../../shared/components/Calculator/CalculationOptions";

//component function
const Home = () => {
  const pageInfo = "Home";
  const heading = "Your Journey to a Greener Future";
  const description =
    "Discover Sustainable Transportation Solutions and Reduce Your Carbon Footprint";
  // retun statements in jsx for the home component

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
      <Calculator CalculationOptions={CalculationOptions} />
    </React.Fragment>
  );
};

export default Home;
