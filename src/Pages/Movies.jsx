// import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import { Route, Routes } from 'react-router-dom';
import MoviesBox from '../components/MoviesBox';
import MovieDetails from './MovieDetails';

const Movies = ({ props, onAddWatchedMovie, watched }) => {
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <MoviesBox {...props} onAddWatchedMovie={onAddWatchedMovie} />
          }
        />
        <Route
          path="/:id"
          element={
            <MovieDetails
              onAddWatchedMovie={onAddWatchedMovie}
              watched={watched}
            />
          }
        />
      </Routes>
    </>
  );
};

Movies.propTypes = {
  props: PropTypes.object,
  onAddWatchedMovie: PropTypes.func,
  watched: PropTypes.array,
};

// const rotate = keyframes`
//   to {
//     transform: rotate(1turn)
//   }
// `;

// const Spinner = styled.div`
//   margin: 4.8rem auto;
//   width: 6.4rem;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   background:
//     radial-gradient(farthest-side, var(#fff) 94%, #0000) top/10px 10px no-repeat,
//     conic-gradient(#0000 30%, var(#fff));
//   -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
//   animation: ${rotate} 1.5s infinite linear;
// `;

export default Movies;
