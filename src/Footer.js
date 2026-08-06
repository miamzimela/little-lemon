import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <h2>Little Lemon</h2>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
        </ul>
      </nav>
      <address>
        <p>123 Chicago Ave, Chicago, IL</p>
        <p>Open daily: 5pm - 11pm</p>
        <p>Prefer to book by phone? Call <a href="tel:+13125550199">(312) 555-0199</a></p>
      </address>
      <div>
        <a href="#" aria-label="Visit our Facebook page">Facebook</a>
        <a href="#" aria-label="Visit our Instagram page">Instagram</a>
        <a href="#" aria-label="Visit our Twitter page">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;