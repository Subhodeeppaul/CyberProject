import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './FirstPage.css';

import LandingPage from './screens/LandingPage/LandingPage';

function FirstPage() {
  return (
    <>
      <div className="container">
        <a href="/LandingPage" target="_blank" rel="noopener noreferrer">
          <span>Admin</span>
        </a>
        <a href="/LandingPage" target="_blank" rel="noopener noreferrer">
          <span>User</span>
        </a>
      </div>
      <Switch>
        <Route exact path="/LandingPage" component={LandingPage} />
      </Switch>
    </>
  );
}

export default FirstPage;
