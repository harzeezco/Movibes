import PropTypes from 'prop-types';

import Row from '../UI/Row';
import Button from './Button';

const SideLinks = ({ items }) => {
  const { id, icon, text } = items;

  return (
    <Button key={id}>
      <Row direction="default">
        <span>{icon}</span>
        <span>{text}</span>
      </Row>
    </Button>
  );
};

SideLinks.propTypes = {
  items: PropTypes.object,
  id: PropTypes.number,
  icon: PropTypes.node,
  text: PropTypes.string,
};

export default SideLinks;
