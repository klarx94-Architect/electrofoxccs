import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import banner from '../../assets/images/BANNER20PROMO20SAMSUNG_S26-01KK9NJHFN6R85NZNQRABBY606.jpeg';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.content}
        >
          <div className={styles.badge}>ELECTROFOX EXCLUSIVE</div>
          <h1>EL FUTURO <br /><span>EN TUS MANOS</span></h1>
          <p>Experimenta la potencia del Samsung S26 Ultra. Financiación inmediata y envío express.</p>
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
          <img src={banner} alt="Promo" className={styles.image} />
          <div className={styles.glow} />
        </motion.div>
      </div>

      <div className={styles.infoStrip}>
        <div className="container">
          <div className={styles.stripGrid}>
            <div className={styles.item}>
              <strong>ENVÍO GRATIS</strong>
              <span>En toda Caracas</span>
            </div>
            <div className={styles.item}>
              <strong>PAGO SEGURO</strong>
              <span>Zelle, Banesco, USDT</span>
            </div>
            <div className={styles.item}>
              <strong>IA AGENT</strong>
              <span>Asesoría 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
