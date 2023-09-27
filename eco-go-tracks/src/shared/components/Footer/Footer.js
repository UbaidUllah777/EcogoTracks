import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Button from "../UIElements/Button";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container-fluid FullFooter">
      <div className="row center footerLinksRow">
        <div className="col-md-4">
          <h3 className="footerMenuHeading">Useful Links</h3>
          <ul className="footerList">
            <li>
              <Link to="/" className="footerLink">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="footerLink">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="footerLink">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/calculator" className="footerLink">
                Calculator
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <h3 className="footerMenuHeading">Calculate Your Footprints</h3>
          <p style={{ fontSize: "0.8rem", paddingBottom: "10px" }}>
            Incididunt sit laborum mollit velit consectetur dolore. Irure et
            ipsum culpa exercitation exercitation aute.
          </p>

          <Button
            to="/calculator"
            className="primary-button"
            buttonText="Calculate Now"
          />
        </div>
        <div className="col-md-4">
          <h3 className="footerMenuHeading">We Are Social</h3>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
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
