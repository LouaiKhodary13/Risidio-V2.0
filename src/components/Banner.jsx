import '../styles/Banner.css';
import { Link, useLocation } from 'react-router-dom';
import avatar from '../assets/avatar.svg';
import stars from '../assets/stars.jpg';
import { useWallet } from '../context/WalletContext';
const Banner = () => {
  const { handleConnectWallet } = useWallet();
  const location = useLocation();
  const isCollectionsPage = location.pathname === '/collections';

  return (
    <section
      className={`${
        isCollectionsPage ? 'banner-collections ' : 'banner-container'
      }`}
    >
      <div className='flex-container'>
        <div className='flex-item-1'>
          <div className='primary-heading-container'>
            <div className='trending-container'>
              <p className='primary-heading'>Trending now</p>
            </div>
            <div className='primary-collection'>
              <h2 className='collection-heading'>
                {isCollectionsPage ? 'Collection' : 'Night sky collection'}
              </h2>
              <p className='collection-subheading'>
                {isCollectionsPage ? 'Night Sky' : 'With the stars'}
              </p>
              {isCollectionsPage && (
                <p className='collections-text'>
                  Lorem ipsum dolor sit amet, consectetur adicing elit, sed do
                  eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing
                  elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet,
                  consectetur adicing elit, sed do eiusmod tempo
                </p>
              )}
            </div>
            <div className='artist-container'>
              <img src={avatar} alt={avatar} />
              <div className='avatar-info'>
                <p className='avatar-name'>Artist</p>
                <span className='avatar-text'>Léa Jacquot</span>
              </div>
            </div>
          </div>
          {isCollectionsPage ? null : (
            <div className='btn-container'>
              <button
                type='button'
                className='buy-btn'
                onClick={handleConnectWallet}
              >
                Buy
              </button>
              <Link to='/collections'>
                <button type='button' className='collection-btn'>
                  See Collections
                </button>
              </Link>
            </div>
          )}
        </div>
        <div className='flex-item-2'>
          <div className='banner-img-container'>
            <img src={stars} alt='stars' className='banner-img' />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
