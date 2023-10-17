//importing libraries
import React, { Fragment } from "react";

//importing local files and components
import Form from "../components/Form";
import Banner from "../../shared/components/Banner/Banner";
import aboutUsBannerImage from "../../images/aboutUsbanner.jpg";

const ContactUS = () => {
  const pageInfo = "Home/Contact Us"; // Page information for AboutUs page
  const heading = "Contact Us"; // Heading for the banner
  const description =
    "Connect with us easily through our contact page. Reach out, ask questions, or share feedback. We're here to listen and respond "; // Description for the banner

  return (
    <Fragment>
      <Banner
        pageInfo={pageInfo}
        heading={heading}
        description={description}
        backgroundImage={aboutUsBannerImage}
      />

      <div className="container  BGgray">
        <Form />
      </div>
    </Fragment>
  );
};

export default ContactUS;
