import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ProductModal.module.css';
import { X, MessageCircle, Send, ShoppingBag, ChevronDown } from 'lucide-react';

/* ── Respuestas automáticas del asesor ── */
const generateReply = (question, product) => {
  const q = question.toLowerCase();

  if (q.includes('precio') || q.includes('costo') || q.includes('vale') || q.includes('cuánto'))
    return `El ${product.name} está disponible por $${product.price_usd.toLocaleString()} (Bs. ${product.price_bs.toLocaleString()}). Manejamos los mejores precios del mercado y aceptamos varias formas de pago. 😊`;

  if (q.includes('garantía') || q.includes('garantia'))
    return `¡Claro! El ${product.name} incluye garantía oficial de ${product.specs?.garantia ?? 'fábrica'}. Cualquier inconveniente, estamos para ayudarte.`;

  if (q.includes('envío') || q.includes('envio') || q.includes('entrega') || q.includes('llevan'))
    return `Sí, hacemos entregas en toda Venezuela. Dependiendo tu zona, el tiempo puede variar entre 24 y 72 horas hábiles. 🚚`;

  if (q.includes('pago') || q.includes('zelle') || q.includes('efectivo') || q.includes('transferencia'))
    return `Aceptamos Zelle, transferencias en bolívares, Banesco online, pago móvil y efectivo USD o EUR. Te orientamos con el método que más te convenga.`;

  if (q.includes('disponib') || q.includes('stock') || q.includes('hay'))
    return `Para confirmar disponibilidad exacta te recomiendo continuar por WhatsApp, donde un asesor te responde de inmediato. ¡Normalmente tenemos stock! 😊`;

  if (q.includes('voltaje') || q.includes('110') || q.includes('220') || q.includes('electricidad'))
    return `El ${product.name} opera a ${product.specs?.voltaje ?? '110V'}, perfecto para Venezuela. No necesitas transformador.`;

  if (q.includes('color') || q.includes('medida') || q.includes('tamaño') || q.includes('dimensión'))
    return `Las especificaciones técnicas están justo arriba del chat. Si necesitas más detalles, con gusto te ayudamos por WhatsApp.`;

  if (q.includes('hola') || q.includes('buenos') || q.includes('buenas'))
    return `¡Hola! Soy el asesor de Electrofox. Estoy aquí para resolver todas tus dudas sobre el ${product.name}. ¿En qué puedo ayudarte? 😊`;

  return `Gracias por tu pregunta. Para darte información más precisa, te recomiendo continuar con uno de nuestros asesores por WhatsApp. ¡Te respondemos en minutos! 📲`;
};

