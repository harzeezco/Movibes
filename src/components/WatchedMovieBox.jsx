import PropTypes from 'prop-types';
import { styled } from 'styled-components';
import Movie from './Movie';
import Row from '../UI-Logic/Row';
import BtnStyles from '../UI-Logic/BtnStyles';

const WatchedMovieStyles = styled.div`
  max-width: 19rem;
  background-color: var(--color-dark-secondary);
  padding: 0.5rem 0.7rem;

  p {
    font-size: 1.3rem;
  }  
`;

const WatchedMovieBox = ({ items, onDeleteWatchedMovie }) => {
  const { title, isLike, id } = items;

  return (
    <WatchedMovieStyles>
      <Movie items={items} />
      <Row direction="horizontal" style={{ paddingTop: '10px' }}>
        <p>{title}</p>

        <Row direction="default">
          {isLike && (
            <button
              style={{
                color: '#b91a4c',
                fontSize: '2.3rem',
                marginTop: '10px',
                cursor: 'pointer',
                background: 'inherit',
                border: 'inherit',
              }}
            >
              <ion-icon name="heart-sharp"></ion-icon>
            </button>
          )}

          <BtnStyles onClick={() => onDeleteWatchedMovie(id)} size="xtra_small">
            X
          </BtnStyles>
        </Row>
      </Row>
    </WatchedMovieStyles>
  );
};

WatchedMovieBox.propTypes = {
  items: PropTypes.object,
  isLike: PropTypes.bool,
  title: PropTypes.string,
  id: PropTypes.string,
  onDeleteWatchedMovie: PropTypes.func,
};

export default WatchedMovieBox;
