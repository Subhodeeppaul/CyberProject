import React from 'react';
import { Link } from 'react-router-dom';
import './city.css';

function Karnataka() {
  return (
    <div>
      <h2>Karnataka</h2>
      <div className="submenu">
        <ul>
          <li><Link to="/home">HMT Cinemas</Link></li>
          <li><Link to="/home">Galaxy Paradise</Link></li>
          <li><Link to="/home">Cauvery Theatre</Link></li>
          <li><Link to="/home">Akash Cinemas</Link></li>
          <li><Link to="/home">Veeresh Cinemas</Link></li>
          {/* Add more cinema options */}
        </ul>
      </div>
    </div>
  );
}

export default Karnataka;