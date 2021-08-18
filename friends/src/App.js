import React from 'react'
import { Router, Route, Link, Switch } from 'react-router-dom'

import './App.css';
import FriendsList from './components/FriendsList';
import Login from './components/Login';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
    <div className="App">
      <h1>Friends App</h1>
      <Link to='/login'>Login</Link>
      <Link to='/logout'>Logout</Link>
      {localStorage.getItem('token') && <div>
        <Link to='/friends'>Friends</Link>
        </div>}
    </div>
    
    <Switch>
      <PrivateRoute exact path='/friends' component={FriendsList} />
      <PrivateRoute path='/logout' component={Logout} />
      <Route path='/login' component={Login} />
      <Route path='/' component={Login} />
    </Switch>
    </Router>
  );
}

export default App;
