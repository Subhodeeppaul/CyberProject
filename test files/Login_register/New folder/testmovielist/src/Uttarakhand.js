import React from 'react';
import { Link } from 'react-router-dom';

function Uttarakhand() {
  return (
    <div>
      <h2>Uttarakhand</h2>
      <div className="submenu">
        <ul>
          <li><Link to="/home">Wave Cinemas</Link></li>
          <li><Link to="/home">Carnival Cinemas</Link></li>
          <li><Link to="/home">RR Cinemas</Link></li>
          <li><Link to="/home">Payal Cinemas</Link></li>
          <li><Link to="/home">Prem Cinema</Link></li>
          {/* Add more cinema options */}
        </ul>
      </div>
    </div>
  );
}

export default Uttarakhand;