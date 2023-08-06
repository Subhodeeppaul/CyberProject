import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="main">
      <div className="intro-text">
        <div>
          <h1 className="title">Welcome</h1>
          <p className="subtitle">To the world of movies</p>
        </div>
        <div className="buttonContainer">
          <Link to="/login">
            <button className="landingbutton">Login</button>
          </Link>
          <Link to="/register">
            <button className="landingbutton outline">Sign up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
