import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.singleCol}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.content}
          >
            <span className={styles.preTitle}>TECNOLOGÍA DE VANGUARDIA</span>
            <h1>EL FUTURO <br /><span>DENTRO DE TU HOGAR</span></h1>
            <p>Descubre la excelencia en electrodomésticos con la curaduría exclusiva de Electrofoxccs.</p>
            <div className={styles.ctaGroup}>
              <button className={styles.primaryBtn}>CONSULTAR PRECIO</button>
              <button className={styles.secondaryBtn}>VER CATÁLOGO</button>
            </div>
          </motion.div>
          <div className={styles.glowRight} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
