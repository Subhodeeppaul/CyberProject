import React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';


import './hall.css';

function Hall() {
  return (
    <Router>
      <div className="background">
        <div className="menu">
          <ul>
            <li><Link to="/kolkata">Kolkata</Link></li>
            <li><Link to="/delhi">Delhi</Link></li>
            <li><Link to="/tamilnadu">Tamil Nadu</Link></li>
            <li><Link to="/karnataka">Karnataka</Link></li>
            <li><Link to="/madhyapradesh">Madhya Pradesh</Link></li>
            <li><Link to="/andhrapradesh">Andhra Pradesh</Link></li>
            <li><Link to="/uttarpradesh">Uttar Pradesh</Link></li>
            <li><Link to="/jammuandkashmir">Jammu and Kashmir</Link></li>
            <li><Link to="/uttarakhand">Uttarakhand</Link></li>
            <li><Link to="/rajasthan">Rajasthan</Link></li>
            <li><Link to="/meghalaya">Meghalaya</Link></li>
            <li><Link to="/manipur">Manipur</Link></li>
            <li><Link to="/maharashtra">Maharashtra</Link></li>
            <li><Link to="/jharkhand">Jharkhand</Link></li>
            <li><Link to="/tripura">Tripura</Link></li>
          </ul>
        </div>

        <div className="an">
          Select Your City
        </div>
      </div>
    </Router>
  );
}

export default Hall;
