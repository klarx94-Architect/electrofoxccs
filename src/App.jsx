import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import Sidebar from './components/shop/Sidebar';
import ProductGrid from './components/shop/ProductGrid';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <div className="container">
          <div className="shop-layout">
            <Sidebar />
            <ProductGrid />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
