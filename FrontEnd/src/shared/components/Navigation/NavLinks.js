// *** LIBRARIES ***
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

//  **** LOCAL FILES/COMPONENTS ***
import { AuthContext } from "../../context/auth-context";
import Button from "../FormElements/Button";
//  *** STYLING ***
import "./NavLinks.css";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

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
        <NavLink to="/calculator">Calculator</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us">Contact Us</NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/trips/new">Add Trip</NavLink>
        </li>
      )}

      {auth.isLoggedIn && (
        <li>
          <NavLink to={`/${auth.userId}/trips`}>My Trips</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">User Login</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <Button onClick={auth.logout}>Logout</Button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
