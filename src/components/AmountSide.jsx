import React from "react";
import styled from "styled-components";
import TipAmount from "./TipAmount";
import TotalAmount from "./TotalAmount";

const AmountSide = () => {
  return (
    <AmountSection>
      <TipAmount />
      <TotalAmount />
      <ResetBtn>RESET</ResetBtn>
    </AmountSection>
  );
};

const AmountSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 71, 75, 1);
  border-radius: 20px;
  padding: 25px;
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

export default AmountSide;
