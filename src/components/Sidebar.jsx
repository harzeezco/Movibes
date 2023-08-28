import { styled } from 'styled-components';

import Logo from '../assets/images/logo.png';
import Row from '../UI/Row';

const SidebarStyles = styled.aside`
  grid-row: 1 / -1;
  background-color: var(--color-dark-secondary);
`;

const Sidebar = () => {
  return (
    <SidebarStyles>
      <img src={Logo} alt="Movibes Logo" />
      <Row direction="vertical">
        <button>
          <span>
            <ion-icon name="videocam-outline"></ion-icon>
          </span>
          <span>Movie</span>
        </button>

        <button>
          <span>
            <ion-icon name="play-circle-outline"></ion-icon>
          </span>
          <span>watchedMovie</span>
        </button>
      </Row>
    </SidebarStyles>
  );
};

export default Sidebar;
