import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-card__imageWrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image--primary"
          loading="lazy"
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