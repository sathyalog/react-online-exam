import React from 'react';
//import logo from './logo.svg';
import 'bootstrap/less/bootstrap.less'
import './App.css';
import Header from './header';
import Dashboard from './dashboard';
//import { Router, Route, Link, browserHistory } from 'react-router';

var App = React.createClass({
  render() {
    return (
      <div>
          <Header/>
          <Dashboard/>
      </div>
    );
  }
})

export default App;
