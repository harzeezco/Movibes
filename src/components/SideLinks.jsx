import PropTypes from 'prop-types';

import Row from '../UI-Logic/Row';

import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const NavLinkStyles = styled.a`
  font-size: 1.5rem;
  font-weight: var(--font-weight-large);
  padding: 1.5rem 0;
  background-color: inherit;
  color: var(--color-dark-tertiary);
  border-radius: 0;

  &:hover,
  &:active,
  .active {
    background-color: var(--color-secondary);
    color: var(--color-white-light);
    border-right: 7px solid var(--color-primary);
  }
`;

const SideLinks = ({ items }) => {
  const { icon, text, route } = items;

  return (
    <NavLinkStyles to={route} as={NavLink}>
      <Row direction="default">
        <span className="sidelink-icon">{icon}</span>
        <span>{text}</span>
      </Row>
    </NavLinkStyles>
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
