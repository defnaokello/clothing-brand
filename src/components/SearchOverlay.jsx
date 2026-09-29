import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiX } from 'react-icons/fi';
import { products } from '../data/products';

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setQuery('');
    onClose();
  }, [onClose]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && handleClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handleClose]);

  const results =
    query.trim().length === 0
      ? []
      : products.filter((p) => {
          const q = query.toLowerCase();
          return (
            p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q)
          );
        });

  const suggestions = ['Knitwear', 'Outerwear', 'Shirts', 'New Arrivals', 'Accessories'];

  return (
    <div className={`search-overlay ${isOpen ? 'open' : ''}`}>
      <div className="search-overlay__header">
        <div className="container">
          <div className="search-overlay__inputWrap">
            <FiSearch className="search-overlay__icon" />
            <input
              ref={inputRef}
              type="text"
              className="search-overlay__input"
              placeholder="Search for products…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="search-overlay__close"
              onClick={handleClose}
              aria-label="Close search"
            >
              <FiX />
            </button>
          </div>
        </div>
      </div>

      <div className="search-overlay__body">
        <div className="container">
          {query.trim().length === 0 ? (
            <div className="search-overlay__suggestions">
              <span className="eyebrow">Popular Searches</span>
              <div className="search-overlay__chips">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    className="search-overlay__chip"
                    onClick={() => setQuery(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="search-overlay__empty">
              <p>
                No results for “<strong>{query}</strong>”
              </p>
              <span>Try a different keyword or browse the full collection.</span>
            </div>
          ) : (
            <>
              <span className="eyebrow">
                {results.length} result{results.length !== 1 ? 's' : ''}
              </span>
              <div className="search-overlay__grid">
                {results.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="search-result"
                    onClick={handleClose}
                  >
                    <div className="search-result__img">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="search-result__info">
                      <span className="search-result__name">{product.name}</span>
                      <span className="search-result__meta">
                        {product.category} · ${product.price}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}