/* import - node_lodules */
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

// import T from 'prop-types';
/* import - CSS */
import styles from './HomePage.module.css';
/* import - API */
import { homeAPI } from '../../../services/fetchApi';
/* import - COMPONENT */
import MovieDetailsPage from '../MovieDetailsPage/MovieDetailsPage';
// import ErrorShow from '../ErrorShow/ErrorShow';

/*
 * COMPONENT
 */
class HomePage extends Component {
  //   static propTypes = {
  //     location: T.shape().isRequired,
  //   };

  state = {
    allTrendingToday: [],
    error: null,
  };

  componentDidMount() {
    homeAPI
      .getTrendingToday()
      .then(data => {
        this.setState({
          allTrendingToday: data.results,
          error: null,
        });
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    // const { location } = this.props;
    const { allTrendingToday, error } = this.state;
    const { match } = this.props;

    return (
      <section className={styles.sectionPage}>
        <div className={styles.container}>
          <h2 className={styles.titlePage}>Trending today</h2>
          <ul>
            {allTrendingToday.map(movie => (
              <li key={movie.id}>
                <Link to={`${match.url}/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
          <Route path={`${match.path}/:movieId`} component={MovieDetailsPage} />
          {/* {error && <p>error</p>} */}
        </div>
      </section>
    );
  }
}

export default HomePage;
