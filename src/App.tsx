import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignUp, SignIn, Home, ChangeLog, CreateTicket } from "pages";
import { Routes } from "./utils";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={Routes.Home} component={Home} />
        <Route exact path={Routes.ChangeLog} component={ChangeLog} />
        <Route exact path={Routes.SignIn} component={SignIn} />
        <Route exact path={Routes.SignUp} component={SignUp} />
        <Route exact path={Routes.CreateTicket} component={CreateTicket} />
      </Switch>
    </Router>
  );
};

export default App;
