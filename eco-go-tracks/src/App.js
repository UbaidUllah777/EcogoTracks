// *** LIBRARIES ***
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//  **** LOCAL FILES/COMPONENTS ***
import Users from "./user/pages/Users";
import Places from "./places/pages/Places";

//  *** STYLING ***
// importing the "App.css"
import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Users />
      </Route>
      <Route path="/places">
        <Places />
      </Route>
    </Router>
  );
}

export default App;
