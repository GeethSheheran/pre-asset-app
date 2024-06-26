// src/App.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connectToMetamask, connectToTrustWallet } from './WalletConnect';
import WalletModal from './WalletModal';

const Wallet = () => {

  const [show, handleShow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const [hover, setHover] = useState(false);

  const handleWalletConnectClick = () => {
    setIsModalOpen(true);
  };

  const handleWalletDisconnect = () => {
    setWalletAddress(null);
  };

  const formatAddress = (address) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  useEffect(() => {
    const checkWalletConnection = async () => {
      if (window.ethereum && window.ethereum.selectedAddress) {
        setWalletAddress(window.ethereum.selectedAddress);
      }
    };
    checkWalletConnection();
  }, []);

  const handleMetamaskConnect = async () => {
    try {
      const address = await connectToMetamask();
      setWalletAddress(address);
      setIsModalOpen(false);
      window.location.reload();
    } catch (error) {
      console.error("Error connecting to Metamask", error);
    }
  };

  const handleTrustWalletConnect = async () => {
    try {
      const address = await connectToTrustWallet();
      setWalletAddress(address);
      setIsModalOpen(false);
      window.location.reload();
    } catch (error) {
      console.error("Error connecting to Trust Wallet", error);
    }
  };

  return (
    <Container>
      <WalletImage src='https://cdn.iconscout.com/icon/premium/png-256-thumb/e-wallet-2691048-2235395.png' />
      <Title>Let's get started!</Title>
      <Description>
        You will need to connect your wallet in order to continue.
      </Description>
      {walletAddress ? (
        <button
        className='button' 
          onClick={handleWalletDisconnect}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {hover ? 'Disconnect' : formatAddress(walletAddress)}
        </button>
      ) : (
        <button className='button'n onClick={handleWalletConnectClick}>Connect Wallet</button>
      )}

      {isModalOpen && (
        <WalletModal 
          closeModal={() => setIsModalOpen(false)} 
          handleMetamaskConnect={handleMetamaskConnect}
          handleTrustWalletConnect={handleTrustWalletConnect}
        />
      )}
    </Container>
  );
};

export default Wallet;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  background-color: #121212;
  color: white;
  padding: 20px;
  width:60%;
  margin: 0 auto;
  border-radius: 10px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const WalletImage = styled.img`
  width: 13%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 25%;
  }

  @media (max-width: 480px) {
    width: 35%;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  margin-top: 40px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  text-align: center;
  max-width: 600px;
  margin-bottom: 30px;
  letter-spacing: 1.8px;
  line-height: 2rem;

  @media (max-width: 768px) {
    font-size: 14px;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Button = styled.button`
  background-color: #1db954;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #14843b;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;
