import { HeaderWrapper, LogoLink, LogoImg, LogoTitle } from './Styled.Header';
import img from '../../images/logo.png';

export const Header = () => {
  return (
    <HeaderWrapper>
      <LogoLink href="http://localhost:3000/noxi-store">
        <LogoImg src={img} alt="logo-noxi" />
      </LogoLink>

      <LogoTitle>NOXI</LogoTitle>
    </HeaderWrapper>
  );
};
