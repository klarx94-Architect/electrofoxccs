import React, { useState } from 'react';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import Features from './components/home/Features';
import Categories from './components/home/Categories';
import FeaturedProducts from './components/home/FeaturedProducts';
import FAQ from './components/home/FAQ';
import Footer from './components/layout/Footer';
import ProductModal from './components/shop/ProductModal';
import AIAgent from './components/ai/AIAgent';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Features />
        
        <div className="impact-section">
          <Categories />
          <FeaturedProducts onProductClick={(p) => setSelectedProduct(p)} />
        </div>

        <FAQ />

        {/* Product Modal */}
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />

        <AIAgent />

        {/* Floating WhatsApp Hub */}
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="whatsapp-float"
          onClick={() => window.open('https://wa.me/04141721052', '_blank')}
        >
          <MessageCircle size={32} />
          <div className="pulse" />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
