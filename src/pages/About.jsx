import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <header className="about__hero">
        <div className="container">
          <span className="eyebrow">About Atelier</span>
          <h1>We believe in fewer, better things.</h1>
        </div>
      </header>

      <div className="about__content">
        <div className="container">
          <div className="about__block">
            <div className="about__blockImg">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=80"
                alt="Atelier studio"
              />
            </div>
            <div className="about__blockText">
              <span className="eyebrow">Our Story</span>
              <h2>Founded in a small studio.</h2>
              <p>
                Infinity.OR began in 2025 with three people, one sewing machine, and a
                quiet frustration with the way clothes were being made. Fast
                fashion had turned garments into disposable goods.
              </p>
              <p>
                We wanted to build something different — clothing that would be
                kept, repaired, and passed down.
              </p>
            </div>
          </div>

          <div className="about__block">
            <div className="about__blockImg">
              <img
                src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=900&q=80"
                alt="Fabric detail"
              />
            </div>
            <div className="about__blockText">
              <span className="eyebrow">Our Craft</span>
              <h2>Heritage mills, modern cuts.</h2>
              <p>
                Every fabric we use is sourced from mills that have been perfecting
                their craft for generations — Biella for wool, Kyoto for silk,
                Porto for leather.
              </p>
              <p>
                We then work with a small team of pattern-makers to translate
                these materials into silhouettes that feel both timeless and
                now.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}