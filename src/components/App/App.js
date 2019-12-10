import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import routes from '../../routes';
import HomePage from '../pages/HomePage/HomePage';
import MoviesPage from '../pages/Movies/MoviesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';

const App = () => (
  <div>
    <Navigation />
    <Switch>
      <Route path={routes.HOME} exect component={HomePage} />
      <Route path={routes.MOVIE_DETAILS} component={MovieDetailsPage} />
      <Route path={routes.MOVIES} component={MoviesPage} />
      <Redirect to={routes.HOME} />
    </Switch>
  </div>
);

export default App;
