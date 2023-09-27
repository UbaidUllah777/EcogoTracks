// 1- *** LIBRARIES ***
import React, { useState } from "react";
import { Link } from "react-router-dom";

//  2- **** LOCAL FILES/COMPONENTS ***
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

import Logo from "../../../../src/images/EcoGoLogo.png";

//  3- *** STYLING ***
import "./MainNavigation.css";
const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const openDrawer = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
      {drawerIsOpen && (
        <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      )}
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
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
    </React.Fragment>
  );
};

export default MainNavigation;
