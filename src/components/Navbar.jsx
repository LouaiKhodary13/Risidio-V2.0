import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import ConnectWallet from './ConnectWallet';
import { useWallet } from '../context/WalletContext';

const Navbar = () => {
  const { isOpen, setIsOpen, selectedWallet, setShowAccount } = useWallet();
  const isCollectionsPage = location.pathname === '/collections';
  const navigate = useNavigate();
  const handleLogoClick = () => {
    setIsOpen(false);
    setShowAccount(true); // Ensure account remains open when navigating to home page
    navigate('/');
  };
  return (
    <nav
      style={{
        background: isCollectionsPage
          ? '#fafafa'
          : isOpen
          ? 'rgba(230, 233, 242, 1)'
          : 'transparent',
      }}
    >
      <div className='nav-header'>
        <Link onClick={handleLogoClick} to='/'>
          <h2 className='logo'>MARKETPLACE.</h2>
        </Link>
        <div
          className='btn-header-container'
          style={{
            background: isCollectionsPage
              ? '#fafafa'
              : isOpen && 'rgba(230, 233, 242, 1)',
          }}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <button className='btn-header'>
            {selectedWallet ? 'Account' : 'Connect Wallet'}
          </button>
        </div>
      </div>
      {isOpen && <ConnectWallet />}
    </nav>
  );
};
export default Navbar;
