import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/index';
import './index.css';
import './App.css';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import { axiosWithAuth } from './utils/axiosWithAuth';


function App(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = credentials => {
    console.log(credentials)
    dispatch({ type: 'LOGIN_START' });
    return axiosWithAuth()
      .post('http://localhost:5000/api/login', credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.payload });
        props.history.push('/protected');
      })
      .catch(err => console.log(err.response));
  };

  const fetchData = () => {
    dispatch({ type: 'FETCH_START' });
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then((res) => {
        console.log(res.data);
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: 'FETCH_FAILURE', payload: err });
      });
  };

  return (
    <div className="App">
      <nav className="navigation">
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/protected">Friends</NavLink>
        </li>
      </nav>
      <Route path="/login" render={(props) => <Login {...props} login={login} fetchData={fetchData} />} />
      <PrivateRoute exact path="/protected" component={(props) => <FriendsList {...props} state={state} fetchData={fetchData} />} />
    </div>
  );
}

export default App;
