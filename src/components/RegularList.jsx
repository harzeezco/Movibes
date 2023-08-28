import PropTypes from 'prop-types';

const RegularList = ({ items, resorceName, itemComponent: ItemComponent }) => {
  return (
    <>
      {items.map((item) => (
        <ItemComponent key={item.id} {...{ [resorceName]: item }} />
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
