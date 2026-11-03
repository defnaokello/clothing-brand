import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiChevronRight, FiHeart } from 'react-icons/fi';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import { useQuickView } from '../context/QuickViewContext';

export default function FeaturedCollection() {
  const newArrivals = products.filter((product) => product.isNew);
  const trackRef = useRef(null);
  const { openQuickView } = useQuickView();

  const showNext = () => {
    const track = trackRef.current;
    if (!track) return;

    const lastSlide = track.scrollWidth - track.clientWidth;
    if (track.scrollLeft >= lastSlide - 1) {
      track.scrollTo({ left: 0, behavior: 'auto' });
      return;
    }

    const slide = track.querySelector('.new-arrivals__slide');
    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
    const nextPosition = Math.min(
      track.scrollLeft + (slide?.getBoundingClientRect().width || 0) + gap,
      lastSlide,
    );
    track.scrollTo({
      left: nextPosition,
      behavior: 'auto',
    });
  };

  return (
    <section className="section new-arrivals">
      <div className="container">
        <h2 className="new-arrivals__title">New Arrivals</h2>

        <div className="new-arrivals__carousel">
          <div className="new-arrivals__track" ref={trackRef}>
            {newArrivals.map((product, i) => (
              <motion.div
                key={product.id}
                className="new-arrivals__slide"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
                <button
                  className="new-arrivals__quickview"
                  aria-label={`Add ${product.name} to wishlist`}
                  onClick={() => openQuickView(product)}
                >
                  <FiHeart aria-hidden="true" />
                </button>
              </motion.div>
            ))}
          </div>
          <button
            className="new-arrivals__next"
            aria-label="Next new arrivals"
            onClick={showNext}
          >
            <FiChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
