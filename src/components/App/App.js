import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import routes from '../../routes';
import HomePage from '../pages/HomePage/HomePage';
import Movies from '../pages/Movies';

const App = () => (
  <div>
    <Navigation />
    <Switch>
      <Route path={routes.HOME} exect component={HomePage} />
      <Route path={routes.MOVIES} component={Movies} />
      <Redirect to={routes.HOME} />
    </Switch>
  </div>
);

export default App;
