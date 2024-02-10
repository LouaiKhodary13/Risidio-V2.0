import { useState } from 'react';
import '../styles/Account.css';
import { useWallet } from '../context/WalletContext';

const Account = () => {
  const { cart } = useWallet();
  // state for showing and closing account
  const [showAccount, setShowAccountLocally] = useState(true);
  // function to handle the account state
  const handleIconClick = () => {
    setShowAccountLocally((prevShowAccount) => !prevShowAccount);
  };
  return (
    <div className={`account-container ${showAccount ? '' : 'hide-account'}`}>
      <div className='account-item-1'>
        <div className='icon' onClick={handleIconClick}>
          <svg
            width='9'
            height='13'
            viewBox='0 0 9 13'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1 11.4824L7.67081 6.24113L1 0.999847'
              stroke='#02071D'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <svg
            width='9'
            height='13'
            viewBox='0 0 9 13'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1 11.4824L7.67081 6.24113L1 0.999847'
              stroke='#02071D'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </div>
      <div className='account-item-2'>
        <div className='user-container'>
          <div className='user-info'>
            <div className='user-img'></div>
            <div className='user-heading'>
              <p>STV6Q...4Z7WD</p>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6 6V2C6 0.9 6.9 0 8 0H18C18.5304 0 19.0391 0.210714 19.4142 0.585786C19.7893 0.960859 20 1.46957 20 2V12C20 12.5304 19.7893 13.0391 19.4142 13.4142C19.0391 13.7893 18.5304 14 18 14H14V18C14 18.5304 13.7893 19.0391 13.4142 19.4142C13.0391 19.7893 12.5304 20 12 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V8C0 6.9 0.9 6 2 6H6ZM8 6H12C12.5304 6 13.0391 6.21071 13.4142 6.58579C13.7893 6.96086 14 7.46957 14 8V12H18V2H8V6ZM2 8V18H12V8H2Z'
                  fill='#02071D'
                />
              </svg>
            </div>
          </div>
          <div>
            <svg
              width='30'
              height='30'
              viewBox='0 0 30 30'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.43306 2.5 3.04887 7.564 2.53943 14H15.0858L10.5429 9.45711L11.9571 8.04289L18.2071 14.2929L18.9142 15L18.2071 15.7071L11.9571 21.9571L10.5429 20.5429L15.0858 16H2.53943C3.04887 22.436 8.43306 27.5 15 27.5Z'
                fill='#02071D'
              />
            </svg>
          </div>
        </div>
        <div className='user-checkout-container'>
          <p className='checkout-wallet'>In your wallet</p>
          <p className='checkout-wallet-price'>0.129 BTC</p>
          <p className='user-nft'>Your NFTs</p>
        </div>
        {/* if empty cart */}
        {cart.length < 1 ? (
          <div className='user-wallet'>
            <p className='user-wallet-info'> You don’t own any NFTs yet</p>
            <button type='button' className='wallet-btn'>
              Start Shopping
            </button>
          </div>
        ) : (
          // if cart have items
          <div className='user-wallet-cart'>
            {cart.map((item) => {
              return (
                <div className='user-wallet-item-images' key={item.id}>
                  <img
                    className='user-wallet-image'
                    src={item.image}
                    alt={item.name}
                    style={{
                      borderRadius: '4.7rem',
                    }}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default Account;
