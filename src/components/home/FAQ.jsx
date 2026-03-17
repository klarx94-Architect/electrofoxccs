import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import styles from './FAQ.module.css';

const FAQ = () => {
  const [activeIdx, setActiveIdx] = useState(null);

  const faqs = [
    { q: '¿Realizan envíos a toda Venezuela?', a: 'Sí, realizamos envíos nacionales asegurados a través de las principales agencias del país. En Caracas contamos con servicio de entrega express gratuita para productos seleccionados.' },
    { q: '¿Qué métodos de pago aceptan?', a: 'Aceptamos transferencias nacionales (Banesco), Zelle, USDT y pagos en divisas efectivo para entregas en Caracas.' },
    { q: '¿Los productos tienen garantía?', a: 'Todos nuestros productos son nuevos y originales, contando con garantía oficial de marca que varía entre 6 a 12 meses dependiendo del fabricante.' },
    { q: '¿Puedo retirar personalmente?', a: 'Contamos con puntos de pick-up estratégicos en Caracas. Una vez concretada la compra, se le indicará la ubicación exacta del despacho.' }
  ];

  return (
    <section className={styles.faq}>
      <div className="container">
        <header className={styles.header}>
          <h2>PREGUNTAS <br /><span>FRECUENTES</span></h2>
          <p>Todo lo que necesitas saber antes de tu compra inteligente.</p>
        </header>

        <div className={styles.list}>
          {faqs.map((faq, idx) => (
            <div key={idx} className={styles.item}>
              <button 
                className={styles.question}
                onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
              >
                <span>{faq.q}</span>
                {activeIdx === idx ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              <AnimatePresence>
                {activeIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className={styles.answer}
                  >
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
