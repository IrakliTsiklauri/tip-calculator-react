import React from 'react'
import styled from 'styled-components';

const Buttons = () => {
    const btnsArr = ["5%", "10%", "15%", "25%", "50%"];

  return (
    <ButtonsArea>
    {btnsArr.map((btn) => {
      return <Button>{btn}</Button>;
    })}
    <input type="text" placeholder="Custom" />
  </ButtonsArea>
  )
}

const ButtonsArea = styled.div`
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


export default Buttons