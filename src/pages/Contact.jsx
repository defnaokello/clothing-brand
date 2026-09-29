import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container">
        <header className="content-page__header" style={{ paddingTop: 'calc(var(--space-xl) + 60px)' }}>
          <span className="eyebrow">Get in touch</span>
          <h1>Contact Us</h1>
          <p>
            Questions about an order, a piece, or a partnership? We read every
            message and reply within two working days.
          </p>
        </header>

        <div className="contact__grid">
          <div className="contact__info">
            <h2>Reach us directly</h2>
            <p>
              Our studio is in Kisumu Town, but our team works across Kenya. Email
              is the fastest way to reach us.
            </p>

            <div className="contact__block">
              <h4>Customer Care</h4>
              <a href="mailto:hello@atelier.com">hello@infinityOR.com</a>
            </div>

            <div className="contact__block">
              <h4>Press</h4>
              <a href="mailto:press@atelier.com">press@infinityOR.com</a>
            </div>

            <div className="contact__block">
              <h4>Studio</h4>
              <span>Infinity.OR Mall<br />Kisumu<br />Kenya</span>
            </div>

            <div className="contact__block">
              <h4>Hours</h4>
              <span>Mon–Fri, 9am–6pm</span>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}