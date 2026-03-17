import React from 'react';
import styles from './Hero.module.css';
import banner1 from '../../assets/images/baner201-01KJG6A6CYT4YX71B84PQM09F7.png';
import banner2 from '../../assets/images/BANNER20PROMO20SAMSUNG_S26-01KK9NJHFN6R85NZNQRABBY606.jpeg';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.slider}>
        <div className={styles.slide}>
          <img src={banner2} alt="Samsung S26 Promo" className={styles.bannerImg} />
          <div className={styles.overlay}>
            <div className="container">
              <div className={styles.content}>
                <span className={styles.badge}>Lanzamiento Global</span>
                <h1>SAMSUNG GALAXY S26</h1>
                <p>Sé el primero en tener el nuevo estándar de inteligencia artificial.</p>
                <button className={styles.ctaBtn}>Comprar ahora</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
