import React, { useState, useEffect } from 'react';
import styles from './PromoBanner.module.css';
import bannerSamsung from '../../assets/images/banner-samsung-s26.png';
import bannerAire from '../../assets/images/banner-aire-acondicionado.jpg';

const banners = [
  { img: bannerSamsung, alt: 'Samsung Galaxy S26 Ultra' },
  { img: bannerAire, alt: 'Aires Acondicionados - Genera un ambiente agradable' },
];

const PromoBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.promoSection}>
      <div className="container">
        <div className={styles.carouselWrapper}>
          <div
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {banners.map((banner, idx) => (
              <div key={idx} className={styles.slide}>
                <img src={banner.img} alt={banner.alt} className={styles.bannerImg} />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className={styles.dots}>
            {banners.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.dot} ${idx === current ? styles.dotActive : ''}`}
                onClick={() => setCurrent(idx)}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
