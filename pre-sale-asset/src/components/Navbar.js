import React, { useRef, useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useWallet } from '../Components/WalletContext';

function Navbar({ openModal }) {
  const navRef = useRef();
  const navigate = useNavigate();
  const location = useLocation(); 

  const handleImageClick = () => {
    navigate('/');
  };

  const [show, handleShow] = useState(false);
  const { walletAddress, setWalletAddress, walletStatus, setWalletStatus } = useWallet();

  const closeNavbar = () => {
    if (navRef.current && navRef.current.classList.contains('responsive_nav')) {
      navRef.current.classList.remove('responsive_nav');
    }
  };

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        setWalletStatus('connecting');
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
        setWalletStatus('connected');
      } catch (error) {
        console.error("Error connecting to MetaMask", error);
        setWalletStatus('disconnected');
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this app.");
      setWalletStatus('disconnected');
    }
  };

  const connectTrustWallet = async () => {
    // Logic for connecting Trust Wallet
    alert("Trust Wallet connection logic not implemented yet.");
  };

  const WalletConnectButton = () => {
    return (
      <div className="dropdown">
        <button className="button">
          {walletStatus === 'connected' ? 'Wallet Connected' : 'Connect Wallet'}
        </button>
        {walletStatus === 'disconnected' && (
          <div className="dropdown-menu">
            <button onClick={connectMetaMask}>MetaMask</button>
            <button onClick={connectTrustWallet}>Trust Wallet</button>
          </div>
        )}
      </div>
    );
  };

  return (
    <header>
      <div className={`wrapper ${show && "nav_white"}`}>
        <img onClick={handleImageClick} src="./logo2.png" alt="Logo" />
        <div>
          <nav ref={navRef}>
            <Link to="/" className={location.pathname === "/" ? "active-link" : ""} onClick={closeNavbar}>Home</Link>
            <Link to="/market" className={location.pathname === "/market" ? "active-link" : ""} onClick={closeNavbar}>Passive Income Assets</Link>
            <Link to="/resale" className={location.pathname === "/resale" ? "active-link" : ""} onClick={closeNavbar}>Investor Resale Hub</Link>
            <Link to="/house" className={location.pathname === "/house" ? "active-link" : ""} onClick={closeNavbar}>My House</Link>
            <Link to="/stake" className={location.pathname === "/stake" ? "active-link" : ""} onClick={closeNavbar}>Staking</Link>
            <Link to="/contact" className={location.pathname === "/contact" ? "active-link" : ""} onClick={closeNavbar}>Contact Us</Link>
            <Link to="/profile" className={location.pathname === "/profile" ? "active-link" : ""} onClick={closeNavbar}>My Profile</Link>
            <WalletConnectButton />
            <button className="nav-btn nav-close-btn" onClick={closeNavbar}>
              <FaTimes />
            </button>
          </nav>
          <span>
            <button className="nav-btn" onClick={showNavbar}>
              <FaBars />
            </button>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
