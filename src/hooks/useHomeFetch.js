import { useState, useEffect } from 'react';
import API from '../API';

const initialMovieState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
};

// eslint-disable-next-line import/prefer-default-export
export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [moviesState, setMoviesState] = useState(initialMovieState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log(searchTerm);

  // eslint-disable-next-line no-shadow
  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchMovies(searchTerm, page);
      setMoviesState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results]
            : [...movies.results]
      }));
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(1);
  }, []);

  return {
    moviesState, loading, error, setSearchTerm
  };
};
