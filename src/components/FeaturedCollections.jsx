import React from 'react';
import '../styles/FeaturedCollections.css';
import image1 from '../assets/Night is coming.jpg';
import image2 from '../assets/future.jpg';
import image3 from '../assets/nature.jpg';
import avatar1 from '../assets/avatar.svg';
import avatar2 from '../assets/julian.jpg';
import avatar3 from '../assets/maria.jpg';
import nftImage1 from '../assets/Night is coming.jpg';
import nftImage2 from '../assets/stars.jpg';
import nftImage3 from '../assets/Summer.jpg';
import nftImage4 from '../assets/Quiet.jpg';
import nftImage5 from '../assets/Travel.jpg';
import nftImage6 from '../assets/rain.jpg';
import { Link } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';

const FeaturedCollections = () => {
  const isCollectionsPage = location.pathname === '/collections';
  const collectionsData = [
    {
      id: 1,
      image: image1,
      title: 'Night Sky',
      price: '120 NFT',
      range: '0.12BTC - 0.18BTC',
      info: ' Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor...',
      artist: 'Léa Jacquot',
      artistIcon: avatar1,
    },
    {
      id: 2,
      image: image2,
      title: 'Future',
      price: '120 NFT',
      range: '0.12BTC - 0.18BTC',
      info: ' Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor...',
      artist: 'Julien',
      artistIcon: avatar2,
    },
    {
      id: 3,
      image: image3,
      title: 'Mother nature',
      price: '120 NFT',
      range: '0.12BTC - 0.18BTC',
      info: ' Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor...',
      artist: 'Maria',
      artistIcon: avatar3,
    },
  ];
  const nftData = [
    {
      id: 1,
      image: nftImage1,
      title: 'Night is Coming',
      price: '0.12 BTC',
    },
    {
      id: 2,
      image: nftImage2,
      title: 'With the stars',
      price: '0.12 BTC',
    },
    {
      id: 3,
      image: nftImage3,
      title: 'Summer',
      price: '0.12 BTC',
    },
    {
      id: 4,
      image: nftImage4,
      title: 'Quiet',
      price: '0.12 BTC',
    },
    {
      id: 5,
      image: nftImage5,
      title: 'Travel',
      price: '0.12 BTC',
    },
    {
      id: 6,
      image: nftImage6,
      title: 'Rain',
      price: '0.12 BTC',
    },
  ];
  const { addItem } = useWallet();

  return (
    <section className='featured-container'>
      <div className='featured-header-container'>
        <h2 className='featured-primary'>
          {isCollectionsPage ? 'NFT' : 'Collections'}
        </h2>
      </div>
      <div className='grid-container'>
        {/* if in collection page show nft data */}
        {isCollectionsPage
          ? nftData.map((item) => {
              const { id, title, image, price } = item;
              return (
                <div key={id} className='grid-item-container'>
                  <div className='grid-item-img' style={{ height: '34.5rem' }}>
                    <img
                      src={image}
                      alt={title}
                      className='item-img'
                      style={{
                        height: '34.5rem',
                      }}
                    />
                    <div className='button-overlay'>
                      <button onClick={() => addItem(id, item)}>Buy --></button>
                    </div>
                  </div>
                  <div className='grid-item-heading-container'>
                    <h2 className='grid-item-primary-heading'>{title}</h2>
                    <p className='grid-item-primary-price'>{price}</p>
                  </div>
                </div>
              );
            })
          : collectionsData.map((item) => {
              {
                /* if in collection page show collectionsData  */
              }
              const {
                id,
                image,
                title,
                price,
                range,
                info,
                artist,
                artistIcon,
              } = item;
              return (
                <div key={id} className='grid-item-container'>
                  <div className='grid-item-img'>
                    <img src={image} alt={title} className='item-img' />
                    <div className='button-overlay'>
                      <Link to='/collections'>
                        <button>Go to collection --></button>
                      </Link>
                    </div>
                  </div>
                  <div className='grid-item-heading-container'>
                    <h2 className='grid-item-primary-heading'>{title}</h2>
                    <p className='grid-item-primary-price'>{price}</p>
                  </div>
                  <div className='grid-item-primary-info'>
                    <p className='grid-item-primary-price-range'>
                      Price Range : {range}
                    </p>
                    <p className='grid-item-primary-text'>{info}</p>
                  </div>
                  <div className='grid-item-avatar-container'>
                    <img
                      src={artistIcon}
                      alt={artist}
                      className='grid-item-avatar-img'
                    />
                    <div className='grid-item-avatar-info'>
                      <p className='grid-item-avatar-name'>Artist</p>
                      <span className='grid-item-avatar-text'>{artist}</span>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </section>
  );
};
export default FeaturedCollections;