const ProductModal = ({ product, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [specsOpen, setSpecsOpen] = useState(false);
  const chatEndRef = useRef(null);
  const specsRef = useRef(null);
  const leftPanelRef = useRef(null);

  // Mensaje de bienvenida cuando se abre un producto
  useEffect(() => {
    if (product) {
      setMessages([
        {
          from: 'agent',
          text: `¡Hola! 👋 Soy tu asesor de Electrofox. ¿Tienes alguna pregunta sobre el **${product.name}**? Estoy aquí para ayudarte.`,
        },
      ]);
      setInput('');
      setSpecsOpen(false);
    }
  }, [product]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  useEffect(() => {
    if (specsOpen && specsRef.current) {
      // Usamos el contenedor padre (left) para scrollear internamente
      const topPos = specsRef.current.offsetTop;
      leftPanelRef.current?.scrollTo({
        top: topPos - 20,
        behavior: 'smooth'
      });
    }
  }, [specsOpen]);

  if (!product) return null;

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { from: 'user', text: userMsg }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { from: 'agent', text: generateReply(userMsg, product) },
      ]);
    }, 1100);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  const handleWhatsApp = () => {
    const text =
      `Hola Electrofox, me interesa:\n\n` +
      `📦 *${product.name}*\n` +
      `🏷️ Marca: ${product.brand}\n` +
      `💵 Precio: $${product.price_usd.toLocaleString()}\n\n` +
      `Deseo iniciar mi proceso de compra. ¿Pueden asesorarme?`;
    window.open(`https://wa.me/584141721052?text=${encodeURIComponent(text)}`, '_blank');
  };

  const quickQuestions = [
    '¿Cómo es el proceso de pago?',
    '¿Hacen envíos?',
    '¿Qué garantía incluye?',
    '¿Hay disponibilidad?',
  ];

  return (
    <AnimatePresence>
      <div className={styles.backdrop} onClick={onClose}>
        <motion.div
          initial={{ scale: 0.93, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.93, opacity: 0, y: 40 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className={styles.modal}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button className={styles.closeBtn} onClick={onClose}>
            <X size={20} />
          </button>

          <div className={styles.layout}>
            {/* LEFT — Product info */}
            <div className={styles.left} ref={leftPanelRef}>
              <div className={styles.visual}>
                <img src={product.image} alt={product.name} className={styles.productImg} />
                {product.badge && <span className={styles.badge}>{product.badge}</span>}
              </div>

              <div className={styles.info}>
                <span className={styles.brand}>{product.brand}</span>
                <h2 className={styles.name}>{product.name}</h2>

                <div className={styles.prices}>
                  <span className={styles.usd}>${product.price_usd.toLocaleString()}</span>
                  <span className={styles.bs}>Bs. {product.price_bs.toLocaleString()}</span>
                </div>

                {/* Specs accordion */}
                <div ref={specsRef} className={styles.specsWrapper}>
                  <button 
                    className={`${styles.specsToggle} ${specsOpen ? styles.specsActive : ''}`} 
                    onClick={() => setSpecsOpen(!specsOpen)}
                  >
                    <span>{specsOpen ? 'OCULTAR' : 'VER'} ESPECIFICACIONES TÉCNICAS</span>
                    <ChevronDown size={18} className={specsOpen ? styles.rotated : ''} />
                  </button>
                  <AnimatePresence>
                    {specsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={styles.specsBox}
                      >
                      <div className={styles.specGrid}>
                        {Object.entries(product.specs).map(([k, v]) => (
                          <div key={k} className={styles.specItem}>
                            <span className={styles.specKey}>{k.toUpperCase()}</span>
                            <span className={styles.specVal}>{v}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                </div>

                {/* WhatsApp CTA — always visible */}
                <button className={styles.whatsappBtn} onClick={handleWhatsApp}>
                  <ShoppingBag size={18} />
                  ¡Quiero comprar este producto!
                </button>
              </div>
            </div>

            {/* RIGHT — Chat */}
            <div className={styles.right}>
              <div className={styles.chatHeader}>
                <div className={styles.agentAvatar}>EF</div>
                <div className={styles.agentInfo}>
                  <span className={styles.agentName}>Asesor Electrofox</span>
                  <span className={styles.agentStatus}>
                    <span className={styles.dot} /> En línea ahora
                  </span>
                </div>
              </div>

              <div className={styles.chatMessages}>
                {messages.map((m, i) => (
                  <div key={i} className={m.from === 'user' ? styles.msgUser : styles.msgAgent}>
                    <div className={styles.bubble}>
                      {m.text.split('**').map((part, j) =>
                        j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                      )}
                    </div>
                  </div>
                ))}
                {typing && (
                  <div className={styles.msgAgent}>
                    <div className={`${styles.bubble} ${styles.typing}`}>
                      <span /><span /><span />
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Quick questions */}
              <div className={styles.quickQuestions}>
                {quickQuestions.map((q, i) => (
                  <button
                    key={i}
                    className={styles.quickBtn}
                    onClick={() => {
                      setInput(q);
                      setTimeout(() => {
                        setMessages((prev) => [...prev, { from: 'user', text: q }]);
                        setInput('');
                        setTyping(true);
                        setTimeout(() => {
                          setTyping(false);
                          setMessages((prev) => [
                            ...prev,
                            { from: 'agent', text: generateReply(q, product) },
                          ]);
                        }, 1100);
                      }, 100);
                    }}
                  >
                    {q}
                  </button>
                ))}
              </div>

              <div className={styles.chatInput}>
                <input
                  type="text"
                  placeholder="Escribe tu pregunta..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                />
                <button onClick={handleSend} disabled={!input.trim()} className={styles.sendBtn}>
                  <Send size={16} />
                </button>
              </div>

              <p className={styles.chatDisclaimer}>
                💬 ¿Listo para comprar? Usa el botón de abajo para hablar con un asesor humano.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProductModal;
