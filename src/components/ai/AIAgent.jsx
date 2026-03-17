import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, MessageSquare } from 'lucide-react';
import styles from './AIAgent.module.css';

const AIAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: '¡Hola! Soy FoxIA. ¿En qué puedo ayudarte hoy con tu compra?' }
  ]);

  return (
    <>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={styles.launcher}
        onClick={() => setIsOpen(true)}
      >
        <Bot size={28} />
        <span>FoxIA Agent</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={styles.drawer}
          >
            <div className={styles.header}>
              <div className={styles.aiTitle}>
                <Bot />
                <h3>FoxIA <span>Agent</span></h3>
              </div>
              <button onClick={() => setIsOpen(false)}><X /></button>
            </div>

            <div className={styles.chatArea}>
              {messages.map((m, i) => (
                <div key={i} className={`${styles.msg} ${styles[m.role]}`}>
                  {m.text}
                </div>
              ))}
            </div>

            <div className={styles.inputArea}>
              <input type="text" placeholder="Pregunta sobre un producto..." />
              <button><Send size={18} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAgent;
