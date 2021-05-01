import React from "react";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute'
import Dashboard from '../pages/Dashboard'
import HomePage from '../pages/Home'
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import { DASHBOARD, LOGIN, REFER, REGISTER, SELFLOAN } from "../routes";
import { IonApp, IonRouterOutlet } from "@ionic/react"
import { IonReactRouter } from '@ionic/react-router';
import SelfLoan from "../pages/SelfLoan";
import ReferLoan from "../pages/ReferLoan";

export default function index() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Switch>
            <Route component={HomePage} path="/" exact />
            <Route component={Signup} path={REGISTER} exact />
            <Route component={Login} path={LOGIN} exact />
            <ProtectedRoute component={Dashboard} path={DASHBOARD} exact />
            <ProtectedRoute component={SelfLoan} path={SELFLOAN} exact />
            <ProtectedRoute component={ReferLoan} path={REFER} exact />
          </Switch>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}
