import PropTypes from 'prop-types';
import Row from '../UI-Logic/Row';
import RegularList from './RegularList';

import { styled } from 'styled-components';
import Movie from './Movie';

const TrendingMovieStyles = styled.div`
  padding: 2rem 0;
`;

const TrendingMovieHeadingStyles = styled.p`
  font-size: 1.6rem;
  font-weight: var(--font-weight-xm);
  text-transform: capitalize;
  padding: 2rem 1rem;
  letter-spacing: 0.1rem;
`;

const TrendingMovies = ({ category, categoryHeading }) => {
  return (
    <TrendingMovieStyles>
      <TrendingMovieHeadingStyles>{categoryHeading}</TrendingMovieHeadingStyles>
      <Row direction="horizontal">
        <RegularList
          items={category}
          resorceName="items"
          itemComponent={Movie}
        />
      </Row>
    </TrendingMovieStyles>
  );
};

TrendingMovies.propTypes = {
  category: PropTypes.array,
  categoryHeading: PropTypes.string,
};

export default TrendingMovies;
