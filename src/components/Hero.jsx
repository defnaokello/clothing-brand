import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&w=1920&q=75"
          alt="Editorial fashion"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero__overlay" />
      </div>

      <div className="hero__content">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Autumn / Winter 2026
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          Quiet luxury, <br /> everyday wear.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
        >
          <Link to="/shop" className="hero__cta">Explore the collection</Link>
        </motion.div>
      </div>
    </section>
  );
}