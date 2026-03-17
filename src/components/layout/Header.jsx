import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.jpg';
import { ShoppingCart, Menu, Search, Headphones, Truck, ShieldCheck } from 'lucide-react';

const Header = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const logoSize = useTransform(scrollY, [0, 200], [180, 50]);
  const headerHeight = useTransform(scrollY, [0, 200], [180, 80]);

  return (
    <motion.header 
      style={{ height: headerHeight }}
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
    >
      <div className="container">
        <div className={styles.navRow}>
          <div className={styles.left}>
            <button className={styles.menuBtn}>
              <Menu color="white" />
              <span>Menu</span>
            </button>
          </div>

          <motion.div style={{ width: logoSize }} className={styles.logoContainer}>
            <img src={logo} alt="Electrofox" className={styles.logo} />
          </motion.div>

          <div className={styles.right}>
            <div className={styles.actions}>
              <Search className={styles.icon} />
              <div className={styles.cart}>
                <ShoppingCart className={styles.icon} />
                <span className={styles.badge}>0</span>
              </div>
            </div>
            <button className={styles.whatsappBtn}>
              WhatsApp
            </button>
          </div>
        </div>

        {!isScrolled && (
          <motion.nav 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={styles.mainNav}
          >
            <ul>
              <li><a href="#">LINEA BLANCA</a></li>
              <li><a href="#">TELEVISORES</a></li>
              <li><a href="#">TECNOLOGÍA</a></li>
              <li><a href="#">OFERTAS</a></li>
              <li><a href="#">TIENDAS</a></li>
            </ul>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
