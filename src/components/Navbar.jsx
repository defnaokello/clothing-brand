import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiHeart, FiMenu, FiX, FiSearch } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import SearchOverlay from './SearchOverlay';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { count, setIsOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
    setSearchOpen(false);
  };

  const isHome = location.pathname === '/';
  const transparent = isHome && !scrolled && !searchOpen;

  return (
    <>
      <header className={`navbar ${transparent ? 'transparent' : 'solid'}`}>
        <div className="navbar__inner">
          <button
            className="navbar__menuBtn"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu />
          </button>

          <nav className="navbar__links">
            <NavLink to="/shop" onClick={handleNavClick}>Shop</NavLink>
            <NavLink to="/about" onClick={handleNavClick}>About</NavLink>
          </nav>

          <Link to="/" className="navbar__logo" onClick={handleNavClick}>
            INFINITY.OR
          </Link>

          <nav className="navbar__links">
            <Link to="/journal" onClick={handleNavClick}>Journal</Link>
            <button
              className="navbar__cart"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
            >
              <FiSearch />
            </button>
            <button
              className="navbar__cart"
              onClick={() => setIsOpen(true)}
              aria-label="Open wishlist"
            >
              <FiHeart />
              {count > 0 && <span className="navbar__badge">{count}</span>}
            </button>
          </nav>
        </div>

        <div className={`navbar__mobileMenu ${menuOpen ? 'open' : ''}`}>
          <button
            className="navbar__closeBtn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <FiX />
          </button>
          <nav className="navbar__mobileLinks">
            <NavLink to="/" onClick={handleNavClick}>Home</NavLink>
            <NavLink to="/shop" onClick={handleNavClick}>Shop</NavLink>
            <NavLink to="/about" onClick={handleNavClick}>About</NavLink>
            <NavLink to="/journal" onClick={handleNavClick}>Journal</NavLink>
          </nav>
        </div>
      </header>

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}