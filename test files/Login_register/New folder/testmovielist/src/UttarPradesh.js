import React from 'react';
import { Link } from 'react-router-dom';

function UttarPradesh() {
  return (
    <div>
      <h2>Uttar Pradesh</h2>
      <div className="submenu">
        <ul>
          <li><Link to="/home">Cinepolis</Link></li>
          <li><Link to="/home">BLW Cinema Club</Link></li>
          <li><Link to="/home">Jagat Cinema</Link></li>
          <li><Link to="/home">Carnival Cinema</Link></li>
          <li><Link to="/home">SRS Cinemas</Link></li>
          {/* Add more cinema options */}
        </ul>
      </div>
    </div>
  );
}

export default UttarPradesh;