import React from 'react';
import { Link } from 'react-router-dom';

function AndhraPradesh() {
  return (
    <div>
      <h2>Andhra Pradesh</h2>
      <div className="submenu">
        <ul>
          <li><Link to="/home">VARUN INOX</Link></li>
          <li><Link to="/home">Mohini Cinemas</Link></li>
          <li><Link to="/home">Capital Cinemas</Link></li>
          <li><Link to="/home">Gowri Theatre</Link></li>
          <li><Link to="/home">Cinema Hall</Link></li>
          {/* Add more cinema options */}
        </ul>
      </div>
    </div>
  );
}

export default AndhraPradesh;