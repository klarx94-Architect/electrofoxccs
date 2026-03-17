import React from 'react';
import { motion } from 'framer-motion';
import styles from './Categories.module.css';
import fridge from '../../assets/images/LB-00000982_1-01KHK3WWNBT6YQS4GN9Q4AAVK1.jpeg';
import washer from '../../assets/images/LB-00001440_3-01KHSS2ECQ0SWQ5T8Z23HZV6N4.jpeg';
import tv from '../../assets/images/baner201-01KJG6A6CYT4YX71B84PQM09F7.png';
import small from '../../assets/images/LM-00001029_1-01KG634D1Y2NWVYCJ91HQ8TGCB.jpeg';

const Categories = () => {
  const cats = [
    { title: 'Línea Blanca', img: fridge, grid: 'span 2 / span 2' },
    { title: 'Lavado', img: washer, grid: 'span 1 / span 1' },
    { title: 'Televisores', img: tv, grid: 'span 1 / span 2' },
    { title: 'Cocina', img: small, grid: 'span 1 / span 1' },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <h2>EXPLORA NUESTRAS <br /><span>CATEGORÍAS</span></h2>
          <button className={styles.viewAll}>VER TODO</button>
        </header>
        
        <div className={styles.grid}>
          {cats.map((cat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className={styles.card}
              style={{ gridArea: cat.grid }}
            >
              <img src={cat.img} alt={cat.title} />
              <div className={styles.overlay}>
                <h3>{cat.title}</h3>
                <span className={styles.count}>DESCUBRIR MÁS</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
