import TitleLogo from '../../../assets/title.svg';

import { LogoWrapper } from './Logo.styles';

const Logo = () => {
  return (
    <LogoWrapper>
      <div>BARO에 오신 것을<br/>환영합니다</div>
      <img src={TitleLogo} alt="BARO Logo" />
    </LogoWrapper>
  );
};
export default Logo;