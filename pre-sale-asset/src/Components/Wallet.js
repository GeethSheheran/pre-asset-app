// src/App.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connectToMetamask, connectToTrustWallet } from '../Components/WalletConnect';
import WalletModal from '../Components/WalletModal';

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
      <img src='https://cdn.iconscout.com/icon/premium/png-256-thumb/e-wallet-2691048-2235395.png' />
      <Title className='header2'>Let's get started!</Title>
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
              <button className='button' onClick={handleWalletConnectClick}>Connect Wallet</button>
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
  min-height: 70vh;
  background-color: #121212;
  color: white;

  img{
    width: 13%;
  }
`;

const WalletIcon = styled.div`
  width: 80px;
  height: 80px;
  background-color: #333;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  margin-top: 40px;

`;

const Description = styled.p`
  font-size: 16px;
  text-align: center;
  max-width: 600px;
  margin-bottom: 30px;
  letter-spacing: 1.8px;
  line-height: 2rem;
`;

