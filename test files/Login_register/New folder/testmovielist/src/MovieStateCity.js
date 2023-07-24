import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import home from './home.js';

const data = [
  { id: 1, city: 'Kolkata' },
  { id: 2, city: 'Delhi' },
  { id: 3, city: 'Maharashtra' },
  { id: 4, city: 'Tamil Nadu' },
  { id: 5, city: 'Karnataka' },
  { id: 6, city: 'Madhya Pradesh' },
  { id: 7, city: 'Andhra Pradesh' },
  { id: 8, city: 'Uttar Pradesh' },
  { id: 9, city: 'Jammu and Kashmir' },
  { id: 10, city: 'Uttarakhand' },
  { id: 11, city: 'Rajasthan' },
  { id: 12, city: 'Meghalaya' },
  { id: 13, city: 'Manipur' },
  { id: 14, city: 'Jharkhand' },
  { id: 15, city: 'Tripura' },
];

function MovieStateCity() {
  const contentStyles = {
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #2980b9, #8e44ad)',
    fontFamily: 'Arial, sans-serif',
    color: '#fff',
  };

  const bgVideoStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  };

  const containerStyles = {
    padding: '30px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)',
    maxWidth: '400px',
    textAlign: 'center',
  };

  const listItemStyles = {
    listStyle: 'none',
    marginBottom: '10px',
  };

  const linkStyles = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '18px',
    transition: 'color 0.3s ease',
  };

  const handleLinkHover = (event) => {
    event.target.style.color = '#e74c3c';
  };

  return (
    <div style={contentStyles}>
      <video autoPlay muted loop style={bgVideoStyles}>
        <source src={process.env.PUBLIC_URL + '/bg2.mp4'} type="video/mp4" />
      </video>
      <div style={containerStyles}>
        <h1 style={{ marginBottom: '30px' }}>List of States / Cities</h1>
        <ul style={{ padding: 0 }}>
          {data.map((item) => (
            <li key={item.id} style={listItemStyles}>
              <span></span>
              {/* Link to the "home" page when the city is clicked */}
              <Link to="/home" style={linkStyles} onMouseOver={handleLinkHover}>
                {item.city}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Switch>
        {/* Render the home component when the "home" page is accessed */}
        <Route exact path="/home" component={home} />
      </Switch>
    </div>
  );
}

export default MovieStateCity;
