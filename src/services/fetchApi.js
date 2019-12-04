import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

const apiKey = '0a372659e0a2bc92523f188eb5e16ad2';

export const homeAPI = {
  getTrendingToday() {
    return instance
      .get(`/trending/movie/day?api_key=${apiKey}`)
      .then(res => res.data)
      .catch(err => {
        console.log('ERROR homeAPI.getTrendingToday', err);
        throw err;
      });
  },
};