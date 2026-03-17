import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import banner from '../../assets/images/BANNER20PROMO20SAMSUNG_S26-01KK9NJHFN6R85NZNQRABBY606.jpeg';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
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

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={styles.visual}
          >
            <img src={banner} alt="Samsung S26 Ultra" className={styles.mainImage} />
            <div className={styles.accentGlow} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
