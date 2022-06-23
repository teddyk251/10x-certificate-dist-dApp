import React from 'react';
import LoginForm from './LoginForm';
import { Link } from "react-router-dom";

function HomePage() {

  
  return (
      <div className="App">
          <LoginForm  />
          <Link to="/signup"> Sign Up </Link>
        
      </div>
  );
}

export default HomePage;
