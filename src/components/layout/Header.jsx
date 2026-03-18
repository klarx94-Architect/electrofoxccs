import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';
import { ShoppingCart, Search, User, X, Menu } from 'lucide-react';

const navLinks = [
  { label: 'LÍNEA BLANCA', href: '#' },
  { label: 'TECNOLOGÍA', href: '#' },
  { label: 'OFERTAS', href: '#' },
  { label: 'NOSOTROS', href: '#' },
];

const Header = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (v) => setIsScrolled(v > 50));
  }, [scrollY]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return (
    <>
      <motion.header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <div className="container">
          <div className={styles.navRow}>
            {/* Mobile: Hamburger on the left */}
            <div className={styles.mobileLeft}>
              <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop left nav (hidden on mobile) */}
            <nav className={styles.navLinks}>
              <a href="#">LÍNEA BLANCA</a>
              <a href="#">TECNOLOGÍA</a>
              <a href="#">OFERTAS</a>
            </nav>

            <div className={styles.logoWrapper}>
              <img src={logo} alt="Electrofox" className={styles.logo} />
            </div>

            {/* Desktop right (hidden on mobile) */}
            <div className={styles.right}>
              <a href="#" className={styles.navItem}>NOSOTROS</a>
              <button className={styles.searchBtn}><Search size={20} /></button>
              <div className={styles.actions}>
                <User size={20} />
                <div className={styles.cart}>
                  <ShoppingCart size={20} />
                  <span className={styles.badge}>0</span>
                </div>
              </div>
              <button className={styles.whatsappBtn}>CONTACTO</button>
            </div>

            {/* Mobile: Icons on the right */}
            <div className={styles.mobileRight}>
              <div className={styles.cart}>
                <ShoppingCart size={22} />
                <span className={styles.badge}>0</span>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className={styles.drawerOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              className={styles.drawer}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            >
              <div className={styles.drawerHeader}>
                <img src={logo} alt="Electrofox" className={styles.drawerLogo} />
                <button onClick={() => setMenuOpen(false)} className={styles.drawerClose}>
                  <X size={22} />
                </button>
              </div>
              {navLinks.map((l) => (
                <a key={l.label} href={l.href} className={styles.drawerLink} onClick={() => setMenuOpen(false)}>
                  {l.label}
                </a>
              ))}
              <button
                className={styles.drawerCta}
                onClick={() => window.open('https://wa.me/584141721052', '_blank')}
              >
                CONSULTAR POR WHATSAPP
              </button>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
