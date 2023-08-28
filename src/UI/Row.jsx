import { css, styled } from 'styled-components';

const Row = styled.div`
  display: flex;
  align-items: center;

  ${(props) =>
    props.direction === 'vertical' &&
    css`
      flex-direction: column;
      gap: 1rem;
    `}

  ${(props) =>
    props.direction === 'horizontal' &&
    css`
      justify-content: space-between;
    `}
`;

export default Row;
