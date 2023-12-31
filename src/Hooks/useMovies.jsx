import { useEffect, useState } from 'react';


const useMovies = (query, params) => {
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoaing] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const fetchMovies = async () => {
      try {
        setError('');
        setIsLoaing(true);

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${
            import.meta.env.VITE_API_KEY
          }&${params}=${query}`,
          { signal: controller.signal }
        );

        if (!res.ok) {
          throw new Error('There was an error fetching movies');
        }
        const data = await res.json();

        if (data.Response === 'False') {
          throw new Error('The Movie is not found');
        }
        setMovieDetails([data]);
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
  }, [query, params]);

  return { movies, error, isLoading, movieDetails };
};

export default useMovies;
