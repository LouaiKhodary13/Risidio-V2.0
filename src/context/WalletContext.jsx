import { createContext, useContext, useState } from 'react';

const WalletContext = createContext();
const WalletProvider = ({ children }) => {
  // opening the wallet account
  const [isOpen, setIsOpen] = useState(false);
  // choosing a wallet
  const [selectedWallet, setSelectedWallet] = useState(null);

  const [showAccount, setShowAccount] = useState(false);
  // saving the wallet in the state

  // cart state
  const [cart, setCart] = useState([]);

  // opening the wallet
  const handleConnectWallet = () => {
    setIsOpen(true);
  };
  // saving the wallet in the state
  const handleWalletClick = (walletName) => {
    setSelectedWallet(walletName);
  };

  // Adding item to the cart
  const addItem = (id, item) => {
    setCart([...cart, item]);
  };

  return (
    <WalletContext.Provider
      value={{
        isOpen,
        setIsOpen,
        handleConnectWallet,
        selectedWallet,
        handleWalletClick,
        setSelectedWallet,
        setShowAccount,
        showAccount,
        cart,
        setCart,
        addItem,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

const useWallet = () => {
  return useContext(WalletContext);
};

export { WalletContext, WalletProvider, useWallet };
