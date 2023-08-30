import { styled } from 'styled-components';
import Box from '../components/Box';
import MoonFall from '../assets/images/MoonFall.png';
import FeatureBox from '../components/FeatureBox';
import services from '../../service-data';
import categories from '../../categories-data';
import TrendingMovies from '../components/TrendingMovies';
import { trendingMovies, upcomingMovies } from '../../regular-movies-data';

const MovieImageStyles = styled.img`
  height: 20rem;
  width: 100%;
`;

const Home = () => {
  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     const res = await fetch(
  //       `http://www.omdbapi.com/?apikey=${KEY}&s=interstellar`
  //     );
  //     const movie = await res.json();
  //     console.log(movie.Search);
  //   };

  //   fetchMovies();
  // }, []);

  return (
    <Box column="2">
      <section>
        <MovieImageStyles src={MoonFall} alt="" />

        <TrendingMovies category={trendingMovies} categoryHeading="Trending" />
        <TrendingMovies category={upcomingMovies} categoryHeading="upcoming" />
      </section>

      <aside>
        <FeatureBox featureHeading="Categories" feature={categories} />
        <FeatureBox featureHeading="Services" feature={services} />
      </aside>
    </Box>
  );
};

export default Home;
