const API_KEY = '9c953f3573341a23695016165970ec50&language=en-US';

const fetchMoviesByQuery = query => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=9c953f3573341a23695016165970ec50&language=en-US&page=1&include_adult=false&query=${query}`,
  ).then(res => res.json());
};

const fetchMoviesById = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=9c953f3573341a23695016165970ec50&language=en-US`,
  ).then(res => res.json());
};
const fetchMoviesByTranding = () => {
  return fetch(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=9c953f3573341a23695016165970ec50',
  ).then(res => res.json());
};
const fetchCast = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=9c953f3573341a23695016165970ec50`,
  ).then(res => res.json());
};

const fetchReviews = (movieId, pageNum = 1) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=${pageNum}`,
  ).then(res => res.json());
};

export default {
  fetchMoviesByQuery,
  fetchMoviesById,
  fetchMoviesByTranding,
  fetchCast,
  fetchReviews,
};
