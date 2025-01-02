import plus from '../../../assets/plus1.svg';

import { NavigationWrapper, StyledButton, PlusButton } from "./NavigationBar.styles";

const IconButton = ({src, alt, name}: {src: string; alt: string; name: string;}) => {
  src = `src/assets/${src}.svg`;

  return (
    <StyledButton type="button">
      <img src={src} alt={alt} />
      <span>{name}</span>
    </StyledButton>
  );
};

const NavagationBar = () => {
  return (
    <NavigationWrapper>
      <IconButton src="home" alt="home-icon" name="홈" />
      <IconButton src="search" alt="search-icon" name="탐색" />
      <PlusButton type='button'>
        <img src={plus} alt="" />
      </PlusButton>
      <IconButton src="clock" alt="clock-icon" name="약속" />
      <IconButton src="me" alt="me-icon" name="나" />
    </NavigationWrapper>
  );
};
export default NavagationBar;