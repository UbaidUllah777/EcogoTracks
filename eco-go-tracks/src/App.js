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
<<<<<<< HEAD
    <Router>
      <Route path="/" exact>
        <Users />
      </Route>
      <Route path="/places">
        <Places />
      </Route>
    </Router>
=======
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Sanga chal d kwana tenga ka shafiqa</p>
      </header>
    </div>
>>>>>>> c350f89fad6ebceb26aefaee9ce7f6b4c3b08ebf
  );
}

export default App;
