import { useState } from 'react';
import './App.css';
import React from 'react';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import SignUpForm from './components/SignupForm';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TraineePage from './components/TraineePage';
import StaffPage from './components/StaffPage';

function App() {



  return (
    <Router>
      <div className="App">
        <NavBar />
        {/* <Switch> */}
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/trainee" component={TraineePage} />
        <Route path="/staff" component={StaffPage} />
        {/* </Switch> */}
      </div>
    </Router>
  );
}

export default App;
