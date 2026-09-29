import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import FeaturedCollection from '../components/FeaturedCollection';
import BrandStory from '../components/BrandStory';
import Gallery from '../components/Gallery';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Hero />
      <FeaturedCollection />
      <BrandStory />
      <Gallery />
      <Newsletter />
    </motion.main>
  );
}