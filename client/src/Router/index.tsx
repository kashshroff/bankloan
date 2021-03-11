import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute'
import SecretPage from '../Pages/Secret'
import HomePage from '../Pages/Home'

export default function index() {
  return (
    <Router>
      <Switch>
        <Route component={HomePage} path="/" exact />
        <ProtectedRoute component={SecretPage} path="/secret" exact myProp="asd" />
      </Switch>
    </Router>
  );
}
