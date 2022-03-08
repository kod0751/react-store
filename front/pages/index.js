import React from "react";
import AppLayout from "../components/AppLayout";
import { Row, Col } from "antd";
import styled from "styled-components";

const ItemsBackground = styled.div`
  margin: auto;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  row-gap: 1rem;
`;

const AddButton = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  border-radius: 20%;
  border: none;
  background-color: #030852;
  color: #fff;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
`;

const Home = () => {
  return (
    <AppLayout>
      <Row justify="space-around" align="middle">
        <Col span={4}>
          <ItemsBackground>
            <div>Clothes $50</div>
            <AddButton>+</AddButton>
          </ItemsBackground>
        </Col>
        <Col span={4}>
          <ItemsBackground>
            <div>Shoes $100</div>
            <AddButton>+</AddButton>
          </ItemsBackground>
        </Col>
        <Col span={4}>
          <ItemsBackground>
            <div>Cellphone $119</div>
            <AddButton>+</AddButton>
          </ItemsBackground>
        </Col>
        <Col span={4}>
          <ItemsBackground>
            <div>Bicycle $500</div>
            <AddButton>+</AddButton>
          </ItemsBackground>
        </Col>
      </Row>

      <Row justify="space-around" align="middle">
        <Col span={4}>
          <ItemsBackground>
            <div>Clothes $50</div>
            <AddButton>+</AddButton>
          </ItemsBackground>
        </Col>
        <Col span={4}>
          <ItemsBackground>
            <div>Shoes $100</div>
            <AddButton>+</AddButton>
          </ItemsBackground>
        </Col>
        <Col span={4}>
          <ItemsBackground>
            <div>Cellphone $119</div>
            <AddButton>+</AddButton>
          </ItemsBackground>
        </Col>
        <Col span={4}>
          <ItemsBackground>
            <div>Bicycle $500</div>
            <AddButton>+</AddButton>
          </ItemsBackground>
        </Col>
      </Row>

      <Row justify="space-around" align="middle">
        <Col span={4}>
          <ItemsBackground>
            <div>Clothes $50</div>
            <AddButton>+</AddButton>
          </ItemsBackground>
        </Col>
        <Col span={4}>
          <ItemsBackground>
            <div>Shoes $100</div>
            <AddButton>+</AddButton>
          </ItemsBackground>
        </Col>
        <Col span={4}>
          <ItemsBackground>
            <div>Cellphone $119</div>
            <AddButton>+</AddButton>
          </ItemsBackground>
        </Col>
        <Col span={4}>
          <ItemsBackground>
            <div>Bicycle $500</div>
            <AddButton>+</AddButton>
          </ItemsBackground>
        </Col>
      </Row>
    </AppLayout>
  );
};

export default Home;
