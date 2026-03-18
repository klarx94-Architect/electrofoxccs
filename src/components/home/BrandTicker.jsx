import React from 'react';
import styles from './BrandTicker.module.css';

const brands = [
  "SAMSUNG",
  "LG",
  "WHIRLPOOL",
  "BOSCH",
  "FRIGIDAIRE",
  "KITCHENAID",
  "HISENSE",
  "TCL"
];

const BrandTicker = () => {
  return (
    <section className={styles.tickerSection}>
      <div className={styles.tickerContainer}>
        <div className={styles.tickerWrapper}>
          <div className={styles.tickerTrack}>
            {brands.map((brand, idx) => (
              <div key={idx} className={styles.brandItem}>
                {brand}
              </div>
            ))}
            {/* Duplicado para crear el efecto infinito sin saltos */}
            {brands.map((brand, idx) => (
              <div key={`dup-${idx}`} className={styles.brandItem}>
                {brand}
              </div>
            ))}
             {brands.map((brand, idx) => (
              <div key={`trip-${idx}`} className={styles.brandItem}>
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandTicker;
