import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;

  input, .logInBtn {
    display: block;
    width: 34vmax;
    height: 48px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 26px;
    border: none;
    color: #FFFFFF;
    font-size: 16px;
    outline: none;
    box-sizing: border-box;
  }

  .logInId {
    background-color: rgba(255, 255, 255, 0.3);
    padding-left: 20px;
  }

  .logInPw {
    background-color: rgba(192, 204, 248, 0.5);
    padding-left: 20px;
    margin-top: 12px;
  }
  
  .logInBtn {
    background-color: #5175FF;
    margin-top: 18px;
    cursor: pointer;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 33px;

  button {
    outline: none;
    border: none;
    color: #FFFFFF;
    font-size: 14px;
    box-sizing: border-box;
    background: none;
    cursor: pointer;
  }

  div {
    width: 1px;
    height: 14px;
    background-color: #D3DDFF;
    margin-left: 12px;
    margin-right: 12px;
  }
`;

export { FormWrapper, LinkWrapper };