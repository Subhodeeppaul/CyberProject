// Delhi.js
import React from 'react';
import { Link } from 'react-router-dom';
import './city.css';
function Delhi() {
  return (
    <div>
      <h2>Delhi</h2>
      <div className="submenu">
        <ul>
          <li><Link to="/home">Delite Cinema</Link></li>
          <li><Link to="/home">PVR Naraina</Link></li>
          <li><Link to="/home">Cinepolis Cinema</Link></li>
          <li><Link to="/home">Amba Cinema</Link></li>
          <li><Link to="/home">PVR Plaza-CP</Link></li>
          {/* Add more cinema options */}
        </ul>
      </div>
    </div>
  );
}

export default Delhi;
