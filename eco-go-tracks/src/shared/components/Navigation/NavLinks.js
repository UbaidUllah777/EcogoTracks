// *** LIBRARIES ***
import React from "react";
import { NavLink } from "react-router-dom";

//  **** LOCAL FILES/COMPONENTS ***

//  *** STYLING ***
import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about-us">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/u1/user">User</NavLink>
      </li>
      <li>
        <NavLink to="login">Login</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
