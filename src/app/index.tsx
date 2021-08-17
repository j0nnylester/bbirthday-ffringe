import React from 'react';
import { Switch, Redirect, Route, BrowserRouter as Router } from 'react-router-dom';

import About from '../views/About';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/"><Redirect to="/about" /></Route>
      <Route exact path="/about" component={About} />
      <Route path="*" component={About} />
    </Switch>
  </Router>
);

export default App;
