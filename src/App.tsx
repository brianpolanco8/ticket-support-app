import { Routes } from "./utils";
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  SignUp,
  SignIn,
  Home,
  ChangeLog,
  CreateTicket,
  MyTickets,
} from "pages";

const App = () => {
  const [user, setUser] = useState<firebase.firestore.DocumentData>();

  return (
    <Router>
      <Switch>
        <Route
          // exact
          path={Routes.Home}
          render={(props) => <Home user={user} setUser={setUser} />}
        />
        <Route
          exact
          path={Routes.SignIn}
          render={(props) => (
            <SignIn user={user} setUser={setUser} {...props} />
          )}
        />
        <Route
          exact
          path={Routes.SignUp}
          render={(props) => (
            <SignUp user={user} setUser={setUser} {...props} />
          )}
        />
        <Route
          exact
          path={Routes.ChangeLog}
          render={(props) => (
            <ChangeLog user={user} setUser={setUser} {...props} />
          )}
        />
        <Route
          exact
          path={Routes.CreateTicket}
          render={(props) => (
            <CreateTicket user={user} setUser={setUser} {...props} />
          )}
        />
        <Route
          exact
          path={Routes.MyTickets}
          render={(props) => (
            <MyTickets user={user} setUser={setUser} {...props} />
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
