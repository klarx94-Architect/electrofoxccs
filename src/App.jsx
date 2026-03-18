import React, { useState } from 'react';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import BrandTicker from './components/home/BrandTicker';
import Features from './components/home/Features';
import Categories from './components/home/Categories';
import FeaturedProducts from './components/home/FeaturedProducts';
import PromoGrid from './components/home/PromoGrid';
import PromoBanner from './components/home/PromoBanner';
import FAQ from './components/home/FAQ';
import Giveaway from './components/home/Giveaway';
import Footer from './components/layout/Footer';
import AnnouncementBar from './components/layout/AnnouncementBar';
import ProductModal from './components/shop/ProductModal';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="app-container">
      <Header />
      <AnnouncementBar />
      <main>
        <Hero />
        <PromoBanner />
        <Features />
        <BrandTicker />
        
        <div className="impact-section">
          <Categories />
          <FeaturedProducts onProductClick={(p) => setSelectedProduct(p)} />
        </div>

        <PromoGrid />
        <Giveaway />
        <FAQ />

        {/* Product Modal */}
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />

        {/* Floating WhatsApp Hub */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whatsapp-float-container"
          onClick={() => window.open('https://wa.me/584141721052', '_blank')}
        >
          <div className="whatsapp-tooltip">
            Despejamos tus dudas por WhatsApp
          </div>
          <div className="whatsapp-float">
            <MessageCircle size={32} />
            <div className="pulse" />
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
