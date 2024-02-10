import '../styles/Footer.css';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/TWITTER.svg';
import discord from '../assets/DISCORD.svg';
import instagram from '../assets/INSTAGRAM.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // navigate to Home Pages
  const handleLogoClick = () => {
    navigate('/');
  };
  // Check if the current route is not '/connect-wallet'
  if (location.pathname === '/connect-wallet') {
    return null;
  }
  return (
    <footer>
      <ul className='cta'>
        <Link onClick={handleLogoClick}>
          <h2 className='logo'>MARKETPLACE.</h2>
        </Link>

        <div className='links'>
          <ul className='social'>
            <li>
              <a href=''>
                <img src={facebook} alt='facebook' />
              </a>
            </li>
            <li>
              <a href=''>
                <img src={twitter} alt='twitter' />
              </a>
            </li>
            <li>
              <a href=''>
                <img src={discord} alt='discord' />
              </a>
            </li>
            <li>
              <a href=''>
                <img src={instagram} alt='instagram' />
              </a>
            </li>
          </ul>
        </div>
      </ul>
    </footer>
  );
};

export default Footer;
