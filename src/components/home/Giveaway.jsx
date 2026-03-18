import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Star, Gift, Users, Zap } from 'lucide-react';
import styles from './Giveaway.module.css';
import imgLaptop from '../../assets/images/rifa-compaq-laptop.png';
import imgHidrojet from '../../assets/images/rifa-hidrojet-hyundai.jpg';

const prizes = [
  {
    img: imgLaptop,
    label: 'LAPTOP COMPAQ',
    sub: 'Pantalla 14" · 8GB RAM · 128GB',
    tag: '🏆 GRAN PREMIO',
  },
  {
    img: imgHidrojet,
    label: 'HIDROJET HYUNDAI',
    sub: 'Profesional 1400W · Alta presión',
    tag: '🎁 2DO PREMIO',
  },
];

const steps = [
  { icon: <Users size={20} />, text: 'Síguenos en Instagram y TikTok' },
  { icon: <Zap size={20} />, text: 'Comparte la publicación del sorteo' },
  { icon: <Star size={20} />, text: '¡Espera el sorteo en vivo cada semana!' },
];

const Giveaway = () => {
  return (
    <section className={styles.section}>
      {/* Background orbs */}
      <div className={styles.orbOrange} />
      <div className={styles.orbPurple} />
      <div className={styles.grid} />

      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={styles.header}
        >
          <span className={styles.badge}>
            <Gift size={14} /> SORTEOS SEMANALES
          </span>
          <h2 className={styles.title}>
            🔥 RIFAS &amp; <span>SORTEOS</span>
          </h2>
          <p className={styles.subtitle}>
            Cada semana sorteamos productos increíbles entre nuestra comunidad.<br />
            <strong>¡Participa sin comprar nada!</strong> Solo síguenos y entérate de todas nuestras promos.
          </p>
        </motion.div>

        {/* Prize cards */}
        <div className={styles.prizes}>
          {prizes.map((prize, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={styles.prizeCard}
              whileHover={{ scale: 1.03, y: -8 }}
            >
              <div className={styles.prizeTag}>{prize.tag}</div>
              <img src={prize.img} alt={prize.label} className={styles.prizeImg} />
              <div className={styles.prizeInfo}>
                <h3>{prize.label}</h3>
                <p>{prize.sub}</p>
              </div>
              <div className={styles.glowCard} />
            </motion.div>
          ))}
        </div>

        {/* How to participate */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={styles.howTo}
        >
          <h3 className={styles.howTitle}>¿Cómo participar?</h3>
          <div className={styles.steps}>
            {steps.map((step, idx) => (
              <div key={idx} className={styles.step}>
                <div className={styles.stepIcon}>{step.icon}</div>
                <span>{step.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Social */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={styles.cta}
        >
          <a
            href="https://www.instagram.com/electrofoxccs"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.igBtn}
          >
            <Instagram size={20} />
            Síguenos en Instagram
          </a>
          <p className={styles.ctaNote}>
            📲 También en <strong>TikTok: @electrofoxccs</strong> · Sorteos en vivo todos los viernes
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Giveaway;
