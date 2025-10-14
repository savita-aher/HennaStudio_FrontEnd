import { Link } from 'react-router-dom';
import '../styles/navbar.css'; // optional for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/Designs">Designs</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/faq">Questions</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;