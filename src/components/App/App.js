import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

import HomePage from '../pages/HomePage';
// import Gallery from '../Gallery/Gallery';
// import Modal from '../Modal/Modal';
// import SearchForm from '../SearchForm/SearchForm';
// import * as fetchApi from '../../services/fetchApi';
// import styles from './App-module.css';

const App = () => (
  <div>
    <Navigation />
    <Switch>
      <Route exact path="/" component={HomePage} />
      {/* <Route path="/movies" component={MoviesPage} />
      <Route path="/contact" component={MovieDetailsPage} /> */}
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
