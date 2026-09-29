import { motion } from 'framer-motion';

export default function BrandStory() {
  return (
    <section className="brand-story">
      <div className="brand-story__grid">
        <motion.div
          className="brand-story__image"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=80"
            alt="Atelier craftsmanship"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          className="brand-story__text"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <span className="eyebrow">Our Philosophy</span>
          <h2>Made slowly, worn forever.</h2>
          <p>
            Every piece begins with a single question: will this last a lifetime?
            We source from heritage mills in Italy, Japan, and Portugal — the
            same ones that have supplied couture houses for generations.
          </p>
          <p>
            No seasonal churn. No trend-chasing. Just enduring garments,
            thoughtfully made.
          </p>
          <a href="/about" className="brand-story__link">Read our story →</a>
        </motion.div>
      </div>
    </section>
  );
}