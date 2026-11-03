import { useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useQuickView } from '../context/QuickViewContext';

function QuickViewItem({ item }) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);

  const addToWishlist = () => {
    if (!selectedSize) return;
    addItem(item, selectedSize);
  };

  return (
    <article className="quickview__imageBlock">
      <img className="quickview__image" src={item.image} alt={item.name} />
      <div className="quickview__itemInfo">
        <div className="quickview__productName">
          <span className="quickview__fieldLabel">Product name</span>
          <h3 className="quickview__itemTitle">{item.name}</h3>
        </div>
        <section className="quickview__detailBlock">
          <h4 className="quickview__fieldLabel">Description</h4>
          <p>{item.description}</p>
        </section>
        <section className="quickview__detailBlock">
          <h4 className="quickview__fieldLabel">Available sizes for {item.name}</h4>
          <div className="quickview__sizes">
            {item.sizes.map((size) => (
              <button
                key={`${item.id}-${size}`}
                className={`product-page__sizeBtn ${selectedSize === size ? 'selected' : ''}`}
                aria-pressed={selectedSize === size}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </section>
        <button
          className="product-page__add"
          disabled={!selectedSize}
          onClick={addToWishlist}
        >
          {selectedSize ? 'Add to wishlist' : 'Select a size'}
        </button>
      </div>
    </article>
  );
}

function QuickViewPanel({ product, closeQuickView }) {
  const alternateItem = product.hoverImage
    ? {
        ...product,
        id: `${product.id}-alternate`,
        name: product.hoverName || `${product.name} Alternate`,
        image: product.hoverImage,
        hoverImage: null,
        hoverName: null,
        hoverDescription: null,
        description:
          product.hoverDescription ||
          `An alternate look in the ${product.name} collection.`,
        sizes: [...product.hoverSizes],
      }
    : null;

  const items = [
    { ...product, sizes: [...product.sizes] },
    alternateItem,
  ].filter(Boolean);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeQuickView();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [closeQuickView]);

  return (
    <motion.div
      className="quickview"
      role="presentation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeQuickView}
    >
      <motion.div
        className="quickview__panel"
        role="dialog"
        aria-modal="true"
        aria-label={`Quick view items: ${product.name}`}
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="quickview__close"
          onClick={closeQuickView}
          aria-label="Close quick view"
        >
          <FiX />
        </button>
        <div className="quickview__images">
          {items.map((item) => (
            <QuickViewItem
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function QuickView() {
  const { product, closeQuickView } = useQuickView();

  return (
    <AnimatePresence>
      {product && (
        <QuickViewPanel
          key={product.id}
          product={product}
          closeQuickView={closeQuickView}
        />
      )}
    </AnimatePresence>
  );
}
