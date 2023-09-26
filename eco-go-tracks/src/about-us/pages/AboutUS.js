import React from "react";
import Banner from "../../shared/components/Banner/Banner";

import aboutUsBannerImage from "../../images/HomeBanner.jpg";

const AboutUs = () => {
  const pageInfo = "Home/About Us"; // Page information for AboutUs page
  const heading = "Our Commitment to a Greener Future"; // Heading for the banner
  const description =
    "Learn about our dedication to providing sustainable transportation solutions that reduce the carbon footprint and contribute to a healthier planet."; // Description for the banner

  return (
    <Banner
      pageInfo={pageInfo}
      heading={heading}
      description={description}
      backgroundImage={aboutUsBannerImage}
    />
  );
};

export default AboutUs;
