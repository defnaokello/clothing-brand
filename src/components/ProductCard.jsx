import { Link } from 'react-router-dom';

export default function ProductCard({ product, eager = false }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-card__imageWrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image--primary"
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : 'auto'}
        />
        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt=""
            className="product-card__image--secondary"
            loading="lazy"
          />
        )}
        {product.isNew && <span className="product-card__tag">New</span>}
      </div>
      <div className="product-card__info">
        <span className="product-card__name">{product.name}</span>
      </div>
    </Link>
  );
}