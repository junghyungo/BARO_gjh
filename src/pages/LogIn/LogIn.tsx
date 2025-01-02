import Logo from '../../components/Common/Logo/Logo';
import LogInForm from '../../components/Auth/LogInForm/LogInForm';

import styled from 'styled-components';

const Container = styled.div`
  background: linear-gradient(to bottom, #5175FF, #CFDAE6);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const LogIn = () => {
  return (
    <Container>
      <Logo />
      <LogInForm />
    </Container>
  )
};
export default LogIn;