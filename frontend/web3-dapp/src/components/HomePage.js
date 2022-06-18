import { useState } from 'react';
import React from 'react';
import LoginForm from './LoginForm';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function HomePage() {

  const adminUser = {
    email: "admin@admin.com",
    password: "admin"
  }

  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    if (details.email === adminUser.email && details.password === adminUser.password) {
      setUser({
        name: details.name,
        email: details.email,
      })
    }
    else {
      console.log("Invalid credentials");
    }
  }

  const Logout = () => {
    setUser({ name: "", email: "" });
  }

  const SignUp = () => {
    
  }

  return (
      <div className="App">
        {/* {(user.email !== "") ? (
          <div className="welcome">
            <h2>Welcome, <span>{user.name}</span></h2>
            <button onClick={Logout}>Logout</button>
          </div>
        ) : ( */}
          <LoginForm Login={Login} error={error} />
          <Link to="/signup"> Sign Up </Link>
        
      </div>
  );
}

export default HomePage;
