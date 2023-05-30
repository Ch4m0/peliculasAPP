import {useEffect, useState} from 'react';
import {MovieFull} from '../interface/movieInterface';
import movieDB from '../api/movieDB';
import {Cast, CreditResponse} from '../interface/castIterface';

interface MovieDetails {
  isLoading: boolean;
  movieFull: MovieFull;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: false,
    movieFull: undefined,
    cast: [],
  });

  const getDetailsMovie = async () => {
    const movieFullPromise = await movieDB.get<MovieFull>(`/${movieId}`);
    const castPromise = await movieDB.get<CreditResponse>(
      `/${movieId}/credits`,
    );
    const [movieFullPromiseResponse, castPromiseResponse] = await Promise.all([
      movieFullPromise,
      castPromise,
    ]);

    setState({
      isLoading: true,
      movieFull: movieFullPromiseResponse.data,
      cast: castPromiseResponse.data.cast,
    });
  };

  useEffect(() => {
    getDetailsMovie();
  }, []);

  return {...state};
};
