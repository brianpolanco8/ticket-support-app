import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom' 
import { SignUp, SignIn, Home } from 'pages';
import {UserType} from 'utils/types/UserType'

const App = () => {
  const [user, setUser] = useState<firebase.firestore.DocumentData>();

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={props => <Home user={user} setUser={setUser}/>} />
        <Route exact path="/login"  render={props =>  <SignIn  user={user} setUser={setUser} {...props}/> } />
        <Route exact path="/signup"  render={props =>  <SignUp  user={user} setUser={setUser} {...props}/> } />
      </Switch>
    </Router>
  );
}

export default App;
