// import { useEffect } from 'react';
import { styled } from 'styled-components';
import Box from '../components/Box';
import MoonFall from '../assets/images/MoonFall.png';
import TrendingMovies from '../components/TrendingMovies';
import { trendingMovies, upcomingMovies } from '../../regular-movies-data';

const MovieImageStyles = styled.img`
  height: 20rem;
  width: 100%;
`;

const Home = () => {
  return (
    <Box column={2}>
      <section>
        <MovieImageStyles src={MoonFall} alt="An image showing space" />

        <TrendingMovies category={trendingMovies} categoryHeading="Trending" />
        <TrendingMovies category={upcomingMovies} categoryHeading="upcoming" />
      </section>
    </Box>
  );
};

export default Home;
