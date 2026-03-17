import React from 'react';
import { motion } from 'framer-motion';
import styles from './Features.module.css';
import { Truck, ShieldCheck, CreditCard, RotateCcw } from 'lucide-react';

const Features = () => {
  const items = [
    { icon: <Truck />, title: 'ENVÍO EXPRESS', desc: 'Recibe hoy mismo en Caracas' },
    { icon: <ShieldCheck />, title: 'GARANTÍA TOTAL', desc: 'Respaldo técnico oficial' },
    { icon: <CreditCard />, title: 'PAGA AL RECIBIR', desc: 'Zelle, Banesco y más' },
    { icon: <RotateCcw />, title: 'CAMBIOS FÁCILES', desc: 'Sin complicaciones' }
  ];

  return (
    <div className={styles.features}>
      <div className="container">
        <div className={styles.grid}>
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className={styles.card}
            >
              <div className={styles.icon}>{item.icon}</div>
              <div className={styles.text}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
