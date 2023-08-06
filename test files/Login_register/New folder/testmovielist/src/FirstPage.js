import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './FirstPage.css';
import MovieStateCity from './MovieStateCity';
import LandingPage from './screens/LandingPage/LandingPage';

function FirstPage() {
  function apple() {
    alert('function called');
  }

  return (
    <>
      <div className="container">
        
        <Link to="/LandingPage">
          <span>Admin</span>
        </Link>
        
        <Link to="/LandingPage">
          <span>User</span>
        </Link>
      </div>
      <Switch>
        <Route exact path="/LandingPage" component={LandingPage} />
      </Switch>
    </>
  );
}

export default FirstPage;
