// TamilNadu.js
import React from 'react';
import { Link } from 'react-router-dom';

function TamilNadu() {
  return (
    <div>
      <h2>Tamil Nadu</h2>
      <div className="submenu">
        <ul>
          <li><Link to="/home">Sangam Cinemas</Link></li>
          <li><Link to="/home">EVP Cinemas</Link></li>
          <li><Link to="/home">KG Cinemas</Link></li>
          <li><Link to="/home">Udhayan Theatre</Link></li>
          <li><Link to="/home">Anna Theater</Link></li>
          {/* Add more cinema options */}
        </ul>
      </div>
    </div>
  );
}

export default TamilNadu;
