import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import About from './pages/About';
import CategoryPage from './pages/CategoryPage';
import Journal from './pages/Journal';
import Contact from './pages/Contact';
import Returns from './pages/Returns';
import SizeGuide from './pages/SizeGuide';
import NotFound from './pages/NotFound';

export default function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<About />} />

          {/* Shop dropdown pages */}
          <Route
            path="/shop/new-arrivals"
            element={
              <CategoryPage
                title="New Arrivals"
                eyebrow="Just landed"
                filter={(p) => p.isNew}
              />
            }
          />
          <Route
            path="/shop/knitwear"
            element={
              <CategoryPage
                title="Knitwear"
                eyebrow="Soft essentials"
                filter={(p) => p.category === 'Knitwear'}
              />
            }
          />
          <Route
            path="/shop/outerwear"
            element={
              <CategoryPage
                title="Outerwear"
                eyebrow="Built for weather"
                filter={(p) => p.category === 'Outerwear'}
              />
            }
          />
          <Route
            path="/shop/accessories"
            element={
              <CategoryPage
                title="Accessories"
                eyebrow="Finishing touches"
                filter={(p) => p.category === 'Accessories'}
              />
            }
          />

          {/* Company pages */}
          <Route path="/journal" element={<Journal />} />

          {/* Support pages */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/size-guide" element={<SizeGuide />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <CartDrawer />
    </>
  );
}