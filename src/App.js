import './App.css';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <BrowserRouter>
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <Nav menuOpen={menuOpen} />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;