/* import - node_lodules */
import React, { Component } from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';

import fetchRequest from '../../../services/fetchRequest';
import SearchBar from '../../SearchBar/SearchBar';
import routes from '../../../routes';

/*
 * COMPONENT
 */ class MoviesPage extends Component {
  static propTypes = {
    location: T.shape().isRequired,
    history: T.shape().isRequired,
  };

  state = {
    movies: [],
    // error: null,
  };

  componentDidMount() {
    const { location } = this.props;
    const query = new URLSearchParams(location.search).get('query');
    if (!query) {
      return;
    }
    fetchRequest.fetchMoviesByQuery(query).then(data => {
      this.setState({ movies: data.results });
    });
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    const prevQuery = new URLSearchParams(prevProps.location.search).get(
      'query',
    );
    const nextQuery = new URLSearchParams(location.search).get('query');

    if (prevQuery === nextQuery) {
      return;
    }

    fetchRequest.fetchMoviesByQuery(nextQuery).then(data => {
      this.setState({ movies: data.results });
    });
    // .catch(error => {
    //   this.setState({ error });
    // });
  }

  handleSearch = searchQuery => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${searchQuery}`,
    });
  };

  render() {
    const { movies } = this.state;
    const { location } = this.props;
    return (
      <section>
        <SearchBar onSearch={this.handleSearch} />
        <p>movies</p>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${routes.MOVIES}/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default MoviesPage;
