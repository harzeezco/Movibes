import { styled } from 'styled-components';
import Row from '../UI-Logic/Row';
import useKey from '../Hooks/useKey';
import { useNavigate } from 'react-router-dom';

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

const FormStyles = styled.form`
  width: 100%;
`;

const Searchbox = ({ query, setQuery }) => {
  const domRef = useKey('Enter');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery('');
  };

  const handleQueryInput = (e) => {
    setQuery(e.target.value);
    navigate('/movies');
  };

  return (
    <SearchboxStyles>
      <Row direction="default">
        <span className="input-search-icon">
          <ion-icon name="search-outline"></ion-icon>
        </span>
        <FormStyles onSubmit={handleSubmit}>
          <InputStyles
            value={query}
            onChange={handleQueryInput}
            type="text"
            placeholder="Search for movies..."
            ref={domRef}
          />
        </FormStyles>
      </Row>
    </SearchboxStyles>
  );
};

export default Searchbox;
