import React from "react";

import Button from "../UIElements/Button";

import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year
  return (
    <div className="container-fluid FullFooter">
      <div className="row center footerLinksRow">
        <div className="col-md-4">
          <h3 className="footerMenuHeading">Usefull Links</h3>
          <ul className="footerList">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Calculator</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h3 className="footerMenuHeading">Calculate Your Footprints</h3>
          <p style={{ fontSize: "0.8rem", paddingBottom: "10px" }}>
            Incididunt sit laborum mollit velit consectetur dolore.Irure et
            ipsum culpa exercitation exercitation aute.
          </p>{" "}
          <span>
            {" "}
            <Button
              to="/about-us"
              className="primary-button "
              buttonText="Calculate Now"
              style={{ marginBottom: "30px" }}
            />
          </span>
        </div>
        <div className="col-md-4">
          <h3 className="footerMenuHeading">We Are Social</h3>
        </div>
      </div>
      <div className="row copyRightRow">
        <div className="col-12 text-center">
          &copy; {currentYear} All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
