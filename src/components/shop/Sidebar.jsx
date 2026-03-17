import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FilterSection = ({ title, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className={styles.filterSection}>
      <button className={styles.filterHeader} onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {isOpen && <div className={styles.filterContent}>{children}</div>}
    </div>
  );
};

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <h3>Filtros</h3>
        <button className={styles.clearBtn}>Borrar</button>
      </div>

      <FilterSection title="Categorías">
        <ul className={styles.list}>
          <li><label><input type="checkbox" /> Aire y Ventilación</label><span>(88)</span></li>
          <li><label><input type="checkbox" /> Audio y Video</label><span>(124)</span></li>
          <li><label><input type="checkbox" /> Electrodomésticos</label><span>(210)</span></li>
          <li><label><input type="checkbox" /> Tecnología</label><span>(145)</span></li>
          <li><label><input type="checkbox" /> Hogar y Muebles</label><span>(67)</span></li>
        </ul>
      </FilterSection>

      <FilterSection title="Marcas">
        <ul className={styles.list}>
          <li><label><input type="checkbox" /> Samsung</label></li>
          <li><label><input type="checkbox" /> LG</label></li>
          <li><label><input type="checkbox" /> Daewoo</label></li>
          <li><label><input type="checkbox" /> Hyundai</label></li>
          <li><label><input type="checkbox" /> Hamilton Beach</label></li>
        </ul>
      </FilterSection>

      <FilterSection title="Precios">
        <ul className={styles.list}>
          <li><label><input type="checkbox" /> US$0 - US$20</label></li>
          <li><label><input type="checkbox" /> US$21 - US$50</label></li>
          <li><label><input type="checkbox" /> US$51 - US$100</label></li>
          <li><label><input type="checkbox" /> US$101 - US$500</label></li>
          <li><label><input type="checkbox" /> US$501 - US$1000</label></li>
        </ul>
      </FilterSection>
    </aside>
  );
};

export default Sidebar;
