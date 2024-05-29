import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1000px;
  margin: 80px auto;
  padding-top: 80px;
  padding-bottom: 80px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 10 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:#222;
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 5px;
`;

const Header = styled.h2`
  color: #fff;
`;

const Paragraph = styled.p`
  color: #ddd;
  text-align: center;
`;

const StyledButton = styled.button`
  margin-top: 20px;
  display: inline-block;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  z-index: 1;
  color: #fff;
  padding: 1em 4.5em;
  cursor: pointer;
  font-size: 13.5px;
  border-radius: 0.5em;
  background-color: transparent;
  font-family: "Titillium Web", sans-serif;
  letter-spacing: 1.5px;
  border: 2px solid #00FFD5;

  &:active {
    color: #666;
  }

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  &:after {
    content: "";
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: #008D9C;
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  &:hover {
    color: #ffffff;
    border: 1px solid #008D9C;
  }

  &:hover:before {
    top: -35%;
    background-color: #008D9C;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  &:hover:after {
    top: -45%;
    background-color: #008D9C;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }
`;

const Body = () => {
  return (
    <Container>
      <Image src="./wallet.png" alt="Description of the image" />
      <Header>Let's get started</Header>
      <Paragraph>
        You will  need to connect your Wallet and sign proving you own this Wallet in order to continue
      </Paragraph>
      <StyledButton>Connect Wallet</StyledButton>
    </Container>
  );
};

export default Body;
