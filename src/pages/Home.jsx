import '../styles/Home.css';
import TimeSlider from '../components/TimeSlider';
import Banner from '../components/Banner';
import FeaturedCollections from '../components/FeaturedCollections';
import { useWallet } from '../context/WalletContext';
import Account from '../components/Account';
const Home = () => {
  const { isOpen, showAccount } = useWallet();
  return (
    <>
      {!isOpen && (
        <>
          {/* Time Slider Component */}
          <TimeSlider />
          {/*  Banner Component*/}
          <Banner />
          {/* FeaturedCollections Component */}
          <FeaturedCollections />
          {showAccount && <Account />}
        </>
      )}
    </>
  );
};

export default Home;
