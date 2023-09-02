import PropTypes from 'prop-types';
import BtnStyles from '../UI-Logic/BtnStyles';

const Button = ({
  children,
  size,
  onNavigateToDetails,
  onNavigateToMovies,
}) => {
  const handleBtnsClick = () => {
    if (onNavigateToDetails) onNavigateToDetails();

    if (onNavigateToMovies) onNavigateToMovies();
  };

  return (
    <BtnStyles onClick={handleBtnsClick} size={size}>
      {children}
    </BtnStyles>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  onNavigateToDetails: PropTypes.func,
  onNavigateToMovies: PropTypes.func,
};

export default Button;
