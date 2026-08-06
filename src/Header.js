import { Link } from 'react-router-dom';
import logo from './images/Logo .svg';
import hamburgerIcon from './images/hamburger-icon.svg';
import basketIcon from './images/basket-icon.svg';

function Header({ menuOpen, toggleMenu }) {
  return (
    <header>
      <button
        className="menu-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={toggleMenu}
      >
        <img src={hamburgerIcon} alt="" />
      </button>

      <img src={logo} alt="Little Lemon Logo" className="header-logo" />

      <Link to="/order" className="basket-link" aria-label="View your order basket">
        <img src={basketIcon} alt="" />
      </Link>
    </header>
  );
}

export default Header;