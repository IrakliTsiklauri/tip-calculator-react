import styled from "styled-components";
import PercentSide from "./components/PercentSide";
import AmountSide from "./components/AmountSide";

function App() {
  return (
    <Container>
      <PercentSide />
      <AmountSide />
    </Container>
  );
}

const Container = styled.div`
  width: 920px;
  padding: 20px 20px 20px 40px;
  border-radius: 20px;
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 35px;
`;

export default App;
