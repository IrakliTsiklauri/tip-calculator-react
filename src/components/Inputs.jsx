import React from "react";
import styled from "styled-components";

const Inputs = () => {
  return (
    <BillSection>
      <label>Bill</label>
      <input type="text" placeholder="0" />
      {/* <img src="/images/dollar.png" alt="dollar" /> */}
    </BillSection>
  );
};

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

  /* & img {
    width: 15px;
    height: 25px;
    position: absolute;
    left: 25px;
    top: 54px;
  } */
`;

export default Inputs;
