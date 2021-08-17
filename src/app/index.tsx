import React, { Fragment } from 'react';
import { Switch, Redirect, Route, BrowserRouter as Router } from 'react-router-dom';

import About from '../views/About';

import Header from '../components/Header';

const App = () => (
  <Fragment>
    <Header />
    <Router>
      <Switch>
        <Route exact path="/"><Redirect to="/about" /></Route>
        <Route exact path="/about" component={About} />
        <Route path="*" component={About} />
      </Switch>
    </Router>
  </Fragment>
);

export default App;
