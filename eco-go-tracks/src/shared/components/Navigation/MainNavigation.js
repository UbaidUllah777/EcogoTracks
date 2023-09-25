// 1- *** LIBRARIES ***
import React from "react";
import { Link } from "react-router-dom";

//  2- **** LOCAL FILES/COMPONENTS ***
import MainHeader from "./MainHeader";

//  3- *** STYLING ***
import "./MainNavigation.css";

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-button">
        <span /> <span /> <span />
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">ECO go Tracks</Link>
      </h1>
      <nav>...</nav>
    </MainHeader>
  );
};

export default MainNavigation;
