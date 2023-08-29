import { css, styled } from 'styled-components';

const BtnStyles = styled.button`
  border: none;

  ${(props) =>
    props.size === 'large' &&
    css`
      font-size: 1.5rem;
      font-weight: var(--font-weight-large);
      padding: 1.5rem 0;
      background-color: inherit;
      color: var(--color-dark-tertiary);

      &:hover,
      &:active {
        background-color: var(--color-secondary);
        color: var(--color-white-light);
        border-right: 7px solid var(--color-primary);
      }
    `}

  ${(props) =>
    props.size === 'medium' &&
    css`
      font-size: 1.2rem;
      background-color: var(--color-secondary);
      color: var(--color-white-light);
      padding: 5px 0;
      border-radius: var(--border-radius-lg);

      &:hover,
      &:active {
        background-color: var(--color-secondary);
        color: var(--color-white-light);
        border-right: 7px solid var(--color-primary);
      }
    `}
`;

export default BtnStyles;
