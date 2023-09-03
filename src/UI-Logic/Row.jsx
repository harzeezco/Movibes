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
    props.direction === 'vertical' &&
    props.big_gap &&
    css`
      gap: 3rem;
    `}

  ${(props) =>
    props.direction === 'horizontal' &&
    css`
      justify-content: space-between;
      align-items: center;

      @media screen {
        
      }
    `}

    ${(props) =>
    props.direction === 'default' &&
    css`
      justify-content: center;
      align-items: center;
      gap: 1rem;
    `}

    ${(props) =>
    props.direction === 'horizon' &&
    css`
      align-items: center;
      gap: 1rem;
    `}

    ${(props) =>
    props.paddingtop === 'large' &&
    css`
      margin-top: 5rem;
    `}

    ${(props) =>
    props.justify === 'center' &&
    css`
      align-items: center;
      gap: 2rem;
    `}

    
`;

Row.defaultProps = {
  direction: 'vertical',
};

export default Row;
