import { css, styled } from 'styled-components';

const BoxStyles = styled.div`
  display: grid;
  padding: 0 2rem;

  ${(props) =>
    props.column === '2' &&
    css`
      grid-template-columns: 1fr 23rem;
    `}
`;

export default BoxStyles;
