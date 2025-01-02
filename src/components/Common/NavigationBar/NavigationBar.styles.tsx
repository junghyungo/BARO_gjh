import styled from 'styled-components';

const NavigationWrapper = styled.nav`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 94px;
  border-top: 0.5px solid #DEDEDE;
  background-color: #FFFFFFE5;
  justify-content: space-around;
`;

const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 44.69px;
  background-color: #FFFFFFE5;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 10px;

  span {
    margin-top: 4px;
    font-family: Work Sans;
    font-size: 9.31px;
    font-weight: 700;
    line-height: 16.76px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #C1C1C1;
  }
`;

const PlusButton = styled.button`
  background-color: #FFFFFFE5;
  border: none;
  outline: none;
  cursor: pointer;
  height: 35px;
  margin-top: 10px;
`;

export { NavigationWrapper, StyledButton, PlusButton };