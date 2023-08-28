import { styled } from 'styled-components';

import Row from '../UI/Row';
import Logo from './Logo';

import RegularList from './RegularList';
import SideLinks from './SideLinks';
import SmallBox from './SmallBox';

const sideNavArr = [
  {
    id: 1,
    icon: <ion-icon name="home-outline"></ion-icon>,
    text: 'Home',
  },
  {
    id: 2,
    icon: <ion-icon name="videocam-outline"></ion-icon>,
    text: 'Movie',
  },
  {
    id: 3,
    icon: <ion-icon name="play-circle-outline"></ion-icon>,
    text: 'Watched',
  },
];

const SidebarStyles = styled.aside`
  grid-row: 1 / -1;
  background-color: var(--color-dark-secondary);
  border-top-right-radius: 4rem;
`;

const Sidebar = () => {
  return (
    <SidebarStyles>
      <Logo />

      <Row direction="vertical" paddingTop="large">
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
