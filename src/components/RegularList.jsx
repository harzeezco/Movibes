import PropTypes from 'prop-types';

const RegularList = ({
  items,
  resorceName,
  itemComponent: ItemComponent,
  movieSize,
  showDetails,
  onAddWatchedMovie,
  watched,
  onDeleteWatchedMovie,
}) => {
  return (
    <>
      {items.map((item) => (
        <ItemComponent
          key={item.id || item.imdbID}
          {...{ [resorceName]: item }}
          width={movieSize}
          showDetails={showDetails}
          onAddWatchedMovie={onAddWatchedMovie}
          watched={watched}
          onDeleteWatchedMovie={onDeleteWatchedMovie}
        />
      ))}
    </>
  );
};

RegularList.propTypes = {
  items: PropTypes.array,
  resorceName: PropTypes.string,
  itemComponent: PropTypes.func,
  movieSize: PropTypes.string,
  showDetails: PropTypes.bool,
  onAddWatchedMovie: PropTypes.func,
  watched: PropTypes.array,
  onDeleteWatchedMovie: PropTypes.func,
};

export default RegularList;
