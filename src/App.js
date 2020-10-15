import React from "react";
import {Route, Switch } from "react-router-dom";
// pages for this product
import HomePage from "./pages/Homepage.js";
import LandingPage from "./pages/LandingPage.js";
import ProfilePage from "./pages/ProfilePage.js";
import LoginPage from "./pages/LoginPage.js";
//var hist = createBrowserHistory();

export default function App({props}){ 
  console.log(props);
    return(
    <Switch>
      <Route exact path="/landing-page" component={LandingPage} />
      <Route exact path="/profile-page" component={ProfilePage} />
      <Route exact path="/login-page" component={LoginPage} />
      <Route exact path="/" component={()=><HomePage data={props}/>} />
    </Switch>)
}