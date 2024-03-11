import styled from "styled-components";

function App() {
  const btnsArr = ["5%", "10%", "15%", "25%", "50%"];

  return (
    <Container>
      <PercentSide>
        <BillSection>
          <label>Bill</label>
          <input type="text" placeholder="0" />
          <img src="/images/dollar.png" alt="dollar" />
        </BillSection>
        <SelectTip>
          <p>Select Tip %</p>
          <Buttons>
            {btnsArr.map((btn) => {
              return <Button>{btn}</Button>;
            })}
            <input type="text" placeholder="Custom" />
          </Buttons>
        </SelectTip>
        <NumberOfPeople>
          <label>Number of People</label>
          <input type="text" placeholder="0" />
          <img src="/images/shape.png" alt="shape" />
        </NumberOfPeople>
      </PercentSide>
      <AmountSide>
        <TipAmount>
          <p>
            Tip Amount<span className="person">/ person</span>
          </p>
          <span>$0.00</span>
        </TipAmount>
        <TotalAmount>
          <p>
            Total<span className="person">/ person</span>
          </p>
          <span>$0.00</span>
        </TotalAmount>
        <ResetBtn>RESET</ResetBtn>
      </AmountSide>
    </Container>
  );
}

const Container = styled.div`
  width: 920px;
  /* height: 480px; */
  padding: 20px 20px 20px 40px;
  border-radius: 20px;
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 35px;
`;

const PercentSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const BillSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  position: relative;
  margin-bottom: 30px;

  & label {
    color: rgba(94, 122, 125, 1);
    font-size: 16px;
    font-weight: 700;
  }

  & input {
    font-family: "Space Mono", monospace;
    background-color: rgba(243, 249, 250, 1);
    border: none;
    outline-color: #0bd5df;
    padding: 15px;
    border-radius: 8px;
    text-align: right;
    font-size: 24px;
    font-weight: 700;
    color: rgba(0, 71, 75, 1);
  }

  & img {
    width: 15px;
    height: 25px;
    position: absolute;
    left: 25px;
    top: 54px;
  }
`;

const SelectTip = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  & p {
    font: 16px;
    font-weight: 700;
    color: rgba(94, 122, 125, 1);
    margin-bottom: 20px;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: space-between;

  & input {
    font-family: "Space Mono", monospace;
    width: 117px;
    height: 48px;
    border: none;
    border-radius: 8px;
    font-size: 24px;
    font-weight: 700;
    background-color: rgba(243, 249, 250, 1);
    color: rgba(84, 120, 120, 1);
    outline: none;
    padding: 8px;
  }

  &::placeholder {
    color: rgba(84, 120, 120, 1);
  }
`;

const Button = styled.button`
  font-family: "Space Mono", monospace;
  width: 117px;
  height: 48px;
  border: none;
  border-radius: 8px;
  background-color: rgba(0, 71, 75, 1);
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background-color: rgba(159, 232, 223, 1);
    color: rgba(0, 71, 75, 1);
  }
`;

const NumberOfPeople = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  position: relative;
  margin-bottom: 30px;

  & label {
    color: rgba(94, 122, 125, 1);
    font-size: 16px;
    font-weight: 700;
  }

  & input {
    font-family: "Space Mono", monospace;
    background-color: rgba(243, 249, 250, 1);
    border: none;
    outline-color: #0bd5df;
    padding: 15px;
    border-radius: 8px;
    text-align: right;
    font-size: 24px;
    font-weight: 700;
    color: rgba(0, 71, 75, 1);
  }

  & img {
    width: 17px;
    height: 25px;
    position: absolute;
    left: 25px;
    top: 54px;
  }
`;

const AmountSide = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 71, 75, 1);
  border-radius: 20px;
  padding: 25px;
`;

const TipAmount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;

  & p {
    display: flex;
    flex-direction: column;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
  }

  .person {
    color: rgba(127, 157, 159, 1);
    font-size: 13px;
    font-size: 700;
  }

  & span {
    font-size: 48px;
    font-weight: 700;
    color: rgba(38, 194, 174, 1);
  }
`;

const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & p {
    display: flex;
    flex-direction: column;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
  }

  .person {
    color: rgba(127, 157, 159, 1);
    font-size: 13px;
    font-size: 700;
  }

  & span {
    font-size: 48px;
    font-weight: 700;
    color: rgba(38, 194, 174, 1);
  }
`;

const ResetBtn = styled.button`
  font-family: "Space Mono", monospace;
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 5px;
  background-color: rgba(38, 194, 174, 1);
  color: rgba(0, 71, 75, 1);
  margin-top: 44%;
  font-size: 20px;
  font-weight: 700;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background-color: rgba(159, 232, 223, 1);
    color: rgba(0, 71, 75, 1);
  }
`;

export default App;
