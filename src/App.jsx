import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './components/Error';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { WalletProvider } from './context/WalletContext';
import Collections from './pages/Collections';
const App = () => {
  return (
    <>
      <WalletProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/collections' element={<Collections />} />
            <Route path='*' element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </WalletProvider>
    </>
  );
};

export default App;
