// 1- *** LIBRARIES ***
import React from "react";
import { Link } from "react-router-dom";

//  2- **** LOCAL FILES/COMPONENTS ***
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import Logo from "../../../../src/images/EcoGoLogo.png";

//  3- *** STYLING ***
import "./MainNavigation.css";
const MainNavigation = (props) => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">
          <img className="Logo" src={Logo} alt="EcoGo Logo" />{" "}
          {/* Add alt prop */}
        </Link>
      </h1>
      <nav className="main-navigation__header-nav">
        <NavLinks />
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
