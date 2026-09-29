import { motion } from 'framer-motion';

const galleryItems = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=80',
    caption: 'The Atelier Edit',
    className: 'gallery__item--big',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&q=80',
    caption: 'City Nights',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=700&q=80',
    caption: 'Backstage',
    className: 'gallery__item--tall',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=700&q=80',
    caption: 'Studio Sessions',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=700&q=80',
    caption: 'Monochrome',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=80',
    caption: 'Golden Hour',
    className: 'gallery__item--wide',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?w=700&q=80',
    caption: 'Fabric Study',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&q=80',
    caption: 'On Set',
    className: 'gallery__item--tall',
  },
];

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="container">
        <motion.div
          className="gallery__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="eyebrow">Lookbook</span>
          <h2>Moments in Motion</h2>
          <p>
            A visual diary from our latest campaign — captured on the streets,
            in the studio, and everywhere in between.
          </p>
        </motion.div>

        <div className="gallery__grid">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              className={`gallery__item ${item.className || ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              viewport={{ once: true }}
            >
              <img src={item.src} alt={item.caption} loading="lazy" />
              <div className="gallery__overlay">
                <span className="gallery__caption">{item.caption}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}