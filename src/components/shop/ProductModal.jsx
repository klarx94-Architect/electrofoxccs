import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ProductModal.module.css';
import { X, MessageCircle, Send, ShoppingBag, ChevronDown } from 'lucide-react';

/* ── Respuestas automáticas del asesor ── */
const generateReply = (question, product, specsOpen) => {
  const q = question.toLowerCase();

  if (q.includes('especificaci') || q.includes('característica') || q.includes('detalle') || q.includes('técnico') || q.includes('tecnico')) {
    const specsList = Object.entries(product.specs).slice(0, 3).map(([k, v]) => `${k.toUpperCase()}: ${v}`).join(', ');
    return `¡Por supuesto! Algunas de las especificaciones del ${product.name} son: ${specsList}. Puedes ver todas las características técnicas haciendo clic en el botón **"VER ESPECIFICACIONES TÉCNICAS"** justo arriba de este chat. 😊`;
  }

  if (q.includes('precio') || q.includes('costo') || q.includes('vale') || q.includes('cuánto'))
    return `El ${product.name} está disponible por $${product.price_usd.toLocaleString()} (Bs. ${product.price_bs.toLocaleString()}). Manejamos los mejores precios del mercado. Si ya estás listo, puedes usar el botón de **"¡Quiero comprar!"** para ir a WhatsApp. 😊`;

  if (q.includes('garantía') || q.includes('garantia'))
    return `¡Claro! El ${product.name} incluye garantía oficial de ${product.specs?.garantia ?? 'fábrica'}. Si deseas más detalles legales o iniciar la compra, estamos listos por WhatsApp.`;

  if (q.includes('envío') || q.includes('envio') || q.includes('entrega') || q.includes('llevan'))
    return `Sí, hacemos entregas en toda Venezuela (24-72h). ¿Deseas que coordinemos el envío de tu ${product.name} por WhatsApp? 🚚`;

  if (q.includes('pago') || q.includes('zelle') || q.includes('efectivo') || q.includes('transferencia'))
    return `Aceptamos Zelle, bolívares, pago móvil y efectivo de forma segura. ¿Te gustaría recibir los datos de pago exactos por WhatsApp para concretar?`;

  if (q.includes('disponib') || q.includes('stock') || q.includes('hay'))
    return `Normalmente tenemos stock, pero para asegurar tu unidad, te recomiendo contactarnos ahora mismo por WhatsApp. ¡Te reservamos el ${product.name} de inmediato! 😊`;

  if (q.includes('voltaje') || q.includes('110') || q.includes('220') || q.includes('electricidad'))
    return `El ${product.name} opera a ${product.specs?.voltaje ?? '110V'}, ideal para Venezuela. ¿Quieres que te lo enviemos hoy? ⚡`;

  if (q.includes('hola') || q.includes('buenos') || q.includes('buenas'))
    return `¡Hola! Soy tu asesor de Electrofox. Estoy aquí para resolver tus dudas técnicas sobre el ${product.name} o ayudarte a completar tu compra. ¿Qué información necesitas? 😊`;

  return `Gracias por tu pregunta. Para darte información final y cerrar tu pedido, te invito a presionar el botón de **"¡Quiero comprar!"**. ¡Nuestros asesores humanos te esperan en WhatsApp! 📲`;
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
          text: `¡Hola! 👋 Soy tu asesor de Electrofox. He preparado los detalles técnicos del **${product.name}** para ti. ¿Te gustaría revisarlos antes de que hablemos de la compra? 😊`,
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
        { from: 'agent', text: generateReply(userMsg, product, specsOpen) },
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
    'Ver especificaciones técnicas',
    '¿Tienen garantía?',
    '¿Hacen envíos?',
    '¿Qué métodos de pago aceptan?',
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

                {/* Specs accordion — PRIMARY ACTION */}
                <div ref={specsRef} className={styles.specsWrapper}>
                  <button 
                    className={`${styles.specsToggle} ${specsOpen ? styles.specsActive : ''}`} 
                    onClick={() => setSpecsOpen(!specsOpen)}
                  >
                    <span>{specsOpen ? 'CERRAR' : 'REVISAR ESPECIFICACIONES TÉCNICAS'}</span>
                    <ChevronDown size={20} className={specsOpen ? styles.rotated : ''} />
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

                {/* WhatsApp CTA — SECONDARY/FOLLOW-UP ACTION */}
                <button 
                  className={`${styles.whatsappBtn} ${specsOpen ? styles.whatsappBtnFeatured : ''}`} 
                  onClick={handleWhatsApp}
                >
                  <ShoppingBag size={18} />
                  {specsOpen ? 'INICIAR COMPRA POR WHATSAPP' : 'Contactar por WhatsApp'}
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
                      const isSpecsReq = q.includes('especificaciones');
                      setInput(q);
                      setTimeout(() => {
                        setMessages((prev) => [...prev, { from: 'user', text: q }]);
                        setInput('');
                        if (isSpecsReq && !specsOpen) {
                          setSpecsOpen(true);
                        }
                        setTyping(true);
                        setTimeout(() => {
                          setTyping(false);
                          setMessages((prev) => [
                            ...prev,
                            { from: 'agent', text: generateReply(q, product, specsOpen) },
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
