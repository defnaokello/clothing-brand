import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) {
    return (
      <div className="container" style={{ padding: '200px 0', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Link to="/shop" className="featured__viewAll" style={{ marginTop: '20px', display: 'inline-block' }}>
          Back to shop
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    if (!selectedSize) return;
    addItem(product, selectedSize);
  };

  return (
    <motion.main
      className="product-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container">
        <div className="product-page__grid">
          <div className="product-page__gallery">
            {product.gallery.map((img, i) => (
              <img key={i} src={img} alt={`${product.name} ${i + 1}`} />
            ))}
          </div>

          <div className="product-page__info">
            <span className="eyebrow">{product.category}</span>
            <h1 className="product-page__name">{product.name}</h1>
            <p className="product-page__price">${product.price}</p>
            <p className="product-page__desc">{product.description}</p>

            <div className="product-page__sizes">
              <span className="product-page__sizes-label">Select size</span>
              <div className="product-page__sizeList">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`product-page__sizeBtn ${
                      selectedSize === size ? 'selected' : ''
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              className="product-page__add"
              onClick={handleAdd}
              disabled={!selectedSize}
            >
              {selectedSize ? 'Add to cart' : 'Select a size'}
            </button>
          </div>
        </div>
      </div>
    </motion.main>
  );
}