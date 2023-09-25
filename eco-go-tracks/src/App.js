// *** LIBRARIES ***
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

//  **** LOCAL FILES/COMPONENTS ***
import Users from "./user/pages/Users";
import Places from "./places/pages/Places";
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
            <Users />
          </Route>
          <Route path="/places">
            <Places />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
