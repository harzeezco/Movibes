import PropTypes from 'prop-types';

const RegularList = ({
  items,
  resorceName,
  itemComponent: ItemComponent,
  movieSize,
}) => {
  return (
    <>
      {items.map((item) => (
        <ItemComponent
          key={item.id || item.imdbID}
          {...{ [resorceName]: item }}
          width={movieSize}
        />
      ))}
    </>
  );
};

RegularList.propTypes = {
  items: PropTypes.array,
  resorceName: PropTypes.string,
  itemComponent: PropTypes.func,
};

export default RegularList;
