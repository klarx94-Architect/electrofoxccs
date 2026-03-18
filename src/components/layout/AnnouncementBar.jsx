import React from 'react';
import styles from './AnnouncementBar.module.css';
import { Tag, Truck, Zap, Gift } from 'lucide-react';

const messages = [
  { icon: <Truck size={13} />, text: 'Entrega GRATIS en toda Venezuela' },
  { icon: <Zap size={13} />, text: 'Ofertas y promociones todas las semanas' },
  { icon: <Tag size={13} />, text: 'Paga con Zelle, Banesco, Efectivo y más' },
  { icon: <Gift size={13} />, text: 'Garantía total en todos nuestros productos' },
  { icon: <Truck size={13} />, text: 'Entrega GRATIS en toda Venezuela' },
  { icon: <Zap size={13} />, text: 'Ofertas y promociones todas las semanas' },
  { icon: <Tag size={13} />, text: 'Paga con Zelle, Banesco, Efectivo y más' },
  { icon: <Gift size={13} />, text: 'Garantía total en todos nuestros productos' },
];

const AnnouncementBar = () => {
  return (
    <div className={styles.bar}>
      <div className={styles.ticker}>
        <div className={styles.track}>
          {messages.map((msg, i) => (
            <span key={i} className={styles.item}>
              <span className={styles.icon}>{msg.icon}</span>
              {msg.text}
              <span className={styles.sep}>•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
