//importing libraries
import React, { Fragment } from "react";

//importing local files and components
import Banner from "../../shared/components/Banner/Banner";
import aboutUsBannerImage from "../../images/aboutUsbanner.jpg";
import AboutEcoGo from "../components/AboutEcoGo";

//about us page component
const AboutUs = () => {
  const pageInfo = "Home/About Us"; // Page information for AboutUs page
  const heading = "Our Commitment to a Greener Future"; // Heading for the banner
  const description =
    "Learn about our dedication to providing sustainable transportation solutions that reduce the carbon footprint and contribute to a healthier planet."; // Description for the banner

  return (
    <Fragment>
      <Banner
        pageInfo={pageInfo}
        heading={heading}
        description={description}
        backgroundImage={aboutUsBannerImage}
      />
      <AboutEcoGo />
    </Fragment>
  );
};

export default AboutUs;
