import { styled } from 'styled-components';
import Row from '../UI-Logic/Row';

const SearchboxStyles = styled.div`
  font-weight: var(--font-weight-xm);
  width: 60%;
  background-color: var(--color-dark-secondary);
  color: var(--color-dark-tertiary);
  padding: 0.4rem 2rem;
  border-radius: var(--border-radius-xlg);
`;

const InputStyles = styled.input`
  font-weight: var(--font-weight-md);
  background-color: inherit;
  color: var(--color-white-light);
  outline: none;
  width: 100%;
  border: none;

  &::placeholder {
    color: var(--color-dark-tertiary);
  }
`;

const Searchbox = () => {
  return (
    <SearchboxStyles>
      <Row direction="default">
        <span className="input-search-icon">
          <ion-icon name="search-outline"></ion-icon>
        </span>
        <InputStyles type="text" placeholder="Search for movies..." />
      </Row>
    </SearchboxStyles>
  );
};

export default Searchbox;
