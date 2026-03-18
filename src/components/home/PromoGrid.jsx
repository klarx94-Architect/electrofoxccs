import React from 'react';
import { motion } from 'framer-motion';
import styles from './PromoGrid.module.css';

const PromoGrid = () => {
  return (
    <section className={styles.promoSection}>
      <div className="container">
        <header className={styles.header}>
          <h2>OFERTAS <span>IMPERDIBLES</span></h2>
          <p>Equipos de alta gama con promociones exclusivas. Sólo por tiempo limitado.</p>
        </header>

        <div className={styles.grid}>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className={styles.promoCard}
          >
            <img src={`${import.meta.env.BASE_URL}promos/promo1.jpeg`} alt="Promo 1" />
            <div className={styles.overlay}>
              <button className={styles.shopBtn}>COMPRAR AHORA</button>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className={styles.promoCard}
          >
            <img src={`${import.meta.env.BASE_URL}promos/promo2.jpeg`} alt="Promo 2" />
            <div className={styles.overlay}>
              <button className={styles.shopBtn}>COMPRAR AHORA</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PromoGrid;
