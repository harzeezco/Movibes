import PropTypes from 'prop-types';

import Row from '../UI-Logic/Row';
import Button from './Button';
import { Link } from 'react-router-dom';

const SideLinks = ({ items }) => {
  const { id, icon, text, route } = items;

  return (
    <Button key={id} size="large">
      <Link to={route}>
        <Row direction="default">
          <span className="sidelink-icon">{icon}</span>
          <span>{text}</span>
        </Row>
      </Link>
    </Button>
  );
};

SideLinks.propTypes = {
  items: PropTypes.object,
  id: PropTypes.number,
  icon: PropTypes.node,
  text: PropTypes.string,
  route: PropTypes.string,
};

export default SideLinks;
