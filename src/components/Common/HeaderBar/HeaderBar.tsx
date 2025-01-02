import notification from "../../../assets/notification.svg";

import HeaderBarWrapper from "./HeaderBar.styles";

const HeaderBar = () => {
  return (
    <HeaderBarWrapper>
      <span>BARO</span>
      <img src={notification} alt="notification-icon" />
    </HeaderBarWrapper>
  );
};
export default HeaderBar;