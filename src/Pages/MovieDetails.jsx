import { useParams } from 'react-router-dom';
import useMovies from '../Hooks/useMovies';
import Box from '../components/Box';
import RegularList from '../components/RegularList';
import MovieDetailsBox from '../components/MovieDetailsBox';
import Loader from '../components/Loader';
import Error from '../components/Error';

const MovieDetails = ({ onAddWatchedMovie, watched }) => {
  const { id } = useParams();
  const { movieDetails, error } = useMovies(id, 'i');


  return (
    <>
      {movieDetails.length ? (
        <Box>
          <RegularList
            resorceName="items"
            itemComponent={MovieDetailsBox}
            items={movieDetails}
            onAddWatchedMovie={onAddWatchedMovie}
            watched={watched}
          />
        </Box>
      ) : (
        <Loader />
      )}
      {error && <Error message={error} />}
    </>
  );
};

export default MovieDetails;
