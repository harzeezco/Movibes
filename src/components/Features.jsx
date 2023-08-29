import PropTypes from 'prop-types';
import Row from '../UI-Logic/Row';

const Features = ({ items }) => {
  const { service, category, isActive } = items;

  return (
    <Row direction="horizontal">
      <p>{service || category}</p>
      <input type="checkbox" checked={isActive} />
    </Row>
  );
};

Features.propTypes = {
  items: PropTypes.object,
};
export default Features;
