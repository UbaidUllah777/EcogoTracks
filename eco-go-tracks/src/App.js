// *** LIBRARIES ***
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

//  **** LOCAL FILES/COMPONENTS ***
//>>Pages
import Users from "./user/pages/Users";
import Home from "./home/pages/Home";
import AboutUs from "./about-us/pages/AboutUS";
import ContactUS from "./contact-us/pages/ContactUs";
import CalculatorPage from "./calculator/pages/CalculatorPage";
import UserTrips from "./trips/pages/UserTrps";

//>>COMPONENTS

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Footer from "./shared/components/Footer/Footer";

//  *** STYLING ***

import "./App.css";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about-us" exact>
            <AboutUs />
          </Route>
          <Route path="/users" exact>
            <Users />
          </Route>
          <Route path="/:userId/trips" exact>
            <UserTrips />
          </Route>
          <Route path="/calculator" exact>
            <CalculatorPage />
          </Route>
          <Route path="/contact-us" exact>
            <ContactUS />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
