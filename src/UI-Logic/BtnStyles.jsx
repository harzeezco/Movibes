import { css, styled } from 'styled-components';

const BtnStyles = styled.button`
  border: none;
  background-color: var(--color-secondary);
  color: var(--color-white-light);
  border-radius: var(--border-radius-lg);

  &:hover,
  &:active {
    background-color: var(--color-secondary);
    color: var(--color-white-light);
  }

  ${(props) =>
    props.size === 'meduim_Large' &&
    css`
      font-size: 1.3rem;
      font-weight: var(--font-weight-large);
      padding: 1.5rem 1rem;
      background-color: #2b938f;
      color: var(--color-white-light);
      border-radius: var(--border-radius-lg);

      &:hover,
      &:active {
        border-right: 0;
      }
    `}

  ${(props) =>
    props.size === 'medium' &&
    css`
      font-size: 1.2rem;
      padding: 5px 0;

      &:hover {
        border-left: 6px solid var(--color-primary);
      }
    `}



      ${(props) =>
    props.size === 'small' &&
    css`
      font-size: 1rem;
      padding: 5px 1.3rem;

      &:hover {
        border-left: 6px solid var(--color-primary);
      }
    `}

     ${(props) =>
    props.hover_none &&
    css`
      background-color: inherit;
      border: 1px solid var(--color-dark-tertiary);

      &:hover {
        background-color: inherit;
        color: inherit;
        border-right: 0;
      }
    `}

    ${(props) =>
    props.size === 'xtra_small' &&
    css`
      background-color: #b91a4c;
      color: var(--color-white-light);
      padding: 3px 7px;
      border-radius: 50%;
      font-size: 1.2rem;

      &:hover {
        /* background-color: inherit;
        color: inherit;
        border-right: 0; */
      }
    `}
`;

export default BtnStyles;
