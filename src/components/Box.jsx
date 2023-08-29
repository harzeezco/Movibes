import PropTypes from 'prop-types';
import BoxStyles from '../UI-Logic/BoxStyles';

const Box = ({ children, column }) => {
  return <BoxStyles column={column}>{children}</BoxStyles>;
};

Box.propTypes = {
  children: PropTypes.node,
  column: PropTypes.string,
};

export default Box;
