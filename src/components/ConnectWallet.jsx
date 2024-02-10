import '../styles/ConnectWallet.css';
import { useWallet } from '../context/WalletContext';
import { useNavigate, useLocation } from 'react-router';
import Account from './Account';

const ConnectWallet = () => {
  const { selectedWallet, handleWalletClick, setIsOpen } = useWallet();
  const navigate = useNavigate();
  const location = useLocation();
  const isCollectionsPage = location.pathname === '/collections';
  const numberOfItems = 3;

  const handleItemClick = (walletName) => {
    handleWalletClick(walletName);
    setIsOpen(false);
    navigate('/');
  };

  const walletItems = Array.from({ length: numberOfItems }, (_, index) => (
    <div
      key={index}
      className={`wallet-item ${
        selectedWallet === `Wallet ${index + 1}` ? 'selected' : ''
      }`}
      onClick={() => {
        handleItemClick(`Wallet ${index + 1}`);
      }}
    ></div>
  ));

  return (
    <div
      className='overlay-container'
      style={{
        background: isCollectionsPage && '#fafafa',
      }}
    >
      {selectedWallet ? (
        <>
          <Account />
        </>
      ) : (
        <>
          <div className='overlay-primary-heading-container'>
            <h2 className='overlay-primary-heading'>
              Choose the wallet to connect
            </h2>
          </div>
          <div className='overlay-wallet-container'>{walletItems}</div>
        </>
      )}
    </div>
  );
};
export default ConnectWallet;
