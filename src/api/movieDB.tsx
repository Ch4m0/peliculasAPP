import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '72c1242811cb61fb6cdf8b072afa5d96',
    language: 'es-ES',
  },
});

export default movieDB;
