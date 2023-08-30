import Row from '../UI-Logic/Row';

import { styled } from 'styled-components';
import Button from './Button';

import WatchingIcon from '../assets/icons/Watched-confirmed.svg';

const StartWatchingBoxStyles = styled.div`
  background-color: var(--color-dark-primary);
  border-radius: var(--border-radius-lg);
  color: var(--color-white-light);
  max-width: 18rem;
  justify-content: center;
  padding: 1.3rem;
`;

const WatchingIconBoxStyles = styled.div`
  background-color: var(--color-secondary);
  width: 5rem;
  height: 5rem;
  border-radius: var(--border-radius-rounded);
  margin-top: -3.5rem;
`;

const StartWatchingBox = () => {
  return (
    <Row justify="center" paddingtop="large">
      <StartWatchingBoxStyles>
        <Row>
          <Row direction="default">
            <WatchingIconBoxStyles className="center">
              <img
                className="watching-icon"
                src={WatchingIcon}
                alt="watching confirmed icon"
              />
            </WatchingIconBoxStyles>
          </Row>
          <p className="start-watching-heading">
            Start watching movie
            <br /> and earn <br /> free tickets
          </p>

          <p className="start-watching-count">50k people are watching now</p>

          <Button size="medium">Start Watching</Button>
        </Row>
      </StartWatchingBoxStyles>
    </Row>
  );
};

export default StartWatchingBox;
