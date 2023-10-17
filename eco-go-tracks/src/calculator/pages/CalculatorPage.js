//importing libraries
import React, { Fragment } from "react";

//importing local files and components

import Calculator from "../../shared/components/Calculator/Calculator";
import CalculationOptions from "../../shared/components/Calculator/CalculationOptions";

import Banner from "../../shared/components/Banner/Banner";
import aboutUsBannerImage from "../../images/aboutUsbanner.jpg";

const CalculatorPage = () => {
  const pageInfo = "Home/Calculator"; // Page information for AboutUs page
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

      <Calculator CalculationOptions={CalculationOptions} />
    </Fragment>
  );
};

export default CalculatorPage;
