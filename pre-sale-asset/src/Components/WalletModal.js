// src/components/WalletModal.js
import React from 'react';
import styled from 'styled-components';

const WalletModal = ({ closeModal, handleMetamaskConnect, handleTrustWalletConnect }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={closeModal}>&times;</CloseButton>
        <WalletOption onClick={handleMetamaskConnect}>
          <WalletIcon src="https://cdn3d.iconscout.com/3d/free/thumb/free-metamask-6432337-5326393.png" alt="Metamask" />
          <WalletDetails>
            <WalletName>Metamask</WalletName>
            <WalletDescription>Connect with MetaMask</WalletDescription>
          </WalletDetails>
        </WalletOption>
        <Divider />
        <WalletOption onClick={handleTrustWalletConnect}>
          <WalletIcon src="https://trustwallet.com/assets/images/media/assets/TWT.png" alt="Trust Wallet" />
          <WalletDetails>
            <WalletName>Trust Wallet</WalletName>
            <WalletDescription>Connect with Trust Wallet</WalletDescription>
          </WalletDetails>
        </WalletOption>
        {/* <Divider />
        <WalletOption disabled>
          <WalletIcon src="https://walletconnect.org/walletconnect-logo.svg" alt="WalletConnect" />
          <WalletDetails>
            <WalletName>WalletConnect</WalletName>
            <WalletDescription>Scan with WalletConnect</WalletDescription>
          </WalletDetails>
        </WalletOption> */}
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #2c2c2c;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 10px;
  width: 400px;
  position: relative;
  text-align: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;

const WalletOption = styled.button`
  display: flex;
  align-items: center;
  background: #1c1c1c;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  margin: 0.2rem 0;
  cursor: pointer;
  width: 100%;
  color: white;
  &:disabled {
    background: #333;
    cursor: not-allowed;
  }
`;

const WalletIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 1rem;
`;

const WalletDetails = styled.div`
  width: 100%;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const WalletName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const WalletDescription = styled.div`
  font-size: 0.9rem;
  color: #bbb;
`;

const Divider = styled.div`
  height: 1px;
  background: #444;
  margin: 1rem 0;
`;

export default WalletModal;
