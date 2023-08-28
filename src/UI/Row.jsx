import { css, styled } from 'styled-components';

const Row = styled.div`
  display: flex;

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
      align-items: center;
    `}

    ${(props) =>
    props.direction === 'default' &&
    css`
      justify-content: center;
      align-items: center;
      gap: 1rem;
    `}

    ${(props) =>
    props.padding === 'large' &&
    css`
      margin-top: 8rem;
    `}
`;

export default Row;
