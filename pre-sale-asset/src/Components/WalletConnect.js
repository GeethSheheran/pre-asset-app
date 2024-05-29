// src/utils/wallet.js
import Web3 from 'web3';

export const connectToMetamask = async () => {
  if (!window.ethereum || !window.ethereum.isMetaMask) {
    alert("Please install MetaMask!");
    throw new Error("MetaMask not installed");
  }

  const web3 = new Web3(window.ethereum);

  try {
    // Request account access
    await window.ethereum.request({ method: 'eth_requestAccounts' });

    // Check if the user is connected to the BNB chain (Chain ID 56 for BNB Mainnet)
    const chainId = await web3.eth.getChainId();
    if (chainId !== 56) {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x38' }], // 56 in hex
        });
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask
        if (switchError.code === 4902) {
          alert("Please add the BNB chain to MetaMask!");
        }
        throw switchError;
      }
    }

    const accounts = await web3.eth.getAccounts();
    console.log("Account address:", accounts[0]);
    return accounts[0];
  } catch (error) {
    if (error.code === -32002) {
      alert("MetaMask is already processing a request. Please wait.");
    } else {
      console.error("Error connecting to MetaMask", error);
    }
    throw error;
  }
};

export const connectToTrustWallet = async () => {
  if (!window.ethereum || !window.ethereum.isTrust) {
    alert("Please install Trust Wallet!");
    throw new Error("Trust Wallet not installed");
  }

  const web3 = new Web3(window.ethereum);

  try {
    // Request account access
    await window.ethereum.request({ method: 'eth_requestAccounts' });

    // Check if the user is connected to the BNB chain (Chain ID 56 for BNB Mainnet)
    const chainId = await web3.eth.getChainId();
    if (chainId !== 56) {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x38' }], // 56 in hex
        });
      } catch (switchError) {
        // This error code indicates that the chain has not been added to the wallet
        if (switchError.code === 4902) {
          alert("Please add the BNB chain to Trust Wallet!");
        }
        throw switchError;
      }
    }

    const accounts = await web3.eth.getAccounts();
    console.log("Account address:", accounts[0]);
    return accounts[0];
  } catch (error) {
    if (error.code === -32002) {
      alert("Trust Wallet is already processing a request. Please wait.");
    } else {
      console.error("Error connecting to Trust Wallet", error);
    }
    throw error;
  }
};
