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

//>>COMPONENTS
import MainNavigation from "./shared/components/Navigation/MainNavigation";

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
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
