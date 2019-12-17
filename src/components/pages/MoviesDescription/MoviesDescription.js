import React from 'react';
import T from 'prop-types';
import styles from './MovieDescription.module.css';

const MovieDescription = ({ movieDescription }) => {
  return (
    <div className={styles.movie}>
      <img
        src={`https://image.tmdb.org/t/p/w300${movieDescription.imageUrl}`}
        alt={movieDescription.title}
        className={styles.movieImg}
      />
      <div className={styles.movieDescription}>
        <h2>{movieDescription.title}</h2>
        <p>Users Average {Number(movieDescription.average) * 10}%</p>
        <h4>Overview</h4>
        <p>{movieDescription.overview}</p>
        <h4>Genres:</h4>
        {movieDescription && (
          <ul>
            {movieDescription.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

MovieDescription.propTypes = {
  movieDescription: T.shape({
    title: T.string.isRequired,
    overview: T.string.isRequired,
    average: T.number.isRequired,
    imageUrl: T.string.isRequired,
    genres: T.arrayOf(
      T.shape({
        id: T.number.isRequired,
        name: T.string.isRequired,
      }),
    ),
  }).isRequired,
};

export default MovieDescription;