import { styled } from 'styled-components';

import Row from '../UI-Logic/Row';
import Logo from './Logo';

import RegularList from './RegularList';
import SideLinks from './SideLinks';
import SmallBox from './StartWatchingBox';

const sideNavArr = [
  {
    id: 1,
    icon: <ion-icon name="home-outline"></ion-icon>,
    text: 'Home',
    route: '/',
  },
  {
    id: 2,
    icon: <ion-icon name="videocam-outline"></ion-icon>,
    text: 'Movie',
    route: '/movie',
  },
  {
    id: 3,
    icon: <ion-icon name="play-circle-outline"></ion-icon>,
    text: 'Watched',
    route: '/watchedmovie',
  },
];

const SidebarStyles = styled.aside`
  grid-row: 1 / -1;
  background-color: var(--color-dark-secondary);
  border-top-right-radius: 3rem;
  border-bottom-right-radius: 3rem;
`;

const Sidebar = () => {
  return (
    <SidebarStyles>
      <Logo />

      <Row direction="vertical" paddingtop="large">
        <RegularList
          items={sideNavArr}
          resorceName="items"
          itemComponent={SideLinks}
        />
      </Row>

      <SmallBox />
    </SidebarStyles>
  );
};

export default Sidebar;
