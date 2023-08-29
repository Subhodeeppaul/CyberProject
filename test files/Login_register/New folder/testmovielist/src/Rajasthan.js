import React from 'react';
import { Link } from 'react-router-dom';

function Rajasthan() {
  return (
    <div>
      <h2>Rajasthan</h2>
      <div className="submenu">
        <ul>
          <li><Link to="/home">First Cinema</Link></li>
          <li><Link to="/home">Golcha Cinema</Link></li>
          <li><Link to="/home">Cinestar Multiplex</Link></li>
          <li><Link to="/home">Miraj Cinema</Link></li>
          <li><Link to="/home">INOX City Plaza</Link></li>
          {/* Add more cinema options */}
        </ul>
      </div>
    </div>
  );
}

export default Rajasthan;