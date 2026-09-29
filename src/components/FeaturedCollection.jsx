import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function FeaturedCollection() {
  const featured = products.slice(0, 4);

  return (
    <section className="section">
      <div className="container">
        <div className="featured__header">
          <div>
            <span className="eyebrow">Featured</span>
            <h2>The New Essentials</h2>
          </div>
          <Link to="/shop" className="featured__viewAll">View all →</Link>
        </div>

        <div className="featured__grid">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}