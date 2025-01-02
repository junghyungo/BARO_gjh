import styled from 'styled-components';

import HeaderBar from '../../components/Common/HeaderBar/HeaderBar';
import NavagationBar from '../../components/Common/NavigationBar/NavigationBar';

const Container = styled.div`
  background: linear-gradient(to bottom, #5175FF, #CFDAE6);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const Home = () => {
  return (
    <Container>
      <HeaderBar />
      <NavagationBar />
    </Container>
  )
};
export default Home;