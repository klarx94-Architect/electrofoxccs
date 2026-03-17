import React from 'react';
import { motion } from 'framer-motion';
import styles from './FeaturedProducts.module.css';
import { products } from '../../mockData';

const FeaturedProducts = ({ onProductClick }) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <h2>LO MÁS <br /><span>VENDIDO</span></h2>
          <p>Los favoritos de la comunidad Electrofox.</p>
        </header>

        <div className={styles.scroller}>
          {products.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -10 }}
              className={styles.card}
              onClick={() => onProductClick(product)}
            >
              <div className={styles.imageBox}>
                <img src={product.image} alt={product.name} />
              </div>
              <div className={styles.info}>
                <span className={styles.brand}>{product.brand}</span>
                <h4>{product.name}</h4>
                <div className={styles.prices}>
                  <strong>${product.price_usd}</strong>
                  <span>Bs. {product.price_bs}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
