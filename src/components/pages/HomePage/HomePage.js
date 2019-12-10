/* import - node_lodules */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';
import routes from '../../../routes';

/* import - CSS */
import styles from './HomePage.module.css';
/* import - API */
import fetchRequest from '../../../services/fetchRequest';
/* import - COMPONENT */
// import MovieDetailsPage from '../MovieDetailsPage/MovieDetailsPage';
// import ErrorShow from '../ErrorShow/ErrorShow';

/*
 * COMPONENT
 */
class HomePage extends Component {
  static propTypes = {
    match: T.shape().isRequired,
  };

  state = {
    moviesTranding: [],
    error: null,
  };

  componentDidMount() {
    fetchRequest
      .fetchMoviesByTranding()
      .then(data => {
        this.setState({ moviesTranding: data.results });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    // const { location } = this.props;
    const { moviesTranding, error } = this.state;

    return (
      <section className={styles.sectionPage}>
        <div className={styles.container}>
          <h2 className={styles.titlePage}>Trending today</h2>
          <ul>
            {moviesTranding.map(movie => (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `${routes.MOVIES}/${movie.id}`,
                  }}
                >
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
          {/* <Route path={`${match.path}/:movieId`} component={MovieDetailsPage} /> */}
          {error && <p>error</p>}
        </div>
      </section>
    );
  }
}

export default HomePage;
