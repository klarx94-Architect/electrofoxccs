import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.newsletter}>
          <div className={styles.newsText}>
            <h3>ÚNETE AL CLUB <span>ELECTROFOX</span></h3>
            <p>Recibe ofertas exclusivas y lanzamientos técnicos antes que nadie.</p>
          </div>
          <div className={styles.inputBox}>
            <input type="email" placeholder="Tu correo electrónico" />
            <button>SUSCRIBIRME</button>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <div className={styles.logoText}>ELECTROFOX<span>CCS</span></div>
            <p>Ingeniería de vanguardia aplicada al confort de tu hogar. Representantes exclusivos de marcas de alta gama en Venezuela.</p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialIcon}><Instagram size={20} /></a>
              <a href="#" className={styles.socialIcon}><Facebook size={20} /></a>
              <a href="#" className={styles.socialIcon}><Twitter size={20} /></a>
            </div>
          </div>

          <div className={styles.linkCol}>
            <h4>PRODUCTOS</h4>
            <ul>
              <li><a href="#">Línea Blanca <ArrowUpRight size={12} /></a></li>
              <li><a href="#">Televisores <ArrowUpRight size={12} /></a></li>
              <li><a href="#">Tecnología <ArrowUpRight size={12} /></a></li>
              <li><a href="#">Pequeños Electrodomésticos <ArrowUpRight size={12} /></a></li>
            </ul>
          </div>

          <div className={styles.linkCol}>
            <h4>SOPORTE</h4>
            <ul>
              <li><a href="#">Preguntas Frecuentes</a></li>
              <li><a href="#">Políticas de Garantía</a></li>
              <li><a href="#">Métodos de Pago</a></li>
              <li><a href="#">Tiempos de Envío</a></li>
            </ul>
          </div>

          <div className={styles.contactCol}>
            <h4>CONTÁCTANOS</h4>
            <div className={styles.contactItem}>
              <MapPin size={18} />
              <span>Showroom Caracas, Venezuela.</span>
            </div>
            <div className={styles.contactItem}>
              <Phone size={18} />
              <span>+58 414 172 1052</span>
            </div>
            <div className={styles.contactItem}>
              <Mail size={18} />
              <span>ventas@electrofoxccs.com</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; 2026 Electrofoxccs. Todos los derechos reservados. Diseñado bajo estándares de ingeniería técnica.</p>
          <div className={styles.bottomLinks}>
            <a href="#">Términos</a>
            <a href="#">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
