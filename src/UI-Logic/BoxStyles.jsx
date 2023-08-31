import { css, styled } from 'styled-components';

const BoxStyles = styled.div`
  display: grid;
  padding: 0 2rem;

  ${(props) =>
    props.column === 2 &&
    css`
      grid-template-columns: 1fr 23rem;
    `}

  ${(props) =>
    props.column === 4 &&
    css`
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      margin-top: 3rem;
    `}
`;

export default BoxStyles;
