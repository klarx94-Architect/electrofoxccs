import React from 'react';
import styles from './ProductGrid.module.css';
import { products } from '../../mockData';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      {product.badge && <span className={styles.productBadge}>{product.badge}</span>}
      <div className={styles.imageWrapper}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={styles.info}>
        <span className={styles.brand}>{product.brand}</span>
        <h4 className={styles.name}>{product.name}</h4>
        <div className={styles.priceSection}>
          <div className={styles.priceUsd}>US$ {product.price_usd.toLocaleString()}</div>
          <div className={styles.priceBs}>Bs. {product.price_bs.toLocaleString()}</div>
        </div>
        <button className={styles.addBtn}>
          <ShoppingCart size={18} />
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.gridHeader}>
        <p>Mostrando <strong>{products.length}</strong> resultados</p>
        <div className={styles.sorting}>
          <span>Ordenar por:</span>
          <select>
            <option>Destacados</option>
            <option>Precio: Menor a Mayor</option>
            <option>Precio: Mayor a Menor</option>
          </select>
        </div>
      </div>
      <div className={styles.grid}>
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
};

export default ProductGrid;
