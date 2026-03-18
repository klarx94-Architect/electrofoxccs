import lb1 from './assets/images/LB-00000982_1-01KHK3WWNBT6YQS4GN9Q4AAVK1.jpeg';
import lb2 from './assets/images/LB-00001440_3-01KHSS2ECQ0SWQ5T8Z23HZV6N4.jpeg';
import lm1 from './assets/images/LM-00001029_1-01KG634D1Y2NWVYCJ91HQ8TGCB.jpeg';
import lm2 from './assets/images/LM-00001040_3-01KHSHTJ9E5FR3C5EHAD7XGNX3.jpeg';
import lh1 from './assets/images/LH-00002330_2-01KF437D7S79MEFWCY3KEMDKGZ.jpeg';

export const products = [
  {
    id: 1,
    name: 'Campana Extractora Acero Inox 90cm',
    brand: 'KITCHENAID',
    price_usd: 350.00,
    price_bs: 12250.00,
    image: lb1,
    category: 'Línea Blanca',
    badge: 'Oferta',
    specs: {
      medidas: '90 x 50 x 60 cm',
      color: 'Acero Inoxidable',
      voltaje: '110V',
      filtros: 'Aluminio lavable',
      garantia: '12 meses'
    }
  },
  {
    id: 2,
    name: 'Refrigerador French Door 600L Inverter',
    brand: 'SAMSUNG',
    price_usd: 1299.99,
    price_bs: 45500.00,
    image: lb2,
    category: 'Línea Blanca',
    specs: {
      medidas: '178 x 91 x 71 cm',
      color: 'Gris Grafito',
      voltaje: '110V',
      compresor: 'Digital Inverter',
      garantia: '10 años motor'
    }
  },
  {
    id: 3,
    name: 'Smart TV 55" Crystal UHD 4K',
    brand: 'SAMSUNG',
    price_usd: 480.00,
    price_bs: 16800.00,
    image: lm1,
    category: 'Tecnología',
    badge: 'Nuevo',
    specs: {
      pantalla: '55 Pulgadas',
      resolucion: '4K Ultra HD',
      smart: 'Tizen OS',
      garantia: '12 meses'
    }
  },
  {
    id: 4,
    name: 'Sistema de Audio Profesional Full LED',
    brand: 'SOUNDMAX',
    price_usd: 185.00,
    price_bs: 6475.00,
    image: lm2,
    category: 'Tecnología',
    specs: {
      potencia: '2000W PMPO',
      conectividad: 'Bluetooth / USB',
      extras: 'Incluye Tripodes',
      garantia: '6 meses'
    }
  },
  {
    id: 5,
    name: 'Ventilador de Pedestal 18 Pulgadas',
    brand: 'HAMILTON BEACH',
    price_usd: 45.00,
    price_bs: 1575.00,
    image: lh1,
    category: 'Ventilación',
    specs: {
      tipo: 'Pedestal',
      tamano: '18 Pulgadas',
      velocidades: '3 Niveles',
      voltaje: '110V',
      garantia: '6 meses'
    }
  }
];
