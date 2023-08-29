import React from 'react';
import { Link } from 'react-router-dom';

import './city.css';


function Kolkata() {
  return (
    <div
      className="city-container"
     
    >
      <h2 className="city-title">Kolkata</h2>
      <div className="submenu">
        <ul>
          <li><Link to="/home">INOX South City</Link></li>
          <li><Link to="/home">INOX Citi center 2</Link></li>
          <li><Link to="/home">Navina Cinema</Link></li>
          <li><Link to="/home">PVR Manisquare</Link></li>
          <li><Link to="/home">PVR Dimond Plaza</Link></li>
          <li><Link to="/home">Nandan</Link></li>
          <li><Link to="/home">INOX Star Mall</Link></li>
          {/* Add more cinema options */}
        </ul>
      </div>
    </div>
  );
}

export default Kolkata;
