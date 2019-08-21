import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

console.log(App)
ReactDOM.render(
    <Router>
        <Route path='/' component={App}/>
    </Router>, document.getElementById('root'));