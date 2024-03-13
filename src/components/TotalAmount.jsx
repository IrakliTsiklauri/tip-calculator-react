import React from 'react'
import styled from 'styled-components';

const TotalAmount = () => {
  return (
    <TotalAmountSection>
      <p>
        Total<span className="person">/ person</span>
      </p>
      <span>$0.00</span>
    </TotalAmountSection>
  )
}

const TotalAmountSection = styled.div`
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

export default TotalAmount