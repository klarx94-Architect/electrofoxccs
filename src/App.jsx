import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import Features from './components/home/Features';
import Categories from './components/home/Categories';
import FeaturedProducts from './components/home/FeaturedProducts';
import ProductModal from './components/shop/ProductModal';
import AIAgent from './components/ai/AIAgent';
import { MessageCircle } from 'lucide-react';
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

      <footer className="footer-premium">
        <div className="container">
          <div className="footer-grid">
            <div className="brand-info">
              <h3>ELECTROFOX<span>CCS</span></h3>
              <p>Tu aliado exclusivo en electrodomésticos de alta gama en Venezuela.</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Electrofoxccs. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
