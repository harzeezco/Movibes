import Box from '../components/Box';

import MoonFall from '../assets/images/MoonFall.png';
import { styled } from 'styled-components';
import Row from '../UI-Logic/Row';
import RegularList from '../components/RegularList';
import services from '../../service-data';
import Features from '../components/Features';
import categories from '../../categories-data';

const MovieImageStyles = styled.img`
  height: 20rem;
  width: 100%;
`;

const Home = () => {
  return (
    <Box column="2">
      <section>
        <MovieImageStyles src={MoonFall} alt="" />

        <div>
          Trending
          <Row direction="default">
            {/* <img  style={{maxWidth: '18rem', height: '18rem'}} src={MoonFall} alt="" />
            <img style={{maxWidth: '18rem', height: '18rem'}} src={MoonFall} alt="" />
            <img style={{maxWidth: '18rem', height: '18rem'}} src={MoonFall} alt="" />
            <img style={{maxWidth: '18rem', height: '18rem'}} src={MoonFall} alt="" /> */}
          </Row>
        </div>
      </section>
      <aside>
        <RegularList
          items={services}
          resorceName="items"
          itemComponent={Features}
        />

        <RegularList
          items={categories}
          resorceName="items"
          itemComponent={Features}
        />
      </aside>
    </Box>
  );
};

export default Home;
