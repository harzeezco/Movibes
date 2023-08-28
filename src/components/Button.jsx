import { styled } from 'styled-components';

import PropTypes from 'prop-types';

const BtnStyles = styled.button`
  font-weight: var(--font-weight-large);
  padding: 1.5rem 0;
  background-color: inherit;
  border: none;
  color: var(--color-dark-tertiary);

  &:hover,
  &:active {
    background-color: var(--color-secondary);
    color: var(--color-white-light);
    border-right: 7px solid var(--color-primary);
  }
`;

const Button = ({ children }) => {
  return <BtnStyles>{children}</BtnStyles>;
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
