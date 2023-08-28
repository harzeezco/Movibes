import { styled } from 'styled-components';
import AppLogo from '../assets/images/logo.png';

const LogoStyles = styled.div`
  text-align: center;
  height: 5rem;
  padding: 2.5rem 0;
`;

const Logo = () => {
  return (
    <LogoStyles>
      <img className="img" src={AppLogo} alt="Movibes Logo" />
    </LogoStyles>
  );
};

export default Logo;
