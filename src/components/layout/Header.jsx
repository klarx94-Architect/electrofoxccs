import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.jpg';
import { ShoppingCart, Menu, Search, User } from 'lucide-react';

const Header = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header 
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="container">
        <div className={styles.navRow}>
          <div className={styles.left}>
            <button className={styles.searchBtn}>
              <Search size={20} />
            </button>
            <nav className={styles.navLinks}>
              <a href="#">LINEA BLANCA</a>
              <a href="#">TECNOLOGÍA</a>
            </nav>
          </div>

          <div className={styles.logoWrapper}>
            <img src={logo} alt="Electrofox" className={styles.logo} />
          </div>

          <div className={styles.right}>
            <nav className={styles.navLinks}>
              <a href="#">OFERTAS</a>
              <a href="#">NOSOTROS</a>
            </nav>
            <div className={styles.actions}>
              <User size={20} />
              <div className={styles.cart}>
                <ShoppingCart size={20} />
                <span className={styles.badge}>0</span>
              </div>
            </div>
            <button className={styles.whatsappBtn}>
              CONTACTO
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
