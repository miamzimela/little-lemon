import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Menu' },
  { to: '/reservations', label: 'Reservations' },
  { to: '/order', label: 'Order Online' },
  { to: '/login', label: 'Login' },
];

function Nav({ menuOpen }) {
  const location = useLocation();

  return (
    <nav>
      <ul className={menuOpen ? 'nav-open' : ''}>
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={location.pathname === link.to ? 'active-link' : ''}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;