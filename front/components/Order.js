import React from "react";
import styled from "styled-components";

const EmptyBox = styled.div`
  margin-top: 10px;
  background: #fff;
  border: 0.05rem solid #d9d9d9;
  border-radius: 6px;
  padding: 3.2rem 1.6rem;
  text-align: center;
`;

const Order = () => {
  return (
    <EmptyBox>
      <div className="title">You don't have any orders</div>
      <div className="subtitle">Click on a + to add an order</div>
    </EmptyBox>
  );
};

export default Order;
