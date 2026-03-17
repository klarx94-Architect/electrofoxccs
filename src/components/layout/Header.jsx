import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.jpg';
import { Search, Menu, Bell, ShoppingCart, User, ShoppingBag } from 'lucide-react';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className="container">
          <div className={styles.topBarContent}>
            <div className={styles.logoSection}>
              <img src={logo} alt="Electrofox Logo" className={styles.logo} />
            </div>
            
            <div className={styles.searchSection}>
              <button className={styles.categoryBtn}>
                <Menu size={20} />
                <span>Categorías</span>
              </button>
              <div className={styles.searchBar}>
                <input type="text" placeholder="¿Qué estás buscando hoy?" />
                <button className={styles.searchBtn}>
                  <Search size={20} />
                </button>
              </div>
            </div>

            <div className={styles.userSection}>
              <div className={styles.iconGroup}>
                <div className={styles.userAction}>
                  <User size={24} />
                  <div className={styles.actionText}>
                    <span>Iniciar sesión</span>
                    <strong>Mi cuenta</strong>
                  </div>
                </div>
                <div className={styles.userAction}>
                  <ShoppingBag size={24} />
                  <div className={styles.actionText}>
                    <span>Ver mis</span>
                    <strong>Compras</strong>
                  </div>
                </div>
              </div>
              <div className={styles.utilIcons}>
                <Bell size={24} className={styles.icon} />
                <div className={styles.cartIcon}>
                  <ShoppingCart size={24} />
                  <span className={styles.badge}>0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <nav className={styles.mainNav}>
        <div className="container">
          <ul className={styles.navLinks}>
            <li><a href="#" className={styles.active}>Ofertas</a></li>
            <li><a href="#">Precios especiales</a></li>
            <li><a href="#">Tendencias</a></li>
            <li><a href="#">Marcas top</a></li>
            <li><a href="#">Nuestros servicios</a></li>
            <li><a href="#">Tiendas</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
