import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';
import LoginFormik from './components/LoginFormik';
import AddFriend from './components/AddFriend';
import EditFriend from './components/EditFriend';



function App(props) {

  const [friends, setFriends] = useState("");

  return (
    <Router>
      <div className="App">
        <nav className="navigation">
          <NavLink to="/" className="links">Login</NavLink>
          <NavLink to="/protected" className="links">Friends</NavLink>
          <NavLink to="/addfriends" className="links">Add Friends</NavLink>
        </nav>
        <div>
          <Route path="/" render={(props) => {
            const token = localStorage.getItem('token');
            if (token) {
              return <Redirect to='/protected' />;
            }
            return <LoginFormik {...props} />;
          }}
          />

          <PrivateRoute exact path="/protected" component={FriendList} friends={friends} setFriends={setFriends}  />
          <PrivateRoute exact path="/addfriends" component={AddFriend} friends={friends} setFriends={setFriends} />
          <PrivateRoute exact path="/editfriends" component={EditFriend} friends={friends} setFriends={setFriends} />
        </div>
      </div>
    </Router>
  );
}

export default App;
