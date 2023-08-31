import { styled } from 'styled-components';
import Row from '../UI-Logic/Row';
import Searchbox from './Searchbox';
import Notification from './Notification';

const HeaderStyles = styled.header`
  background-color: inherit;
  padding: 4rem 4rem 2.5rem;
`;

const Header = (props) => {
  return (
    <HeaderStyles>
      <Row direction="horizontal">
        <Searchbox {...props} />

        <Notification />
      </Row>
    </HeaderStyles>
  );
};

export default Header;
