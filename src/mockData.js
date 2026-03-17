import lb1 from './assets/images/LB-00000982_1-01KHK3WWNBT6YQS4GN9Q4AAVK1.jpeg';
import lb2 from './assets/images/LB-00001440_3-01KHSS2ECQ0SWQ5T8Z23HZV6N4.jpeg';
import lm1 from './assets/images/LM-00001029_1-01KG634D1Y2NWVYCJ91HQ8TGCB.jpeg';
import lm2 from './assets/images/LM-00001040_3-01KHSHTJ9E5FR3C5EHAD7XGNX3.jpeg';
import lh1 from './assets/images/LH-00002330_2-01KF437D7S79MEFWCY3KEMDKGZ.jpeg';

export const products = [
  {
    id: 1,
    name: 'Refrigerador Side by Side 600L Inverter',
    brand: 'SAMSUNG',
    price_usd: 1299.99,
    price_bs: 45500.00,
    image: lb1,
    category: 'Línea Blanca',
    badge: 'Oferta',
    specs: {
      medidas: '178 x 91 x 71 cm',
      color: 'Acero Inoxidable',
      voltaje: '110V',
      consumo: 'Clase A+++',
      garantia: '12 meses'
    }
  },
  {
    id: 2,
    name: 'Lavadora Carga Superior 15kg Digital',
    brand: 'WHIRLPOOL',
    price_usd: 480.00,
    price_bs: 16800.00,
    image: lb2,
    category: 'Línea Blanca',
    specs: {
      medidas: '110 x 60 x 65 cm',
      color: 'Blanco',
      voltaje: '110V',
      ciclos: '12 programas',
      garantia: '6 meses'
    }
  },
  {
    id: 3,
    name: 'Microondas Espejo 20L Grill',
    brand: 'DAEWOO',
    price_usd: 115.00,
    price_bs: 4025.00,
    image: lm1,
    category: 'Electrodomésticos',
    badge: 'Nuevo',
    specs: {
      medidas: '26 x 45 x 34 cm',
      potencia: '700W / 1000W Grill',
      interior: 'Recubrimiento antibacterial',
      garantia: '12 meses'
    }
  },
  {
    id: 4,
    name: 'Licuadora Profesional 3 Velocidades',
    brand: 'HAMILTON BEACH',
    price_usd: 85.00,
    price_bs: 2975.00,
    image: lm2,
    category: 'Electrodomésticos',
    specs: {
      velocidades: '3 + Pulso',
      jara: 'Vidrio templado 1.5L',
      cuchillas: 'Acero de alta resistencia',
      garantia: '24 meses'
    }
  },
  {
    id: 5,
    name: 'Aire Acondicionado Split 12000 BTU',
    brand: 'HYUNDAI',
    price_usd: 320.00,
    price_bs: 11200.00,
    image: lh1,
    category: 'Aire y Ventilación',
    specs: {
      tipo: 'Split Inverter',
      capacidad: '12,000 BTU',
      gas: 'R410A Ecológico',
      voltaje: '220V',
      garantia: '12 meses'
    }
  }
];
