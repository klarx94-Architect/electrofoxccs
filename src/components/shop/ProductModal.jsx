import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ProductModal.module.css';
import { X, MessageCircle, Ruler, Zap, Shield } from 'lucide-react';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  const handleWhatsApp = () => {
    const text = `Hola Electrofox, me interesa el producto: ${product.name} (Ref: ${product.brand}). ¿Tienen disponibilidad?`;
    window.open(`https://wa.me/04141721052?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className={styles.backdrop} onClick={onClose}>
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 50 }}
          className={styles.modal}
          onClick={e => e.stopPropagation()}
        >
          <button className={styles.closeBtn} onClick={onClose}><X /></button>
          
          <div className={styles.content}>
            <div className={styles.visual}>
              <img src={product.image} alt={product.name} />
              {product.badge && <span className={styles.badge}>{product.badge}</span>}
            </div>

            <div className={styles.info}>
              <span className={styles.brand}>{product.brand}</span>
              <h2>{product.name}</h2>
              <div className={styles.prices}>
                <div className={styles.usd}>${product.price_usd.toLocaleString()}</div>
                <div className={styles.bs}>Bs. {product.price_bs.toLocaleString()}</div>
              </div>

              <div className={styles.specs}>
                <h3>ESPECIFICACIONES TÉCNICAS</h3>
                <div className={styles.specGrid}>
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className={styles.specItem}>
                      <span className={styles.specKey}>{key.toUpperCase()}</span>
                      <span className={styles.specVal}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className={styles.whatsappBtn} onClick={handleWhatsApp}>
                <MessageCircle size={20} />
                CONSULTAR DISPONIBILIDAD
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProductModal;
