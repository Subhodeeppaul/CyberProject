import React from 'react';
//import { Link } from 'react-router-dom';
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
          <a href="/login" target="_blank" rel="noopener noreferrer">
            <button className="landingbutton">Login</button>
          </a>
          <a href="/register" target="_blank" rel="noopener noreferrer">
            <button className="landingbutton outline">Sign up</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
