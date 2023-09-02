import PropTypes from 'prop-types';
import Box from '../components/Box';
import RegularList from '../components/RegularList';
import WatchedMovieBox from '../components/WatchedMovieBox';

const WatchMovie = ({ watched, onDeleteWatchedMovie }) => {
  return (
    <>
      <Box column={4}>
        <RegularList
          resorceName="items"
          itemComponent={WatchedMovieBox}
          items={watched}
          onDeleteWatchedMovie={onDeleteWatchedMovie}
        />
      </Box>
    </>
  );
};

WatchMovie.propTypes = {
  watched: PropTypes.array,
  onDeleteWatchedMovie: PropTypes.func,
};

export default WatchMovie;
