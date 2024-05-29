import React, { useRef, useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { connectToMetamask, connectToTrustWallet } from '../Components/WalletConnect';
import WalletModal from '../Components/WalletModal';

function Navbar({ openModal }) {
  const navRef = useRef();
//   const navigate = useNavigate();
//   const location = useLocation(); 

//   const handleImageClick = () => {
//     navigate('/');
//   };

  const [show, handleShow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const [hover, setHover] = useState(false);

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
    <header>
      <div className={`wrapper ${show && "nav_white"}`}>
        <img  src="./logo2.png" alt="Logo" />
        <div>
          <nav ref={navRef}>
            {/* <Link to="/" className={location.pathname === "/" ? "active-link" : ""} onClick={closeNavbar}>Home</Link>
            <Link to="/market" className={location.pathname === "/market" ? "active-link" : ""} onClick={closeNavbar}>Passive Income Assets</Link>
            <Link to="/resale" className={location.pathname === "/resale" ? "active-link" : ""} onClick={closeNavbar}>Investor Resale Hub</Link>
            <Link to="/house" className={location.pathname === "/house" ? "active-link" : ""} onClick={closeNavbar}>My House</Link>
            <Link to="/stake" className={location.pathname === "/stake" ? "active-link" : ""} onClick={closeNavbar}>Staking</Link>
            <Link to="/contact" className={location.pathname === "/contact" ? "active-link" : ""} onClick={closeNavbar}>Contact Us</Link>
            <Link to="/profile" className={location.pathname === "/profile" ? "active-link" : ""} onClick={closeNavbar}>My Profile</Link> */}

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
