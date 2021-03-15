import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute'
import SecretPage from '../pages/Secret'
import HomePage from '../pages/Home'
import Signup from "../pages/Signup";
import { REGISTER } from "../routes";

export default function index() {
  return (
    <Router>
      <Switch>
        <Route component={HomePage} path="/" exact />
        <Route component={Signup} path={REGISTER} exact />
        <ProtectedRoute component={SecretPage} path="/secret" exact myProp="asd" />
      </Switch>
    </Router>
  );
}
