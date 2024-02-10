import Banner from '../components/Banner';
import FeaturedCollections from '../components/FeaturedCollections';
import '../styles/Collections.css';
const Collections = () => {
  return (
    <>
      <div className='collections-container'>
        {/*  Banner Component*/}
        <Banner />
        {/* FeaturedCollections Component */}
        <FeaturedCollections />
      </div>
    </>
  );
};

export default Collections;
