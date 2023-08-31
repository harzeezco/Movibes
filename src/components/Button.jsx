import PropTypes from 'prop-types';
import BtnStyles from '../UI-Logic/BtnStyles';

const Button = ({ children, size }) => {
  return <BtnStyles size={size}>{children}</BtnStyles>;
};

Button.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
};

export default Button;
