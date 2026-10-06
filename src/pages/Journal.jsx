import { motion } from 'framer-motion';

const posts = [
  {
    id: 1,
    title: 'The Quiet Power of Neutral Dressing',
    excerpt:
      'Why the most enduring wardrobes are built on a foundation of greys, creams, and blacks.',
    category: 'Style',
    date: 'Oct 12, 2025',
    image:
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&w=800&q=75',
  },
  {
    id: 2,
    title: 'Inside the Mill: Biella, Italy',
    excerpt:
      'A visit to the family-run wool mill that has supplied our overcoats for four seasons.',
    category: 'Craft',
    date: 'Sep 28, 2025',
    image:
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&w=800&q=75',
  },
  {
    id: 3,
    title: 'How to Care for Cashmere',
    excerpt:
      'Five simple rules to keep your knitwear looking new for a decade or more.',
    category: 'Guides',
    date: 'Sep 15, 2025',
    image:
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&w=800&q=75',
  },
  {
    id: 4,
    title: 'The Case Against Fast Fashion',
    excerpt:
      'On why we produce in small batches, and why you should care where your clothes come from.',
    category: 'Sustainability',
    date: 'Aug 30, 2025',
    image:
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&w=800&q=75',
  },
  {
    id: 5,
    title: 'A Studio Visit with Our Pattern-Maker',
    excerpt:
      'Twenty years of experience, one very sharp pair of scissors, and a deep love of craft.',
    category: 'People',
    date: 'Aug 12, 2025',
    image:
      'https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&w=800&q=75',
  },
  {
    id: 6,
    title: 'Autumn Lookbook 2025',
    excerpt:
      'Muted tones, soft tailoring, and the textures we’re living in this season.',
    category: 'Lookbook',
    date: 'Aug 1, 2025',
    image:
      'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&w=800&q=75',
  },
];

export default function Journal() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <header className="category__header">
        <div className="container">
          <span className="eyebrow">The Journal</span>
          <h1>Stories, craft & culture</h1>
          <p>
            Notes from the studio, conversations with makers, and guides to
            living with fewer, better things.
          </p>
        </div>
      </header>

      <div className="container">
        <div className="journal__grid">
          {posts.map((post, i) => (
            <motion.a
              key={post.id}
              href="#"
              className="journal__card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="journal__cardImg">
                <img src={post.image} alt={post.title} loading="lazy" />
              </div>
              <div className="journal__meta">
                {post.category} · {post.date}
              </div>
              <h3 className="journal__title">{post.title}</h3>
              <p className="journal__excerpt">{post.excerpt}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.main>
  );
}