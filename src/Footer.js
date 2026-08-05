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
      <div>
        <p>123 Chicago Ave, Chicago, IL</p>
        <p>Open daily: 5pm - 11pm</p>
      </div>
      <div>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;