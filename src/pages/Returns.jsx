import { motion } from 'framer-motion';

export default function Returns() {
  return (
    <motion.main
      className="content-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container">
        <header className="content-page__header">
          <span className="eyebrow">Information</span>
          <h1>Returns & Exchanges</h1>
          <p>We want you to love what you ordered. If you don’t, here’s how it works.</p>
        </header>

        <div className="content-page__body">
          <h2>10-Day Returns</h2>
          <p>
            You have 10 days from delivery to return any unworn item for a full
            refund or exchange. Items must be in original condition with all tags
            attached.
          </p>

          <h2>How to Return</h2>
          <ul>
            <li>Email <strong>returns@atelier.com</strong> with your order number</li>
            <li>We’ll send you a prepaid label (UK & EU) or return address</li>
            <li>Pack your item securely and drop it at any carrier point</li>
            <li>Refunds are processed within 5 business days of receipt</li>
          </ul>

          <h2>Exchanges</h2>
          <p>
            Need a different size? Let us know in your return email and we’ll
            reserve the replacement while your return is in transit.
          </p>

          <h2>Non-Returnable Items</h2>
          <ul>
            <li>Items marked "Final Sale"</li>
            <li>Underwear and swimwear (hygiene reasons)</li>
            <li>Custom or personalised pieces</li>
          </ul>

          <h2>Faulty Items</h2>
          <p>
            If your item arrives damaged or develops a fault within 6 months of
            purchase, we’ll repair, replace, or refund it — your choice.
          </p>

          <h2>International Returns</h2>
          <p>
            Return shipping from outside the UK/EU is the customer’s
            responsibility. We recommend a tracked service.
          </p>
        </div>
      </div>
    </motion.main>
  );
}