import styled from 'styled-components';

const HeaderBarWrapper = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 88px;
  // background-color: #FFFFFFBF;
  display: flex;
  jsutify-content: space-between;

  span {
    font-family: Pretendard;
    font-size: 26px;
    font-weight: 700;
    line-height: 36.4px;
    letter-spacing: -0.025em;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #FFFFFF;
    margin-left: 21px;
    margin-top: 48px;
    width: 70px;
    height: 36px;
  }

  img {
    width: 17x;
    height: 20px;
    margin: 32px 24px;
    margin-left: auto;
    margin-right: 34px;
    margin-top: 61px;
  }
`;

export default HeaderBarWrapper;