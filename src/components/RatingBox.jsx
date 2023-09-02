import PropTypes from 'prop-types';

import { styled } from 'styled-components';
import BtnStyles from '../UI-Logic/BtnStyles';
import Row from '../UI-Logic/Row';
import StarRating from './StarRating';

const RatingBoxStyles = styled.div`
  background-color: var(--color-dark-secondary);
  margin: 1rem 0 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const RatingBox = ({
  onSetRating,
  onAddWatchedMovie,
  userRating,
  isWatched,
}) => {
  return (
    <RatingBoxStyles>
      {isWatched ? (
        <p style={{ textAlign: 'center' }}>You&apos;ve rated this Movie</p>
      ) : (
        <>
          <StarRating maxRating={10} size={20} onSetRating={onSetRating} />
          {userRating > 0 ? (
            <Row style={{ textAlign: 'center' }}>
              <BtnStyles onClick={onAddWatchedMovie} size="small">
                + Add to watched
              </BtnStyles>
            </Row>
          ) : (
            <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>
              Start rating movie
            </p>
          )}
        </>
      )}
    </RatingBoxStyles>
  );
};

RatingBox.propTypes = {
  isWatched: PropTypes.bool,
  userRating: PropTypes.string,
  onSetRating: PropTypes.func,
  onAddWatchedMovie: PropTypes.func,
};

export default RatingBox;
