import PropTypes from 'prop-types';
import Box from '../components/Box';
import RegularList from '../components/RegularList';
import WatchedMovieBox from '../components/WatchedMovieBox';
import { useState } from 'react';
import { styled } from 'styled-components';

const WatchMovieStyles = styled.div`
  display: flex;
`

const SortItemsBoxStyles = styled.div`
  margin: 4rem auto;
`;

const WatchMovie = ({ watched, onDeleteWatchedMovie }) => {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  if (sortBy === 'input') sortedItems = watched;

  if (sortBy === 'description')
    sortedItems = watched
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title));

  if (sortBy === 'packed')
    sortedItems = watched
      .slice()
      .sort((a, b) => Number(b.isLike) - Number(a.isLike));
  
  if (sortBy === 'ratings')
    sortedItems = watched
      .slice()
      .sort((a, b) => Number(b.userRating) - Number(a.userRating));

  return (
    <WatchMovieStyles>
      <Box column={3}>
        <RegularList
          resorceName="items"
          itemComponent={WatchedMovieBox}
          items={sortedItems}
          onDeleteWatchedMovie={onDeleteWatchedMovie}
        />
      </Box>

      <SortItemsBoxStyles className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="ratings">Sort by ratings</option>
          <option value="input">Sort by order</option>
          <option value="description">Sort by title</option>
          <option value="packed">Sort by liked</option>
        </select>
      </SortItemsBoxStyles>
    </WatchMovieStyles>
  );
};

WatchMovie.propTypes = {
  watched: PropTypes.array,
  onDeleteWatchedMovie: PropTypes.func,
};

export default WatchMovie;
