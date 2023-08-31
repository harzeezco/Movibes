import { useEffect, useState } from 'react';

const KEY = '6ce8a8ba';

const useMovies = (query) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoaing] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const fetchMovies = async () => {
      try {
        setError('');
        setIsLoaing(true);

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );

        if (!res.ok) {
          throw new Error('There was an error fetching movies');
        }
        const data = await res.json();

        if (data.Response === 'False') {
          throw new Error('The Movie is not found');
        }

        setMovies(data.Search);
        setIsLoaing('');
        setError('');
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setIsLoaing(false);
      }
    };

    fetchMovies();

    if (query.length < 3) {
      setMovies([]);
      setIsLoaing(false);
    }

    return () => controller.abort();
  }, [query]);

  return { movies, error, isLoading };
};

export default useMovies;
