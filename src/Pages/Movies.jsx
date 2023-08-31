// import styled, { keyframes } from 'styled-components';
import Box from '../components/Box';
import RegularList from '../components/RegularList';
import Movie from '../components/Movie';
import Loader from '../components/Loader';
import Error from '../components/Error';

const Movies = ({ movies, error, isLoading }) => {
  if (movies.length === 0) {
    return (
      <div className="center" style={{ marginTop: '7rem' }}>
        <Loader />
      </div>
    );
  }

  return (
    <Box column={2}>
      <section>
        {isLoading && <Loader />}
        {error && <Error message={error} />}

        {!error && !isLoading && (
          <Box column={4}>
            <RegularList
              resorceName="items"
              itemComponent={Movie}
              items={movies}
              movieSize="22rem"
              showDetails={true}
            />
          </Box>
        )}
      </section>
    </Box>
  );
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
