import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import T from 'prop-types';
import routes from '../../../routes';
import Reviews from '../../Reviews/Reviews';
import Cast from '../../Cast/Cast';
import styles from './MoviesDetailsPage.module.css';

export default class MovieDetailsPage extends Component {
  static propTypes = {
    match: T.shape().isRequired,
    location: T.shape().isRequired,
    history: T.shape().isRequired,
  };

  state = { movie: null };

  componentDidMount() {
    this.fetchMovieDetails();
  }

  fetchMovieDetails = () => {
    const { match } = this.props;
    const { movieId } = match.params;
    const apiKey = '0a372659e0a2bc92523f188eb5e16ad2';

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`,
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ movie: data });
      });
  };

  onGoBack = () => {
    if (this.props.location.state && this.props.location.state.from) {
      this.props.history.push(this.props.location.state.from);
      return;
    }
    this.props.history.push('/home');
  };

  render() {
    const { movie } = this.state;
    const { match } = this.props;

    return (
      <div>
       {movie && (
         <div className={styles.container}>
          <button type="button" onClick={this.onGoBack} className={styles.btnBack}>
          Go back
        </button>
            <h3>Dateils</h3>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt="poster"
            />
            <h3>
              {movie.title}{' '}
              {movie.release_date && movie.release_date.slice(0, 4)}
            </h3>
            <p>{movie.vote_average}/10</p>

            <p>{movie.overview}</p>
            <ul className={styles.listMoreInfo}>
              <li className={styles.itemMoreInfo}>
                <NavLink
                  className={styles.linkMoreInfo}
                  activeClassName={styles.linkMoreInfoActive}
                  to={{
                    pathname: `${match.url}${routes.CAST}`,
                  }}
                >
                  Cast
                </NavLink>
              </li>
              <li className={styles.itemMoreInfo}>
                <NavLink
                  className={styles.linkMoreInfo}
                  activeClassName={styles.linkMoreInfoActive}
                  to={{
                    pathname: `${match.url}${routes.REVIEWS}`,
                  }}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>

            <Switch>
              <Route path={`${match.path}${routes.CAST}`} component={Cast} />
              <Route
                path={`${match.path}${routes.REVIEWS}`}
                component={Reviews}
              />
            </Switch>
            </div>
        )}
      </div>
    );
  }
}
