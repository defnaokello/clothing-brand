import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function CategoryPage({ title, eyebrow, filter }) {
  const filtered = filter ? products.filter(filter) : products;

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <header className="category__header">
        <div className="container">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
        </div>
      </header>

      <div className="container">
        {filtered.length === 0 ? (
          <div className="category__empty">
            <p>Nothing here yet. Check back soon.</p>
          </div>
        ) : (
          <div className="category__grid">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i < 4 ? i * 0.05 : 0 }}
              >
                <ProductCard product={product} eager={i < 4} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.main>
  );
}
