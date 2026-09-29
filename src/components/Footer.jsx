import { Link } from 'react-router-dom';
import { FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <h3>INFINITY.OR</h3>
          <p>
            Timeless essentials for the modern wardrobe. Made slowly, worn
            forever.
          </p>
        </div>

        <div className="footer__col">
          <h4>Shop</h4>
          <ul>
            <li><Link to="/shop/new-arrivals">New Arrivals</Link></li>
            <li><Link to="/shop/knitwear">Knitwear</Link></li>
            <li><Link to="/shop/outerwear">Outerwear</Link></li>
            <li><Link to="/shop/accessories">Accessories</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/journal">Journal</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Support</h4>
          <ul>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/returns">Returns</Link></li>
            <li><Link to="/size-guide">Size Guide</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} InfinityOR. All rights reserved.</span>
        <div className="footer__socials">
          <a href="#" aria-label="Instagram"><FiInstagram /></a>
          <a href="#" aria-label="Twitter"><FiTwitter /></a>
          <a href="#" aria-label="Facebook"><FiFacebook /></a>
        </div>
      </div>
    </footer>
  );
}