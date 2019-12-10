// eslint disable

import React, { Component } from 'react';

import T from 'prop-types';

export default class MovieDetailsPage extends Component {
  static propTypes = {
    match: T.shape().isRequired,
    location: T.shape().isRequired,
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

  render() {
    const { movie } = this.state;
    const { match } = this.props;
    return (
      <div>
        <h3>Dateils</h3>

        {movie && (
          <>
            <h3>{movie.title}</h3>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt="poster"
            />
            <p>{movie.overview}</p>
            <p>Movie ID : {match.params.movieId}</p>
          </>
        )}
      </div>
    );
  }
}
