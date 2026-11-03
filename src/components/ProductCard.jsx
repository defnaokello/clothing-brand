import { Link } from 'react-router-dom';
import { useQuickView } from '../context/QuickViewContext';
import { FiEye } from 'react-icons/fi';

export default function ProductCard({ product, eager = false }) {
  const { openQuickView } = useQuickView();

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-card__link">
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
      </Link>
      <div className="product-card__info">
        <div className="product-card__nameWrap">
          <span className="product-card__name product-card__name--default">{product.name}</span>
          {product.hoverName && (
            <span className="product-card__name product-card__name--hover">{product.hoverName}</span>
          )}
        </div>
        <button
          className="product-card__quickview"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            openQuickView(product);
          }}
          aria-label={`Quick view ${product.name}`}
        >
          <FiEye aria-hidden="true" />
          <span>Quick View</span>
        </button>
      </div>
    </div>
  );
}