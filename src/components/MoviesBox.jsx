import PropTypes from 'prop-types';
import Box from './Box';
import Loader from './Loader';
import Error from './Error';
import RegularList from './RegularList';
import Movie from './Movie';

const MoviesBox = ({ movies, isLoading, error, onAddWatchedMovie }) => {
  if (movies.length === 0) {
    return (
      <div className="center" style={{ marginTop: '7rem' }}>
        <Loader />
      </div>
    );
  }

  return (
    <Box column={2}>
      <section>
        {isLoading && <Loader />}
        {error && <Error message={error} />}

        {!error && !isLoading && (
          <Box column={3}>
            <RegularList
              resorceName="items"
              itemComponent={Movie}
              items={movies}
              movieSize="22rem"
              showDetails={true}
              onAddWatchedMovie={onAddWatchedMovie}
            />
          </Box>
        )}
      </section>
    </Box>
  );
};

MoviesBox.propTypes = {
  movies: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  onAddWatchedMovie: PropTypes.func,
};

export default MoviesBox;
