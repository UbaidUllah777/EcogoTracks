// *** LIBRARIES ***
import React, { useState, useCallback } from "react";
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
import AddTrip from "./trips/pages/NewTrip";
import UpdateTrip from "./trips/pages/UpdateTrip";
import Auth from "./user/pages/Auth";

//Local COMPONENTS
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Footer from "./shared/components/Footer/Footer";
import { AuthContext } from "./shared/context/auth-context";

//  *** STYLING ***
import "./App.css";

// Component Function
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid) => {
    setIsLoggedIn(true);
    setUserId(uid);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  let routes;
  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about-us" exact>
          <AboutUs />
        </Route>
        <Route path="/calculator" exact>
          <CalculatorPage />
        </Route>
        <Route path="/contact-us" exact>
          <ContactUS />
        </Route>
        <Route path="/users" exact>
          <Users />
        </Route>
        <Route path="/trips/new" exact>
          <AddTrip />
        </Route>
        <Route path="/:userId/trips/" exact>
          <UserTrips />
        </Route>
        <Route path="/updateTrip/:tripId" exact>
          <UpdateTrip />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about-us" exact>
          <AboutUs />
        </Route>
        <Route path="/calculator" exact>
          <CalculatorPage />
        </Route>
        <Route path="/contact-us" exact>
          <ContactUS />
        </Route>
        <Route path="/auth" exact>
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
