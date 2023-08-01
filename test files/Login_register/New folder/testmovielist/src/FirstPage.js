import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './FirstPage.css';
import MovieStateCity from './MovieStateCity';

function FirstPage() {
  function apple() {
    alert('function called');
  }

  return (
    <>
      <div className="container">
        
        <Link to="/MovieStateCity">
          <span>Admin</span>
        </Link>
        
        <Link to="/MovieStateCity">
          <span>User</span>
        </Link>
      </div>
      <Switch>
        <Route exact path="/MovieStateCity" component={MovieStateCity} />
      </Switch>
    </>
  );
}

export default FirstPage;
