import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
        <div className="neon-text">Loading........</div>
        
      <div className="container">
        <div className="cube">
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face right"></div>
          <div className="face left"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>    
        </div>
      <div className="ambient-lighting"></div>
    </div>
    
  );
};

export default LoadingScreen;
