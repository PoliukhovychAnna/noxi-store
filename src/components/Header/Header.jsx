import { HeaderWrapper, LogoLink, LogoImg, LogoTitle } from './Styled.Header';
import img from '../../images/logo.png';

export const Header = () => {
  return (
    <HeaderWrapper>
      <LogoLink href="/noxi-store">
        <LogoImg src={img} alt="logo-noxi" />
      </LogoLink>

      <LogoTitle href="/noxi-store">NOXI</LogoTitle>
    </HeaderWrapper>
  );
};
