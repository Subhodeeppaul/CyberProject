import React from 'react';
import { Link } from 'react-router-dom';

function MadhyaPradesh() {
  return (
    <div>
      <h2>Madhya Pradesh</h2>
      <div className="submenu">
        <ul>
          <li><Link to="/home">Jyoti Cineplex</Link></li>
          <li><Link to="/home">Platinum Plaza</Link></li>
          <li><Link to="/home">Raj Multiplex</Link></li>
          <li><Link to="/home">Cinepolis</Link></li>
          {/* Add more cinema options */}
        </ul>
      </div>
    </div>
  );
}

export default MadhyaPradesh;